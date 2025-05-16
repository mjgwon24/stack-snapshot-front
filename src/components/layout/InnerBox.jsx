import React from "react";
import styled from "@emotion/styled";
import PictureIcon from "../../images/icons/picture-icon.png";

const RelativeWrapper = styled.div`
    position: relative;
    width: 550px;
    height: 750px;
`;

const InnerBoxWrapper = styled.div`
    background: #FFFDF0;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    border: 1px solid #F2D219;
    box-shadow: 4px 10px 30px 10px rgba(236, 208, 16, 0.40);
`;

const IconContainer = styled.div`
  position: absolute;
  top: -5rem;
  right: -11rem;
  transform: translateX(-50%);
  z-index: 10;
`;

/**
 * 내부 박스 레이아웃 - 모든 페이지 공통
 * @param {boolean} showIcon 아이콘 표시 여부
 * @param {React.ReactNode} children
 */
const InnerBox = ({ showIcon = false, children, ...props }) => (
    <RelativeWrapper>
        {showIcon && (
            <IconContainer>
                <img src={PictureIcon} alt="아이콘" style={{ width: 190 }} />
            </IconContainer>
        )}
        <InnerBoxWrapper {...props}>
            {children}
        </InnerBoxWrapper>
    </RelativeWrapper>
);

export default InnerBox;
