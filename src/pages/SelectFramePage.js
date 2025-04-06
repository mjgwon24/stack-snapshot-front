import React,{useState} from "react";
import { Outlet,Link, useNavigate } from "react-router-dom";
import "../css/App.css";
import "../css/page.css"
import logo from "../images/icons/stack_dev_logo2.png"
import frame1 from "../images/frames/1.png"
import frame2 from "../images/frames/2.png"
import frame3 from "../images/frames/3.png"
import frame41 from "../images/frames/4-1.png"
import frame42 from "../images/frames/4-2.png"
/**
 * 프레임 선택 페이지
 * @since 2024.10.25
 * @author 김이현
 */
const SelectFramePage = () => {
    const navigate = useNavigate();
    const FRAMES = {
        "frame1":{"shape_small":[125,192],"shape_big":[330,506],"realsize":[600,920],"frame":frame1,"selected":false,"frameID":1,"maxCount":4},
        "frame2":{"shape_small":[125,192],"shape_big":[330,506],"realsize":[600,920],"frame":frame2,"selected":false,"frameID":2,"maxCount":4},
        // "frame2":{"shape_small":[125,192],"shape_big":[330,506],"realsize":[600,920],"frame":frame2,"selected":false,"frameID":2,"maxCount":6},
        "frame3":{"shape_small":[125,192],"shape_big":[330,506],"realsize":[600,920],"frame":frame3,"selected":false,"frameID":3,"maxCount":4},
        "frame4":{"shape_small":[188,125],"shape_big":[495,330],"realsize":[900,600],"frame":(new Date().getDate())==1?frame42:frame41,"selected":false,"frameID":4,"maxCount":4}
    };
    const [currnetFrame, setCurrnetFrame] = useState(frame1);
    const [currnetFrameClass, setCurrnetFrameClass] = useState("frame1");
    //shape_small<->shape_big 2.64배
    //shape_big<->realsize 1.1818181...배
    const [frames,setFrames] = useState(FRAMES);
    const init_frames = ()=>{
        setFrames(FRAMES);
    }

    const change_frame = (frameKey) => {
        init_frames();
        setFrames((prevFrames) => {
            const updatedFrames = Object.keys(prevFrames).reduce((acc, key) => {
                acc[key] = {
                    ...prevFrames[key],
                    selected: key === frameKey // 선택한 프레임만 true로 설정
                };
                return acc;
            }, {});

            return updatedFrames;
        });

        setCurrnetFrame(FRAMES[frameKey].frame);
        setCurrnetFrameClass(frameKey);
    };
    return (
        <div className="flex flex-column items-center justify-center width-full height-vh-100">
            <div className="width-full flex justify-center">
                <img
                    className="logo"
                    onClick={() => navigate('/')}
                    src={logo}
                    alt="stack_dev_logo1"
                />
            </div>

            <div className="height-800px">
                <div className="flex justify-center margin-top-50px">
                    <svg width="428" height="93" viewBox="0 0 428 93" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                        <g filter="url(#filter0_d_13_1800)">
                            <path
                                d="M84.8625 78.5186H25.8703V70.1514H84.8625V78.5186ZM80.1516 34.7139H71.4328V53.2061H79.8V61.2217H30.5813V53.2061H38.8078V34.7139H30.3V26.6279H80.1516V34.7139ZM61.4484 53.2061V34.7139H48.9328V53.2061H61.4484ZM115.446 52.5732H102.368V62.5225C105.813 62.4521 108.895 62.3232 111.614 62.1357C114.356 61.9248 117.133 61.5498 119.946 61.0107L120.789 69.167C117.086 69.8701 113.465 70.3271 109.926 70.5381C106.387 70.749 102.18 70.8545 97.305 70.8545H92.6644V44.6982H105.672V35.417H92.5941V27.4014H115.446V52.5732ZM146.946 85.7607H137.383V21.2139H146.946V85.7607ZM133.516 82.7373H124.094V51.0264H118.047V42.8701H124.094V22.3389H133.516V82.7373ZM210.294 57.6357H200.169V21.2842H210.294V57.6357ZM210.294 85.0576H166.701V60.3779H210.294V85.0576ZM176.615 76.9717H200.38V68.3232H176.615V76.9717ZM174.787 24.0967C178.138 24.0967 181.173 24.7646 183.892 26.1006C186.611 27.4365 188.744 29.2998 190.29 31.6904C191.861 34.0576 192.646 36.7529 192.646 39.7764C192.646 42.7061 191.861 45.3545 190.29 47.7217C188.744 50.0889 186.599 51.9521 183.857 53.3115C181.138 54.6475 178.115 55.3154 174.787 55.3154C171.458 55.3154 168.423 54.6475 165.681 53.3115C162.962 51.9521 160.818 50.0889 159.247 47.7217C157.677 45.3545 156.904 42.7061 156.927 39.7764C156.904 36.7529 157.665 34.0576 159.212 31.6904C160.783 29.2998 162.927 27.4365 165.646 26.1006C168.388 24.7646 171.435 24.0967 174.787 24.0967ZM174.787 32.6045C172.372 32.5576 170.427 33.167 168.951 34.4326C167.497 35.6982 166.771 37.4795 166.771 39.7764C166.771 41.9561 167.509 43.6787 168.986 44.9443C170.462 46.1865 172.396 46.8076 174.787 46.8076C177.107 46.8076 178.982 46.1865 180.412 44.9443C181.865 43.6787 182.591 41.9561 182.591 39.7764C182.591 37.4795 181.876 35.6982 180.447 34.4326C179.017 33.167 177.13 32.5576 174.787 32.6045ZM264.992 31.9717C264.992 36.4014 266.14 40.4092 268.437 43.9951C270.758 47.5576 274.39 50.1592 279.336 51.7998L273.851 59.6045C270.617 58.4326 267.851 56.792 265.554 54.6826C263.258 52.5732 261.418 50.0654 260.035 47.1592C258.605 50.4639 256.648 53.3115 254.164 55.7021C251.679 58.0693 248.656 59.8857 245.093 61.1514L239.609 53.2061C244.836 51.542 248.656 48.8115 251.07 45.0146C253.508 41.2178 254.726 36.8467 254.726 31.9014V25.2217H264.992V31.9717ZM294.804 68.7451H284.75V42.6592H273.359V34.5732H284.75V21.2842H294.804V68.7451ZM296.14 84.7061H251.492V63.8936H261.758V76.6201H296.14V84.7061ZM332.981 33.4482H317.02V37.9482H332.348V45.542H317.02V50.2529C320.442 50.2061 323.489 50.0889 326.161 49.9014C328.833 49.6904 331.528 49.3623 334.247 48.917L335.231 57.0029C331.692 57.5889 328.2 57.9873 324.755 58.1982C321.333 58.3857 317.02 58.4795 311.817 58.4795H307.317V25.4326H332.981V33.4482ZM360.895 60.6592H351.263V44.7686H346.833V60.2373H337.411V22.4092H346.833V36.6826H351.263V21.2842H360.895V60.6592ZM360.895 85.7607H350.77V71.2061H315.966V63.1904H360.895V85.7607Z"
                                fill="black"
                            />
                        </g>
                        <defs>
                            <filter id="filter0_d_13_1800" x="0.8703" y="0.213867" width="385.025" height="114.547" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="12.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.917647 0 0 0 0 0.945098 0 0 0 0.4 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_1800" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_1800" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                <div className="flex flex-row gap-5rem items-center width-full margin-top-50px">
                    <div className="flex justify-center items-center mt-20px main-frame">
                        <img className={`${currnetFrameClass} big`} src={currnetFrame} alt="mainframe" />
                    </div>

                    <div className="flex justify-center items-center div-frame-grid">
                        <div className="flex flex-wrap justify-center gap-1rem frame-grid">
                            {Object.keys(frames).map((value) => (
                                <img
                                    className={`frame ${value} small ${frames[value]["selected"] ? "selected" : ""} cursor-pointer`}
                                    src={frames[value]["frame"]}
                                    alt={`${value}`}
                                    onClick={() => change_frame(value)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-20px next-btn">
                    {Object.keys(frames).reduce((acc, key) => acc || frames[key]["selected"], false) ? (
                        <Link to={`/picture?frameid=${FRAMES[currnetFrameClass]["frameID"]}`}>
                            <svg className="next-btn-svg" width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="75" height="75" rx="12" fill="#080E1C" />
                                <path d="M35.1328 47.3594L43.5703 38.9219H23.7266V34.3125H43.5703L35.1328 25.9141L38.2969 22.7891L52.1641 36.6172L38.2969 50.4844L35.1328 47.3594Z" fill="#D2D5DC" />
                            </svg>
                        </Link>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
};

export default SelectFramePage;