export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  title: string;
  avatarUrl?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface SparklinePoint {
  val: number;
  label?: string;
}

export interface KPICardData {
  id: string;
  title: string;
  value: string;
  numericVal?: number;
  prefix?: string;
  suffix?: string;
  subtitle: string;
  change: string;
  isPositive: boolean;
  trendData: SparklinePoint[];
  type?: 'currency' | 'percentage' | 'count' | 'score';
}

export interface AIInsight {
  id: string;
  title: string;
  description: string;
  category: 'revenue' | 'warning' | 'opportunity' | 'optimization';
  iconType: 'trend' | 'alert' | 'target' | 'dollar';
  timestamp: string;
  businessId?: string;
  severity?: 'low' | 'medium' | 'high';
}

export interface CEOAttentionItem {
  id: string;
  businessName: string;
  issue: string;
  severity: 'Critical' | 'Attention' | 'Watch' | 'Opportunity';
  financialImpact: string;
  businessImpact: string;
  recommendedAction: string;
  businessId: string;
  impact?: string;
  actionRequired?: string;
  status?: string;
}

export interface ValueCreatorItem {
  id: string;
  businessName: string;
  revenue: string;
  growth: string;
  valueDriver: string;
  health: 'Healthy' | 'Watch' | 'Critical';
  businessId: string;
}

export interface WatchlistItem {
  id: string;
  businessName: string;
  issue: string;
  impact: string;
  status: 'Critical' | 'Attention' | 'Watch';
  businessId: string;
}

export interface OpportunityItem {
  id: string;
  businessName: string;
  opportunity: string;
  potentialValue: string;
  expectedGrowth: string;
  strategicFit: string;
  confidence: string;
  decisionRequired: string;
  businessId: string;
}

export interface BusinessProject {
  name: string;
  location: string;
  investment: string;
  completion: number;
  status: 'On Track' | 'Delayed' | 'Completed' | 'Review';
}

export interface QSRSubVerticalData {
  sameStoreSalesGrowth: string;
  ebitdaMargin: string;
  storeMargin: string;
  aov: string;
  repeatRate: string;
  salesPerStore: string;
  foodCostPct: string;
  laborCostPct: string;
  totalStores: number;
}

export interface EcosystemBusiness {
  id: string;
  name: string;
  category: string;
  revenue: string;
  growth: string;
  ebitdaMargin?: string;
  portfolioValue?: string;
  pipelineValue?: string;
  numericRevenue: number;
  numericGrowth: number;
  businessesCount: number;
  status: 'Healthy' | 'Warning' | 'Critical';
  description: string;
  keyMetricLabel: string;
  keyMetricValue: string;
  iconName: string;
  colorTheme: string;
  accentType: 'gold' | 'terracotta' | 'teal' | 'slate' | 'sage' | 'navy';
  isFeatured?: boolean;
  image3dUrl?: string;
  orbitAngle?: number;
  orbitRadius?: number;
  projects?: BusinessProject[];
  highlights?: string[];
  sparklineData?: SparklinePoint[];
  operationalMetrics?: Record<string, string>;
  qsrSubVertical?: QSRSubVerticalData;
  recommendedFocus?: string;
  tagline?: string;
}

export interface DashboardOverview {
  groupRevenue: string;
  revenueNumeric: number;
  revenueVsLY: string;
  revenueChangePct: number;

  yoyGrowth?: string;
  yoyGrowthNumeric?: number;
  yoyGrowthVsLY?: string;
  yoyGrowthDiff?: string;

  ebitdaMargin: string;
  ebitdaMarginNumeric: number;
  ebitdaVsLY: string;
  ebitdaChangeDiff: string;

  portfolioValue: string;
  portfolioValueNumeric: number;
  portfolioVsLY: string;
  portfolioChangePct: number;

  pipelineValue: string;
  pipelineNumeric: number;
  pipelineVsLY: string;
  pipelineChangePct: number;

  netCash: string;
  netCashNumeric: number;
  netCashVsLY: string;
  netCashChangePct: number;

  activeBusinesses?: number;
  totalBusinesses?: number;
  activeAlerts?: number;
  alertsDiff?: string;

  healthScore?: number;
  healthScoreVsLY?: number;
  sustainabilityScore?: number;
  sustainabilityVsLY?: number;
}
