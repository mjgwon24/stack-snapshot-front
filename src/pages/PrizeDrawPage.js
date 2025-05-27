import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/mainPage.css"
import "../css/style.css"
import DrawIcon from "../images/icons/draw.png";

import { OuterLayout, PageTitle } from "../components/layout/CommonLayout";
import StepIndicator from "../components/step/StepIndicator";
import InnerBox from "../components/layout/InnerBox";
import Button from "../components/common/Button";
/**
 * 추첨 페이지
 * @since
 * author 임석진
 */

const PrizeDrawPage = () => {
    const navigate = useNavigate();
    return (
        <OuterLayout>
            <StepIndicator currentStep={3} stepCount={3} />
            <InnerBox className="p-8">
                <PageTitle>두근 두근<br/>행운의 <span>경품</span> 뽑기!</PageTitle>
                <img src={DrawIcon} className="max-w-128 max-h-128"/>
                <div className="flex flex-row gap-3">
                    <Button type="pink" onClick={()=>{navigate('/picture/draw-result')}}>추첨하기!</Button>
                </div>
            </InnerBox>
        </OuterLayout>
    );
};

export default PrizeDrawPage;
