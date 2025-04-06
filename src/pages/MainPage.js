import React from "react";
import imageSrc from '../images/icons/stack_dev_logo1.png';
import imageSrc3 from '../images/icons/photo3.png';
import imageSrc4 from '../images/icons/photo4.png';
import chick1 from '../images/icons/chick_1.png';
import "../css/page.css"
import "../css/style.css"
import {useNavigate} from 'react-router-dom';

/**
 * 메인 페이지
 * @since 2024.10.30
 * author 김현나, 권민지
 */
const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="position-fixed top-0 left-0 width-vw-100 height-vh-100 z-index-minus-1 overflow-hidden">
                <div className="position-absolute top-0 right-20-percent width-327px height-6050px animation-rolling-linear-infinite">
                    <img className="width-full height-50-percent margin-bottom-50px filter-blur-2px opacity-30 xl:filter-blur-0 xl:opacity-100"
                         src={imageSrc3} alt="유형2"/>
                    <img className="width-full height-50-percent margin-bottom-50px filter-blur-2px opacity-30 xl:filter-blur-0 xl:opacity-100"
                         src={imageSrc3} alt="유형2 반복"/>
                </div>
                <div className="display-none xl:display-block position-absolute top-0 right-0 width-246px height-5850px animation-rolling-reverse-linear-infinite">
                    <img className="width-full height-50-percent margin-bottom-50px"
                         src={imageSrc4} alt="유형1"/>
                    <img className="width-full height-50-percent margin-bottom-50px"
                         src={imageSrc4} alt="유형1 반복"/>
                </div>
            </div>

            <div className="flex flex-column items-center justify-between width-full height-vh-100 z-index-1 point-none">
                <div className="width-full justify-items-center point-auto">
                    <img className="width-200px height-50px padding-top-36px padding-left-66px"
                         src={imageSrc} alt="stack_dev_logo1" />
                </div>

                <div className="flex flex-column items-start width-full margin-left-100px margin-bottom-80px">
                    <div className="position-relative top-95px left-400px"
                         style={{animation: "bounce 1.5s infinite ease-in-out 0.5s", transform: "scale(0.6) rotate(15deg)"}}>
                        <img src={chick1} alt="chick1" className="width-118px"/>
                    </div>

                    <div className="margin-bottom-10px">
                        <p className="weight-600 font-size-24px">
                            다시는 돌아오지 않을 <span className="weight-700" style={{color: "#FF6B6B"}}>지금</span>을 사진으로
                        </p>
                        <h1 className="weight-800 margin-top-0 margin-bottom-20px font-size-110px line-height-normal letter-spacing-4px webkit-text-stroke-color-4E webkit-text-stroke-width-3px color-white"
                           style={{textShadow: "4px 4px 0 #FF6B6B, 8px 8px 0 #020E2E"}}>
                            스택네컷
                        </h1>
                    </div>

                    <button className="flex justify-center items-center gap-1rem weight-600 point-auto cursor-pointer font-size-32px rounded-20px width-338px height-78px bg-white color-020E2E border-3px-solid-black boxshadow-0-4-8-rgba-0-0-0-0-2"
                            onClick={() => navigate('/picture/select-frame')}
                            style={{
                                transition: "all 0.3s ease",
                                transform: "rotate(-2deg)",
                                background: "linear-gradient(135deg, #FFD166, #FF9A76)"
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "rotate(2deg) scale(1.05)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "rotate(-2deg)";
                            }}>
                        추억 만들러가기
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4375 22.1875L9.90625 19.6875L16.6562 12.9375H0.78125V9.25H16.6562L9.90625 2.53125L12.4375 0.03125L23.5312 11.0938L12.4375 22.1875Z" fill="#020E2E"/>
                        </svg>
                    </button>
                </div>

            </div>

            <style jsx>{`
             @keyframes bounce {
                 0%, 100% { transform: translateY(0); }
                 50% { transform: translateY(-15px); }
             }
             @keyframes float {
                 0%, 100% { transform: translate(0, 0) rotate(0deg); }
                 33% { transform: translate(10px, -10px) rotate(10deg); }
                 66% { transform: translate(-10px, -15px) rotate(-10deg); }
             }
         `}</style>
        </div>
    );
};

export default MainPage;