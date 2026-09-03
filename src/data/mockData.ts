import {
  EcosystemBusiness,
  AIInsight,
  KPICardData,
  DashboardOverview,
  User,
  CEOAttentionItem,
  ValueCreatorItem,
  WatchlistItem,
  OpportunityItem
} from '../types';

export const DEMO_USER: User = {
  id: 'usr_ceo_01',
  email: 'ceo@aspectone.com',
  name: 'Alex Morgan',
  role: 'Group Executive',
  title: 'Chief Executive Officer',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
};

export const ROTATING_SEARCH_PLACEHOLDERS = [
  'Ask Aspect AI anything about the business...',
  'Show Bullion inventory today',
  'What is driving group growth?',
  'Which businesses need attention?',
  'Show high-value opportunities'
];

export const DASHBOARD_OVERVIEW: DashboardOverview = {
  groupRevenue: '₹ 24,852 Cr',
  revenueNumeric: 24852,
  revenueVsLY: '₹ 21,452 Cr',
  revenueChangePct: 15.9,

  ebitdaMargin: '22.1%',
  ebitdaMarginNumeric: 22.1,
  ebitdaVsLY: '19.4%',
  ebitdaChangeDiff: '2.7pp',

  portfolioValue: '₹ 68,450 Cr',
  portfolioValueNumeric: 68450,
  portfolioVsLY: '₹ 58,200 Cr',
  portfolioChangePct: 17.6,

  pipelineValue: '₹ 14,200 Cr',
  pipelineNumeric: 14200,
  pipelineVsLY: '₹ 11,800 Cr',
  pipelineChangePct: 20.3,

  netCash: '₹ 6,842 Cr',
  netCashNumeric: 6842,
  netCashVsLY: '₹ 6,230 Cr',
  netCashChangePct: 9.8,

  healthScore: 78,
  healthScoreVsLY: 72,
  sustainabilityScore: 68.7,
  sustainabilityVsLY: 63.5,
};

export const CEO_ATTENTION_ITEMS: CEOAttentionItem[] = [
  {
    id: 'att_1',
    businessName: 'INFRASTRUCTURE',
    issue: '2 major expressway projects delayed',
    severity: 'Critical',
    financialImpact: 'Potential ₹ 420 Cr delay penalty risk in Q4',
    businessImpact: 'Maharashtra Corridor SLA breach',
    recommendedAction: 'CEO Intervention & Steering Committee review',
    businessId: 'infrastructure'
  },
  {
    id: 'att_2',
    businessName: 'BULLION & REFINERY',
    issue: 'Vault inventory variance detected',
    severity: 'Attention',
    financialImpact: 'Reconciliation of 120 kg gold bar batch',
    businessImpact: 'LBMA Compliance audit delay',
    recommendedAction: 'Chief Auditor dispatched to Gujarat refinery',
    businessId: 'bullion-refinery'
  },
  {
    id: 'att_3',
    businessName: 'ENERGY',
    issue: 'Solar megapark expansion opportunity',
    severity: 'Opportunity',
    financialImpact: 'Potential ₹ 3,100 Cr YTD top-line acceleration',
    businessImpact: 'Adds 1.2 GW clean grid capacity',
    recommendedAction: 'Capital allocation approval requested for Rajasthan grid',
    businessId: 'energy'
  },
  {
    id: 'att_4',
    businessName: 'HOSPITALITY',
    issue: 'Occupancy pressure across resorts',
    severity: 'Watch',
    financialImpact: 'RevPAR down ₹ 1,400 across heritage properties',
    businessImpact: 'Q3 resort margin compressed by 2.1%',
    recommendedAction: 'Marketing concierge restructuring underway',
    businessId: 'hospitality'
  }
];

