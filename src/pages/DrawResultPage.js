import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imageSrc from "../images/icons/stack_dev_logo1.png";
import "../css/mainPage.css"
import "../css/style.css"

import { OuterLayout, PageTitle } from "../components/layout/CommonLayout";
import StepIndicator from "../components/step/StepIndicator";
import InnerBox from "../components/layout/InnerBox";
import Button from "../components/common/Button";
import CongratsIcon from "../images/icons/congrats.png"
import axios from "axios";
/**
 * 추첨 결과 페이지
 * @since 2024.11.20
 * @author 임석진
 */
const DrawResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [reward, setReward ] = useState("");
    const { result, number } = location.state || { result: "꽝", number: null };
    useEffect(()=>{
        const CallReward = async() =>{ 
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/reward`, { method: 'GET' });
            const res = await response.json();
            const rewardStatus = res.rewardStatus;
            if(rewardStatus==="FAIL"||rewardStatus==="CANDY")
                setReward("사탕");
            else if(rewardStatus==="GIFTICON50000")
                setReward("기프티콘 5만원"); 
            else if(rewardStatus==="GIFTICON30000")
                setReward("기프티콘 3만원"); 
            else if(rewardStatus==="GIFTICON10000")
                setReward("기프티콘 1만원"); 
            else if(rewardStatus==="USB")
                setReward("USB"); 
        };
        CallReward();
    },[])
    return (
        <OuterLayout>
            <StepIndicator allCompleted/>
            <InnerBox className="p-8">
                <img src={CongratsIcon} className="max-w-64 max-h-64"/>
                <div className="flex flex-col gap-1">
                    <PageTitle>당첨 축하드려요!</PageTitle>
                    <div className={`font-extrabold ${reward.length<4?"text-9xl":"text-6xl"} text-[#FF5375]`}>{reward}</div>
                </div>
                <p className="text-[#646464] font-semibold text-center pb-8">해당 화면을 카운터에 보여주며<br/>상품을 수령해가세요.</p>
                <div className="flex flex-row gap-3">
                    <Button type="yellow" onClick={()=>{navigate('/')}}>메인으로</Button>
                </div>
            </InnerBox>
        </OuterLayout>
    );
};

export default DrawResultPage;
