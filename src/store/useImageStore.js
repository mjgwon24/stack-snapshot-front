import { create } from 'zustand';

// 이미지 리스트 저장 스토어
export const useImageStore = create((set) => ({
    images: [],
    setImages: (images) => set({images}),
}));
