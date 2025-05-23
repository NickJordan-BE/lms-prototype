export const isFeatureEnabled = (featureId: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  const savedFlags = localStorage.getItem('featureFlags');
  if (!savedFlags) return false;
  
  const flags = JSON.parse(savedFlags);
  const flag = flags.find((f: { id: string; enabled: boolean }) => f.id === featureId);
  
  return flag?.enabled || false;
}; 