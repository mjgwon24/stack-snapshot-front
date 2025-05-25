import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "../css/picture.css";
import cameraSound from "../sound/camera-shutter.mp3";
import { OuterLayout, PageTitle } from "../components/layout/CommonLayout";
import StepIndicator from "../components/step/StepIndicator";
import InnerBox from "../components/layout/InnerBox";
import Button from "../components/common/Button";
import { useCameraStore } from "../store/useCameraStore";
import { useFrameStore } from "../store/useFrameStore";
import { useGroupStore } from "../store/useGroupStore";
import { useDateStore } from "../store/useDateStore";
import { useImageStore } from "../store/useImageStore";
import { useTimeStore } from "../store/useTimeStore";
/**
 * 메인 페이지
 * @since
 * author 임석진
 */

const PicturePage = ({ setTeamId }) => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const flashRef = useRef(null); // 플래시 효과용 ref
    const [isCapturing, setIsCapturing] = useState(false);
    const [isCameraStarted, setIsCameraStarted] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [photoNumber, setPhotoNumber] = useState(1);
    const [searchParams] = useSearchParams();

    const { stream, startCamera, stopCamera } = useCameraStore();
    const images = useImageStore((state) => state.images);
    const setImages = useImageStore((state) => state.setImages);

    const selectedFrame = useFrameStore((state) => state.selectedFrame);
    const setSelectedFrame = useFrameStore((state) => state.setSelectedFrame);

    const groupId = useGroupStore((state) => state.groupId);
    const setGroupId = useGroupStore((state) => state.setGroupId);

    const date = useDateStore((state) => state.date);
    const setDate = useDateStore((state) => state.setDate);

    const time = useTimeStore((state) => state.time);
    const setTime = useTimeStore((state) => state.setTime);

    const frameSizes = {
        1: { width: 273, height: 373 },
        2: { width: 270, height: 330 },
        3: { width: 272, height: 328 },
        4: { width: 340, height: 272 },
    };
    const { width, height } = frameSizes[selectedFrame+1];

    const initializeCamera = async () => {
        try {
            const newStream = await startCamera({ video: { width, height, facingMode: "user" }, audio: false });
            if (videoRef.current) {
                videoRef.current.srcObject = newStream;
                await videoRef.current.play();
                setIsCameraStarted(true);
                captureAndUploadPhotos();
            }
        } catch (err) {
            console.error("카메라 접근 실패:", err);
            alert("카메라 접근에 실패했습니다: " + err.name + " - " + err.message);
        }
    };

    const triggerFlash = () => {
        if (flashRef.current) {
            flashRef.current.classList.add("active");
            setTimeout(() => flashRef.current.classList.remove("active"), 200);
        }
    };

    const playShutterSound = () => {
        const sound = new Audio(cameraSound);
        sound.load();
        sound.play().catch((err) => console.error("Audio playback failed:", err));
    };

    const captureAndUploadPhotos = async () => {
        try {
            setIsCapturing(true);
            const formData = new FormData();
            for (let i = 0; i < 6; i++) {
                setPhotoNumber(i + 1);
                for (let j = 5; j > 0; j--) {
                    setCountdown(j);
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                }
                setCountdown(null);

                if (videoRef.current && canvasRef.current) {
                    const context = canvasRef.current.getContext("2d");
                    canvasRef.current.width = videoRef.current.videoWidth;
                    canvasRef.current.height = videoRef.current.videoHeight;
                    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                    context.translate(canvasRef.current.width, 0);
                    context.scale(-1, 1);
                    context.drawImage(videoRef.current, 0, 0);
                    const blob = await new Promise((resolve, reject) => {
                        canvasRef.current.toBlob((blob) => {
                            if (!blob) reject("toBlob 실패");
                            else resolve(blob);
                        }, "image/png");
                    });
                    formData.append("images", blob, `photo_${i + 1}.png`);
                }

                triggerFlash();
                playShutterSound();
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }

            const uploadResult = await uploadPhotos(formData);
            if (!uploadResult) console.error("사진 업로드 실패");
            setIsCapturing(false);
        } catch (e) {
            alert(e);
        }
    };

    const uploadPhotos = async (formData) => {
        try {
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/photos", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setImages(response.data.fileNames);
            setGroupId(response.data.groupId);
            setTime(response.data.timeStamp);
            setDate(response.data.date);
            
            navigate("/picture/select-photo");
            return response.data;
        } catch (err) {
            console.error("사진 업로드 실패:", err);
            alert("사진 업로드에 실패했습니다.");
            return null;
        }
    };

    useEffect(() => {
        return () => {
            stopCamera();
        };
    }, []);

    useEffect(() => {
        console.log("images updated", images);
      }, [images]);

      useEffect(() => {
        console.log("groupId updated", groupId);
      }, [groupId]);

    return (
        <OuterLayout>
            <StepIndicator currentStep={2} stepCount={3} />
            <InnerBox className="p-8">
                {isCapturing ? <PageTitle><span>촬영 중...</span></PageTitle>:<PageTitle>사진을<br /><span>촬영</span>해주세요</PageTitle>}
                
                <div ref={flashRef} className="flash" />
                <div className={`w-full h-full px-16 flex flex-col ${isCapturing ? "" : "pb-4"}`}>
                    <div className={`w-full flex flex-row justify-center items-center ${isCapturing ? "" : "h-full"}`}>
                        <video
                            ref={videoRef}
                            key={selectedFrame}
                            autoPlay
                            playsInline
                            style={{
                                width: `${width}px`,
                                transform: "scaleX(-1)",
                                display: `${isCapturing ? "block" : "none"}`
                            }}
                        ></video>
                        <div className="w-full h-full bg-[#EFEFEF] flex flex-col justify-center border-2 border-[#AAAAAA]"
                            style={{ display: `${isCapturing ? "none" : "flex"}`}}>
                            <div className="w-full flex flex-row justify-center">
                                <Button type="default" onClick={initializeCamera}>
                                    사진 촬영하기
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 flex flex-col justify-center">
                    <PageTitle className={`${isCameraStarted ? "" : "hidden"} py-6`}>
                        <span>{photoNumber}</span> / 6
                    </PageTitle>
                </div>
                <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
                {countdown && (
                    <div className="countdown">
                        <h1>{countdown}</h1>
                    </div>
                )}
            </InnerBox>
        </OuterLayout>
    );
};

export default PicturePage;