export const TOP_VALUE_CREATORS: ValueCreatorItem[] = [
  {
    id: 'vc_1',
    businessName: 'REALTY',
    revenue: '₹ 4,120 Cr',
    growth: '+21.5%',
    valueDriver: 'Pre-leased 90% Aspect Financial Tower & residential sales +34%',
    health: 'Healthy',
    businessId: 'realty'
  },
  {
    id: 'vc_2',
    businessName: 'ENERGY',
    revenue: '₹ 4,280 Cr',
    growth: '+18.4%',
    valueDriver: 'Commissioned 1.2 GW Rajasthan Solar Park & Green Hydrogen pilot',
    health: 'Healthy',
    businessId: 'energy'
  },
  {
    id: 'vc_3',
    businessName: 'BULLION & REFINERY',
    revenue: '₹ 5,820 Cr',
    growth: '+14.8%',
    valueDriver: 'LBMA Zero-Carbon accreditation & Central Bank vault contracts',
    health: 'Healthy',
    businessId: 'bullion-refinery'
  }
];

export const WATCHLIST: WatchlistItem[] = [
  {
    id: 'wl_1',
    businessName: 'INFRASTRUCTURE',
    issue: '2 coastal highway projects delayed in Maharashtra',
    impact: 'Schedule slip penalty risk ₹ 420 Cr',
    status: 'Critical',
    businessId: 'infrastructure'
  },
  {
    id: 'wl_2',
    businessName: 'HOSPITALITY',
    issue: 'Heritage resort occupancy pressure down 4.2%',
    impact: 'RevPAR compressed by ₹ 1,400/key',
    status: 'Attention',
    businessId: 'hospitality'
  }
];

export const GROWTH_OPPORTUNITIES: OpportunityItem[] = [
  {
    id: 'opp_1',
    businessName: 'ENERGY',
    opportunity: 'Solar Megapark Expansion in Rajasthan',
    potentialValue: '₹ 3,100 Cr',
    expectedGrowth: '+28.0%',
    strategicFit: 'Ultra High',
    confidence: '94%',
    decisionRequired: 'Capital Allocation Approval',
    businessId: 'energy'
  },
  {
    id: 'opp_2',
    businessName: 'REALTY',
    opportunity: 'Aspect Smart Financial City Phase II',
    potentialValue: '₹ 2,400 Cr',
    expectedGrowth: '+24.5%',
    strategicFit: 'High',
    confidence: '88%',
    decisionRequired: 'Land Acquisition Signoff',
    businessId: 'realty'
  },
  {
    id: 'opp_3',
    businessName: 'INDUSTRIES',
    opportunity: 'Robotic Aerospace Export Line Expansion',
    potentialValue: '₹ 1,800 Cr',
    expectedGrowth: '+32.0%',
    strategicFit: 'High',
    confidence: '91%',
    decisionRequired: 'Equipment Import License',
    businessId: 'industries'
  }
];

