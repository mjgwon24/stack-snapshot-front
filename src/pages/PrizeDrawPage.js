import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import imageSrc from "../images/icons/stack_dev_logo1.png";
import emojiSrc from "../images/icons/chickpeas_7.png";
import videoSrc from "../videos/goose_lucky_egg.mp4";
import "../css/mainPage.css"
import "../css/style.css"

/**
 * 추첨 페이지
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
            1: "꽝",
            2: "꽝",
            3: "USB",
            4: "USB",
            5: "꽝",
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
        <div className="position-relative overflow-hidden width-vw-100 height-vh-100 bg-FFF275">
            <img className="position-absolute top-20px left-20px height-60px"
                src={imageSrc} alt="Stack Developer Logo"/>

            <div className="flex justify-center items-center height-full overflow-hidden position-absolute transform-x-minus-15-percent">
                <video className="width-200-percent height-auto rounded-10px"
                    ref={videoRef} src={videoSrc} autoPlay={false} loop={false} muted/>
            </div>

            <img className="position-absolute bottom-80px left-20px height-80px"
                src={emojiSrc} alt="Emoji Icon"/>

            <div className="position-absolute top-100px left-50-percent color-black text-center transform-x-minus-50-percent">
                <p className="weight-800 margin-0 font-size-64px">
                    행운의 황금알 뽑기
                </p>
            </div>

            <div className="position-absolute color-black font-size-32px weight-800 top-250px left-29-percent">
                <p className="margin-0 transform-rotate-30deg-translate-y-minus-20px">
                    꽥!
                </p>
                <p className="margin-0 transform-rotate-30deg-translate-y-minus-40px">
                    꽥!
                </p>
                <p className="margin-0 transform-rotate-30deg-translate-y-minus-60px">
                    꽥!
                </p>
            </div>

            <button className="position-absolute weight-600 font-size-20px bg-white color-black rounded-12px border-3px-solid-black cursor-pointer bottom-40px left-50-percent height-60px width-180px transform-x-minus-50-percent"
                onClick={handleDraw}>뽑기</button>
        </div>
    );
};

export default PrizeDrawPage;
