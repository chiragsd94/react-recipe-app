import { create } from 'zustand';

const useThemeStore = create((set) => ({
  day: false,
  toggleDay: () => set((state) => ({ day: !state.day })),
}));

export default useThemeStore;
