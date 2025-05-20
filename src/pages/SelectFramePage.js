import React from "react";
import { OuterLayout, PageTitle } from "../components/layout/CommonLayout";
import StepIndicator from "../components/step/StepIndicator";
import InnerBox from "../components/layout/InnerBox";
import { useNavigate } from 'react-router-dom';
import Button from "../components/common/Button";
import {useFrameStore} from "../store/useFrameStore";
import frame1 from "../images/frames/1.png";
import frame2 from "../images/frames/2.png";
import frame3 from "../images/frames/3.png";
import frame4 from "../images/frames/4.png";
/**
 * 프레임 선택 페이지
 * @since 2024.10.30
 * @lastUpdate 2025.05.17
 * @author 김이현, 권민지
 */
const SelectFramePage = () => {
    const navigate = useNavigate();
    const selectedFrame = useFrameStore((state) => state.selectedFrame);
    const setSelectedFrame = useFrameStore((state) => state.setSelectedFrame);

    const frames = [frame1,frame2,frame3,frame4];

    return (
        <OuterLayout>
            <StepIndicator currentStep={1} stepCount={3} />

            <InnerBox>
                <PageTitle>
                    <span>프레임</span>을<br />선택해주세요
                </PageTitle>

                <div
                    className={`w-[340px] h-[200px] mb-8 flex flex-col justify-center`}
                    style={{ filter: "drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.25))"}}
                >
                    <div className="w-full flex flex-row justify-center">
                        <img src={frames[selectedFrame]} className={`${selectedFrame==3?"w-[300px]":"h-[300px]"}`}/>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 pt-2 pb-2 bg-white w-full h-[230px] rounded-b-[30px] border-t border-[#F2D219]"
                     style={{ background: "linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF9CF" }}>
                    <div className="flex flex-row justify-between gap-5">
                        {frames.map((frame, idx) => (
                            <div
                                key={idx}
                                className={
                                    `${idx==3?"w-[130px] h-[130px]":"w-[90px] h-[130px]"} flex flex-col justify-center`
                                }
                                onClick={() => setSelectedFrame(idx)}
                            >
                                <div className={`bg-gray-200 cursor-pointer transition-all duration-150 ${selectedFrame === idx
                                        ? "border-2 border-black"
                                        : "border-2 border-transparent"}`}>
                                    <img key={idx} src={frame}/>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button type="default" onClick={() => navigate('/picture?frameid='+selectedFrame)}>
                        이걸로 할게요!
                    </Button>
                </div>
            </InnerBox>
        </OuterLayout>
    )
}

export default SelectFramePage;
