
import React, { useEffect, useState } from "react";
import Logo from '../images/icons/stack_dev_logo2.png';
import imageSrc1 from '../images/icons/download_icon_white.png';
import { Outlet } from "react-router-dom";
import { useSearchParams, useNavigate} from "react-router-dom";//
// import imageSrc from '../images/icons/stack_dev_logo2.png';
// import imageSrc1 from '../images/icons/download_icon_white.png';
import chickpeas_1 from '../images/icons/chickpeas_4.png';
import chickpeas_2 from '../images/icons/chickpeas_5.png';
import chickpeas_3 from '../images/icons/chickpeas_3.png';
import config from "../config/config";

/**
 * 완료 페이지
 * @since
 * @author 김현나
 */
const SuccessPage = () => {
    const baseUrl = config.baseURL;
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

    const closeModal = () => setIsModalOpen(false); // 모달 닫기 함수
    const openModal = async() => {await get_QR();setIsModalOpen(true);} // 모달 열기 함수 : QR코드 받고 나서 열기
    const [QRImage,setQRImage] = useState("");
    const [Image,setImage] = useState("");//
    const [searchParams, setSearchParams]=useSearchParams();//
    const groupid = searchParams.get("groupid");//
    const date = searchParams.get("date");//
    useEffect(()=>{
        setImage(`${baseUrl}api/final_file?date=`+date+`&groupid=`+groupid)
    },[groupid,date])

    const get_QR = async() => {
        const response = await fetch(`${baseUrl}api/create-qr?groupid=${groupid}&date=${date}`,{method:'POST'})
        if (response.ok) {
            const blob = await response.blob()
            const imageUrl = URL.createObjectURL(blob);
            setQRImage(imageUrl);
        }
    }
    return (
        <div style={{width:'100%',height:'100%'}}>
            <img
                src={Logo}
                onClick={() => {navigate('/');}}
                alt="stack_dev_logo2"
                style={{ width: '136px', height: '78px',position:'absolute',left:'27px',top:'22px'}}
            />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:"space-between"}}>
                <div style={{ width: '136px', height: '78px',paddingLeft:'27px',paddingTop:'22px'}}></div>
                <svg width="198" height="115" viewBox="0 0 198 115" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop:"61px"}}>
                    <g filter="url(#filter0_d_13_1581)">
                        <path d="M45.2802 23.7451C48.3973 23.7451 51.1864 24.3076 53.6473 25.4326C56.1083 26.5576 58.0419 28.1279 59.4481 30.1436C60.8544 32.1592 61.5692 34.4561 61.5927 37.0342C61.5692 39.0498 61.0888 40.9131 60.1513 42.624C59.2372 44.3115 57.9481 45.7646 56.2841 46.9834C54.62 48.1787 52.6864 49.0459 50.4833 49.585V53.8389C55.2177 53.5576 59.8348 53.1123 64.3348 52.5029L65.1083 59.7451C59.2255 60.8232 53.0848 61.5381 46.6864 61.8896C40.3114 62.2412 33.6552 62.417 26.7177 62.417L25.7333 54.4717C31.077 54.4717 35.9286 54.4131 40.288 54.2959V49.6201C38.038 49.1045 36.0575 48.249 34.3466 47.0537C32.6356 45.835 31.3114 44.3701 30.3739 42.6592C29.4364 40.9482 28.9677 39.0732 28.9677 37.0342C28.9677 34.4561 29.6591 32.1592 31.0419 30.1436C32.4481 28.1279 34.3817 26.5576 36.8427 25.4326C39.327 24.3076 42.1395 23.7451 45.2802 23.7451ZM45.2802 31.3389C43.1473 31.3857 41.4598 31.8896 40.2177 32.8506C38.9755 33.8115 38.3661 35.2061 38.3895 37.0342C38.3661 38.7451 38.9872 40.0928 40.2528 41.0771C41.5184 42.0381 43.1942 42.5186 45.2802 42.5186C47.3661 42.5186 49.0184 42.0381 50.2372 41.0771C51.4794 40.1162 52.1005 38.7686 52.1005 37.0342C52.1005 35.1826 51.4911 33.7881 50.2723 32.8506C49.0536 31.8896 47.3895 31.3857 45.2802 31.3389ZM77.9052 41.1123H85.7098V49.4795H77.9052V70.5029H67.7802V21.2842H77.9052V41.1123ZM80.0848 84.6357H33.9598V66.1436H44.1552V76.5498H80.0848V84.6357ZM116.152 29.5811C116.105 34.1514 117.23 38.1826 119.527 41.6748C121.824 45.167 125.48 47.6748 130.496 49.1982L125.152 57.0732C118.684 54.8936 114.031 50.9209 111.195 45.1553C109.719 48.4365 107.68 51.2725 105.078 53.6631C102.5 56.0303 99.3477 57.8232 95.6211 59.042L90.2773 50.9561C95.6445 49.3154 99.5703 46.6201 102.055 42.8701C104.562 39.1201 105.84 34.8545 105.887 30.0732V24.5186H116.152V29.5811ZM145.684 58.9014H135.629V40.6904H124.238V32.3936H135.629V21.2139H145.684V58.9014ZM123.395 60.5186C128.012 60.5186 132.008 61.0225 135.383 62.0303C138.758 63.0146 141.348 64.4561 143.152 66.3545C144.957 68.2529 145.871 70.5264 145.895 73.1748C145.871 75.8232 144.957 78.0967 143.152 79.9951C141.348 81.8936 138.758 83.335 135.383 84.3193C132.008 85.3037 128.012 85.7842 123.395 85.7607C118.824 85.7842 114.863 85.3037 111.512 84.3193C108.16 83.335 105.582 81.8936 103.777 79.9951C101.996 78.0967 101.105 75.8232 101.105 73.1748C101.105 70.5264 101.996 68.2529 103.777 66.3545C105.582 64.4561 108.16 63.0146 111.512 62.0303C114.863 61.0225 118.824 60.5186 123.395 60.5186ZM123.395 68.3232C119.293 68.3232 116.223 68.7217 114.184 69.5186C112.168 70.292 111.16 71.5107 111.16 73.1748C111.16 76.3623 115.238 77.9561 123.395 77.9561C127.52 77.9561 130.613 77.5693 132.676 76.7959C134.762 75.999 135.816 74.792 135.84 73.1748C135.816 71.5107 134.773 70.292 132.711 69.5186C130.648 68.7217 127.543 68.3232 123.395 68.3232ZM171.134 63.4717H161.079L160.025 28.1045H172.189L171.134 63.4717ZM166.071 79.7139C164.923 79.7139 163.857 79.4326 162.872 78.8701C161.888 78.3076 161.114 77.5342 160.552 76.5498C159.989 75.5654 159.72 74.4873 159.743 73.3154C159.72 72.1904 159.989 71.1475 160.552 70.1865C161.114 69.2256 161.888 68.4639 162.872 67.9014C163.857 67.3389 164.923 67.0576 166.071 67.0576C167.173 67.0576 168.204 67.3389 169.165 67.9014C170.15 68.4639 170.935 69.2256 171.521 70.1865C172.13 71.1475 172.446 72.1904 172.47 73.3154C172.446 74.4873 172.142 75.5654 171.556 76.5498C170.97 77.5107 170.185 78.2842 169.2 78.8701C168.216 79.4326 167.173 79.7139 166.071 79.7139Z" fill="black"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_13_1581" x="0.733398" y="0.213867" width="196.736" height="114.582" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="12.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.917647 0 0 0 0 0.945098 0 0 0 0.4 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_1581"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_1581" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <div style={{ width: '136px', height: '78px',paddingLeft:'27px',paddingTop:'22px'}}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    <div>
                        <img src={chickpeas_1} alt="유형2" style={{transform: "rotate(-12.73deg)",width:'171.5px',
                            height:'auto',}} />
                    </div>
                    <div>
                        <img src={Image} alt="유형6" style={{width:'auto',maxWidth:"800px",height:'552px',marginLeft:'86px',marginRight:'86px',}} />
                    </div>
                    <div style={{paddingRight:"30px"}}>
                        <img src={chickpeas_2} alt="유형3" style={{
                            transform: 'rotate(20.016deg)',
                            width:'157px',
                            height:'auto',
                            flexShrink: '0'}} />
                    </div>

                </div>
            </div>





            {/* 모달 열기 버튼 */}
            <button
                onClick={openModal}
                style={{
                    position: 'absolute',
                    bottom: '60px',
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
                    <path d="M33.25 21.875V27.7083C33.25 28.4819 32.9164 29.2237 32.3225 29.7707C31.7286 30.3177 30.9232 30.625 30.0833 30.625H7.91667C7.07681 30.625 6.27136 30.3177 5.6775 29.7707C5.08363 29.2237 4.75 28.4819 4.75 27.7083V21.875M11.0833 14.5833L19 21.875M19 21.875L26.9167 14.5833M19 21.875V4.375" stroke="#D2D5DC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {/* 모달 창 */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,

                }}
                >

                    <div style={{
                        width: '735px', // 모달 창 너비
                        height: '528px', // 모달 창 높이
                        backgroundColor: '#FFF',
                        border: '2px solid #000', // 2px stroke
                        borderRadius: '20px',
                        textAlign: 'center',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        position: 'relative' // 자식 요소에 절대 위치 지정 가능
                    }}>

                        {/* 이미지 상단에 걸치도록 배치 */}

                        <img src={chickpeas_3} alt="chick3" style={{
                            position: 'absolute',
                            top: '-80px', // 모달 상단에 걸치도록 조정
                            left: '80%',
                            transform: 'translateX(-50%)', // 중앙 정렬
                            width: '150px', // 이미지 크기 조정
                            height: 'auto',
                            zIndex: 1020 // 다른 요소 위에 표시되도록
                        }} />
                        <div style={{display:"flex",justifyContent:"end",paddingRight:"30px",paddingTop:"30px"}}>
                            <button style={{background:"none",border:"none",fontSize:"3rem"}} onClick={closeModal}>×</button>
                        </div>

                        <h2 style={{
                            fontSize: '55px',
                            position: 'absolute',
                            top: '1px', // 원하는 상단 위치 설정
                            left: '50%',
                            transform: 'translateX(-50%)', // 가운데 정렬
                            zIndex: 1010 // 다른 요소 위에 표시되도록
                        }}>
                            다운로드
                        </h2>


                        <p style={{ marginTop: '50px', marginBottom: '42px', fontSize: '24px',zIndex: 1010 }}>
                            휴대폰 카메라를 열고 QR코드를 스캔하세요
                        </p>

                        <img src={QRImage} alt="qr_image" style={{width:'250px',height:'250px',zIndex: 1010}}/>

                        <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '1.5rem',zIndex: 1010 }}>
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
                                    zIndex: 1020 // 다른 요소 위에 표시되도록

                                }}
                                onClick={()=>{window.location.href="/"}}
                            >
                                메인으로

                                <svg width="15" height="15" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4375 22.1875L9.90625 19.6875L16.6562 12.9375H0.78125V9.25H16.6562L9.90625 2.53125L12.4375 0.03125L23.5312 11.0938L12.4375 22.1875Z" fill="#D2D5DC"/>
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