export const ECOSYSTEM_BUSINESSES: EcosystemBusiness[] = [
  {
    id: 'foundation',
    name: 'FOUNDATION',
    category: 'Community & Philanthropy',
    revenue: '₹ 850 Cr',
    growth: '12.4%',
    ebitdaMargin: 'N/A',
    portfolioValue: '₹ 1,800 Cr',
    numericRevenue: 850,
    numericGrowth: 12.4,
    businessesCount: 4,
    status: 'Healthy',
    description: 'Landscaped campus & social impact initiatives focused on global education, healthcare access, and sustainable community empowerment.',
    keyMetricLabel: 'Beneficiaries Impacted',
    keyMetricValue: '2.4M',
    iconName: 'Landmark',
    colorTheme: '#E5C05B',
    accentType: 'gold',
    isFeatured: true,
    image3dUrl: '/assets/world_foundation_3d.jpg',
    tagline: 'Education • Healthcare • Sustainable Community Empowerment',
    recommendedFocus: 'Expand STEM rural learning centers to reach 3.0M beneficiaries by Q4 while maintaining funds utilization rate above 98%.',
    sparklineData: [{ val: 620 }, { val: 680 }, { val: 720 }, { val: 790 }, { val: 850 }],
    operationalMetrics: {
      'Beneficiaries Reach': '2.4M Families',
      'Active Impact Programs': '42 Initiatives',
      'Funds Utilization Rate': '98.4%',
      'Cost per Beneficiary': '₹ 3,540',
      'Healthcare Coverage': '450,000 Individuals',
      'STEM Schools Built': '18 Centers'
    },
    highlights: [
      'Opened 12 new rural STEM learning centers',
      'Healthcare outreach covered 450,000 families',
      'Clean water infrastructure installed across 85 villages'
    ],
    projects: [
      { name: 'Apex Education Campus', location: 'Bengaluru', investment: '₹ 180 Cr', completion: 92, status: 'On Track' },
      { name: 'Global Health Hub', location: 'Mumbai', investment: '₹ 320 Cr', completion: 78, status: 'On Track' }
    ]
  },
  {
    id: 'bullion-refinery',
    name: 'BULLION & REFINERY',
    category: 'Precious Metals & Commodities',
    revenue: '₹ 5,820 Cr',
    growth: '14.8%',
    ebitdaMargin: '18.2%',
    portfolioValue: '₹ 14,500 Cr',
    numericRevenue: 5820,
    numericGrowth: 14.8,
    businessesCount: 5,
    status: 'Warning',
    description: 'State-of-the-art precious metal refining, minting, and international bullion trading hub operating to LBMA standards.',
    keyMetricLabel: 'Refining Volume',
    keyMetricValue: '480 Tons',
    iconName: 'Coins',
    colorTheme: '#F59E0B',
    accentType: 'terracotta',
    isFeatured: true,
    image3dUrl: '/assets/world_bullion_3d.jpg',
    tagline: 'Purity • LBMA Integrity • Vault Storage',
    recommendedFocus: 'Conclude vault inventory reconciliation with Chief Auditor and expand Asian central bank supply contracts.',
    sparklineData: [{ val: 4200 }, { val: 4600 }, { val: 5100 }, { val: 5450 }, { val: 5820 }],
    operationalMetrics: {
      'Refining Capacity': '480 Tons/yr',
      'Gross Margin': '16.4%',
      'Average Order Value (AOV)': '₹ 42.5L',
      'Customer Retention Rate': '94.2%',
      'Vault Inventory Value': '₹ 3,850 Cr',
      'LBMA Purity Standard': '999.9 Fine'
    },
    highlights: [
      'Achieved zero-carbon refining certification',
      'Expanded bullion vault storage capacity by 40%',
      'New supply agreement signed with top Asian central banks'
    ],
    projects: [
      { name: 'Gold Refining Facility Expansion', location: 'Gujarat', investment: '₹ 650 Cr', completion: 88, status: 'On Track' },
      { name: 'Automated Minting Plant', location: 'Dubai', investment: '₹ 410 Cr', completion: 95, status: 'Completed' }
    ]
  },
  {
    id: 'realty',
    name: 'REALTY',
    category: 'Real Estate & Urban Spaces',
    revenue: '₹ 4,120 Cr',
    growth: '21.5%',
    ebitdaMargin: '28.4%',
    portfolioValue: '₹ 16,800 Cr',
    numericRevenue: 4120,
    numericGrowth: 21.5,
    businessesCount: 7,
    status: 'Healthy',
    description: 'Iconic commercial skyscrapers, luxury residential towers, and ultra-modern mixed-use smart urban developments.',
    keyMetricLabel: 'Portfolio Area',
    keyMetricValue: '18.4M sq.ft',
    iconName: 'Building2',
    colorTheme: '#38BDF8',
    accentType: 'teal',
    isFeatured: true,
    image3dUrl: '/assets/world_realty_3d.jpg',
    tagline: 'Architectural Distinction • IGBC Platinum • Urban Spaces',
    recommendedFocus: 'Finalize land acquisition signoff for Aspect Financial City Phase II and accelerate residential pre-leasing.',
    sparklineData: [{ val: 2800 }, { val: 3100 }, { val: 3500 }, { val: 3820 }, { val: 4120 }],
    operationalMetrics: {
      'Total Portfolio Area': '18.4M sq.ft',
      'Commercial Pre-Leased %': '90.2%',
      'Residential Units Delivered': '1,420 Units',
      'Development Pipeline': '₹ 5,400 Cr',
      'Pending Regulatory Approvals': '2 Projects',
      'IGBC Platinum Green Rating': '4 Towers'
    },
    highlights: [
      'Pre-leased 90% of Aspect Financial Tower',
      'IGBC Platinum Green Building rating awarded to 4 towers',
      'Residential sales surged by 34% year-over-year'
    ],
    projects: [
      { name: 'Aspect Tech Skyline Tower', location: 'Hyderabad', investment: '₹ 1,200 Cr', completion: 82, status: 'On Track' },
      { name: 'Financial Center Phase II', location: 'Mumbai', investment: '₹ 1,850 Cr', completion: 64, status: 'On Track' }
    ]
  },
  {
    id: 'infrastructure',
    name: 'INFRASTRUCTURE',
    category: 'Civic & Mobility Systems',
    revenue: '₹ 3,450 Cr',
    growth: '9.2%',
    ebitdaMargin: '19.8%',
    portfolioValue: '₹ 12,400 Cr',
    numericRevenue: 3450,
    numericGrowth: 9.2,
    businessesCount: 6,
    status: 'Critical',
    description: 'Mega highways, sea bridges, port terminals, and smart transit corridors shaping regional commerce and connectivity.',
    keyMetricLabel: 'Corridors Managed',
    keyMetricValue: '1,420 km',
    iconName: 'Bridge',
    colorTheme: '#F97316',
    accentType: 'terracotta',
    isFeatured: false,
    image3dUrl: '/assets/world_infrastructure_3d.jpg',
    tagline: 'Expressways • Deepwater Ports • Smart Mobility',
    recommendedFocus: 'Convene CEO Steering Committee with Maharashtra Toll Authority to resolve schedule slip on 2 coastal bridges.',
    sparklineData: [{ val: 2900 }, { val: 3050 }, { val: 3200 }, { val: 3350 }, { val: 3450 }],
    operationalMetrics: {
      'Expressway Corridors': '1,420 km',
      'On-Time Project Delivery %': '68.0%',
      'Port Throughput Volume': '2.4M TEU',
      'Active Order Pipeline': '₹ 4,800 Cr',
      'Average Project Margin': '19.8%',
      'Financial SLA Risk Exposure': '₹ 420 Cr'
    },
    highlights: [
      'Port terminal throughput increased to 2.4M TEU',
      '2 major expressway bridge projects require schedule acceleration',
      'Smart tolling system digitized 99.4% of transactions'
    ],
    projects: [
      { name: 'Coastal Super Expressway', location: 'Maharashtra', investment: '₹ 2,400 Cr', completion: 54, status: 'Delayed' },
      { name: 'Smart Deepwater Container Terminal', location: 'Chennai', investment: '₹ 1,100 Cr', completion: 48, status: 'Delayed' }
    ]
  },
  {
    id: 'industries',
    name: 'INDUSTRIES',
    category: 'Advanced Manufacturing',
    revenue: '₹ 3,110 Cr',
    growth: '16.7%',
    ebitdaMargin: '24.1%',
    portfolioValue: '₹ 8,900 Cr',
    numericRevenue: 3110,
    numericGrowth: 16.7,
    businessesCount: 8,
    status: 'Healthy',
    description: 'Heavy engineering, precision aerospace components, automated material handling, and green industrial solutions.',
    keyMetricLabel: 'Smart Factories',
    keyMetricValue: '14 Units',
    iconName: 'Factory',
    colorTheme: '#A855F7',
    accentType: 'slate',
    isFeatured: false,
    image3dUrl: '/assets/world_industries_3d.jpg',
    tagline: 'Precision Engineering • Aerospace AS9100 • Robotics',
    recommendedFocus: 'Secure equipment import license for Pune robotic gigafactory expansion to capture ₹ 1,800 Cr aerospace export pipeline.',
    sparklineData: [{ val: 2400 }, { val: 2600 }, { val: 2780 }, { val: 2950 }, { val: 3110 }],
    operationalMetrics: {
      'Smart Manufacturing Factories': '14 Units',
      'Total Order Book Value': '₹ 3,950 Cr',
      'Capacity Utilization': '88.5%',
      'Quality Rejection Rate': '0.12%',
      'Days Sales Outstanding (DSO)': '42 Days',
      'Aerospace Approval Standard': 'AS9100 Rev D'
    },
    highlights: [
      'Robotic automation increased shop floor yield by 19%',
      'Aerospace component plant achieved AS9100 Rev D approval',
      'Export revenue grew by 24.5%'
    ],
    projects: [
      { name: 'Precision Robotics Mega-Gigafactory', location: 'Pune', investment: '₹ 890 Cr', completion: 91, status: 'On Track' },
      { name: 'Aerospace Structures Wing', location: 'Nagpur', investment: '₹ 540 Cr', completion: 73, status: 'On Track' }
    ]
  },
  {
    id: 'hospitality',
    name: 'HOSPITALITY',
    category: 'Luxury Resorts & QSR Lifestyle',
    revenue: '₹ 1,840 Cr',
    growth: '13.1%',
    ebitdaMargin: '21.5%',
    portfolioValue: '₹ 5,200 Cr',
    numericRevenue: 1840,
    numericGrowth: 13.1,
    businessesCount: 5,
    status: 'Warning',
    description: 'Ultra-luxury heritage hotels, private island wellness retreats, fine dining, and QSR fast-casual restaurant chains.',
    keyMetricLabel: 'Keys Inventory',
    keyMetricValue: '2,850 Keys',
    iconName: 'Hotel',
    colorTheme: '#EC4899',
    accentType: 'sage',
    isFeatured: false,
    image3dUrl: '/assets/world_hospitality_3d.jpg',
    tagline: 'Heritage Resorts • Wellness • QSR Fast Casual Chain',
    recommendedFocus: 'Execute marketing concierge restructuring for heritage resorts while scaling QSR same-store sales growth (+14.2%).',
    sparklineData: [{ val: 1400 }, { val: 1520 }, { val: 1650 }, { val: 1740 }, { val: 1840 }],
    operationalMetrics: {
      'Luxury Keys Inventory': '2,850 Keys',
      'Resort Occupancy Rate': '68.4%',
      'Average Daily Rate (ADR)': '₹ 18,500',
      'RevPAR Growth': '17.8%',
      'Customer Satisfaction Rating': '4.85 / 5',
      'Operating EBITDA Margin': '21.5%'
    },
    qsrSubVertical: {
      sameStoreSalesGrowth: '+14.2%',
      ebitdaMargin: '18.6%',
      storeMargin: '22.4%',
      aov: '₹ 480',
      repeatRate: '64.5%',
      salesPerStore: '₹ 1.85 Cr/yr',
      foodCostPct: '28.2%',
      laborCostPct: '16.4%',
      totalStores: 85
    },
    highlights: [
      'RevPAR increased by 17.8% across luxury properties',
      'QSR fast casual sub-vertical expanded by 18 new stores',
      'Aspect Sanctuary Resort named Top 10 Luxury Destination'
    ],
    projects: [
      { name: 'Aspect Sanctuary Maldives', location: 'Maldives', investment: '₹ 750 Cr', completion: 86, status: 'On Track' },
      { name: 'Royal Heritage Palace', location: 'Udaipur', investment: '₹ 420 Cr', completion: 94, status: 'On Track' }
    ]
  },
  {
    id: 'energy',
    name: 'ENERGY',
    category: 'Renewables & Power Tech',
    revenue: '₹ 4,280 Cr',
    growth: '18.4%',
    ebitdaMargin: '31.2%',
    portfolioValue: '₹ 15,200 Cr',
    numericRevenue: 4280,
    numericGrowth: 18.4,
    businessesCount: 3,
    status: 'Healthy',
    description: 'Gigawatt-scale solar parks, offshore wind farms, green hydrogen plants, and grid-scale battery storage ecosystems.',
    keyMetricLabel: 'Clean Installed',
    keyMetricValue: '4.8 GW',
    iconName: 'Zap',
    colorTheme: '#10B981',
    accentType: 'teal',
    isFeatured: true,
    image3dUrl: '/assets/world_energy_3d.jpg',
    tagline: 'Solar Megaparks • Green Hydrogen • Clean Grid Capacity',
    recommendedFocus: 'Accelerate high-return solar expansion opportunities in Rajasthan while maintaining 99.9% hydrogen purity benchmark.',
    sparklineData: [{ val: 3100 }, { val: 3450 }, { val: 3800 }, { val: 4050 }, { val: 4280 }],
    operationalMetrics: {
      'Installed Solar & Wind Capacity': '4.8 GW',
      'Operational Capacity': '4.2 GW',
      'Projects Under Development': '1.6 GW',
      'Capacity Utilization Factor (CUF)': '26.8%',
      'Annual Generation Volume': '8,400 GWh',
      'CO2 Offset Generated': '6.2M Tons'
    },
    highlights: [
      'Commissioned 1.2 GW Ultra Solar Park in Rajasthan',
      'Green Hydrogen pilot plant reached 99.9% purity output',
      'Carbon offset generation reached 6.2M tons CO2e'
    ],
    projects: [
      { name: 'Rajasthan Solar Mega-Park', location: 'Jaisalmer', investment: '₹ 3,100 Cr', completion: 96, status: 'Completed' },
      { name: 'Offshore Wind Generation Phase I', location: 'Tamil Nadu', investment: '₹ 2,200 Cr', completion: 71, status: 'On Track' }
    ]
  },
  {
    id: 'entertainment',
    name: 'ENTERTAINMENT',
    category: 'Media, Film & Immersive',
    revenue: '₹ 1,250 Cr',
    growth: '22.1%',
    ebitdaMargin: '20.4%',
    portfolioValue: '₹ 3,800 Cr',
    numericRevenue: 1250,
    numericGrowth: 22.1,
    businessesCount: 4,
    status: 'Healthy',
    description: 'Global film studios, digital streaming infrastructure, immersive AR/VR theme parks, and live event production.',
    keyMetricLabel: 'Global Viewership',
    keyMetricValue: '180M+',
    iconName: 'Clapperboard',
    colorTheme: '#6366F1',
    accentType: 'navy',
    isFeatured: false,
    image3dUrl: '/assets/world_entertainment_3d.jpg',
    tagline: 'Film Studios • Digital IP • Immersive AR/VR Theme Parks',
    recommendedFocus: 'Monetize digital content library IP (surpassed ₹ 2,000 Cr) and expand Dubai immersive theme park attractions.',
    sparklineData: [{ val: 820 }, { val: 940 }, { val: 1050 }, { val: 1160 }, { val: 1250 }],
    operationalMetrics: {
      'Global Streaming Audience': '180M+ Viewers',
      'VR Theme Park Annual Visitors': '1.8M Guests',
      'Digital Library IP Value': '₹ 2,100 Cr',
      'On-Time Project Delivery': '96.5%',
      'Average Project Margin': '20.4%',
      'Client Retention Index': '92.0%'
    },
    highlights: [
      'Box office collections broke regional franchise records',
      'Immersive VR dome park welcomed 1.8M visitors',
      'Digital content library value surpassed ₹ 2,000 Cr'
    ],
    projects: [
      { name: 'Aspect Immersive Theme Park', location: 'Dubai', investment: '₹ 980 Cr', completion: 89, status: 'On Track' },
      { name: 'VFX & AI Virtual Production Studio', location: 'Mumbai', investment: '₹ 340 Cr', completion: 98, status: 'Completed' }
    ]
  },
  {
    id: 'sports',
    name: 'SPORTS',
    category: 'Franchises & Arenas',
    revenue: '₹ 932 Cr',
    growth: '28.6%',
    ebitdaMargin: '26.8%',
    portfolioValue: '₹ 3,200 Cr',
    numericRevenue: 932,
    numericGrowth: 28.6,
    businessesCount: 3,
    status: 'Healthy',
    description: 'Premier league sports franchises, state-of-the-art multi-sport arenas, high-performance athlete academies, and sports tech.',
    keyMetricLabel: 'Stadium Capacity',
    keyMetricValue: '85,000 Seats',
    iconName: 'Trophy',
    colorTheme: '#EF4444',
    accentType: 'terracotta',
    isFeatured: false,
    image3dUrl: '/assets/world_sports_3d.jpg',
    tagline: 'Franchises • Smart Arenas • Athlete Academies',
    recommendedFocus: 'Leverage National Championship victory to negotiate 40%+ broadcast rights renewal and scale sports tech academy.',
    sparklineData: [{ val: 580 }, { val: 660 }, { val: 740 }, { val: 840 }, { val: 932 }],
    operationalMetrics: {
      'Stadium Seating Capacity': '85,000 Seats',
      'Franchise Win Rate': '72.4%',
      'Broadcast Rights Value': '₹ 1,450 Cr',
      'Fan Base Membership': '4.2M Fans',
      'Commercial Sponsorship Growth': '+42.0%',
      'Sports Tech Athletes Enrolled': '600 Athletes'
    },
    highlights: [
      'Aspect Titans won National Championship title',
      'Broadcast rights value increased by 42%',
      'Sports Tech academy enrolled 600 Olympic hopefuls'
    ],
    projects: [
      { name: 'Aspect Smart Arena Stadium', location: 'Ahmedabad', investment: '₹ 1,450 Cr', completion: 90, status: 'On Track' },
      { name: 'High-Performance Sports Bio-Lab', location: 'Bengaluru', investment: '₹ 220 Cr', completion: 85, status: 'On Track' }
    ]
  }
];

