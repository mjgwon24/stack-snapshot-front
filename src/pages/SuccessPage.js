import React, { useEffect, useState } from "react";
import Logo from '../images/icons/stack_dev_logo2.png';
import { useSearchParams, useNavigate } from "react-router-dom";
import chickpeas_1 from '../images/icons/chickpeas_4.png';
import chickpeas_2 from '../images/icons/chickpeas_5.png';
import chickpeas_3 from '../images/icons/chickpeas_3.png';
import config from "../config/config";

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
        <div style={{ width: '100%', height: '100%' }}>
            <img
                src={Logo}
                onClick={() => { navigate('/'); }}
                alt="stack_dev_logo2"
                style={{ width: '136px', height: '78px', position: 'absolute', left: '27px', top: '22px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                <div style={{ width: '136px', height: '78px', paddingLeft: '27px', paddingTop: '22px' }}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    <div>
                        <img src={chickpeas_1} alt="유형2" style={{ transform: "rotate(-12.73deg)", width: '171.5px', height: 'auto', }} />
                    </div>
                    <div>
                        <img src={Image} alt="유형6" style={{ width: 'auto', maxWidth: "800px", height: '552px', marginLeft: '86px', marginRight: '86px', }} />
                    </div>
                    <div style={{ paddingRight: "30px" }}>
                        <img src={chickpeas_2} alt="유형3" style={{
                            transform: 'rotate(20.016deg)',
                            width: '157px',
                            height: 'auto',
                            flexShrink: '0'
                        }} />
                    </div>
                </div>
            </div>

            <button
                onClick={openModal}
                style={{
                    position: 'absolute',
                    bottom: '140px',
                    right: '60px',
                    width: '75px',
                    height: '75px',
                    backgroundColor: '#080E1C',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    pointerEvents: 'auto'
                }}
            >
                <svg width="38" height="35" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.25 21.875V27.7083C33.25 28.4819 32.9164 29.2237 32.3225 29.7707C31.7286 30.3177 30.9232 30.625 30.0833 30.625H7.91667C7.07681 30.625 6.27136 30.3177 5.6775 29.7707C5.08363 29.2237 4.75 28.4819 4.75 27.7083V21.875M11.0833 14.5833L19 21.875M19 21.875L26.9167 14.5833M19 21.875V4.375" stroke="#D2D5DC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                }}
                >

                    <div style={{
                        width: '735px',
                        height: '528px',
                        backgroundColor: '#FFF',
                        border: '2px solid #000',
                        borderRadius: '20px',
                        textAlign: 'center',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        position: 'relative'
                    }}>
                        <img src={chickpeas_3} alt="chick3" style={{
                            position: 'absolute',
                            top: '-80px',
                            left: '80%',
                            transform: 'translateX(-50%)',
                            width: '150px',
                            height: 'auto',
                            zIndex: 1020
                        }} />
                        <div style={{ display: "flex", justifyContent: "end", paddingRight: "30px", paddingTop: "30px" }}>
                            <button style={{ background: "none", border: "none", fontSize: "3rem", color: "#000" }} onClick={closeModal}>×</button>
                        </div>

                        <h2 style={{
                            fontSize: '55px',
                            position: 'absolute',
                            top: '1px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 1010
                        }}>
                            다운로드
                        </h2>

                        <p style={{ marginTop: '50px', marginBottom: '42px', fontSize: '24px', zIndex: 1010 }}>
                            휴대폰 카메라를 열고 QR코드를 스캔하세요
                        </p>

                        <img src={QRImage} alt="qr_image" style={{ width: '250px', height: '250px', zIndex: 1010 }} />

                        <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
                            <button
                                style={{
                                    width: '150px',
                                    height: '45px',
                                    flexShrink: 0,
                                    backgroundColor: '#080E1C',
                                    color: '#D2D5DC',
                                    border: 'none',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    zIndex: 1020,
                                    position: 'relative',
                                    bottom: '20px',
                                }}
                                onClick={() => {
                                    navigate('/picture/draw');
                                }}
                            >
                                행운의 뽑기
                                <svg width="15" height="15" viewBox="0 0 24 23" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.4375 22.1875L9.90625 19.6875L16.6562 12.9375H0.78125V9.25H16.6562L9.90625 2.53125L12.4375 0.03125L23.5312 11.0938L12.4375 22.1875Z"
                                        fill="#D2D5DC"/>
                                </svg>
                            </button>

                            <button
                                style={{
                                    width: '150px',
                                    height: '45px',
                                    flexShrink: 0,
                                    backgroundColor: '#080E1C',
                                    color: '#D2D5DC',
                                    border: 'none',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    zIndex: 1020,
                                    position: 'relative',
                                    bottom: '20px',
                                }}
                                onClick={() => {
                                    window.location.href = "/"
                                }}
                            >
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
