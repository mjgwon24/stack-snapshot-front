import { create } from "zustand";

export const useCameraStore = create((set, get) => ({
    stream: null,

    startCamera: async (constraints = { video: { facingMode: "user" }, audio: false }) => {
        const prevStream = get().stream;

        // 기존 스트림 정리
        if (prevStream) {
            prevStream.getTracks().forEach((track) => track.stop());
        }

        // 새 스트림 요청
        const newStream = await navigator.mediaDevices.getUserMedia(constraints);
        set({ stream: newStream });

        return newStream;
    },

    stopCamera: () => {
        const currentStream = get().stream;
        if (currentStream) {
            currentStream.getTracks().forEach((track) => track.stop());
            set({ stream: null });
        }
    },
}));
