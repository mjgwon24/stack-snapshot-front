import { create } from 'zustand';

// 그룹 상태 저장 스토어
export const useGroupStore = create((set) => ({
    groupId: 0,
    setGroupId: (groupId) => set({ groupId }),
}));
