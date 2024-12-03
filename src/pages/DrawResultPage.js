import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imageSrc from "../images/icons/stack_dev_logo1.png";
import "../css/mainPage.css"
import "../css/style.css"

/**
 * 추첨 결과 페이지
 * @since 2024.11.20
 * @author 임석진
 */
const DrawResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { result, number } = location.state || { result: "꽝", number: null };

    return (
        <div className="flex flex-column justify-center items-center position-relative width-vw-100 height-vh-100 text-center bg-FFF275">
            <img className="position-absolute cursor-pointer top-20px left-20px height-60px"
                src={imageSrc} alt="Stack Developer Logo"
                onClick={() => {navigate("/");}}/>

            <div className="font-size-32px weight-600 margin-bottom-20px">
                참가자 번호: {number || "알 수 없음"}
            </div>
            <div className="font-size-64px weight-800 margin-bottom-40px">
                결과: {result}
            </div>

            <button className="font-size-20px weight-600 cursor-pointer rounded-12px color-black bg-white border-3px-solid-black width-200px height-60px"
                onClick={() => navigate("/")}>
                홈으로 돌아가기
            </button>
        </div>
    );
};

export default DrawResultPage;
