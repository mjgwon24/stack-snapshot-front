import React from "react";
import imageSrc from '../images/icons/stack_dev_logo1.png';
import imageSrc3 from '../images/icons/photo3.png';
import imageSrc4 from '../images/icons/photo4.png';
import "../css/MainPage.css"

import {useNavigate} from 'react-router-dom';

/**
 * 메인 페이지
 * @since 2024.10.30
 * author 김현나
 */
const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen relative overflow-hidden">

            <div className="image-container position-fixed top-0 left-0 width-vw-100 height-vh-100 z-index-minus-1 overflow-hidden">
                <div className="rolling-images position-absolute top-0 right-20-percent width-327px height-6050px animation-rolling-linear-infinite">
                    <img className="width-full height-50-percent margin-bottom-50px"
                        src={imageSrc3} alt="유형2"/>
                    <img className="width-full height-50-percent margin-bottom-50px"
                        src={imageSrc3} alt="유형2 반복"/>
                </div>

                <div className="rolling-images position-absolute top-0 right-0 width-246px height-5850px animation-rolling-reverse-linear-infinite">
                    <img className="width-full height-50-percent margin-bottom-50px"
                        src={imageSrc4} alt="유형1"/>
                    <img className="width-full height-50-percent margin-bottom-50px"
                        src={imageSrc4} alt="유형1 반복"/>
                </div>
            </div>

            <div className="content-container position-fixed top-0 left-0 width-full height-full z-index-1 point-none">
                <div className="items-left justify-items-center point-auto">
                    <img className="width-238px height-60px padding-top-36px padding-left-66px"
                        src={imageSrc} alt="stack_dev_logo1" />
                </div>

                <div className="position-absolute point-auto top-420px left-80px">
                    <p className="weight-600 font-size-24px">다시는 돌아오지 않을 지금을 사진으로</p>
                </div>

                <div className="position-absolute point-auto top-450px left-76px">
                    <p className="weight-800 font-size-110px line-height-normal letter-spacing-4px webkit-text-stroke-color-4E webkit-text-stroke-width-3px color-white">
                        스택네컷
                    </p>
                </div>

                <button className="flex justify-center items-center gap-1rem weight-600 position-absolute point-auto cursor-pointer font-size-32px rounded-12px top-615px left-76px width-338px height-78px bg-white color-020E2E border-3px-solid-020E2E"
                    onClick={() => navigate('/picture/select-frame')}>추억 만들러가기
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4375 22.1875L9.90625 19.6875L16.6562 12.9375H0.78125V9.25H16.6562L9.90625 2.53125L12.4375 0.03125L23.5312 11.0938L12.4375 22.1875Z" fill="#020E2E"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MainPage;