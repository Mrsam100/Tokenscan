
import { TokenReport } from "../types";

const STORAGE_KEY = 'tokenscan_analysis_history';

export const saveManifestation = (manifestation: TokenReport) => {
  const existing = getManifestations();
  const updated = [manifestation, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated.slice(0, 50))); // Keep last 50
};

export const getManifestations = (): TokenReport[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const deleteManifestation = (id: string) => {
  const existing = getManifestations();
  const updated = existing.filter(m => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
