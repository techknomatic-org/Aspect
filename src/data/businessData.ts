export interface ExecutiveKPI {
  name: string;
  value: string;
  prevValue: string;
  change: string;
  isPositive: boolean;
  status: 'GOOD' | 'WATCH' | 'ATTENTION' | 'CRITICAL';
  context: string;
  trendData: { q: string; val: number }[];
}

export interface PerformanceDriver {
  driver: string;
  impactType: 'positive' | 'negative' | 'neutral';
  relevantKpi: string;
  interpretation: string;
}

export interface CEOAttentionDetail {
  issue: string;
  severity: 'Critical' | 'Attention' | 'Watch' | 'Opportunity';
  financialImpact: string;
  businessImpact: string;
  rootCause: string;
  recommendedAction: string;
}

export interface RiskExposureDetail {
  risk: string;
  severity: 'High' | 'Medium' | 'Low';
  exposure: string;
  impact: string;
  probability: string;
  mitigation: string;
}

export interface MajorProjectDetail {
  name: string;
  location: string;
  value: string;
  progress: number;
  status: 'ON TRACK' | 'WATCH' | 'DELAYED' | 'AT RISK';
  completionDate: string;
  delayImpact?: string;
}

export interface PipelineOpportunityDetail {
  name: string;
  potentialValue: string;
  expectedGrowth: string;
  strategicFit: 'HIGH' | 'ULTRA HIGH' | 'MEDIUM';
  confidence: string;
  timing: string;
  ceoAction: string;
}

export interface BusinessExecutiveReview {
  id: string;
  name: string;
  category: string;
  status: 'Healthy' | 'Watch' | 'Attention' | 'Critical';
  executiveSummary: string;
  lastUpdated: string;
  portfolioContribution: string;
  revenueVsLY: string;
  growthYoY: string;
  
  primaryKpis: ExecutiveKPI[];
  
  chartData: {
    quarter: string;
    revenue: number;
    margin: number;
    ebitda: number;
    groupShare: number;
  }[];
  
  chartAnnotations: {
    revenue: string;
    margin: string;
    contribution: string;
  };
  
  performanceDrivers: PerformanceDriver[];
  strategicHighlights: string[];
  ceoAttentionItems: CEOAttentionDetail[];
  risksAndExposure: RiskExposureDetail[];
  majorProjects: MajorProjectDetail[];
  
  pipeline: {
    totalValue: string;
    opportunities: PipelineOpportunityDetail[];
  };
  
  operationalInsights: Record<string, string>;
  recommendedFocus: string;
}

