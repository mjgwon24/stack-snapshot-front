import { create } from 'zustand';

// 날짜 상태 저장 스토어
export const useTimeStore = create((set) => ({
    time: 0,
    setTime: (time) => set({ time }),
}));