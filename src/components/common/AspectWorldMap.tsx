import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

// Fix Leaflet default icon path issue in Vite/webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface LocationPin {
  id: string;
  name: string;
  country: string;
  category: string;
  color: string;
  lat: number;
  lng: number;
  isHQ?: boolean;
}

// All Aspect Global locations from https://www.aspect.global/
const ASPECT_LOCATIONS: LocationPin[] = [
  // India — primary cluster
  { id: 'mumbai',       name: 'Mumbai (MMR HQ)',  country: 'India',       category: 'Group HQ · Bullion · Realty · Hospitality',    color: '#C9A227', lat: 19.076,  lng: 72.877,  isHQ: true },
  { id: 'pune',         name: 'Pune',             country: 'India',       category: 'Realty · Infrastructure · Logistics',            color: '#0E7C7B', lat: 18.520,  lng: 73.855 },
  { id: 'hyderabad',    name: 'Hyderabad',        country: 'India',       category: 'Infrastructure · Tech Park',                     color: '#0E7C7B', lat: 17.385,  lng: 78.487 },
  { id: 'varanasi',     name: 'Varanasi',         country: 'India',       category: 'Aspect Sports · Mahadev Ascenders',              color: '#4A6FA5', lat: 25.317,  lng: 82.973 },
  { id: 'kolkata',      name: 'Kolkata',          country: 'India',       category: 'Aspect Sports · Tigers of Kolkata',              color: '#4A6FA5', lat: 22.572,  lng: 88.363 },
  // International
  { id: 'dubai',        name: 'Dubai',            country: 'UAE',         category: 'Bullion Trading · Global Hub',                   color: '#C9A227', lat: 25.204,  lng: 55.270 },
  { id: 'singapore',    name: 'Singapore',        country: 'Singapore',   category: 'Fintech · Regional Office',                      color: '#0E7C7B', lat: 1.352,   lng: 103.820 },
  { id: 'london',       name: 'London',           country: 'UK',          category: 'International HQ · Investments',                 color: '#4A6FA5', lat: 51.507,  lng: -0.127 },
  { id: 'usa',          name: 'New York',         country: 'USA',         category: 'Investments · Strategic Partnerships',           color: '#4A6FA5', lat: 40.713,  lng: -74.006 },
  { id: 'sydney',       name: 'Sydney',           country: 'Australia',   category: 'Mining · Energy · Trade',                        color: '#0E7C7B', lat: -33.868, lng: 151.209 },
  { id: 'tokyo',        name: 'Tokyo',            country: 'Japan',       category: 'Tech · Entertainment Partnerships',              color: '#E61C40', lat: 35.689,  lng: 139.692 },
  { id: 'jakarta',      name: 'Jakarta',          country: 'Indonesia',   category: 'Infrastructure · Energy',                        color: '#0E7C7B', lat: -6.208,  lng: 106.845 },
  { id: 'kualalumpur',  name: 'Kuala Lumpur',     country: 'Malaysia',    category: 'Trade · Hospitality Expansion',                  color: '#0E7C7B', lat: 3.139,   lng: 101.687 },
  { id: 'mauritius',   name: 'Mauritius',         country: 'Mauritius',   category: 'Investments · Financial Hub',                    color: '#C9A227', lat: -20.348, lng: 57.552 },
];

/**
 * Creates a circular SVG div icon for Leaflet markers
 */
function createCircleIcon(color: string, isHQ: boolean) {
  const size = isHQ ? 22 : 16;
  const innerSize = isHQ ? 10 : 7;

  const svgHtml = `
    <div style="position:relative;width:${size + 14}px;height:${size + 14}px;display:flex;align-items:center;justify-content:center;">
      <!-- Outer pulse ring -->
      <div style="
        position:absolute;
        width:${size + 14}px;height:${size + 14}px;
        border-radius:50%;
        background:${color};
        opacity:0.2;
        animation:pulse-ring 2s infinite;
      "></div>
      <!-- Mid ring -->
      <div style="
        position:absolute;
        width:${size + 4}px;height:${size + 4}px;
        border-radius:50%;
        background:${color};
        opacity:0.35;
      "></div>
      <!-- Core dot -->
      <div style="
        position:absolute;
        width:${size}px;height:${size}px;
        border-radius:50%;
        background:${color};
        border:2.5px solid white;
        box-shadow:0 0 8px ${color}88;
        display:flex;align-items:center;justify-content:center;
      ">
        <div style="width:${innerSize}px;height:${innerSize}px;border-radius:50%;background:white;opacity:0.85;"></div>
      </div>
    </div>
  `;

  return L.divIcon({
    html: svgHtml,
    className: '',
    iconSize: [size + 14, size + 14],
    iconAnchor: [(size + 14) / 2, (size + 14) / 2],
    popupAnchor: [0, -(size + 14) / 2 - 4],
  });
}

