import React from "react";
import styled from "@emotion/styled";
import stepIcon from '../../images/icons/step-icon.png';

const StepWrapper = styled.div`
    position: relative;
    width: 235px;
`;

const StepLine = styled.div`
    position: absolute;
    background: white;
    width: 100%;
    height: 4px;
    top: 14px;
    left: 0;
    z-index: 0;
    border-radius: 2px;
    overflow: hidden;
`;

const StepProgress = styled.div`
    position: absolute;
    background: #FFB200;
    height: 4px;
    top: 14px;
    left: 0;
    z-index: 1;
    border-radius: 2px;
    transition: width 0.3s;
`;

const StepList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const StepCircle = styled.div`
    width: 35px;
    height: 35px;
    background: ${({completed}) => completed ? '#FFB200' : 'white'};
    border: 2px solid #FFB200;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    transition: background 0.2s;
`;

const StepNumber = styled.p`
    font-family: Pretendard-Bold, sans-serif;
    color: #FFB200;
    font-size: 18px;
    line-height: 1;
`;

const CheckIcon = () => (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path
            d="M5 11L9 15L15 7"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const stepIconPos = [
    { left: -12, top: -12 },
    { left: 85, top: -12 },
    { left: 180, top: -12 }
];

/**
 * 단계 표시 컴포넌트
 * @param currentStep 현재 단계 (1부터 시작)
 * @param stepCount 전체 단계 수
 * @param allCompleted 모든 단계를 완료 상태로 표시 (stepIcon 숨김)
 */
const StepIndicator = ({
                           currentStep = 1,
                           stepCount = 3,
                           allCompleted = false
                       }) => {
    const safeStep = allCompleted ? stepCount : Math.max(1, Math.min(stepCount, currentStep));
    const progressPercent = allCompleted
        ? 100
        : (stepCount > 1 ? ((safeStep - 1) / (stepCount - 1)) * 100 : 0);

    return (
        <StepWrapper>
            {!allCompleted && (
                <img
                    src={stepIcon}
                    alt="step icon"
                    style={{
                        width: 70,
                        position: "absolute",
                        left: stepIconPos[safeStep - 1]?.left ?? -12,
                        top: stepIconPos[safeStep - 1]?.top ?? -12,
                        zIndex: 3,
                    }}
                />
            )}
            <StepLine />
            <StepProgress style={{ width: `${progressPercent}%` }} />
            <StepList>
                {[...Array(stepCount)].map((_, idx) => {
                    const isCompleted = allCompleted ? true : idx < safeStep - 1;
                    return (
                        <StepCircle completed={isCompleted} key={idx}>
                            {isCompleted ? <CheckIcon /> : <StepNumber>{idx + 1}</StepNumber>}
                        </StepCircle>
                    );
                })}
            </StepList>
        </StepWrapper>
    );
};

export default StepIndicator;