export const AI_INSIGHTS: AIInsight[] = [
  {
    id: 'ins_1',
    title: 'Strong Revenue Growth',
    description: 'Group revenue is up 15.9% driven by strong performance in Realty and Energy businesses.',
    category: 'revenue',
    iconType: 'trend',
    timestamp: '10 mins ago',
    severity: 'low',
  },
  {
    id: 'ins_2',
    title: 'Infrastructure Attention',
    description: '2 projects are behind schedule and require leadership focus.',
    category: 'warning',
    iconType: 'alert',
    timestamp: '25 mins ago',
    severity: 'high',
  },
  {
    id: 'ins_3',
    title: 'New Opportunity',
    description: 'High potential opportunity identified in Renewable Energy - Solar Expansion in India.',
    category: 'opportunity',
    iconType: 'target',
    timestamp: '1 hour ago',
    severity: 'medium',
  },
  {
    id: 'ins_4',
    title: 'Cost Optimization',
    description: 'Operational cost efficiency improved by 8.7% across the group.',
    category: 'optimization',
    iconType: 'dollar',
    timestamp: '3 hours ago',
    severity: 'low',
  },
  {
    id: 'ins_5',
    title: 'ESG & Clean Power Generation',
    description: 'Annual clean power generation reached 8,400 GWh, offsetting 6.2M tons CO₂e.',
    category: 'revenue',
    iconType: 'trend',
    timestamp: '4 hours ago',
    severity: 'low',
  },
  {
    id: 'ins_6',
    title: 'Precision Robotics Yield',
    description: 'Robotic automation increased precision manufacturing yield by 19% across plants.',
    category: 'optimization',
    iconType: 'dollar',
    timestamp: '5 hours ago',
    severity: 'low',
  }
];

