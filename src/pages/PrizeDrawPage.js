import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import imageSrc from "../images/icons/stack_dev_logo1.png";
import emojiSrc from "../images/icons/chickpeas_7.png";
import videoSrc from "../videos/goose_lucky_egg.mp4";

/**
 * 메인 페이지
 * @since
 * author 임석진
 */

const PrizeDrawPage = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false); // 동영상 재생 상태
    const [currentParticipant, setCurrentParticipant] = useState(1); // 현재 참가자 번호

    // 초기화: 참가 순서 및 당첨 데이터 설정
    useEffect(() => {
        const savedParticipant = localStorage.getItem("currentParticipant");
        if (!savedParticipant) {
            localStorage.setItem("currentParticipant", 1);
        }

        const prizes = {
            1: "USB",
            2: "배달의민족 상품권",
            4: "USB",
            5: "USB",
            7: "USB",
        };
        localStorage.setItem("prizes", JSON.stringify(prizes));
    }, []);

    // 현재 참가자 번호 가져오기
    useEffect(() => {
        const savedParticipant = parseInt(localStorage.getItem("currentParticipant"), 10);
        setCurrentParticipant(savedParticipant || 1);
    }, []);

    const handleDraw = () => {
        setIsPlaying(true);

        const participantNumber = currentParticipant;
        const prizes = JSON.parse(localStorage.getItem("prizes"));
        const result = prizes[participantNumber] || "꽝";

        if (videoRef.current) {
            videoRef.current.play();
        }

        const nextParticipant = participantNumber + 1;
        localStorage.setItem("currentParticipant", nextParticipant);

        // 2초 후 결과 페이지로 이동
        setTimeout(() => {
            navigate("/picture/draw-result", {
                state: { result, number: participantNumber },
            });
        }, 2000); // 2초 대기
    };

    return (
        <div
            style={{
                backgroundColor: "#FFF275",
                height: "100vh",
                width: "100vw",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <img
                src={imageSrc}
                alt="Stack Developer Logo"
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    height: "60px",
                }}
            />

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    overflow: "hidden",
                    transform: "translateX(-15%)",
                }}
            >
                <video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay={false}
                    loop={false}
                    muted
                    style={{
                        width: "200%",
                        height: "auto",
                        borderRadius: "10px",
                    }}
                />
            </div>

            <img
                src={emojiSrc}
                alt="Emoji Icon"
                style={{
                    position: "absolute",
                    bottom: "80px",
                    left: "20px",
                    height: "80px",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    top: "100px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    color: "#000",
                }}
            >
                <p style={{ fontSize: "64px", fontWeight: "800", margin: "0" }}>
                    행운의 황금알 뽑기
                </p>
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "250px",
                    left: "29%",
                    color: "#000",
                    fontSize: "36px",
                    fontWeight: "800",
                }}
            >
                <p
                    style={{
                        transform: "rotate(30deg) translateY(-20px)",
                        margin: "0",
                    }}
                >
                    꽥!
                </p>
                <p
                    style={{
                        transform: "rotate(-30deg) translateY(-40px)",
                        margin: "0",
                    }}
                >
                    꽥!
                </p>
                <p
                    style={{
                        transform: "rotate(30deg) translateY(-60px)",
                        margin: "0",
                    }}
                >
                    꽥!
                </p>
            </div>

            <button
                onClick={handleDraw}
                style={{
                    position: "absolute",
                    bottom: "40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "180px",
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
                뽑기
            </button>
        </div>
    );
};

export default PrizeDrawPage;
