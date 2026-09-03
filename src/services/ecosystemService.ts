import { ECOSYSTEM_BUSINESSES } from '../data/mockData';
import { EcosystemBusiness } from '../types';

export const ecosystemService = {
  getAllBusinesses: async (): Promise<EcosystemBusiness[]> => {
    return ECOSYSTEM_BUSINESSES;
  },
  getBusinessById: async (id: string): Promise<EcosystemBusiness | undefined> => {
    return ECOSYSTEM_BUSINESSES.find(b => b.id === id);
  }
};