export const BOTTOM_KPI_CARDS: KPICardData[] = [
  {
    id: 'rev_trend',
    title: 'REVENUE TREND (YTD)',
    value: '₹ 24,852 Cr',
    numericVal: 24852,
    prefix: '₹ ',
    suffix: ' Cr',
    subtitle: 'vs LY ₹ 21,452 Cr',
    change: '▲ 15.9%',
    isPositive: true,
    type: 'currency',
    trendData: [
      { val: 18400 }, { val: 19100 }, { val: 19800 }, { val: 20400 },
      { val: 21900 }, { val: 22800 }, { val: 23500 }, { val: 24852 }
    ]
  },
  {
    id: 'pat_ytd',
    title: 'PROFIT AFTER TAX (YTD)',
    value: '₹ 4,152 Cr',
    numericVal: 4152,
    prefix: '₹ ',
    suffix: ' Cr',
    subtitle: 'vs LY ₹ 3,500 Cr',
    change: '▲ 18.7%',
    isPositive: true,
    type: 'currency',
    trendData: [
      { val: 2900 }, { val: 3100 }, { val: 3250 }, { val: 3400 },
      { val: 3650 }, { val: 3820 }, { val: 3990 }, { val: 4152 }
    ]
  },
  {
    id: 'ebitda_ytd',
    title: 'EBITDA (YTD)',
    value: '₹ 5,487 Cr',
    numericVal: 5487,
    prefix: '₹ ',
    suffix: ' Cr',
    subtitle: 'vs LY ₹ 4,680 Cr',
    change: '▲ 17.3%',
    isPositive: true,
    type: 'currency',
    trendData: [
      { val: 4200 }, { val: 4400 }, { val: 4600 }, { val: 4850 },
      { val: 5050 }, { val: 5200 }, { val: 5350 }, { val: 5487 }
    ]
  },
  {
    id: 'net_worth',
    title: 'NET WORTH',
    value: '₹ 18,650 Cr',
    numericVal: 18650,
    prefix: '₹ ',
    suffix: ' Cr',
    subtitle: 'vs LY ₹ 16,590 Cr',
    change: '▲ 12.4%',
    isPositive: true,
    type: 'currency',
    trendData: [
      { val: 15200 }, { val: 15800 }, { val: 16200 }, { val: 16900 },
      { val: 17400 }, { val: 17850 }, { val: 18200 }, { val: 18650 }
    ]
  },
  {
    id: 'net_cash',
    title: 'NET CASH POSITION',
    value: '₹ 6,842 Cr',
    numericVal: 6842,
    prefix: '₹ ',
    suffix: ' Cr',
    subtitle: 'vs LY ₹ 6,230 Cr',
    change: '▲ 9.8%',
    isPositive: true,
    type: 'currency',
    trendData: [
      { val: 5800 }, { val: 6000 }, { val: 6150 }, { val: 6300 },
      { val: 6450 }, { val: 6600 }, { val: 6720 }, { val: 6842 }
    ]
  }
];

export const MOCK_AI_RESPONSES: Record<string, string> = {
  default: "Aspect AI Executive Analysis: Group performance remains robust with ₹24,852 Cr YTD Revenue (+15.9%) and 22.1% EBITDA Margin. Energy (+18.4%) and Realty (+21.5%) lead value creation, while Infrastructure requires CEO intervention on 2 coastal projects.",
  revenue: "Group YTD Revenue stands at ₹ 24,852 Cr (15.9% YoY growth). Key drivers include Realty (+21.5%) and Energy (+18.4%). Bullion & Refinery remains the largest top-line contributor at ₹ 5,820 Cr.",
  alerts: "Currently tracking 128 active operational alerts across 9 divisions (-33.3% lower than last quarter). Critical focus is on Infrastructure delays in Maharashtra coastal highway.",
  energy: "Energy Sector Overview: 4.8 GW clean energy installed across Rajasthan solar parks and Tamil Nadu wind farms. YTD revenue is ₹ 4,280 Cr (+18.4% YoY) with 99.9% hydrogen purity benchmark.",
  esg: "Group Sustainability & ESG score has improved to 68.7/100 (+5.2 pts YoY). Zero-carbon refinery certification achieved in Bullion and 6.2M tons CO2e offset generated."
};
