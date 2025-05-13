import React from "react";
import mainImage from '../images/icons/main-icon.png';
import rightArrow from '../images/icons/arrow_right_black.png';
import {useNavigate} from 'react-router-dom';

/**
 * 메인 페이지
 * @since 2024.10.30
 * @lastUpdate 2025.05.13
 * @author 김현나, 권민지
 */
const MainPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-10 min-h-screen p-20">
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex flex-col items-center justify-center">
                        <p className="weight-700 text-[19px]">
                            다시는 돌아오지 않을 지금을 사진으로
                        </p>
                        <h1 className="weight-800 text-white text-[87px] leading-tight"
                            style={{ WebkitTextStrokeWidth: '2.4px', WebkitTextStrokeColor: '#4E4E4E' }}>
                            스택네컷
                        </h1>
                    </div>
                    <img src={mainImage} alt="Main Icon" className="w-[330px]" />
                </div>

                <button className="flex items-center justify-center gap-1 bg-white py-[16px] px-[35px] rounded-xl border-2 border-[#404040]"
                    onClick={() => {
                        navigate('/picture/select-frame');
                    }}
                >
                    <p className="text-[24px] weight-700">추억 만들러 가기</p>
                    <img src={rightArrow} alt="right arrow" className="w-[22px]" />
                </button>

            </div>
        </>
    );
};

export default MainPage;