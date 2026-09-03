import { DASHBOARD_OVERVIEW, AI_INSIGHTS, BOTTOM_KPI_CARDS, MOCK_AI_RESPONSES } from '../data/mockData';

export const dashboardService = {
  getOverview: async () => {
    return DASHBOARD_OVERVIEW;
  },
  getAIInsights: async () => {
    return AI_INSIGHTS;
  },
  getBottomKPIs: async () => {
    return BOTTOM_KPI_CARDS;
  },
  queryAI: async (query: string): Promise<string> => {
    await new Promise((res) => setTimeout(res, 600));
    const q = query.toLowerCase();
    if (q.includes('revenue') || q.includes('growth') || q.includes('profit')) {
      return MOCK_AI_RESPONSES.revenue;
    } else if (q.includes('alert') || q.includes('risk') || q.includes('warning')) {
      return MOCK_AI_RESPONSES.alerts;
    } else if (q.includes('energy') || q.includes('solar') || q.includes('wind')) {
      return MOCK_AI_RESPONSES.energy;
    } else if (q.includes('esg') || q.includes('sustainab') || q.includes('carbon')) {
      return MOCK_AI_RESPONSES.esg;
    }
    return MOCK_AI_RESPONSES.default;
  }
};
