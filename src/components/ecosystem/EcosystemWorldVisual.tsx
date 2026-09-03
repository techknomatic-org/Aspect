import React from 'react';

interface EcosystemWorldVisualProps {
  worldId: string;
  image3dUrl?: string;
  isHovered?: boolean;
}

export const EcosystemWorldVisual: React.FC<EcosystemWorldVisualProps> = ({
  worldId,
  image3dUrl,
  isHovered,
}) => {
  if (image3dUrl) {
    return (
      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
        {/* Glow halo */}
        <div
          className={`absolute inset-0 rounded-full transition-opacity duration-300 blur-sm ${
            isHovered ? 'opacity-100 bg-gold/50' : 'opacity-40 bg-gold/20'
          }`}
        />
        {/* 3D Isometric Image Sphere Container */}
        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gold/60 shadow-xl relative z-10 bg-navy-950">
          <img
            src={image3dUrl}
            alt={worldId}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              isHovered ? 'scale-125' : 'scale-105'
            }`}
          />
          {/* Subtle metallic reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    );
  }

  return null;
};
