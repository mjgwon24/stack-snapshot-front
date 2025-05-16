import { create } from 'zustand';

// 프레임 선택 상태 저장 스토어
export const useFrameStore = create((set) => ({
    selectedFrame: 0,
    setSelectedFrame: (frameIdx) => set({ selectedFrame: frameIdx }),
}));
