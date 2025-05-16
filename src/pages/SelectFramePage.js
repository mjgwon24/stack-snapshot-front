import React from "react";
import stepIcon from '../images/icons/step-icon.png';
import rightArrow from "../images/icons/arrow_right_black.png";
import {useNavigate} from 'react-router-dom';

/**
 * 프레임 선택 페이지
 * @since 2024.10.30
 * @lastUpdate 2025.05.17
 * @author 김이현, 권민지
 */
const SelectFramePage = () => {
    const navigate = useNavigate();

    return (
            <div className="flex flex-col items-center justify-center min-w-[600px] w-full min-h-[890px] h-screen gap-7">
                <div className="relative w-[235px]">
                    <img src={stepIcon} alt="step icon" className="w-[70px] absolute -top-3 -left-3" />
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="w-[35px] h-[35px] bg-white border-[2px] border-[#F2D219] rounded-full flex items-center justify-center">
                            <p className="text-[#F2D219] text-[18px] weight-700">1</p>
                        </div>

                        <div className="w-[35px] h-[35px] bg-white border-[2px] border-[#F2D219] rounded-full flex items-center justify-center">
                            <p className="text-[#F2D219] text-[18px] weight-700">2</p>
                        </div>

                        <div className="w-[35px] h-[35px] bg-white border-[2px] border-[#F2D219] rounded-full flex items-center justify-center">
                            <p className="text-[#F2D219] text-[18px] weight-700">3</p>
                        </div>
                    </div>
                    <div className="absolute bg-white w-full h-[4px] top-[14px] left-0 -z-10"/>
                </div>


                <div className="bg-[#FFFDF0] rounded-[30px] w-[550px] h-[750px] flex flex-col items-center justify-between pt-8 border border-[#F2D219]" style={{ boxShadow: "4px 10px 30px 10px rgba(236, 208, 16, 0.40)"}}>
                    <p className="text-[30px] leading-tight weight-800 text-center mb-6"><span className="text-[#FFB200]">프레임</span>을<br/>선택해주세요</p>

                    <div className="bg-gray-300 w-[220px] h-[340px] mb-8" style={{filter: "drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.25))"}} />

                    <div className="flex flex-col items-center justify-center gap-6 pt-2 bg-white w-full h-[270px] rounded-b-[30px] border-t border-[#F2D219]" style={{background: "linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF9CF"}}>
                        <div className="flex flex-row justify-between gap-5">
                            <div className="bg-gray-200 w-[90px] h-[130px] border-2 border-black" />
                            <div className="bg-gray-200 w-[90px] h-[130px]" />
                            <div className="bg-gray-200 w-[90px] h-[130px]" />
                            <div className="bg-gray-200 w-[90px] h-[130px]" />
                        </div>

                        <button className="flex items-center justify-center bg-[#FFF9CF] rounded-[8px] px-8 py-2 border-2 border-[#FFB200]"
                                onClick={() => {
                                    navigate('/picture/select-frame');
                                }}
                        >
                            <p className="text-[#FFB200] weight-800">이걸로 할게요!</p>
                        </button>

                    </div>
                </div>
            </div>
    )
}

export default SelectFramePage;