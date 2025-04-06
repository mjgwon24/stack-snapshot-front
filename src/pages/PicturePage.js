import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "../css/picture.css";
import "../css/style.css";
import logo1 from "../images/icons/stack_dev_logo2.png";
import logo2 from "../images/icons/camera_icon.png";
import logo3 from "../images/icons/PictureCompletedPage_imoticon.png";
import chickpeasImage from "../images/icons/chickpeas_2.png";
import config from "../config/config";
import cameraSound from "../sound/camera-shutter.mp3";
import logo from "../images/icons/stack_dev_logo2.png";

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

    const frameid = searchParams.get("frameid");
    const groupid = searchParams.get("groupid");
    const date = searchParams.get("date");

    useEffect(() => {}, [date, groupid, frameid]);

    const frameSizes = {
        1: { width: 273, height: 373 },
        2: { width: 270, height: 330 },
        3: { width: 272, height: 328 },
        4: { width: 340, height: 272 },
    };
    const { width, height } = frameSizes[frameid];

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width, height, facingMode: "user" },
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setIsCameraStarted(true);
        } catch (err) {
            console.error("카메라 접근에 실패했습니다:", err);
        }
    };

    const triggerFlash = () => {
        if (flashRef.current) {
            flashRef.current.classList.add("active");
            setTimeout(() => {
                flashRef.current.classList.remove("active");
            }, 200);
        }
    };

    const playShutterSound = () => {
        const sound = new Audio(cameraSound);
        sound.load();
        sound.play().catch((err) => console.error("Audio playback failed:", err)); // 에러 핸들링
    };

    const captureAndUploadPhotos = async () => {
        setIsCapturing(true);
        const photoCount = 6;
        const formData = new FormData();

        for (let i = 0; i < photoCount; i++) {
            setPhotoNumber(i + 1); // 현재 촬영 중인 사진 번호 업데이트
            for (let j = 5; j > 0; j--) {
                setCountdown(j);
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
            setCountdown(null);

            if (videoRef.current && canvasRef.current) {
                const context = canvasRef.current.getContext("2d");
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;

                context.translate(canvasRef.current.width, 0);
                context.scale(-1, 1);
                context.drawImage(
                    videoRef.current,
                    0,
                    0,
                    canvasRef.current.width,
                    canvasRef.current.height
                );

                const blob = await new Promise((resolve) => {
                    canvasRef.current.toBlob(resolve, "image/png");
                });

                if (blob) {
                    formData.append("images", blob, `photo_${i + 1}.png`);
                } else {
                    console.error("Blob creation failed");
                    setIsCapturing(false);
                    return;
                }
            }

            triggerFlash();
            playShutterSound();
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        const uploadResult = await uploadPhotos(formData);
        if (!uploadResult) {
            console.error("사진 업로드에 문제가 있습니다.");
        }
        setIsCapturing(false);
    };

    const uploadPhotos = async (formData) => {
        try {
            const baseUrl = config.baseURL;
            const response = await axios.post(baseUrl + "api/origin-upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Upload response:", response.data);
            navigate("/picture/completed", {
                state: {
                    data: response.data,
                    frameid: frameid,
                },
            });
            return response.data;
        } catch (err) {
            console.error("사진 업로드 실패:", err);
            alert("사진 업로드에 실패했습니다.");
            return null;
        }
    };

    return (
        <div className="camera-container">
            <div ref={flashRef} className="flash"></div>
            {/* 플래시 효과 */}
            <div className="width-full flex justify-center">
                <img
                    className="logo"
                    onClick={() => navigate('/')}
                    src={logo}
                    alt="stack_dev_logo1"
                />
            </div>
            {!isCameraStarted && <img src={logo3} alt="imoticon" className="imoticon" />}
            {isCameraStarted && isCapturing && (
                <div className="photo-number-indicator">
                    <h2>{`촬영 ${photoNumber} / 6`}</h2>
                </div>
            )}
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    marginTop: "80px",
                    transform: "scaleX(-1)",
                }}
            ></video>

            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

            {countdown && (
                <div className="countdown">
                    <h1>{countdown}</h1>
                </div>
            )}

            <div className="camera-button-container">
                {!isCameraStarted && (
                    <button className="camera-start-button weight-600" onClick={startCamera}>
                        사진 촬영
                    </button>
                )}
                {isCameraStarted && (
                    <>
                        <img src={chickpeasImage} alt="Chickpeas Icon" className="chickpeas-icon" />
                        <button
                            className={`camera-button weight-600`}
                            onClick={captureAndUploadPhotos}
                            disabled={isCapturing}
                        >
                            {isCapturing ? "촬영 중..." : "사진 촬영"}{" "}
                            <img src={logo2} alt="Camera icon" className="camera-icon" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default PicturePage;
