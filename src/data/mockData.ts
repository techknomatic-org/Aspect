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
  email: 'ceo@aspect.global',
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
  groupRevenue: '₹ 24.9k Cr',
  revenueNumeric: 24.9,
  revenueVsLY: '₹ 21.5k Cr',
  revenueChangePct: 15.9,

  ebitdaMargin: '22.1%',
  ebitdaMarginNumeric: 22.1,
  ebitdaVsLY: '19.4%',
  ebitdaChangeDiff: '2.7pp',

  portfolioValue: '₹ 68.5k Cr',
  portfolioValueNumeric: 68.5,
  portfolioVsLY: '₹ 58.2k Cr',
  portfolioChangePct: 17.6,

  pipelineValue: '₹ 49.7k Cr',
  pipelineNumeric: 49.7,
  pipelineVsLY: '₹ 42.1k Cr',
  pipelineChangePct: 17.9,

  netCash: '₹ 6.8k Cr',
  netCashNumeric: 6.8,
  netCashVsLY: '₹ 6.2k Cr',
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
    financialImpact: 'Potential ₹ 0.4k Cr delay penalty risk in Q4',
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
    financialImpact: 'Potential ₹ 3.1k Cr YTD top-line acceleration',
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
    revenue: '₹ 4.1k Cr',
    growth: '+21.5%',
    valueDriver: 'Pre-leased 90% Aspect Financial Tower & residential sales +34%',
    health: 'Healthy',
    businessId: 'realty'
  },
  {
    id: 'vc_2',
    businessName: 'ENERGY',
    revenue: '₹ 4.3k Cr',
    growth: '+18.4%',
    valueDriver: 'Commissioned 1.2 GW Rajasthan Solar Park & Green Hydrogen pilot',
    health: 'Healthy',
    businessId: 'energy'
  },
  {
    id: 'vc_3',
    businessName: 'BULLION & REFINERY',
    revenue: '₹ 5.8k Cr',
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
    impact: 'Schedule slip penalty risk ₹ 0.4k Cr',
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
    potentialValue: '₹ 3.1k Cr',
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
    potentialValue: '₹ 2.4k Cr',
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
    potentialValue: '₹ 1.8k Cr',
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
    revenue: '₹ 0.9k Cr',
    growth: '12.4%',
    ebitdaMargin: 'N/A',
    portfolioValue: '₹ 1.8k Cr',
    numericRevenue: 0.9,
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
    image3dUrl: '/assets/foundation.png',
    tagline: 'Education • Healthcare • Sustainable Community Empowerment',
    recommendedFocus: 'Expand STEM rural learning centers to reach 3.0M beneficiaries by Q4 while maintaining funds utilization rate above 98%.',
    sparklineData: [{ val: 620 }, { val: 680 }, { val: 720 }, { val: 790 }, { val: 850 }],
    operationalMetrics: {
      'Beneficiaries Reach': '2.4M Families',
      'Active Programs': '42 Initiatives',
      'Funds Utilization': '98.4%',
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
      { name: 'Apex Education Campus', location: 'Bengaluru', investment: '₹ 0.2k Cr', completion: 92, status: 'On Track' },
      { name: 'Global Health Hub', location: 'Mumbai', investment: '₹ 0.3k Cr', completion: 78, status: 'On Track' }
    ]
  },
  {
    id: 'bullion-refinery',
    name: 'BULLION & REFINERY',
    category: 'Precious Metals & Commodities',
    revenue: '₹ 5.8k Cr',
    growth: '14.8%',
    ebitdaMargin: '18.2%',
    portfolioValue: '₹ 14.5k Cr',
    numericRevenue: 5.8,
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
    image3dUrl: '/assets/bullion_refinery.png',
    tagline: 'Purity • LBMA Integrity • Vault Storage',
    recommendedFocus: 'Conclude vault inventory reconciliation with Chief Auditor and expand Asian central bank supply contracts.',
    sparklineData: [{ val: 4200 }, { val: 4600 }, { val: 5100 }, { val: 5450 }, { val: 5820 }],
    operationalMetrics: {
      'Refining Capacity': '480 Tons/yr',
      'Gross Margin': '16.4%',
      'Avg Order Value': '₹ 42.5L',
      'Retention Rate': '94.2%',
      'Vault Inventory': '₹ 3.9k Cr',
      'LBMA Purity': '999.9 Fine'
    },
    highlights: [
      'Achieved zero-carbon refining certification',
      'Expanded bullion vault storage capacity by 40%',
      'New supply agreement signed with top Asian central banks'
    ],
    projects: [
      { name: 'Gold Refining Facility Expansion', location: 'Gujarat', investment: '₹ 0.7k Cr', completion: 88, status: 'On Track' },
      { name: 'Automated Minting Plant', location: 'Dubai', investment: '₹ 0.4k Cr', completion: 95, status: 'Completed' }
    ]
  },
  {
    id: 'realty',
    name: 'REALTY',
    category: 'Real Estate & Urban Spaces',
    revenue: '₹ 4.1k Cr',
    growth: '21.5%',
    ebitdaMargin: '28.4%',
    portfolioValue: '₹ 16.8k Cr',
    numericRevenue: 4.1,
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
    image3dUrl: '/assets/realty.png',
    tagline: 'Architectural Distinction • IGBC Platinum • Urban Spaces',
    recommendedFocus: 'Finalize land acquisition signoff for Aspect Financial City Phase II and accelerate residential pre-leasing.',
    sparklineData: [{ val: 2800 }, { val: 3100 }, { val: 3500 }, { val: 3820 }, { val: 4120 }],
    operationalMetrics: {
      'Portfolio Area': '18.4M sq.ft',
      'Pre-Leased Share': '90.2%',
      'Units Delivered': '1,420 Units',
      'Pipeline Value': '₹ 5.4k Cr',
      'Pending Approvals': '2 Projects',
      'IGBC Platinum': '4 Towers'
    },
    highlights: [
      'Pre-leased 90% of Aspect Financial Tower',
      'IGBC Platinum Green Building rating awarded to 4 towers',
      'Residential sales surged by 34% year-over-year'
    ],
    projects: [
      { name: 'Aspect Tech Skyline Tower', location: 'Hyderabad', investment: '₹ 1.2k Cr', completion: 82, status: 'On Track' },
      { name: 'Financial Center Phase II', location: 'Mumbai', investment: '₹ 1.9k Cr', completion: 64, status: 'On Track' }
    ]
  },
  {
    id: 'infrastructure',
    name: 'INFRASTRUCTURE',
    category: 'Civic & Mobility Systems',
    revenue: '₹ 3.5k Cr',
    growth: '9.2%',
    ebitdaMargin: '19.8%',
    portfolioValue: '₹ 12.4k Cr',
    numericRevenue: 3.5,
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
    image3dUrl: '/assets/infrastructure.png',
    tagline: 'Expressways • Deepwater Ports • Smart Mobility',
    recommendedFocus: 'Convene CEO Steering Committee with Maharashtra Toll Authority to resolve schedule slip on 2 coastal bridges.',
    sparklineData: [{ val: 2900 }, { val: 3050 }, { val: 3200 }, { val: 3350 }, { val: 3450 }],
    operationalMetrics: {
      'Expressway Network': '1,420 km',
      'On-Time Delivery': '68.0%',
      'Port Volume': '2.4M TEU',
      'Order Pipeline': '₹ 4.8k Cr',
      'Project Margin': '19.8%',
      'SLA Exposure': '₹ 0.4k Cr'
    },
    highlights: [
      'Port terminal throughput increased to 2.4M TEU',
      '2 major expressway bridge projects require schedule acceleration',
      'Smart tolling system digitized 99.4% of transactions'
    ],
    projects: [
      { name: 'Coastal Super Expressway', location: 'Maharashtra', investment: '₹ 2.4k Cr', completion: 54, status: 'Delayed' },
      { name: 'Smart Deepwater Container Terminal', location: 'Chennai', investment: '₹ 1.1k Cr', completion: 48, status: 'Delayed' }
    ]
  },
  {
    id: 'industries',
    name: 'INDUSTRIES',
    category: 'Advanced Manufacturing',
    revenue: '₹ 3.1k Cr',
    growth: '16.7%',
    ebitdaMargin: '24.1%',
    portfolioValue: '₹ 8.9k Cr',
    numericRevenue: 3.1,
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
    image3dUrl: '/assets/industries.png',
    tagline: 'Precision Engineering • Aerospace AS9100 • Robotics',
    recommendedFocus: 'Secure equipment import license for Pune robotic gigafactory expansion to capture ₹ 1.8k Cr aerospace export pipeline.',
    sparklineData: [{ val: 2400 }, { val: 2600 }, { val: 2780 }, { val: 2950 }, { val: 3110 }],
    operationalMetrics: {
      'Smart Factories': '14 Units',
      'Order Book Value': '₹ 4.0k Cr',
      'Capacity Use': '88.5%',
      'Rejection Rate': '0.12%',
      'DSO Duration': '42 Days',
      'Aerospace Standard': 'AS9100 Rev D'
    },
    highlights: [
      'Robotic automation increased shop floor yield by 19%',
      'Aerospace component plant achieved AS9100 Rev D approval',
      'Export revenue grew by 24.5%'
    ],
    projects: [
      { name: 'Precision Robotics Mega-Gigafactory', location: 'Pune', investment: '₹ 0.9k Cr', completion: 91, status: 'On Track' },
      { name: 'Aerospace Structures Wing', location: 'Nagpur', investment: '₹ 0.5k Cr', completion: 73, status: 'On Track' }
    ]
  },
  {
    id: 'hospitality',
    name: 'HOSPITALITY',
    category: 'Luxury Resorts & QSR Lifestyle',
    revenue: '₹ 1.8k Cr',
    growth: '13.1%',
    ebitdaMargin: '21.5%',
    portfolioValue: '₹ 5.2k Cr',
    numericRevenue: 1.8,
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
    image3dUrl: '/assets/hospitality.png',
    tagline: 'Heritage Resorts • Wellness • QSR Fast Casual Chain',
    recommendedFocus: 'Execute marketing concierge restructuring for heritage resorts while scaling QSR same-store sales growth (+14.2%).',
    sparklineData: [{ val: 1400 }, { val: 1520 }, { val: 1650 }, { val: 1740 }, { val: 1840 }],
    operationalMetrics: {
      'Keys Inventory': '2,850 Keys',
      'Occupancy Rate': '68.4%',
      'Average Daily Rate': '₹ 18,500',
      'RevPAR Growth': '17.8%',
      'Guest Satisfaction': '4.85 / 5',
      'EBITDA Margin': '21.5%'
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
      { name: 'Aspect Sanctuary Maldives', location: 'Maldives', investment: '₹ 0.8k Cr', completion: 86, status: 'On Track' },
      { name: 'Royal Heritage Palace', location: 'Udaipur', investment: '₹ 0.4k Cr', completion: 94, status: 'On Track' }
    ]
  },
  {
    id: 'energy',
    name: 'ENERGY',
    category: 'Renewables & Power Tech',
    revenue: '₹ 4.3k Cr',
    growth: '18.4%',
    ebitdaMargin: '31.2%',
    portfolioValue: '₹ 15.2k Cr',
    numericRevenue: 4.3,
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
    image3dUrl: '/assets/energy.png',
    tagline: 'Solar Megaparks • Green Hydrogen • Clean Grid Capacity',
    recommendedFocus: 'Accelerate high-return solar expansion opportunities in Rajasthan while maintaining 99.9% hydrogen purity benchmark.',
    sparklineData: [{ val: 3100 }, { val: 3450 }, { val: 3800 }, { val: 4050 }, { val: 4280 }],
    operationalMetrics: {
      'Solar & Wind Capacity': '4.8 GW',
      'Operational Capacity': '4.2 GW',
      'Under Development': '1.6 GW',
      'Capacity Factor': '26.8%',
      'Generation Volume': '8,400 GWh',
      'CO2 Offset': '6.2M Tons'
    },
    highlights: [
      'Commissioned 1.2 GW Ultra Solar Park in Rajasthan',
      'Green Hydrogen pilot plant reached 99.9% purity output',
      'Carbon offset generation reached 6.2M tons CO2e'
    ],
    projects: [
      { name: 'Rajasthan Solar Mega-Park', location: 'Jaisalmer', investment: '₹ 3.1k Cr', completion: 96, status: 'Completed' },
      { name: 'Offshore Wind Generation Phase I', location: 'Tamil Nadu', investment: '₹ 2.2k Cr', completion: 71, status: 'On Track' }
    ]
  },
  {
    id: 'entertainment',
    name: 'ENTERTAINMENT',
    category: 'Media, Film & Immersive',
    revenue: '₹ 1.3k Cr',
    growth: '22.1%',
    ebitdaMargin: '20.4%',
    portfolioValue: '₹ 3.8k Cr',
    numericRevenue: 1.3,
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
    image3dUrl: '/assets/entertainment.png',
    tagline: 'Film Studios • Digital IP • Immersive AR/VR Theme Parks',
    recommendedFocus: 'Monetize digital content library IP (surpassed ₹ 2.0k Cr) and expand Dubai immersive theme park attractions.',
    sparklineData: [{ val: 820 }, { val: 940 }, { val: 1050 }, { val: 1160 }, { val: 1250 }],
    operationalMetrics: {
      'Streaming Audience': '180M+ Viewers',
      'VR Park Visitors': '1.8M Guests',
      'Digital IP Value': '₹ 2.1k Cr',
      'Delivery Accuracy': '96.5%',
      'Project Margin': '20.4%',
      'Client Retention': '92.0%'
    },
    highlights: [
      'Box office collections broke regional franchise records',
      'Immersive VR dome park welcomed 1.8M visitors',
      'Digital content library value surpassed ₹ 2.0k Cr'
    ],
    projects: [
      { name: 'Aspect Immersive Theme Park', location: 'Dubai', investment: '₹ 1.0k Cr', completion: 89, status: 'On Track' },
      { name: 'VFX & AI Virtual Production Studio', location: 'Mumbai', investment: '₹ 0.3k Cr', completion: 98, status: 'Completed' }
    ]
  },
  {
    id: 'sports',
    name: 'SPORTS',
    category: 'Franchises & Arenas',
    revenue: '₹ 0.9k Cr',
    growth: '28.6%',
    ebitdaMargin: '26.8%',
    portfolioValue: '₹ 3.2k Cr',
    numericRevenue: 0.9,
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
    image3dUrl: '/assets/sports.png',
    tagline: 'Franchises • Smart Arenas • Athlete Academies',
    recommendedFocus: 'Leverage National Championship victory to negotiate 40%+ broadcast rights renewal and scale sports tech academy.',
    sparklineData: [{ val: 580 }, { val: 660 }, { val: 740 }, { val: 840 }, { val: 932 }],
    operationalMetrics: {
      'Stadium Capacity': '85,000 Seats',
      'Franchise Win Rate': '72.4%',
      'Broadcast Rights': '₹ 1.5k Cr',
      'Fan Membership': '4.2M Fans',
      'Sponsorship Growth': '+42.0%',
      'Athletes Enrolled': '600 Athletes'
    },
    highlights: [
      'Aspect Titans won National Championship title',
      'Broadcast rights value increased by 42%',
      'Sports Tech academy enrolled 600 Olympic hopefuls'
    ],
    projects: [
      { name: 'Aspect Smart Arena Stadium', location: 'Ahmedabad', investment: '₹ 1.5k Cr', completion: 90, status: 'On Track' },
      { name: 'High-Performance Sports Bio-Lab', location: 'Bengaluru', investment: '₹ 0.2k Cr', completion: 85, status: 'On Track' }
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
    value: '₹ 24.9k Cr',
    numericVal: 24.9,
    prefix: '₹ ',
    suffix: 'k Cr',
    subtitle: 'vs LY ₹ 21.5k Cr',
    change: '▲ 15.9%',
    isPositive: true,
    type: 'currency',
    trendData: [
      { val: 18.4 }, { val: 19.1 }, { val: 19.8 }, { val: 20.4 },
      { val: 21.9 }, { val: 22.8 }, { val: 23.5 }, { val: 24.9 }
    ]
  },
  {
    id: 'pat_ytd',
    title: 'PROFIT AFTER TAX (YTD)',
    value: '₹ 4.2k Cr',
    numericVal: 4.2,
    prefix: '₹ ',
    suffix: 'k Cr',
    subtitle: 'vs LY ₹ 3.5k Cr',
    change: '▲ 18.7%',
    isPositive: true,
    type: 'currency',
    trendData: [
      { val: 2.9 }, { val: 3.1 }, { val: 3.25 }, { val: 3.4 },
      { val: 3.65 }, { val: 3.82 }, { val: 3.99 }, { val: 4.2 }
    ]
  },
  {
    id: 'ebitda_ytd',
    title: 'EBITDA (YTD)',
    value: '₹ 5.5k Cr',
    numericVal: 5.5,
    prefix: '₹ ',
    suffix: 'k Cr',
    subtitle: 'vs LY ₹ 4.7k Cr',
    change: '▲ 17.3%',
    isPositive: true,
    type: 'currency',
    trendData: [
      { val: 4.2 }, { val: 4.4 }, { val: 4.6 }, { val: 4.85 },
      { val: 5.05 }, { val: 5.2 }, { val: 5.35 }, { val: 5.5 }
    ]
  },
  {
    id: 'net_worth',
    title: 'NET WORTH',
    value: '₹ 18.7k Cr',
    numericVal: 18.7,
    prefix: '₹ ',
    suffix: 'k Cr',
    subtitle: 'vs LY ₹ 16.6k Cr',
    change: '▲ 12.4%',
    isPositive: true,
    type: 'currency',
    trendData: [
      { val: 15.2 }, { val: 15.8 }, { val: 16.2 }, { val: 16.9 },
      { val: 17.4 }, { val: 17.85 }, { val: 18.2 }, { val: 18.7 }
    ]
  },
  {
    id: 'net_cash',
    title: 'NET CASH POSITION',
    value: '₹ 6.8k Cr',
    numericVal: 6.8,
    prefix: '₹ ',
    suffix: 'k Cr',
    subtitle: 'vs LY ₹ 6.2k Cr',
    change: '▲ 9.8%',
    isPositive: true,
    type: 'currency',
    trendData: [
      { val: 5.8 }, { val: 6.0 }, { val: 6.15 }, { val: 6.3 },
      { val: 6.45 }, { val: 6.6 }, { val: 6.72 }, { val: 6.8 }
    ]
  }
];

export const MOCK_AI_RESPONSES: Record<string, string> = {
  default: "Aspect AI Executive Analysis: Group performance remains robust with ₹ 24.9k Cr YTD Revenue (+15.9%) and 22.1% EBITDA Margin. Energy (+18.4%) and Realty (+21.5%) lead value creation, while Infrastructure requires CEO intervention on 2 coastal projects.",
  revenue: "Group YTD Revenue stands at ₹ 24.9k Cr (15.9% YoY growth). Key drivers include Realty (+21.5%) and Energy (+18.4%). Bullion & Refinery remains the largest top-line contributor at ₹ 5.8k Cr.",
  alerts: "Currently tracking 128 active operational alerts across 9 divisions (-33.3% lower than last quarter). Critical focus is on Infrastructure delays in Maharashtra coastal highway.",
  energy: "Energy Sector Overview: 4.8 GW clean energy installed across Rajasthan solar parks and Tamil Nadu wind farms. YTD revenue is ₹ 4.3k Cr (+18.4% YoY) with 99.9% hydrogen purity benchmark.",
  esg: "Group Sustainability & ESG score has improved to 68.7/100 (+5.2 pts YoY). Zero-carbon refinery certification achieved in Bullion and 6.2M tons CO2e offset generated."
};
