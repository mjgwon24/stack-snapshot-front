import { create } from 'zustand';

// 날짜 상태 저장 스토어
export const useDateStore = create((set) => ({
    date: "20250524",
    setDate: (date) => set({ date }),
}));
