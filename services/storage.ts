
import { TokenReport } from "../types";

const STORAGE_KEY = 'tokenscan_analysis_history';
const MAX_REPORTS = 50;

export const saveManifestation = (manifestation: TokenReport): { success: boolean; error?: string } => {
  try {
    const existing = getManifestations();
    const updated = [manifestation, ...existing];
    const dataToStore = JSON.stringify(updated.slice(0, MAX_REPORTS));

    // Check if we're approaching localStorage limits (typically 5-10MB)
    const estimatedSize = new Blob([dataToStore]).size;
    if (estimatedSize > 4 * 1024 * 1024) { // 4MB warning threshold
      console.warn('LocalStorage approaching limit. Keeping fewer reports.');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated.slice(0, 25)));
      return { success: true, error: 'Storage nearly full. Kept only 25 most recent reports.' };
    }

    localStorage.setItem(STORAGE_KEY, dataToStore);
    return { success: true };
  } catch (error) {
    // Handle quota exceeded error
    if (error instanceof DOMException && (
      error.name === 'QuotaExceededError' ||
      error.name === 'NS_ERROR_DOM_QUOTA_REACHED'
    )) {
      // Try to recover by keeping only last 10 reports
      try {
        const existing = getManifestations();
        const reduced = [manifestation, ...existing].slice(0, 10);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reduced));
        return { success: true, error: 'Storage full. Kept only 10 most recent reports.' };
      } catch {
        return { success: false, error: 'Storage full. Please clear browser data or use Export features.' };
      }
    }
    return { success: false, error: 'Failed to save report locally.' };
  }
};

export const getManifestations = (): TokenReport[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to retrieve reports from localStorage:', error);
    return [];
  }
};

export const deleteManifestation = (id: string): boolean => {
  try {
    const existing = getManifestations();
    const updated = existing.filter(m => m.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error('Failed to delete report:', error);
    return false;
  }
};
