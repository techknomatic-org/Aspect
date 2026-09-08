import { DEMO_USER } from '../data/mockData';
import { User } from '../types';

const AUTH_KEY = 'aspect_one_auth_user';

export const authService = {
  login: async (email: string, pass: string): Promise<User> => {
    // Simulate network delay
    await new Promise((res) => setTimeout(res, 800));

    const normalizedEmail = email.trim().toLowerCase();
    if ((normalizedEmail === 'ceo@aspect.global' || normalizedEmail === 'ceo@aspectone.com') && pass === 'Aspect@123') {
      localStorage.setItem(AUTH_KEY, JSON.stringify(DEMO_USER));
      return DEMO_USER;
    }
    throw new Error('Invalid credentials. Use ceo@aspect.global / Aspect@123');
  },

  getCurrentUser: (): User | null => {
    const data = localStorage.getItem(AUTH_KEY);
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  },

  logout: async (): Promise<void> => {
    await new Promise((res) => setTimeout(res, 300));
    localStorage.removeItem(AUTH_KEY);
  }
};
