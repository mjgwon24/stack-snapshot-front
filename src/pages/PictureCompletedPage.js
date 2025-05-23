import React from "react";
import {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo1 from '../images/icons/stack_dev_logo2.png';
import logo2 from '../images/icons/arrow_right_black.png';
import logo3 from '../images/icons/PictureCompletedPage_imoticon.png';
import "../css/mainPage.css"
import "../css/style.css"


/**
 * 사진 촬영 페이지
 * @since 2024.10.17
 * author 임석진
 */
const PictureCompletedPage = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [photoUrls,setPhotoUrls] = useState(location.state.data || {});
    const [frameid,setFrameid] = useState(location.state.frameid || {});
    // console.log(location);
    console.log(location.state.data);

    const handleNextClick = () => {
        navigate(`/picture/select-photo?date=${photoUrls[0].split("_")[2]}_${photoUrls[0].split("_")[3]}&groupid=${photoUrls[0].split("_")[1]}&frameid=${frameid}`, { state: { photoUrls } }); // photoUrls 데이터를 함께 전달
    };

    return (
        <div className="camera-container background-yellow">
            <div className="header">
                <img src={logo1} alt="Stack Logo" className="stack_logo" onClick={() => {navigate('/');}} />
            </div>
            <img src={logo3} alt="imoticon" className="PictureCompletedPage_imoticon" />

            <div className="camera-button-container">
                <button className="next-button weight-500" onClick={handleNextClick}>
                    <span className="weight-700">다음</span>
                    <img src={logo2} alt="Arrow-right" className="arrow-right" />
                </button>
            </div>

            <div className="photo-container">
                {photoUrls.length === 0 ? (
                    <p>사진이 없습니다.</p>
                ) : (
                    <div className="flex justify-center gap-55px flex-wrap photos-grid margin-top-100px">
                        {photoUrls.map((url, index) => (
                            <div key={index}>
                                <img className="width-150px height-150px margin-bottom-10px"
                                    src={process.env.REACT_APP_BACKEND_URL + `/photos/group/${groupid}/${index+1}`}
                                    alt={`사진 ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PictureCompletedPage;