export const BUSINESS_EXECUTIVE_DATA: Record<string, BusinessExecutiveReview> = {
  'industries': {
    id: 'industries',
    name: 'INDUSTRIES',
    category: 'Advanced Manufacturing & Precision Engineering',
    status: 'Healthy',
    executiveSummary: 'Industries continues to deliver strong revenue growth (+16.7%), supported by a robust ₹ 4,800 Cr order book and expanding EBITDA margins, while capacity utilization and robotic export delivery schedules require close monitoring.',
    lastUpdated: '01 SEP 2026 • 09:30 AM',
    portfolioContribution: '12.5% of Group Revenue',
    revenueVsLY: '₹ 2,665 Cr (+16.7%)',
    growthYoY: '16.7%',
    
    primaryKpis: [
      {
        name: 'REVENUE (YTD)',
        value: '₹ 3,150 Cr',
        prevValue: '₹ 2,698 Cr',
        change: '▲ 16.7%',
        isPositive: true,
        status: 'GOOD',
        context: 'Growth 2.4% above Q3 budget plan',
        trendData: [{ q: 'Q1', val: 720 }, { q: 'Q2', val: 760 }, { q: 'Q3', val: 810 }, { q: 'Q4', val: 860 }]
      },
      {
        name: 'YOY GROWTH',
        value: '16.7%',
        prevValue: '14.3%',
        change: '▲ 2.4pp',
        isPositive: true,
        status: 'GOOD',
        context: 'Driven by aerospace export orders',
        trendData: [{ q: 'Q1', val: 14.1 }, { q: 'Q2', val: 14.9 }, { q: 'Q3', val: 15.8 }, { q: 'Q4', val: 16.7 }]
      },
      {
        name: 'EBITDA',
        value: '₹ 520 Cr',
        prevValue: '₹ 440 Cr',
        change: '▲ 18.2%',
        isPositive: true,
        status: 'GOOD',
        context: 'Margin expanded by 1.1pp YoY',
        trendData: [{ q: 'Q1', val: 115 }, { q: 'Q2', val: 128 }, { q: 'Q3', val: 135 }, { q: 'Q4', val: 142 }]
      },
      {
        name: 'GROSS MARGIN',
        value: '16.5%',
        prevValue: '15.8%',
        change: '▲ 0.7pp',
        isPositive: true,
        status: 'GOOD',
        context: 'Robotic automation driving cost savings',
        trendData: [{ q: 'Q1', val: 15.6 }, { q: 'Q2', val: 15.9 }, { q: 'Q3', val: 16.2 }, { q: 'Q4', val: 16.5 }]
      },
      {
        name: 'ORDER BOOK',
        value: '₹ 4,800 Cr',
        prevValue: '₹ 4,020 Cr',
        change: '▲ 19.4%',
        isPositive: true,
        status: 'GOOD',
        context: 'Covers 18 months of manufacturing capacity',
        trendData: [{ q: 'Q1', val: 4050 }, { q: 'Q2', val: 4300 }, { q: 'Q3', val: 4550 }, { q: 'Q4', val: 4800 }]
      },
      {
        name: 'PIPELINE',
        value: '₹ 6,400 Cr',
        prevValue: '₹ 5,100 Cr',
        change: '▲ 25.5%',
        isPositive: true,
        status: 'GOOD',
        context: 'Includes ₹ 1,800 Cr aerospace export bid',
        trendData: [{ q: 'Q1', val: 5100 }, { q: 'Q2', val: 5500 }, { q: 'Q3', val: 5900 }, { q: 'Q4', val: 6400 }]
      }
    ],

    chartData: [
      { quarter: 'Q1 FY26', revenue: 720, margin: 15.6, ebitda: 115, groupShare: 11.8 },
      { quarter: 'Q2 FY26', revenue: 760, margin: 15.9, ebitda: 128, groupShare: 12.1 },
      { quarter: 'Q3 FY26', revenue: 810, margin: 16.2, ebitda: 135, groupShare: 12.3 },
      { quarter: 'Q4 FY26 (E)', revenue: 860, margin: 16.5, ebitda: 142, groupShare: 12.5 }
    ],

    chartAnnotations: {
      revenue: 'Revenue growth accelerated for the 3rd consecutive quarter',
      margin: 'EBITDA margin expanded by +1.1pp despite raw material volatility',
      contribution: 'Industries now generates 12.5% of overall Group YTD Revenue'
    },

    performanceDrivers: [
      {
        driver: 'Higher Aerospace Export Order Volume',
        impactType: 'positive',
        relevantKpi: 'REVENUE & ORDER BOOK',
        interpretation: 'AS9100 Rev D certification unlocked high-margin tier-1 defense & aerospace contracts.'
      },
      {
        driver: 'Robotic Shop-Floor Automation',
        impactType: 'positive',
        relevantKpi: 'GROSS MARGIN',
        interpretation: 'Automation increased shop-floor yield by 19% and reduced assembly labor overhead.'
      },
      {
        driver: 'Capacity Bottlenecks in Heavy Forge Unit',
        impactType: 'negative',
        relevantKpi: 'ON-TIME DELIVERY',
        interpretation: 'High demand in Nagpur wing resulted in 42-day DSO delay and delivery queue buildup.'
      }
    ],

    strategicHighlights: [
      'Achieved AS9100 Rev D global aerospace quality certification',
      'Robotic automation integration expanded shop-floor yield by 19%',
      'Aerospace component export revenues grew by 24.5% year-over-year',
      'Secured ₹ 890 Cr precision robotics gigafactory contract in Pune'
    ],

    ceoAttentionItems: [
      {
        issue: 'Customs Equipment Import License Delay for Pune Gigafactory',
        severity: 'Attention',
        financialImpact: '₹ 180 Cr revenue recognition slip into Q1 FY27',
        businessImpact: 'Delays commissioning of automated robotic export production line',
        rootCause: 'Bureaucratic delay in Directorate General of Foreign Trade (DGFT) clearance',
        recommendedAction: 'Engage Senior Policy Advisor to expedite DGFT clearance before end of month.'
      },
      {
        issue: 'Nagpur Heavy Forge Unit Utilization Bottleneck',
        severity: 'Watch',
        financialImpact: '₹ 45 Cr potential overtime penalty expense',
        businessImpact: 'On-time delivery index dropped slightly to 88.5%',
        rootCause: 'Unscheduled maintenance downtime on 5,000-ton hydraulic press line',
        recommendedAction: 'Approve dual-shift maintenance team and dispatch spare parts inventory.'
      }
    ],

    risksAndExposure: [
      {
        risk: 'Specialized Titanium Alloy Price Volatility',
        severity: 'Medium',
        exposure: '₹ 65 Cr margin risk',
        impact: 'Raw material cost increases could compress Q4 gross margin by up to 0.5pp',
        probability: 'Moderate (45%)',
        mitigation: 'Execute 6-month forward hedging lock-in contract with global metal suppliers.'
      }
    ],

    majorProjects: [
      {
        name: 'Precision Robotics Mega-Gigafactory',
        location: 'Pune, Maharashtra',
        value: '₹ 890 Cr',
        progress: 91,
        status: 'ON TRACK',
        completionDate: 'Q3 FY27'
      },
      {
        name: 'Aerospace Structures Wing Expansion',
        location: 'Nagpur, Maharashtra',
        value: '₹ 540 Cr',
        progress: 73,
        status: 'WATCH',
        completionDate: 'Q4 FY27',
        delayImpact: '₹ 45 Cr overtime risk'
      }
    ],

    pipeline: {
      totalValue: '₹ 6,400 Cr',
      opportunities: [
        {
          name: 'Robotic Aerospace Export Line Expansion',
          potentialValue: '₹ 1,800 Cr',
          expectedGrowth: '+32.0%',
          strategicFit: 'ULTRA HIGH',
          confidence: '91%',
          timing: 'Q4 FY26',
          ceoAction: 'Approve capital allocation for equipment import license.'
        },
        {
          name: 'Defense Precision Automation Contract',
          potentialValue: '₹ 1,250 Cr',
          expectedGrowth: '+22.5%',
          strategicFit: 'HIGH',
          confidence: '85%',
          timing: 'Q1 FY27',
          ceoAction: 'Authorize joint-venture bidding consortium agreement.'
        }
      ]
    },

    operationalInsights: {
      'Smart Factories Operating': '14 Automated Units',
      'Capacity Utilisation Rate': '88.5% of Rated Cap.',
      'Quality Rejection Rate': '0.12% (Industry Best)',
      'Days Sales Outstanding (DSO)': '42 Days',
      'Aerospace Approval Standard': 'AS9100 Rev D',
      'On-Time Delivery Index': '96.2% Complete'
    },

    recommendedFocus: 'Protect 16.5% gross margin by executing titanium raw material price hedging while expediting DGFT clearance for the Pune Gigafactory to capture the ₹ 1,800 Cr aerospace export pipeline.'
  },

  'bullion-refinery': {
    id: 'bullion-refinery',
    name: 'BULLION & REFINERY',
    category: 'Precious Metals, Minting & Commodities',
    status: 'Attention',
    executiveSummary: 'Bullion & Refinery leads top-line revenue (₹ 5,820 Cr) with zero-carbon LBMA accreditation, but vault inventory reconciliation and LBMA compliance audit require immediate executive intervention.',
    lastUpdated: '01 SEP 2026 • 09:30 AM',
    portfolioContribution: '23.4% of Group Revenue',
    revenueVsLY: '₹ 5,070 Cr (+14.8%)',
    growthYoY: '14.8%',

    primaryKpis: [
      {
        name: 'REVENUE / GMV',
        value: '₹ 5,820 Cr',
        prevValue: '₹ 5,070 Cr',
        change: '▲ 14.8%',
        isPositive: true,
        status: 'GOOD',
        context: 'Central Bank gold contracts driving top line',
        trendData: [{ q: 'Q1', val: 1300 }, { q: 'Q2', val: 1420 }, { q: 'Q3', val: 1510 }, { q: 'Q4', val: 1590 }]
      },
      {
        name: 'YOY GROWTH',
        value: '14.8%',
        prevValue: '12.4%',
        change: '▲ 2.4pp',
        isPositive: true,
        status: 'GOOD',
        context: 'International vault storage demand +40%',
        trendData: [{ q: 'Q1', val: 12.4 }, { q: 'Q2', val: 13.2 }, { q: 'Q3', val: 14.1 }, { q: 'Q4', val: 14.8 }]
      },
      {
        name: 'GROSS MARGIN',
        value: '16.4%',
        prevValue: '15.8%',
        change: '▲ 0.6pp',
        isPositive: true,
        status: 'GOOD',
        context: 'Zero-carbon refining premium',
        trendData: [{ q: 'Q1', val: 15.8 }, { q: 'Q2', val: 16.0 }, { q: 'Q3', val: 16.2 }, { q: 'Q4', val: 16.4 }]
      },
      {
        name: 'INVENTORY HEALTH',
        value: '₹ 3,850 Cr',
        prevValue: '₹ 3,400 Cr',
        change: '▼ 2.1%',
        isPositive: false,
        status: 'ATTENTION',
        context: '120 kg gold batch audit variance under review',
        trendData: [{ q: 'Q1', val: 3400 }, { q: 'Q2', val: 3600 }, { q: 'Q3', val: 3750 }, { q: 'Q4', val: 3850 }]
      },
      {
        name: 'DEMAND / ORDERS',
        value: '1,24,800',
        prevValue: '1,14,000',
        change: '▲ 9.4%',
        isPositive: true,
        status: 'GOOD',
        context: 'Average order value ₹ 42.5 Lacs',
        trendData: [{ q: 'Q1', val: 28000 }, { q: 'Q2', val: 31000 }, { q: 'Q3', val: 32400 }, { q: 'Q4', val: 33400 }]
      },
      {
        name: 'PIPELINE',
        value: '₹ 4,800 Cr',
        prevValue: '₹ 3,900 Cr',
        change: '▲ 23.0%',
        isPositive: true,
        status: 'GOOD',
        context: 'Asian Central Bank sovereign reserve tender',
        trendData: [{ q: 'Q1', val: 3900 }, { q: 'Q2', val: 4200 }, { q: 'Q3', val: 4500 }, { q: 'Q4', val: 4800 }]
      }
    ],

    chartData: [
      { quarter: 'Q1 FY26', revenue: 1300, margin: 15.8, ebitda: 205, groupShare: 22.8 },
      { quarter: 'Q2 FY26', revenue: 1420, margin: 16.0, ebitda: 227, groupShare: 23.1 },
      { quarter: 'Q3 FY26', revenue: 1510, margin: 16.2, ebitda: 244, groupShare: 23.3 },
      { quarter: 'Q4 FY26 (E)', revenue: 1590, margin: 16.4, ebitda: 260, groupShare: 23.4 }
    ],

    chartAnnotations: {
      revenue: 'Top-line expanded by +14.8% supported by central bank vault storage contracts',
      margin: 'LBMA Zero-Carbon certification generated 60 bps pricing premium',
      contribution: 'Bullion remains the single largest revenue contributor across the Group'
    },

    performanceDrivers: [
      {
        driver: 'Central Bank Sovereign Vault Demand',
        impactType: 'positive',
        relevantKpi: 'REVENUE & PIPELINE',
        interpretation: 'Global central banks expanding physical gold holdings in secure Aspect vaults.'
      },
      {
        driver: 'LBMA Zero-Carbon Accreditation',
        impactType: 'positive',
        relevantKpi: 'GROSS MARGIN',
        interpretation: 'Sustainability accreditation commands higher refining fee per kilogram.'
      },
      {
        driver: 'Vault Reconciliation Audit Delay',
        impactType: 'negative',
        relevantKpi: 'INVENTORY HEALTH',
        interpretation: 'Audit mismatch on 120 kg bar batch temporarily froze international clearing clearance.'
      }
    ],

    strategicHighlights: [
      'Achieved world-first LBMA Zero-Carbon refining accreditation',
      'Expanded international bullion vault capacity in Dubai by 40%',
      'Signed long-term sovereign supply agreement with top Asian central banks'
    ],

    ceoAttentionItems: [
      {
        issue: 'Gujarat Vault Inventory Variance Detected',
        severity: 'Critical',
        financialImpact: 'Reconciliation of 120 kg gold bar batch (₹ 78 Cr value)',
        businessImpact: 'LBMA Annual Audit clearance pending reconciliation signoff',
        rootCause: 'Bar barcode scanning error during high-volume night shift batching',
        recommendedAction: 'Dispatch Chief Auditor to Gujarat refinery vault for immediate physical count.'
      }
    ],

    risksAndExposure: [
      {
        risk: 'LBMA Compliance Signoff Hold',
        severity: 'High',
        exposure: '₹ 1,200 Cr sovereign clearing risk',
        impact: 'Temporary suspension of international LBMA delivery status if unresolved within 14 days',
        probability: 'Low (15%)',
        mitigation: 'Conduct joint physical audit with Ernst & Young audit partners.'
      }
    ],

    majorProjects: [
      {
        name: 'Gold Refining Facility Expansion',
        location: 'Surat, Gujarat',
        value: '₹ 650 Cr',
        progress: 88,
        status: 'ON TRACK',
        completionDate: 'Q3 FY26'
      },
      {
        name: 'Automated Minting & Storage Hub',
        location: 'Dubai, UAE',
        value: '₹ 410 Cr',
        progress: 95,
        status: 'ON TRACK',
        completionDate: 'Completed'
      }
    ],

    pipeline: {
      totalValue: '₹ 4,800 Cr',
      opportunities: [
        {
          name: 'Asian Sovereign Central Bank Vault Reserve Contract',
          potentialValue: '₹ 2,800 Cr',
          expectedGrowth: '+35.0%',
          strategicFit: 'ULTRA HIGH',
          confidence: '95%',
          timing: 'Q4 FY26',
          ceoAction: 'Sign final sovereign custodial vault agreement in Singapore.'
        }
      ]
    },

    operationalInsights: {
      'Refining Capacity': '480 Tons / year',
      'LBMA Purity Benchmark': '999.9 Fine Gold',
      'Average Order Value (AOV)': '₹ 42.5 Lacs',
      'Vault Inventory Value': '₹ 3,850 Cr',
      'Customer Retention Rate': '94.2% Institutional',
      'Refining Loss Pct': '0.008% (World Class)'
    },

    recommendedFocus: 'Resolve Gujarat vault inventory reconciliation with Chief Auditor within 72 hours to secure LBMA signoff and execute the ₹ 2,800 Cr Asian Sovereign vault contract.'
  },

  'realty': {
    id: 'realty',
    name: 'REALTY',
    category: 'Real Estate & Urban Development',
    status: 'Healthy',
    executiveSummary: 'Realty delivered exceptional growth (+21.5%) driven by 90% pre-leasing of Aspect Financial Tower and residential sales surging +34%, while land acquisition for Financial City Phase II awaits signoff.',
    lastUpdated: '01 SEP 2026 • 09:30 AM',
    portfolioContribution: '16.6% of Group Revenue',
    revenueVsLY: '₹ 3,390 Cr (+21.5%)',
    growthYoY: '21.5%',

    primaryKpis: [
      {
        name: 'PROJECT VALUE',
        value: '₹ 3,150 Cr',
        prevValue: '₹ 2,660 Cr',
        change: '▲ 18.4%',
        isPositive: true,
        status: 'GOOD',
        context: 'Commercial portfolio valuation surged',
        trendData: [{ q: 'Q1', val: 2660 }, { q: 'Q2', val: 2800 }, { q: 'Q3', val: 2980 }, { q: 'Q4', val: 3150 }]
      },
      {
        name: 'REVENUE (YTD)',
        value: '₹ 4,120 Cr',
        prevValue: '₹ 3,390 Cr',
        change: '▲ 21.5%',
        isPositive: true,
        status: 'GOOD',
        context: 'Pre-leased 90% of Financial Tower',
        trendData: [{ q: 'Q1', val: 920 }, { q: 'Q2', val: 990 }, { q: 'Q3', val: 1080 }, { q: 'Q4', val: 1130 }]
      },
      {
        name: 'YOY GROWTH',
        value: '21.5%',
        prevValue: '17.2%',
        change: '▲ 4.3pp',
        isPositive: true,
        status: 'GOOD',
        context: 'Residential sales +34% YoY',
        trendData: [{ q: 'Q1', val: 17.2 }, { q: 'Q2', val: 18.5 }, { q: 'Q3', val: 20.1 }, { q: 'Q4', val: 21.5 }]
      },
      {
        name: 'ACTIVE PROJECTS',
        value: '14 Projects',
        prevValue: '12 Projects',
        change: '▲ 2',
        isPositive: true,
        status: 'GOOD',
        context: '18.4M sq.ft total portfolio area',
        trendData: [{ q: 'Q1', val: 12 }, { q: 'Q2', val: 13 }, { q: 'Q3', val: 13 }, { q: 'Q4', val: 14 }]
      },
      {
        name: 'COMPLETION %',
        value: '68.4%',
        prevValue: '64.2%',
        change: '▲ 4.2pp',
        isPositive: true,
        status: 'GOOD',
        context: '4 IGBC Platinum green towers delivered',
        trendData: [{ q: 'Q1', val: 64.2 }, { q: 'Q2', val: 65.5 }, { q: 'Q3', val: 67.1 }, { q: 'Q4', val: 68.4 }]
      },
      {
        name: 'PIPELINE',
        value: '₹ 5,400 Cr',
        prevValue: '₹ 4,200 Cr',
        change: '▲ 28.5%',
        isPositive: true,
        status: 'GOOD',
        context: 'Aspect Financial City Phase II',
        trendData: [{ q: 'Q1', val: 4200 }, { q: 'Q2', val: 4600 }, { q: 'Q3', val: 5000 }, { q: 'Q4', val: 5400 }]
      }
    ],

    chartData: [
      { quarter: 'Q1 FY26', revenue: 920, margin: 27.2, ebitda: 250, groupShare: 15.8 },
      { quarter: 'Q2 FY26', revenue: 990, margin: 27.8, ebitda: 275, groupShare: 16.1 },
      { quarter: 'Q3 FY26', revenue: 1080, margin: 28.1, ebitda: 303, groupShare: 16.4 },
      { quarter: 'Q4 FY26 (E)', revenue: 1130, margin: 28.4, ebitda: 321, groupShare: 16.6 }
    ],

    chartAnnotations: {
      revenue: 'Quarterly revenue surpassed ₹ 1,100 Cr for the first time',
      margin: 'EBITDA margin reached 28.4% due to premium commercial rentals',
      contribution: 'Realty contributes 16.6% of overall Group YTD Revenue'
    },

    performanceDrivers: [
      {
        driver: 'Pre-Leasing 90% Commercial Skyscrapers',
        impactType: 'positive',
        relevantKpi: 'REVENUE & MARGIN',
        interpretation: 'Multinational banking tenants locked in 12-year lease commitments.'
      },
      {
        driver: 'IGBC Platinum Sustainability Premium',
        impactType: 'positive',
        relevantKpi: 'PROJECT VALUE',
        interpretation: 'Green certified towers command 18% rental rate premium over market.'
      }
    ],

    strategicHighlights: [
      'Pre-leased 90% of landmark Aspect Financial Tower in Mumbai',
      'IGBC Platinum Green Building rating awarded to 4 new commercial towers',
      'Residential tower pre-sales surged +34% year-over-year'
    ],

    ceoAttentionItems: [
      {
        issue: 'Environmental Regulatory Approval Slip for Hyderabad Tech Tower',
        severity: 'Watch',
        financialImpact: '₹ 120 Cr capital lockup for 45 additional days',
        businessImpact: 'Construction start date deferred from Q3 to Q4',
        rootCause: 'State Pollution Control Board wetland proximity review',
        recommendedAction: 'Submit revised environmental impact assessment report.'
      }
    ],

    risksAndExposure: [
      {
        risk: 'Land Acquisition Clearance Delay',
        severity: 'Medium',
        exposure: '₹ 2,400 Cr Phase II pipeline',
        impact: 'Delay in ground-breaking for Aspect Smart Financial City Phase II',
        probability: 'Moderate (30%)',
        mitigation: 'Expedite municipal land signoff with Chief Minister urban team.'
      }
    ],

    majorProjects: [
      {
        name: 'Aspect Tech Skyline Tower',
        location: 'Hyderabad, Telangana',
        value: '₹ 1,200 Cr',
        progress: 82,
        status: 'ON TRACK',
        completionDate: 'Q4 FY26'
      },
      {
        name: 'Financial Center Phase II',
        location: 'Mumbai, Maharashtra',
        value: '₹ 1,850 Cr',
        progress: 64,
        status: 'WATCH',
        completionDate: 'Q2 FY27'
      }
    ],

    pipeline: {
      totalValue: '₹ 5,400 Cr',
      opportunities: [
        {
          name: 'Aspect Smart Financial City Phase II',
          potentialValue: '₹ 2,400 Cr',
          expectedGrowth: '+24.5%',
          strategicFit: 'HIGH',
          confidence: '88%',
          timing: 'Q4 FY26',
          ceoAction: 'Sign land acquisition agreement.'
        }
      ]
    },

    operationalInsights: {
      'Total Portfolio Area': '18.4M sq.ft',
      'Commercial Pre-Leased %': '90.2% Pre-Leased',
      'Residential Units Delivered': '1,420 Units YTD',
      'Development Pipeline': '₹ 5,400 Cr',
      'IGBC Platinum Towers': '4 Certified Towers',
      'Average Rental Yield': '8.6% per annum'
    },

    recommendedFocus: 'Sign land acquisition for Aspect Smart Financial City Phase II while clearing Pollution Control Board environmental approval for Hyderabad Tech Tower.'
  },

  'infrastructure': {
    id: 'infrastructure',
    name: 'INFRASTRUCTURE',
    category: 'Civic, Ports & Mobility Systems',
    status: 'Critical',
    executiveSummary: 'Infrastructure revenue reached ₹ 3,450 Cr with strong port throughput (2.4M TEU), but schedule slips on 2 coastal bridges in Maharashtra pose a ₹ 420 Cr delay penalty risk requiring urgent CEO intervention.',
    lastUpdated: '01 SEP 2026 • 09:30 AM',
    portfolioContribution: '13.9% of Group Revenue',
    revenueVsLY: '₹ 3,160 Cr (+9.2%)',
    growthYoY: '9.2%',

    primaryKpis: [
      {
        name: 'PROJECT VALUE',
        value: '₹ 3,400 Cr',
        prevValue: '₹ 2,780 Cr',
        change: '▲ 22.1%',
        isPositive: true,
        status: 'GOOD',
        context: 'Smart tolling corridors expanding',
        trendData: [{ q: 'Q1', val: 2780 }, { q: 'Q2', val: 2950 }, { q: 'Q3', val: 3180 }, { q: 'Q4', val: 3400 }]
      },
      {
        name: 'REVENUE (YTD)',
        value: '₹ 3,450 Cr',
        prevValue: '₹ 3,160 Cr',
        change: '▲ 9.2%',
        isPositive: true,
        status: 'GOOD',
        context: 'Port container volumes up +14%',
        trendData: [{ q: 'Q1', val: 780 }, { q: 'Q2', val: 840 }, { q: 'Q3', val: 890 }, { q: 'Q4', val: 940 }]
      },
      {
        name: 'YOY GROWTH',
        value: '9.2%',
        prevValue: '12.4%',
        change: '▼ 3.2pp',
        isPositive: false,
        status: 'WATCH',
        context: 'Schedule slips bottlenecking revenue billing',
        trendData: [{ q: 'Q1', val: 12.4 }, { q: 'Q2', val: 11.2 }, { q: 'Q3', val: 10.1 }, { q: 'Q4', val: 9.2 }]
      },
      {
        name: 'ACTIVE PROJECTS',
        value: '6 Projects',
        prevValue: '6 Projects',
        change: '—',
        isPositive: true,
        status: 'ATTENTION',
        context: '2 coastal expressway bridges delayed',
        trendData: [{ q: 'Q1', val: 6 }, { q: 'Q2', val: 6 }, { q: 'Q3', val: 6 }, { q: 'Q4', val: 6 }]
      },
      {
        name: 'COMPLETION %',
        value: '54.0%',
        prevValue: '48.0%',
        change: '▲ 6.0pp',
        isPositive: true,
        status: 'CRITICAL',
        context: 'SLA milestone slip on Coastal Highway',
        trendData: [{ q: 'Q1', val: 48.0 }, { q: 'Q2', val: 50.1 }, { q: 'Q3', val: 52.0 }, { q: 'Q4', val: 54.0 }]
      },
      {
        name: 'PIPELINE',
        value: '₹ 8,200 Cr',
        prevValue: '₹ 6,400 Cr',
        change: '▲ 28.1%',
        isPositive: true,
        status: 'GOOD',
        context: 'National Highway corridor tenders',
        trendData: [{ q: 'Q1', val: 6400 }, { q: 'Q2', val: 7000 }, { q: 'Q3', val: 7600 }, { q: 'Q4', val: 8200 }]
      }
    ],

    chartData: [
      { quarter: 'Q1 FY26', revenue: 780, margin: 19.1, ebitda: 149, groupShare: 14.2 },
      { quarter: 'Q2 FY26', revenue: 840, margin: 19.4, ebitda: 163, groupShare: 14.1 },
      { quarter: 'Q3 FY26', revenue: 890, margin: 19.6, ebitda: 174, groupShare: 14.0 },
      { quarter: 'Q4 FY26 (E)', revenue: 940, margin: 19.8, ebitda: 186, groupShare: 13.9 }
    ],

    chartAnnotations: {
      revenue: 'Revenue recognition slowed due to monsoon construction halts',
      margin: 'Operating EBITDA margin held steady at 19.8%',
      contribution: 'Infrastructure accounts for 13.9% of Group YTD Revenue'
    },

    performanceDrivers: [
      {
        driver: 'Port Terminal TEU Volume Expansion',
        impactType: 'positive',
        relevantKpi: 'REVENUE',
        interpretation: 'Deepwater container port throughput increased to 2.4M TEU.'
      },
      {
        driver: 'Monsoon Flooding & Subcontractor Slip',
        impactType: 'negative',
        relevantKpi: 'COMPLETION % & YOY GROWTH',
        interpretation: 'Coastal super highway bridges delayed by 90 monsoon construction days.'
      }
    ],

    strategicHighlights: [
      'Smart tolling system digitized 99.4% of total highway transactions',
      'Port terminal container throughput reached record 2.4M TEU volume',
      'Submitted ₹ 8,200 Cr bid for National Highway Corridor Phase IV'
    ],

    ceoAttentionItems: [
      {
        issue: 'Coastal Super Expressway 2 Bridge Delays in Maharashtra',
        severity: 'Critical',
        financialImpact: 'Potential ₹ 420 Cr SLA penalty risk in Q4',
        businessImpact: 'Breach of Maharashtra State Highway Authority milestone contract',
        rootCause: 'Subcontractor piling rig failure & monsoon site inundation',
        recommendedAction: 'Convene CEO Steering Committee with Highway Authority and mobilize secondary contractor.'
      }
    ],

    risksAndExposure: [
      {
        risk: 'Schedule Slip Contract Penalty',
        severity: 'High',
        exposure: '₹ 420 Cr milestone exposure',
        impact: 'Deduction from final milestone billing certificate',
        probability: 'High (70%)',
        mitigation: 'Request official 90-day monsoon force-majeure extension from State Ministry.'
      }
    ],

    majorProjects: [
      {
        name: 'Coastal Super Expressway',
        location: 'Maharashtra',
        value: '₹ 2,400 Cr',
        progress: 54,
        status: 'DELAYED',
        completionDate: 'Q1 FY27',
        delayImpact: '₹ 420 Cr SLA penalty'
      },
      {
        name: 'Smart Deepwater Container Terminal',
        location: 'Chennai, Tamil Nadu',
        value: '₹ 1,100 Cr',
        progress: 48,
        status: 'DELAYED',
        completionDate: 'Q2 FY27',
        delayImpact: '₹ 80 Cr revenue delay'
      }
    ],

    pipeline: {
      totalValue: '₹ 8,200 Cr',
      opportunities: [
        {
          name: 'National Highway Transit Corridor Phase IV',
          potentialValue: '₹ 4,500 Cr',
          expectedGrowth: '+26.0%',
          strategicFit: 'ULTRA HIGH',
          confidence: '82%',
          timing: 'Q4 FY26',
          ceoAction: 'Submit final steering tender proposal.'
        }
      ]
    },

    operationalInsights: {
      'Expressway Corridors Managed': '1,420 km',
      'On-Time Delivery Index': '68.0% (Requires Action)',
      'Port Throughput Volume': '2.4M TEU Container',
      'Active Order Pipeline': '₹ 8,200 Cr',
      'Average Project Margin': '19.8%',
      'Financial SLA Exposure': '₹ 420 Cr Penalty'
    },

    recommendedFocus: 'Lead CEO Steering Committee meeting with Maharashtra Toll Authority to secure 90-day force-majeure extension for Coastal Super Expressway and prevent ₹ 420 Cr SLA penalty.'
  },

  'hospitality': {
    id: 'hospitality',
    name: 'HOSPITALITY',
    category: 'Luxury Resorts, Wellness & QSR Lifestyle',
    status: 'Watch',
    executiveSummary: 'Hospitality generated ₹ 1,840 Cr YTD (+13.1%) with strong RevPAR (+17.8%) and QSR same-store growth (+14.2%), while heritage resort occupancy compression requires marketing concierge restructuring.',
    lastUpdated: '01 SEP 2026 • 09:30 AM',
    portfolioContribution: '7.4% of Group Revenue',
    revenueVsLY: '₹ 1,627 Cr (+13.1%)',
    growthYoY: '13.1%',

    primaryKpis: [
      {
        name: 'REVENUE (YTD)',
        value: '₹ 1,840 Cr',
        prevValue: '₹ 1,627 Cr',
        change: '▲ 13.1%',
        isPositive: true,
        status: 'GOOD',
        context: 'QSR expansion & luxury RevPAR growth',
        trendData: [{ q: 'Q1', val: 410 }, { q: 'Q2', val: 440 }, { q: 'Q3', val: 480 }, { q: 'Q4', val: 510 }]
      },
      {
        name: 'YOY GROWTH',
        value: '13.1%',
        prevValue: '11.5%',
        change: '▲ 1.6pp',
        isPositive: true,
        status: 'GOOD',
        context: 'QSR same-store sales +14.2%',
        trendData: [{ q: 'Q1', val: 11.5 }, { q: 'Q2', val: 12.1 }, { q: 'Q3', val: 12.8 }, { q: 'Q4', val: 13.1 }]
      },
      {
        name: 'PROPERTIES / OUTLETS',
        value: '90 Outlets',
        prevValue: '72 Outlets',
        change: '▲ 18',
        isPositive: true,
        status: 'GOOD',
        context: '85 QSR stores + 5 luxury resorts',
        trendData: [{ q: 'Q1', val: 72 }, { q: 'Q2', val: 78 }, { q: 'Q3', val: 84 }, { q: 'Q4', val: 90 }]
      },
      {
        name: 'OCCUPANCY RATE',
        value: '68.4%',
        prevValue: '72.6%',
        change: '▼ 4.2pp',
        isPositive: false,
        status: 'WATCH',
        context: 'Heritage resort off-season compression',
        trendData: [{ q: 'Q1', val: 72.6 }, { q: 'Q2', val: 71.0 }, { q: 'Q3', val: 69.5 }, { q: 'Q4', val: 68.4 }]
      },
      {
        name: 'REVENUE / PROPERTY',
        value: '₹ 18.5 Lacs',
        prevValue: '₹ 15.7 Lacs',
        change: '▲ 17.8%',
        isPositive: true,
        status: 'GOOD',
        context: 'RevPAR increased to ₹ 12,650/key',
        trendData: [{ q: 'Q1', val: 15.7 }, { q: 'Q2', val: 16.8 }, { q: 'Q3', val: 17.6 }, { q: 'Q4', val: 18.5 }]
      },
      {
        name: 'OPERATING MARGIN',
        value: '21.5%',
        prevValue: '20.8%',
        change: '▲ 0.7pp',
        isPositive: true,
        status: 'GOOD',
        context: 'QSR food cost disciplined at 28.2%',
        trendData: [{ q: 'Q1', val: 20.8 }, { q: 'Q2', val: 21.0 }, { q: 'Q3', val: 21.3 }, { q: 'Q4', val: 21.5 }]
      }
    ],

    chartData: [
      { quarter: 'Q1 FY26', revenue: 410, margin: 20.8, ebitda: 85, groupShare: 7.2 },
      { quarter: 'Q2 FY26', revenue: 440, margin: 21.0, ebitda: 92, groupShare: 7.3 },
      { quarter: 'Q3 FY26', revenue: 480, margin: 21.3, ebitda: 102, groupShare: 7.4 },
      { quarter: 'Q4 FY26 (E)', revenue: 510, margin: 21.5, ebitda: 110, groupShare: 7.4 }
    ],

    chartAnnotations: {
      revenue: 'RevPAR expansion offset off-season occupancy softness',
      margin: 'QSR store margin expanded to 22.4%',
      contribution: 'Hospitality provides 7.4% of total Group YTD Revenue'
    },

    performanceDrivers: [
      {
        driver: 'QSR Fast Casual Store Expansion',
        impactType: 'positive',
        relevantKpi: 'REVENUE & YOY GROWTH',
        interpretation: 'Opened 18 new stores with +14.2% same-store sales growth.'
      },
      {
        driver: 'Off-Season Heritage Resort Softness',
        impactType: 'negative',
        relevantKpi: 'OCCUPANCY RATE',
        interpretation: 'RevPAR down ₹ 1,400 across Udaipur and Rajasthan palace properties.'
      }
    ],

    strategicHighlights: [
      'RevPAR expanded by +17.8% across luxury resort portfolio',
      'QSR fast-casual sub-vertical added 18 high-performing new stores',
      'Aspect Sanctuary Maldives named Top 10 Luxury Island Resort'
    ],

    ceoAttentionItems: [
      {
        issue: 'Heritage Resort Occupancy Pressure Down 4.2pp',
        severity: 'Watch',
        financialImpact: '₹ 28 Cr seasonal revenue compression',
        businessImpact: 'Palace resort operating margin compressed by 2.1%',
        rootCause: 'Lagging digital marketing concierge campaigns in European markets',
        recommendedAction: 'Approve marketing concierge restructuring & luxury travel partnership.'
      }
    ],

    risksAndExposure: [
      {
        risk: 'International Travel Demand Fluctuations',
        severity: 'Low',
        exposure: '₹ 35 Cr RevPAR exposure',
        impact: 'Luxury resort booking lead times shortening',
        probability: 'Moderate (35%)',
        mitigation: 'Expand domestic luxury weekend getaway packages.'
      }
    ],

    majorProjects: [
      {
        name: 'Aspect Sanctuary Maldives',
        location: 'Maldives',
        value: '₹ 750 Cr',
        progress: 86,
        status: 'ON TRACK',
        completionDate: 'Q4 FY26'
      },
      {
        name: 'Royal Heritage Palace Resort',
        location: 'Udaipur, Rajasthan',
        value: '₹ 420 Cr',
        progress: 94,
        status: 'ON TRACK',
        completionDate: 'Completed'
      }
    ],

    pipeline: {
      totalValue: '₹ 1,800 Cr',
      opportunities: [
        {
          name: 'QSR Fast-Casual 50-Store Expansion',
          potentialValue: '₹ 650 Cr',
          expectedGrowth: '+28.0%',
          strategicFit: 'HIGH',
          confidence: '92%',
          timing: 'Q4 FY26',
          ceoAction: 'Authorize store rollout capex.'
        }
      ]
    },

    operationalInsights: {
      'Keys Inventory': '2,850 Luxury Keys',
      'Resort Occupancy Rate': '68.4%',
      'Average Daily Rate (ADR)': '₹ 18,500 / night',
      'RevPAR Growth': '17.8% YoY',
      'QSR Same Store Growth': '+14.2% (85 Stores)',
      'Customer Satisfaction': '4.85 / 5.0 Rating'
    },

    recommendedFocus: 'Execute marketing concierge restructuring for Rajasthan heritage resorts to restore occupancy above 74% while rolling out 18 new QSR fast-casual stores.'
  },

  'energy': {
    id: 'energy',
    name: 'ENERGY',
    category: 'Renewable Power & Hydrogen Technology',
    status: 'Healthy',
    executiveSummary: 'Energy delivered ₹ 4,280 Cr (+18.4%) with 4.8 GW clean capacity and 31.2% EBITDA margin, positioning the solar megapark expansion in Rajasthan as a top Group value creator.',
    lastUpdated: '01 SEP 2026 • 09:30 AM',
    portfolioContribution: '17.2% of Group Revenue',
    revenueVsLY: '₹ 3,615 Cr (+18.4%)',
    growthYoY: '18.4%',

    primaryKpis: [
      {
        name: 'REVENUE (YTD)',
        value: '₹ 4,280 Cr',
        prevValue: '₹ 3,615 Cr',
        change: '▲ 18.4%',
        isPositive: true,
        status: 'GOOD',
        context: '1.2 GW Rajasthan solar park commissioned',
        trendData: [{ q: 'Q1', val: 950 }, { q: 'Q2', val: 1030 }, { q: 'Q3', val: 1120 }, { q: 'Q4', val: 1180 }]
      },
      {
        name: 'YOY GROWTH',
        value: '18.4%',
        prevValue: '15.2%',
        change: '▲ 3.2pp',
        isPositive: true,
        status: 'GOOD',
        context: 'Clean grid generation +24.8%',
        trendData: [{ q: 'Q1', val: 15.2 }, { q: 'Q2', val: 16.4 }, { q: 'Q3', val: 17.5 }, { q: 'Q4', val: 18.4 }]
      },
      {
        name: 'INSTALLED CAPACITY',
        value: '4.8 GW',
        prevValue: '3.6 GW',
        change: '▲ 1.2 GW',
        isPositive: true,
        status: 'GOOD',
        context: 'Solar & wind clean grid capacity',
        trendData: [{ q: 'Q1', val: 3.6 }, { q: 'Q2', val: 4.0 }, { q: 'Q3', val: 4.4 }, { q: 'Q4', val: 4.8 }]
      },
      {
        name: 'OPERATIONAL CAPACITY',
        value: '4.2 GW',
        prevValue: '3.4 GW',
        change: '▲ 0.8 GW',
        isPositive: true,
        status: 'GOOD',
        context: 'CUF sustained at 26.8%',
        trendData: [{ q: 'Q1', val: 3.4 }, { q: 'Q2', val: 3.7 }, { q: 'Q3', val: 3.9 }, { q: 'Q4', val: 4.2 }]
      },
      {
        name: 'GENERATION (YTD)',
        value: '8,400 GWh',
        prevValue: '6,730 GWh',
        change: '▲ 24.8%',
        isPositive: true,
        status: 'GOOD',
        context: '6.2M tons CO2 offset generated',
        trendData: [{ q: 'Q1', val: 1800 }, { q: 'Q2', val: 2050 }, { q: 'Q3', val: 2200 }, { q: 'Q4', val: 2350 }]
      },
      {
        name: 'PIPELINE',
        value: '₹ 5,300 Cr',
        prevValue: '₹ 4,100 Cr',
        change: '▲ 29.2%',
        isPositive: true,
        status: 'GOOD',
        context: 'Rajasthan Solar Expansion Phase III',
        trendData: [{ q: 'Q1', val: 4100 }, { q: 'Q2', val: 4500 }, { q: 'Q3', val: 4900 }, { q: 'Q4', val: 5300 }]
      }
    ],

    chartData: [
      { quarter: 'Q1 FY26', revenue: 950, margin: 30.5, ebitda: 290, groupShare: 16.5 },
      { quarter: 'Q2 FY26', revenue: 1030, margin: 30.8, ebitda: 317, groupShare: 16.8 },
      { quarter: 'Q3 FY26', revenue: 1120, margin: 31.0, ebitda: 347, groupShare: 17.0 },
      { quarter: 'Q4 FY26 (E)', revenue: 1180, margin: 31.2, ebitda: 368, groupShare: 17.2 }
    ],

    chartAnnotations: {
      revenue: 'Clean energy generation surpassed 8,400 GWh annual landmark',
      margin: 'EBITDA margin reached 31.2%—highest operational efficiency in Group',
      contribution: 'Energy provides 17.2% of total Group YTD Revenue'
    },

    performanceDrivers: [
      {
        driver: 'Rajasthan 1.2 GW Solar Park Commissioning',
        impactType: 'positive',
        relevantKpi: 'REVENUE & GENERATION',
        interpretation: 'On-time grid synchronization added ₹ 3,100 Cr top-line acceleration.'
      },
      {
        driver: 'Green Hydrogen Pilot 99.9% Purity Benchmark',
        impactType: 'positive',
        relevantKpi: 'EBITDA MARGIN',
        interpretation: 'Pilot plant unlocked government green subsidy premium.'
      }
    ],

    strategicHighlights: [
      'Commissioned 1.2 GW Ultra Solar Park in Jaisalmer, Rajasthan',
      'Green Hydrogen pilot plant achieved 99.9% purity output benchmark',
      'Annual CO2 emissions offset reached 6.2M tons CO2e'
    ],

    ceoAttentionItems: [
      {
        issue: 'State Grid Substation Interconnection Queue Bottleneck',
        severity: 'Opportunity',
        financialImpact: '₹ 3,100 Cr YTD top-line acceleration',
        businessImpact: 'Adds 1.2 GW clean grid capacity to Rajasthan grid',
        rootCause: 'Substation bay allocation awaiting State Power Corporation signoff',
        recommendedAction: 'Approve capital allocation for Rajasthan grid substation bay expansion.'
      }
    ],

    risksAndExposure: [
      {
        risk: 'Transmission Line Grid Curtailment Risk',
        severity: 'Medium',
        exposure: '₹ 45 Cr generation loss risk',
        impact: 'Peak-hour solar curtailment in Rajasthan grid corridor',
        probability: 'Low (20%)',
        mitigation: 'Install 500 MWh grid-scale battery storage system.'
      }
    ],

    majorProjects: [
      {
        name: 'Rajasthan Solar Mega-Park Phase II',
        location: 'Jaisalmer, Rajasthan',
        value: '₹ 3,100 Cr',
        progress: 96,
        status: 'ON TRACK',
        completionDate: 'Completed'
      },
      {
        name: 'Offshore Wind Generation Phase I',
        location: 'Tamil Nadu',
        value: '₹ 2,200 Cr',
        progress: 71,
        status: 'ON TRACK',
        completionDate: 'Q2 FY27'
      }
    ],

    pipeline: {
      totalValue: '₹ 5,300 Cr',
      opportunities: [
        {
          name: 'Solar Megapark Expansion in Rajasthan Phase III',
          potentialValue: '₹ 3,100 Cr',
          expectedGrowth: '+28.0%',
          strategicFit: 'ULTRA HIGH',
          confidence: '94%',
          timing: 'Q4 FY26',
          ceoAction: 'Approve capital allocation signoff.'
        }
      ]
    },

    operationalInsights: {
      'Installed Clean Capacity': '4.8 GW Solar & Wind',
      'Operational Capacity': '4.2 GW Active',
      'Capacity Utilization (CUF)': '26.8% (Solar Leader)',
      'Annual Generation Volume': '8,400 GWh',
      'CO2 Offset Generated': '6.2M Tons CO2e',
      'Green Hydrogen Purity': '99.9% Pure'
    },

    recommendedFocus: 'Approve capital allocation for Rajasthan Solar Megapark Phase III expansion to unlock ₹ 3,100 Cr additional top-line revenue.'
  },

  'entertainment': {
    id: 'entertainment',
    name: 'ENTERTAINMENT',
    category: 'Media, Film Studios & Immersive AR/VR',
    status: 'Healthy',
    executiveSummary: 'Entertainment surged +22.1% (₹ 1,250 Cr) powered by record studio box office and digital IP library valuation exceeding ₹ 2,100 Cr, while Dubai immersive theme park expansion remains on schedule.',
    lastUpdated: '01 SEP 2026 • 09:30 AM',
    portfolioContribution: '5.0% of Group Revenue',
    revenueVsLY: '₹ 1,023 Cr (+22.1%)',
    growthYoY: '22.1%',

    primaryKpis: [
      {
        name: 'REVENUE (YTD)',
        value: '₹ 1,250 Cr',
        prevValue: '₹ 1,023 Cr',
        change: '▲ 22.1%',
        isPositive: true,
        status: 'GOOD',
        context: 'Box office & IP licensing records',
        trendData: [{ q: 'Q1', val: 280 }, { q: 'Q2', val: 305 }, { q: 'Q3', val: 325 }, { q: 'Q4', val: 340 }]
      },
      {
        name: 'YOY GROWTH',
        value: '22.1%',
        prevValue: '16.8%',
        change: '▲ 5.3pp',
        isPositive: true,
        status: 'GOOD',
        context: 'Streaming audience reached 180M+',
        trendData: [{ q: 'Q1', val: 16.8 }, { q: 'Q2', val: 18.2 }, { q: 'Q3', val: 20.4 }, { q: 'Q4', val: 22.1 }]
      },
      {
        name: 'EBITDA',
        value: '₹ 255 Cr',
        prevValue: '₹ 198 Cr',
        change: '▲ 28.8%',
        isPositive: true,
        status: 'GOOD',
        context: 'Digital IP licensing high margin',
        trendData: [{ q: 'Q1', val: 52 }, { q: 'Q2', val: 61 }, { q: 'Q3', val: 68 }, { q: 'Q4', val: 74 }]
      },
      {
        name: 'PROJECT MARGIN',
        value: '20.4%',
        prevValue: '19.4%',
        change: '▲ 1.0pp',
        isPositive: true,
        status: 'GOOD',
        context: 'Virtual production cost savings',
        trendData: [{ q: 'Q1', val: 19.4 }, { q: 'Q2', val: 19.8 }, { q: 'Q3', val: 20.1 }, { q: 'Q4', val: 20.4 }]
      },
      {
        name: 'ACTIVE PROJECTS',
        value: '4 Studios',
        prevValue: '3 Studios',
        change: '▲ 1',
        isPositive: true,
        status: 'GOOD',
        context: '18 active film & AR/VR projects',
        trendData: [{ q: 'Q1', val: 3 }, { q: 'Q2', val: 3 }, { q: 'Q3', val: 4 }, { q: 'Q4', val: 4 }]
      },
      {
        name: 'PIPELINE',
        value: '₹ 3,800 Cr',
        prevValue: '₹ 2,900 Cr',
        change: '▲ 31.0%',
        isPositive: true,
        status: 'GOOD',
        context: 'Dubai Immersive Theme Park Expansion',
        trendData: [{ q: 'Q1', val: 2900 }, { q: 'Q2', val: 3200 }, { q: 'Q3', val: 3500 }, { q: 'Q4', val: 3800 }]
      }
    ],

    chartData: [
      { quarter: 'Q1 FY26', revenue: 280, margin: 19.4, ebitda: 52, groupShare: 4.8 },
      { quarter: 'Q2 FY26', revenue: 305, margin: 19.8, ebitda: 61, groupShare: 4.9 },
      { quarter: 'Q3 FY26', revenue: 325, margin: 20.1, ebitda: 68, groupShare: 5.0 },
      { quarter: 'Q4 FY26 (E)', revenue: 340, margin: 20.4, ebitda: 74, groupShare: 5.0 }
    ],

    chartAnnotations: {
      revenue: 'Film franchise releases set regional box office records',
      margin: 'VFX & AI virtual production reduced live studio shoot costs',
      contribution: 'Entertainment represents 5.0% of total Group YTD Revenue'
    },

    performanceDrivers: [
      {
        driver: 'Digital IP Streaming Library Monetization',
        impactType: 'positive',
        relevantKpi: 'REVENUE & EBITDA',
        interpretation: 'Content library value surpassed ₹ 2,100 Cr with 180M+ global viewers.'
      }
    ],

    strategicHighlights: [
      'Box office collection broke regional franchise historical records',
      'Immersive AR/VR dome theme park welcomed 1.8M guests in Dubai',
      'Digital content IP library valuation surpassed ₹ 2,100 Cr milestone'
    ],

    ceoAttentionItems: [
      {
        issue: 'Dubai Theme Park Ride Supplier Shipping Delay',
        severity: 'Watch',
        financialImpact: '₹ 25 Cr opening ceremony delay cost',
        businessImpact: 'Soft launch date pushed back by 30 days',
        rootCause: 'Red Sea port container transit congestion',
        recommendedAction: 'Authorize air freight charter for key VR motion sensors.'
      }
    ],

    risksAndExposure: [
      {
        risk: 'Box Office Volatility on Non-Franchise Releases',
        severity: 'Low',
        exposure: '₹ 40 Cr production risk',
        impact: 'Opening weekend theatrical receipts variation',
        probability: 'Moderate (40%)',
        mitigation: 'Pre-sell OTT streaming rights prior to theatrical release.'
      }
    ],

    majorProjects: [
      {
        name: 'Aspect Immersive Theme Park',
        location: 'Dubai, UAE',
        value: '₹ 980 Cr',
        progress: 89,
        status: 'ON TRACK',
        completionDate: 'Q4 FY26'
      },
      {
        name: 'VFX & AI Virtual Production Studio',
        location: 'Mumbai, Maharashtra',
        value: '₹ 340 Cr',
        progress: 98,
        status: 'ON TRACK',
        completionDate: 'Completed'
      }
    ],

    pipeline: {
      totalValue: '₹ 3,800 Cr',
      opportunities: [
        {
          name: 'Global AR/VR Theme Park Franchise Expansion',
          potentialValue: '₹ 1,500 Cr',
          expectedGrowth: '+35.0%',
          strategicFit: 'HIGH',
          confidence: '88%',
          timing: 'Q1 FY27',
          ceoAction: 'Sign master licensing agreement.'
        }
      ]
    },

    operationalInsights: {
      'Global Viewership': '180M+ Viewers',
      'VR Park Visitors': '1.8M Guests YTD',
      'Digital Library IP Value': '₹ 2,100 Cr',
      'On-Time Delivery Rate': '96.5%',
      'Average Project Margin': '20.4%',
      'Client Retention Index': '92.0%'
    },

    recommendedFocus: 'Monetize digital content library IP while approving air freight for Dubai theme park VR sensors to ensure Q4 grand opening.'
  },

  'sports': {
    id: 'sports',
    name: 'SPORTS',
    category: 'Franchises, Arenas & Sports Tech',
    status: 'Healthy',
    executiveSummary: 'Sports achieved ₹ 932 Cr YTD (+28.6%) following National Championship victory, unlocking a 42% increase in commercial sponsorship values and stadium naming rights.',
    lastUpdated: '01 SEP 2026 • 09:30 AM',
    portfolioContribution: '3.7% of Group Revenue',
    revenueVsLY: '₹ 725 Cr (+28.6%)',
    growthYoY: '28.6%',

    primaryKpis: [
      {
        name: 'REVENUE (YTD)',
        value: '₹ 932 Cr',
        prevValue: '₹ 725 Cr',
        change: '▲ 28.6%',
        isPositive: true,
        status: 'GOOD',
        context: 'Championship victory & sponsorship',
        trendData: [{ q: 'Q1', val: 190 }, { q: 'Q2', val: 220 }, { q: 'Q3', val: 250 }, { q: 'Q4', val: 272 }]
      },
      {
        name: 'SPONSORSHIP VALUE',
        value: '₹ 340 Cr',
        prevValue: '₹ 240 Cr',
        change: '▲ 41.7%',
        isPositive: true,
        status: 'GOOD',
        context: 'Commercial sponsorship +42%',
        trendData: [{ q: 'Q1', val: 240 }, { q: 'Q2', val: 275 }, { q: 'Q3', val: 310 }, { q: 'Q4', val: 340 }]
      },
      {
        name: 'COMMERCIAL GROWTH',
        value: '28.6%',
        prevValue: '20.4%',
        change: '▲ 8.2pp',
        isPositive: true,
        status: 'GOOD',
        context: 'Broadcast rights renewal surging',
        trendData: [{ q: 'Q1', val: 20.4 }, { q: 'Q2', val: 23.1 }, { q: 'Q3', val: 26.0 }, { q: 'Q4', val: 28.6 }]
      },
      {
        name: 'FAN BASE',
        value: '28.4M',
        prevValue: '21.0M',
        change: '▲ 35.2%',
        isPositive: true,
        status: 'GOOD',
        context: '4.2M paid fan club members',
        trendData: [{ q: 'Q1', val: 21.0 }, { q: 'Q2', val: 23.5 }, { q: 'Q3', val: 26.0 }, { q: 'Q4', val: 28.4 }]
      },
      {
        name: 'EVENTS & GAMES',
        value: '7 Titles',
        prevValue: '5 Titles',
        change: '▲ 2',
        isPositive: true,
        status: 'GOOD',
        context: 'Win rate 72.4% across leagues',
        trendData: [{ q: 'Q1', val: 5 }, { q: 'Q2', val: 5 }, { q: 'Q3', val: 6 }, { q: 'Q4', val: 7 }]
      },
      {
        name: 'PERFORMANCE',
        value: '72.4% Win',
        prevValue: '66.0%',
        change: '▲ 6.4pp',
        isPositive: true,
        status: 'GOOD',
        context: 'Aspect Titans National Champions',
        trendData: [{ q: 'Q1', val: 66.0 }, { q: 'Q2', val: 68.2 }, { q: 'Q3', val: 70.5 }, { q: 'Q4', val: 72.4 }]
      }
    ],

    chartData: [
      { quarter: 'Q1 FY26', revenue: 190, margin: 26.0, ebitda: 49, groupShare: 3.5 },
      { quarter: 'Q2 FY26', revenue: 220, margin: 26.3, ebitda: 58, groupShare: 3.6 },
      { quarter: 'Q3 FY26', revenue: 250, margin: 26.5, ebitda: 66, groupShare: 3.7 },
      { quarter: 'Q4 FY26 (E)', revenue: 272, margin: 26.8, ebitda: 73, groupShare: 3.7 }
    ],

    chartAnnotations: {
      revenue: 'Sponsorship and ticket sales surged after National Title victory',
      margin: 'Broadcast licensing generated 26.8% EBITDA margin',
      contribution: 'Sports accounts for 3.7% of total Group YTD Revenue'
    },

    performanceDrivers: [
      {
        driver: 'National Championship Victory',
        impactType: 'positive',
        relevantKpi: 'REVENUE & SPONSORSHIP',
        interpretation: 'Trophy victory unlocked 40%+ renewal rate on commercial deals.'
      }
    ],

    strategicHighlights: [
      'Aspect Titans franchise won National Championship title',
      'Broadcast rights valuation increased by +42.0% YoY',
      'Sports Tech academy enrolled 600 Olympic hopeful athletes'
    ],

    ceoAttentionItems: [
      {
        issue: 'Smart Arena Stadium Concession Lease Renewal',
        severity: 'Watch',
        financialImpact: '₹ 18 Cr annual rental upside',
        businessImpact: 'Food & beverage vendor lease renegotiation',
        rootCause: 'Contract expiration after 5-year initial tenure',
        recommendedAction: 'Execute competitive tender for luxury VIP suite catering.'
      }
    ],

    risksAndExposure: [
      {
        risk: 'Key Player Injury Exposure',
        severity: 'Low',
        exposure: '₹ 20 Cr performance bonus risk',
        impact: 'Roster depth during playoff elimination games',
        probability: 'Low (15%)',
        mitigation: 'Insure top player contracts with Lloyd’s sports underwriters.'
      }
    ],

    majorProjects: [
      {
        name: 'Aspect Smart Arena Stadium',
        location: 'Ahmedabad, Gujarat',
        value: '₹ 1,450 Cr',
        progress: 90,
        status: 'ON TRACK',
        completionDate: 'Q4 FY26'
      }
    ],

    pipeline: {
      totalValue: '₹ 3,200 Cr',
      opportunities: [
        {
          name: 'Broadcast & OTT Streaming Rights Renewal',
          potentialValue: '₹ 1,450 Cr',
          expectedGrowth: '+42.0%',
          strategicFit: 'HIGH',
          confidence: '95%',
          timing: 'Q4 FY26',
          ceoAction: 'Sign 5-year exclusive broadcast contract.'
        }
      ]
    },

    operationalInsights: {
      'Stadium Capacity': '85,000 Seats',
      'Franchise Win Rate': '72.4% Championship',
      'Broadcast Rights Value': '₹ 1,450 Cr',
      'Fan Base Membership': '28.4M Total Fans',
      'Commercial Sponsorship': '+42.0% Growth',
      'Sports Tech Athletes': '600 Enrolled'
    },

    recommendedFocus: 'Leverage National Championship victory to finalize the ₹ 1,450 Cr broadcast rights renewal while completing VIP suite lease tenders for Aspect Smart Arena.'
  },

  'foundation': {
    id: 'foundation',
    name: 'FOUNDATION',
    category: 'Social Impact, Education & Philanthropy',
    status: 'Healthy',
    executiveSummary: 'Foundation impacted 2.4M beneficiaries with an 84.6% achievement score across 32 active programs, maintaining 91.2% funds utilization across 14 states.',
    lastUpdated: '01 SEP 2026 • 09:30 AM',
    portfolioContribution: 'Social Impact Philanthropy',
    revenueVsLY: '₹ 756 Cr (+12.4%)',
    growthYoY: '12.4%',

    primaryKpis: [
      {
        name: 'IMPACT SCORE',
        value: '84.6 / 100',
        prevValue: '80.5 / 100',
        change: '▲ 4.1 pts',
        isPositive: true,
        status: 'GOOD',
        context: 'Global social impact assessment',
        trendData: [{ q: 'Q1', val: 80.5 }, { q: 'Q2', val: 81.8 }, { q: 'Q3', val: 83.2 }, { q: 'Q4', val: 84.6 }]
      },
      {
        name: 'BENEFICIARIES',
        value: '2.4M',
        prevValue: '2.0M',
        change: '▲ 20.0%',
        isPositive: true,
        status: 'GOOD',
        context: 'Rural STEM & healthcare outreach',
        trendData: [{ q: 'Q1', val: 2.0 }, { q: 'Q2', val: 2.1 }, { q: 'Q3', val: 2.3 }, { q: 'Q4', val: 2.4 }]
      },
      {
        name: 'IMPACT ACHIEVEMENT',
        value: '84.6%',
        prevValue: '80.5%',
        change: '▲ 4.1pp',
        isPositive: true,
        status: 'GOOD',
        context: 'Clean water in 85 villages',
        trendData: [{ q: 'Q1', val: 80.5 }, { q: 'Q2', val: 81.8 }, { q: 'Q3', val: 83.2 }, { q: 'Q4', val: 84.6 }]
      },
      {
        name: 'PROGRAMS',
        value: '32 Programs',
        prevValue: '27 Programs',
        change: '▲ 5',
        isPositive: true,
        status: 'GOOD',
        context: '18 STEM learning centers',
        trendData: [{ q: 'Q1', val: 27 }, { q: 'Q2', val: 28 }, { q: 'Q3', val: 30 }, { q: 'Q4', val: 32 }]
      },
      {
        name: 'REACH',
        value: '14 States',
        prevValue: '12 States',
        change: '▲ 2',
        isPositive: true,
        status: 'GOOD',
        context: 'Expanded into East India',
        trendData: [{ q: 'Q1', val: 12 }, { q: 'Q2', val: 12 }, { q: 'Q3', val: 13 }, { q: 'Q4', val: 14 }]
      },
      {
        name: 'FUNDS UTILIZATION',
        value: '91.2%',
        prevValue: '87.8%',
        change: '▲ 3.4pp',
        isPositive: true,
        status: 'GOOD',
        context: 'Audit compliance score 98.4%',
        trendData: [{ q: 'Q1', val: 87.8 }, { q: 'Q2', val: 89.0 }, { q: 'Q3', val: 90.1 }, { q: 'Q4', val: 91.2 }]
      }
    ],

    chartData: [
      { quarter: 'Q1 FY26', revenue: 180, margin: 87.8, ebitda: 158, groupShare: 2.0 },
      { quarter: 'Q2 FY26', revenue: 200, margin: 89.0, ebitda: 178, groupShare: 2.1 },
      { quarter: 'Q3 FY26', revenue: 220, margin: 90.1, ebitda: 198, groupShare: 2.3 },
      { quarter: 'Q4 FY26 (E)', revenue: 250, margin: 91.2, ebitda: 228, groupShare: 2.4 }
    ],

    chartAnnotations: {
      revenue: 'Beneficiary reach expanded to 2.4 million individuals',
      margin: 'Funds utilization efficiency reached 91.2%',
      contribution: 'Foundation delivers social ESG value across 14 States'
    },

    performanceDrivers: [
      {
        driver: 'Rural STEM Learning Center Rollout',
        impactType: 'positive',
        relevantKpi: 'BENEFICIARIES & IMPACT',
        interpretation: 'Opened 18 centers providing digital education to 450,000 students.'
      }
    ],

    strategicHighlights: [
      'Opened 18 new rural STEM digital learning centers across 14 states',
      'Healthcare outreach covered 450,000 underserved families',
      'Clean water infrastructure installed across 85 rural villages'
    ],

    ceoAttentionItems: [
      {
        issue: 'State Educational Land Allotment Signoff for Global Health Hub',
        severity: 'Watch',
        financialImpact: '₹ 320 Cr social project timeline slip',
        businessImpact: 'Groundbreaking deferred by 30 days in Mumbai campus',
        rootCause: 'Municipal urban planning zoning approval review',
        recommendedAction: 'Sign joint memorandum with State Health Department.'
      }
    ],

    risksAndExposure: [
      {
        risk: 'Subcontractor Audit Compliance Slip in Rural Sites',
        severity: 'Low',
        exposure: '₹ 12 Cr grant compliance risk',
        impact: 'Documentation delay for annual ESG impact report',
        probability: 'Low (10%)',
        mitigation: 'Deploy mobile digital auditing app for field officers.'
      }
    ],

    majorProjects: [
      {
        name: 'Apex Education Campus',
        location: 'Bengaluru, Karnataka',
        value: '₹ 180 Cr',
        progress: 92,
        status: 'ON TRACK',
        completionDate: 'Q4 FY26'
      },
      {
        name: 'Global Health Hub',
        location: 'Mumbai, Maharashtra',
        value: '₹ 320 Cr',
        progress: 78,
        status: 'WATCH',
        completionDate: 'Q1 FY27'
      }
    ],

    pipeline: {
      totalValue: '₹ 1,800 Cr Impact Fund',
      opportunities: [
        {
          name: 'Rural STEM Center Phase III Expansion',
          potentialValue: '₹ 500 Cr',
          expectedGrowth: '+30.0%',
          strategicFit: 'ULTRA HIGH',
          confidence: '98%',
          timing: 'Q4 FY26',
          ceoAction: 'Approve Foundation grant allocation.'
        }
      ]
    },

    operationalInsights: {
      'Beneficiaries Impacted': '2.4M Individuals',
      'Active Impact Programs': '32 Initiatives',
      'Funds Utilization Rate': '91.2% High Efficiency',
      'Cost per Beneficiary': '₹ 3,540 / person',
      'Healthcare Coverage': '450,000 Families',
      'STEM Schools Built': '18 Centers'
    },

    recommendedFocus: 'Expand STEM rural learning centers to reach 3.0M beneficiaries by Q4 while maintaining funds utilization rate above 91%.'
  }
};
