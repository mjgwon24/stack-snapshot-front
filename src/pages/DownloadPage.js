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

    const groupId = useGroupStore((state) => state.groupId);
    const setGroupId = useGroupStore((state) => state.setGroupId);

    const date = useDateStore((state) => state.date);
    const setDate = useDateStore((state) => state.setDate);

    const time = useTimeStore((state) => state.time);
    const setTime = useTimeStore((state) => state.setTime);

    const [QRImage,setQRImage] = useState("");
    const get_QR = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/qrs?groupId=${groupId}&date=${date}&timeStamp=${time}`, { method: 'POST' });
        if (response.ok) {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setQRImage(imageUrl);
        }
    };
    useEffect(()=>{
        get_QR();
    },[])
    return (
        <OuterLayout>
            <StepIndicator allCompleted/>
            <InnerBox className="p-8" showIcon={true}>
                <PageTitle><span>다운로드</span></PageTitle>
                <img src={QRImage} className="max-w-64 max-h-64"/>
                <div className="flex flex-row gap-3">
                    <Button type="yellow" onClick={()=>{navigate('/')}}>메인으로</Button>
                    <Button type="default" onClick={()=>{navigate('/picture/draw')}}>경품 추첨</Button>
                </div>
            </InnerBox>
        </OuterLayout>
    );
};

export default PicturePage;