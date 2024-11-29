import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imageSrc from "../images/icons/stack_dev_logo1.png";

/**
 * 메인 페이지
 * @since
 * author 임석진
 */

const DrawResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { result, number } = location.state || { result: "꽝", number: null };

    return (
        <div
            style={{
                backgroundColor: "#FFF275",
                height: "100vh",
                width: "100vw",
                position: "relative",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <img
                src={imageSrc}
                onClick={() => {
                    navigate("/");
                }}
                alt="Stack Developer Logo"
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    height: "60px",
                    cursor: "pointer",
                }}
            />

            <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "20px" }}>
                참가자 번호: {number || "알 수 없음"}
            </div>
            <div style={{ fontSize: "64px", fontWeight: "800", marginBottom: "40px" }}>
                결과: {result}
            </div>

            <button
                onClick={() => navigate("/")}
                style={{
                    width: "200px",
                    height: "60px",
                    backgroundColor: "#FFF",
                    color: "#000",
                    border: "3px solid #000",
                    borderRadius: "12px",
                    fontSize: "20px",
                    fontWeight: "600",
                    cursor: "pointer",
                }}
            >
                홈으로 돌아가기
            </button>
        </div>
    );
};

export default DrawResultPage;
