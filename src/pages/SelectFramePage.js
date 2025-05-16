import React, {useState} from "react";
import {OuterLayout, PageTitle} from "../components/layout/CommonLayout";
import StepIndicator from "../components/step/StepIndicator";
import InnerBox from "../components/layout/InnerBox";
import {useNavigate} from 'react-router-dom';
import Button from "../components/common/Button";

/**
 * 프레임 선택 페이지
 * @since 2024.10.30
 * @lastUpdate 2025.05.17
 * @author 김이현, 권민지
 */
const SelectFramePage = () => {
    const navigate = useNavigate();
    const [selectFrame, setSelectFrame] = useState(0);

    return (
        <OuterLayout>
            <StepIndicator currentStep={2} stepCount={3} allCompleted={true} />

            <InnerBox>
                <PageTitle>
                    <span>프레임</span>을<br/>선택해주세요
                </PageTitle>

                <div className="bg-gray-300 w-[220px] h-[340px] mb-8" style={{filter: "drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.25))"}} />

                <div className="flex flex-col items-center justify-center gap-6 pt-2 bg-white w-full h-[270px] rounded-b-[30px] border-t border-[#F2D219]" style={{background: "linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF9CF"}}>
                    <div className="flex flex-row justify-between gap-5">
                        <div className="bg-gray-200 w-[90px] h-[130px] border-2 border-black" />
                        <div className="bg-gray-200 w-[90px] h-[130px]" />
                        <div className="bg-gray-200 w-[90px] h-[130px]" />
                        <div className="bg-gray-200 w-[90px] h-[130px]" />
                    </div>

                    <Button type="yellow" onClick={() => navigate('/picture')}>
                        이걸로 할게요!
                    </Button>
                </div>
            </InnerBox>
        </OuterLayout>
    )
}

export default SelectFramePage;