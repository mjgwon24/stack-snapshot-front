import React, { useRef, useState,useEffect } from "react";
import { useNavigate, Outlet,useSearchParams } from "react-router-dom";
import axios from 'axios';
import '../css/picture.css';
import logo1 from '../images/icons/stack_dev_logo2.png';
import logo2 from '../images/icons/camera_icon.png';
import logo3 from '../images/icons/PictureCompletedPage_imoticon.png';
import chickpeasImage from '../images/icons/chickpeas_2.png';
import config from "../config/config";
const PicturePage = ({ setTeamId }) => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const [isCameraStarted, setIsCameraStarted] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [photoNumber, setPhotoNumber] = useState(1);


    const [searchParams, setSearchParams]=useSearchParams();

    const frameid = searchParams.get('frameid');
    const groupid = searchParams.get("groupid");
    const date = searchParams.get("date");



    useEffect(() => {
    }, [date,groupid,frameid]);

    const frameSizes = {
        1: { width: 273, height: 373 },
        2: { width: 270, height: 330 },
        3: { width: 272, height: 328 },
        4: { width: 340, height: 272 }
    };
    const { width, height } = frameSizes[frameid];

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width, height, facingMode: 'user' }
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setIsCameraStarted(true);
        } catch (err) {
            console.error('카메라 접근에 실패했습니다:', err);
        }
    };
    const captureAndUploadPhotos = async () => {
        setIsCapturing(true);
        const photoCount = 6;
        const formData = new FormData();

        for (let i = 0; i < photoCount; i++) {
            for (let j = 5; j > 0; j--) {
                setCountdown(j);
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
            setCountdown(null);

            if (videoRef.current && canvasRef.current) {





                const context = canvasRef.current.getContext('2d');
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;

                context.translate(canvasRef.current.width, 0);

                context.scale(-1, 1);
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

                const blob = await new Promise((resolve) => {
                    canvasRef.current.toBlob(resolve, 'image/png');
                });

                if (blob) {
                    formData.append("images", blob, `photo_${i + 1}.png`);
                } else {
                    console.error("Blob creation failed");
                    setIsCapturing(false);
                    return;
                }
            }
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
            const response = await axios.post(baseUrl + 'api/origin-upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Upload response:", response.data);
            // window.location.href="/picture/select-photo?groupid=0";
            navigate("/picture/completed", {
                state: {
                    data: response.data,
                    frameid:frameid
                }
            });
            return response.data;
        } catch (err) {
            console.error('사진 업로드 실패:', err);
            alert('사진 업로드에 실패했습니다.');
            return null;
        }
    };

    return (
        <div className="camera-container background-yellow">
            <div className="header">
                <img src={logo1} alt="Stack Logo" className="stack_logo"
                     onClick={() => {navigate('/');}} />
            </div>
            {!isCameraStarted && (
                <img src={logo3} alt="imoticon" className="imoticon" />
            )}

            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ width: `${width}px`, height: `${height}px`, marginBottom: '20px',transform: 'scaleX(-1)' }}
            ></video>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

            {countdown && (
                <div className="countdown">
                    <h1>{countdown}</h1>
                </div>
            )}

            <div className="camera-button-container">
                {!isCameraStarted && (
                    <button className="camera-start-button weight-500" onClick={startCamera}>
                        사진 촬영
                    </button>
                )}
                {isCameraStarted && (
                    <>
                        <img src={chickpeasImage} alt="Chickpeas Icon" className="chickpeas-icon" />
                        <button
                            className={`camera-button weight-500`}
                            onClick={captureAndUploadPhotos}
                            disabled={isCapturing}
                        >


                            {isCapturing ? "촬영 중..." : "사진 촬영"} <img src={logo2} alt="Camera icon" className="camera-icon" />
                        </button>
                    </>
                )}
            </div>

        </div>
    );
};

export default PicturePage;