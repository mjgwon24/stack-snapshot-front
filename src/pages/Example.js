import {OuterLayout, PageTitle} from "../components/layout/CommonLayout";
import StepIndicator from "../components/step/StepIndicator";
import React from "react";
import InnerBox from "../components/layout/InnerBox";
import Button from "../components/common/Button";
import {useNavigate} from "react-router-dom";
import {useFrameStore} from "../store/useFrameStore";

const Example = () => {
    const navigate = useNavigate();

    // 프레임 선택 상태 저장 스토어
    const selectedFrame = useFrameStore((state) => state.selectedFrame);

    return (
        <>
            {/* ===== 페이지 레이아웃 ===== */}
            <OuterLayout>
                <StepIndicator currentStep={2} stepCount={3} />

                <InnerBox>
                    <PageTitle>
                        <span>span을 쓰면 노란색</span><br />span안쓰면 검정
                    </PageTitle>

                    {/* 여기에 내부 요소 구현 */}

                </InnerBox>
            </OuterLayout>



            {/* ===== 컴포넌트 라이브러리 ===== */}
            <div className="flex flex-col w-full pb-52 items-center justify-center">
                <PageTitle>컴포넌트 라이브러리</PageTitle>

                <PageTitle><span>Button</span></PageTitle>
                <div className="flex flex-row gap-10 mb-20">
                    <div className="flex flex-col items-center gap-2">
                        기본 색상, 작은 사이즈 버튼
                        <Button type="default" size="small" onClick={() => navigate('/')}>
                            버튼
                        </Button>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        노란 색상, 중간 사이즈 버튼
                        <Button type="yellow" size="medium" onClick={() => navigate('/')}>
                            버튼
                        </Button>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        핑크 색상, 큰 사이즈 버튼
                        <Button type="pink" size="large" onClick={() => navigate('/')}>
                            버튼
                        </Button>
                    </div>
                </div>

                <PageTitle><span>InnerBox</span></PageTitle>
                <div className="flex flex-row gap-10 mb-20">
                    <div className="flex flex-col items-center gap-2">
                        <p>showIcon false</p>
                        <InnerBox showIcon={false}></InnerBox>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p>showIcon true</p>
                        <InnerBox showIcon={true}></InnerBox>
                    </div>
                </div>

                <PageTitle><span>StepIndicator</span></PageTitle>
                <div className="flex flex-row gap-10 mb-20">
                    <div className="flex flex-col items-center gap-2">
                        <p>currentStep 1, stepCount 3, allCompleted false</p>
                        <StepIndicator currentStep={1} stepCount={3} allCompleted={false} />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p>currentStep 2, stepCount 3, allCompleted false</p>
                        <StepIndicator currentStep={2} stepCount={3} allCompleted={false} />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p>currentStep 3, stepCount 3, allCompleted false</p>
                        <StepIndicator currentStep={3} stepCount={3} allCompleted={false} />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p>currentStep 3, stepCount 3, allCompleted true</p>
                        <StepIndicator currentStep={3} stepCount={3} allCompleted={true} />
                    </div>
                </div>

                <PageTitle><span>useFrameStore</span></PageTitle>
                <div className="flex flex-row gap-10 mb-20">
                    <div className="flex flex-col items-center gap-2">
                        <p>선택한 프레임을 어느 페이지에서든지 조회할 수 있습니다.</p>
                        <p>현재 선택한 프레임: {selectedFrame}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Example;