interface AspectWorldMapProps {
  isLight?: boolean;
}

export const AspectWorldMap: React.FC<AspectWorldMapProps> = ({ isLight = false }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Add pulse keyframe animation if not yet present
    if (!document.getElementById('leaflet-pulse-style')) {
      const style = document.createElement('style');
      style.id = 'leaflet-pulse-style';
      style.textContent = `
        @keyframes pulse-ring {
          0% { transform: scale(0.7); opacity: 0.4; }
          70% { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .leaflet-container {
          font-family: 'Inter', sans-serif !important;
          background: #0d1f3c !important;
        }
        .leaflet-popup-content-wrapper {
          background: #0B1426 !important;
          border: 1px solid #334155 !important;
          border-radius: 12px !important;
          color: white !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6) !important;
        }
        .leaflet-popup-tip {
          background: #0B1426 !important;
        }
        .leaflet-popup-content {
          margin: 10px 14px !important;
        }
        .leaflet-control-zoom a {
          background: #0B1426 !important;
          color: #94A3B8 !important;
          border-color: #334155 !important;
        }
        .leaflet-control-zoom a:hover {
          background: #1E293B !important;
          color: white !important;
        }
        .leaflet-control-attribution {
          background: rgba(11,20,38,0.75) !important;
          color: #475569 !important;
          font-size: 9px !important;
        }
        .leaflet-control-attribution a {
          color: #64748B !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Initialize map centered on India (as per screenshot reference)
    const map = L.map(mapContainerRef.current, {
      center: [20, 78],
      zoom: 4,
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: true,
    });

    mapInstanceRef.current = map;

    // Use CartoDB Dark Matter tiles for premium dark look matching the dashboard
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_matter_all/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }
    ).addTo(map);

    // Add location pins
    ASPECT_LOCATIONS.forEach((loc) => {
      const icon = createCircleIcon(loc.color, loc.isHQ === true);

      const popupContent = `
        <div style="min-width:160px;">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
            <span style="width:10px;height:10px;border-radius:50%;background:${loc.color};flex-shrink:0;display:inline-block;"></span>
            <strong style="font-size:12px;color:white;font-weight:700;">${loc.name}</strong>
            ${loc.isHQ ? `<span style="font-size:9px;padding:1px 5px;border-radius:4px;background:${loc.color}22;color:${loc.color};border:1px solid ${loc.color}55;font-weight:600;margin-left:2px;">HQ</span>` : ''}
          </div>
          <div style="font-size:10px;color:#94A3B8;margin-bottom:3px;">${loc.country}</div>
          <div style="font-size:10px;color:#CBD5E1;line-height:1.4;">${loc.category}</div>
        </div>
      `;

      const marker = L.marker([loc.lat, loc.lng], { icon })
        .addTo(map)
        .bindPopup(popupContent, {
          maxWidth: 240,
          className: 'aspect-popup',
        });

      // Auto-open HQ popup
      if (loc.isHQ) {
        marker.openPopup();
      }
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className={`rounded-xl border overflow-hidden ${
      isLight ? 'border-slate-200' : 'border-slate-800'
    }`}>
      {/* Header */}
      <div className={`px-4 py-2.5 border-b flex items-center justify-between flex-wrap gap-2 ${
        isLight ? 'border-slate-200 bg-white' : 'border-slate-800 bg-[#0B1426]'
      }`}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
          <span className="text-xs font-bold text-[#C9A227] uppercase tracking-wider">
            Aspect Global Presence — {ASPECT_LOCATIONS.length} Locations Worldwide
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-slate-400 font-medium">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#C9A227] inline-block" /> HQ / Bullion</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#0E7C7B] inline-block" /> Operations</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#4A6FA5] inline-block" /> Investments</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#E61C40] inline-block" /> Partnerships</span>
        </div>
      </div>

      {/* Leaflet Map Container */}
      <div
        ref={mapContainerRef}
        style={{ height: '260px', width: '100%' }}
      />
    </div>
  );
};
