import React, { useEffect, useState } from "react";
import Logo from '../images/icons/stack_dev_logo2.png';
import { useSearchParams, useNavigate } from "react-router-dom";
import chickpeas_1 from '../images/icons/chickpeas_4.png';
import chickpeas_2 from '../images/icons/chickpeas_5.png';
import chickpeas_3 from '../images/icons/chickpeas_3.png';
import { useGroupStore } from "../store/useGroupStore";
import { useDateStore } from "../store/useDateStore";
import { useTimeStore } from "../store/useTimeStore";
import "../css/mainPage.css"
import "../css/style.css"
import { OuterLayout, PageTitle } from "../components/layout/CommonLayout";
import StepIndicator from "../components/step/StepIndicator";
import InnerBox from "../components/layout/InnerBox";
import Button from "../components/common/Button";
/**
 * 성공 페이지
 * @since 2024.10.30
 * @author 김현나, 임석진
 */
const SuccessPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = async () => {
        await get_QR();
        setIsModalOpen(true);
    };

    const [QRImage, setQRImage] = useState("");
    const [Image, setImage] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const groupId = useGroupStore((state) => state.groupId);
    const date = useDateStore((state) => state.date);
    const timeStamp = useTimeStore((state) => state.time);

    useEffect(() => {
        setImage(`${process.env.REACT_APP_BACKEND_URL}/qrs?groupId=${groupId}&date=${date}&timeStamp=${timeStamp}`);
    }, [groupId, date]);

    const get_QR = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/qrs?groupId=${groupId}&date=${date}`, { method: 'POST' });
        if (response.ok) {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setQRImage(imageUrl);
        }
    };

    return (
        <OuterLayout>
            <StepIndicator currentStep={3} stepCount={3} />
            <InnerBox className="px-32 pb-4" showIcon={true}>
                <PageTitle><span>사진이 완성되었어요!</span></PageTitle>
                <img className={"border-2 border-[#000]"} src={`${process.env.REACT_APP_BACKEND_URL}/photos/final/group_${groupId}_final_${date}_${timeStamp}.png`}/>
                <div className="flex flex-row gap-3">
                    <Button type="yellow" onClick={()=>{}}>다운로드</Button>
                    <Button type="pink" onClick={()=>{}}>경품 추첨</Button>
                </div>

            </InnerBox>
        </OuterLayout>
    );
};

export default SuccessPage;
