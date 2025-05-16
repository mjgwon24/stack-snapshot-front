import React from "react";
import styled from "@emotion/styled";

const BUTTON_STYLES = {
    default: {
        bg: "#FFF9CF",
        border: "#FFB200",
        hoverBg: "#fff29c",
        activeBg: "#FFD700",
        text: "#FFB200",
        hoverBorder: "#FFA500",
    },
    yellow: {
        bg: "#FFB200",
        border: "#FFB200",
        hoverBg: "#ffbd1f",
        activeBg: "#FFD700",
        text: "#ffffff",
        hoverBorder: "#FFC300",
    },
    pink: {
        bg: "#FF5375",
        border: "#FF5375",
        hoverBg: "#ff3c62",
        activeBg: "#FF69B4",
        text: "#ffffff",
        hoverBorder: "#FF1493",
    },
};

const BUTTON_SIZES = {
    small: "0.5rem 1rem",
    medium: "0.5rem 1.5rem",
    large: "0.5rem 2rem",
};

export const DefaultButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ btnType }) => BUTTON_STYLES[btnType].bg};
    border-radius: 8px;
    padding: ${({ btnSize }) => BUTTON_SIZES[btnSize]};
    border: 2px solid ${({ btnType }) => BUTTON_STYLES[btnType].border};
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
    width: fit-content;

    &:hover {
        background: ${({ btnType }) => BUTTON_STYLES[btnType].hoverBg};
        border-color: ${({ btnType }) => BUTTON_STYLES[btnType].hoverBorder};
    }

    &:active {
        background: ${({ btnType }) => BUTTON_STYLES[btnType].activeBg};
        border-color: ${({ btnType }) => BUTTON_STYLES[btnType].hoverBorder};
    }
`;

const ButtonText = styled.p`
    font-family: Pretendard-Bold, sans-serif;
    color: ${({ btnType }) => BUTTON_STYLES[btnType].text};
    font-size: 1rem;
`;

/**
 * 버튼 컴포넌트
 * @param type 색상 타입 (default, yellow, pink)
 * @param size 버튼 크기 (small, medium, large)
 * @param children 버튼에 표시할 텍스트
 * @param props 기타 props
 */
const Button = ({
                    type: colorType = "default",
                    size = "large",
                    children,
                    ...props
                }) => (
    <DefaultButton btnType={colorType} btnSize={size} {...props}>
        <ButtonText btnType={colorType}>{children}</ButtonText>
    </DefaultButton>
);

export default Button;
