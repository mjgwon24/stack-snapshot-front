import React, { useEffect, useState } from "react";
import Logo from '../images/icons/stack_dev_logo2.png';
import { useSearchParams, useNavigate } from "react-router-dom";
import chickpeas_1 from '../images/icons/chickpeas_4.png';
import chickpeas_2 from '../images/icons/chickpeas_5.png';
import chickpeas_3 from '../images/icons/chickpeas_3.png';
import config from "../config/config";
import "../css/page.css"
import "../css/style.css"

/**
 * 성공 페이지
 * @since 2024.10.30
 * @author 김현나, 임석진
 */
const SuccessPage = () => {
    const baseUrl = config.baseURL;
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = async () => {
        await get_QR();
        setIsModalOpen(true);
    };

    const [QRImage, setQRImage] = useState("");
    const [Image, setImage] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const groupid = searchParams.get("groupid");
    const date = searchParams.get("date");

    useEffect(() => {
        setImage(`${baseUrl}api/final_file?date=` + date + `&groupid=` + groupid);
    }, [groupid, date]);

    const get_QR = async () => {
        const response = await fetch(`${baseUrl}api/create-qr?groupid=${groupid}&date=${date}`, { method: 'POST' });
        if (response.ok) {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setQRImage(imageUrl);
        }
    };

    return (
        <div className="width-full height-full">
            <img className="width-136px height-78px position-absolute left-27px top-22px"
                src={Logo} alt="stack_dev_logo2"
                onClick={() => { navigate('/'); }}
            />
            <div className="flex items-center justify-between">
                <div className="width-136px height-78px padding-left-27px padding-top-22px"></div>
            </div>
            <div className="flex flex-column items-center point-auto">
                <div className="flex items-center margin-top-20px">
                    <div>
                        <img className="height-auto transform-rotate-minus-12deg width-171px"
                            src={chickpeas_1} alt="유형2"/>
                    </div>
                    <div>
                        <img className="width-auto max-width-800px height-552px margin-right-86px margin-left-86px"
                            src={Image} alt="유형6"/>
                    </div>
                    <div className="padding-right-30px">
                        <img className="flex-shrink-0 height-auto width-150px transform-rotate-20deg"
                            src={chickpeas_2} alt="유형3"/>
                    </div>
                </div>
            </div>

            <button className="position-absolute rounded-12px cursor-pointer point-auto bg-080E1C width-75px height-75px bottom-140px right-60px"
                onClick={openModal}>
                <svg width="38" height="35" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.25 21.875V27.7083C33.25 28.4819 32.9164 29.2237 32.3225 29.7707C31.7286 30.3177 30.9232 30.625 30.0833 30.625H7.91667C7.07681 30.625 6.27136 30.3177 5.6775 29.7707C5.08363 29.2237 4.75 28.4819 4.75 27.7083V21.875M11.0833 14.5833L19 21.875M19 21.875L26.9167 14.5833M19 21.875V4.375" stroke="#D2D5DC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {isModalOpen && (
                <div className="flex items-center justify-center z-index-1 position-fixed top-0 left-0 width-vw-100 height-vh-100 bg-black-05">
                    <div className="position-relative text-center bg-white rounded-20px border-2px-solid-black width-735px height-528px boxshadow-0-4-8-rgba-0-0-0-0-2">
                        <img className="position-absolute top-minus-80px left-80-percent transform-x-minus-50-percent z-index-170 width-150px height-auto"
                            src={chickpeas_3} alt="chick3" />
                        <div className="flex justify-end padding-right-30px padding-top-30px">
                            <button className="border-none color-black font-size-3rem bg-none" onClick={closeModal}>×</button>
                        </div>

                        <h2 className="font-size-55px position-absolute transform-x-minus-50-percent z-index-150 top-1px left-50-percent">
                            다운로드
                        </h2>

                        <p className="margin-top-50px margin-bottom-40px font-size-24px z-index-150">
                            휴대폰 카메라를 열고 QR코드를 스캔하세요
                        </p>

                        <img className="width-250px height-250px z-index-150"
                            src={QRImage} alt="qr_image" />
                        <div className="flex justify-between margin-20px">
                            <button className="flex items-center justify-center gap-8px z-index-200 position-relative bottom-20px width-150px height-45px flex-shrink-0 border-none rounded-10px cursor-pointer color-D2D5DC bg-080E1C"
                                onClick={() => { navigate('/picture/draw'); }}>행운의 뽑기
                                <svg width="15" height="15" viewBox="0 0 24 23" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.4375 22.1875L9.90625 19.6875L16.6562 12.9375H0.78125V9.25H16.6562L9.90625 2.53125L12.4375 0.03125L23.5312 11.0938L12.4375 22.1875Z"
                                        fill="#D2D5DC"/>
                                </svg>
                            </button>

                            <button className="flex items-center justify-center position-relative bottom-20px z-index-200 cursor-pointer width-150px height-45px rounded-10px gap-8px color-D2D5DC bg-080E1C flex-shrink-0"
                                onClick={() => { window.location.href = "/" }}>
                                메인으로
                                <svg width="15" height="15" viewBox="0 0 24 23" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.4375 22.1875L9.90625 19.6875L16.6562 12.9375H0.78125V9.25H16.6562L9.90625 2.53125L12.4375 0.03125L23.5312 11.0938L12.4375 22.1875Z"
                                        fill="#D2D5DC"/>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default SuccessPage;
