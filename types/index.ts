export type ViewMode = 'admin' | 'affiliate' | 'onboarding' | 'login' | 'model' | 'client';
export type Tab = 'dashboard' | 'creators' | 'approvals' | 'earnings' | 'notifications' | 'settings';
export type AffiliateTab = 'dashboard' | 'marketplace' | 'requests' | 'my-affiliations' | 'finance' | 'materials' | 'analytics' | 'referrals' | 'settings';
export type ModelTab = 'dashboard' | 'automations' | 'tutorials' | 'reports' | 'withdraw';
export type ClientTab = 'explore' | 'feed' | 'favorites' | 'subscriptions' | 'wallet' | 'settings';
export type OnboardingStep = 1 | 2 | 3 | 4 | 5;

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Modelo' | 'Cliente';
  plan?: 'Free' | 'VIP';
  passwordHint: string;
}
