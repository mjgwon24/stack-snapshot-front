import styled from "@emotion/styled";

/**
 * 최상단 레이아웃 - 모든 페이지 공통
 */
export const OuterLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 600px;
  width: 100%;
  min-height: 890px;
  height: 100vh;
  gap: 1.75rem;
`;

/**
 * 제목 스타일 - 모든 페이지 공통
 */
export const PageTitle = styled.p`
  font-family: Pretendard-ExtraBold, sans-serif;
  font-size: 30px;
  line-height: 1.25;
  text-align: center;
  margin-bottom: 1.5rem;
  span {
    color: #FFB200;
  }
`;
