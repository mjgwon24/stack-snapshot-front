
import "../css/SelectPhoto.css"
import logo from "../images/icons/stack_dev_logo2.png"
import { Outlet,Link,useSearchParams, useNavigate,useLocation } from "react-router-dom";
import { OuterLayout, PageTitle } from "../components/layout/CommonLayout";
import StepIndicator from "../components/step/StepIndicator";
import InnerBox from "../components/layout/InnerBox";
import Button from "../components/common/Button";
import React,{useEffect,useState} from "react";
import frame1 from "../images/frames/1.png"
import frame2 from "../images/frames/2.png"
import frame3 from "../images/frames/3.png"
import frame4 from "../images/frames/4.png"
import blank from "../images/blank.png"
import { useFrameStore } from "../store/useFrameStore";
import { useGroupStore } from "../store/useGroupStore";
import { useDateStore } from "../store/useDateStore";
import { useImageStore } from "../store/useImageStore";
import { useTimeStore } from "../store/useTimeStore";

/**
 * 사진 선택 페이지
 * @since 2024.10.29
 * @author 김이현
 */
const SelectPhotoPage = () => {
    const FRAMES = {
        "frame1":{"frame":frame1,"selected":false,"selectedFrame":1,"maxCount":4},
        "frame2":{"frame":frame2,"selected":false,"selectedFrame":2,"maxCount":4},
        "frame3":{"frame":frame3,"selected":false,"selectedFrame":3,"maxCount":4},
        "frame4":{"frame":frame4,"selected":false,"selectedFrame":4,"maxCount":4},
    };
    

    //초기에 불러오는 사진들
    const photos = useImageStore((state) => state.images);
    const setPhotos = useImageStore((state) => state.setImages);
    const location = useLocation();

    //선택한 사진들, 순서대로
    const [SelectedPhotos, setSelectedPhotos] = useState([blank,blank,blank,blank]);
    const [currnetFrame, setCurrnetFrame] = useState(FRAMES["frame1"]);
    // const [nowDate,setNowDate] = useState(1);
    const [nowDate,setNowDate] = useState(new Date().getDate() || null);
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    // PictureCompletedPage에서 넘겨주는 쿼리 파라미터 3개 selectedFrame groupId date
    const selectedFrame = useFrameStore((state) => state.selectedFrame);
    const setSelectedFrame = useFrameStore((state) => state.setSelectedFrame);
    const groupId = useGroupStore((state) => state.groupId);
    const setGroupId = useGroupStore((state) => state.setGroupId);
    const {date,setDate} = useDateStore();

    const time = useTimeStore((state) => state.time);
    const setTime = useTimeStore((state) => state.setTime);
    useEffect(()=>{
        console.log(selectedFrame);
        console.log(groupId);
        console.log(photos);
    },[])

    const getFirstIndex = ()=>{
        for(let i=0;i<SelectedPhotos.length;i++){
            if(SelectedPhotos[i]==blank){
                return i;
            }
        }
        return -1;
    }
    const getSelectedPhoto = ()=>{
        let res = [];
        for(let i=0;i<SelectedPhotos.length;i++){
            if(SelectedPhotos[i]!==blank&&SelectedPhotos[i]!==null){
                res.push(photos[i])
            }
        }
        return res
    }
    const setPhoto = (index,photo)=>{
        if(SelectedPhotos.includes(photo)){return;}
        setSelectedPhotos(prevPhotos => {
            const newPhotos = [...prevPhotos];
            newPhotos[index] = photo;
            return newPhotos;
        });
    }
    const addPhoto = (ind) => {
        let box_index = getFirstIndex()
        if(box_index!=-1&&currnetFrame["maxCount"]>box_index){
            console.log(photos);
            setPhoto(box_index,process.env.REACT_APP_BACKEND_URL + `/photos/group/${groupId}/${ind+1}`);
            setIndex(index+1);
        }
    }
    const removePhoto = (ind) => {
        setSelectedPhotos(prevPhotos => {
            const newPhotos = [...prevPhotos];
            newPhotos[ind] = blank;
            return newPhotos;
        });
        setIndex(index-1);
        getFirstIndex();
    }
    const sendFiles = async () => {
        try {
            const images = getSelectedPhoto();
            console.log(JSON.stringify({"groupId":groupId,
                "selectedFrameId":selectedFrame,
                "selectPhotoNames":images}));
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/photos/frames", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"groupId":groupId,
                "selectedFrameId":selectedFrame,
                "selectPhotoNames":images}),
            })
            if (response.ok) {
                let res = await response.json();
                console.log(res)
                setTime(res.timeStamp);
                await navigate(`/picture/success`);
                // await navigate(`/picture/success?groupId=${groupId}&date=${res['outputPath']}`);
            } else {
                console.error("Failed to send files");
            }
        } catch (error) {
            console.error("Error sending files:", error);
        }
    };
    const togglePhoto =(index)=>{
        if(SelectedPhotos.indexOf(process.env.REACT_APP_BACKEND_URL + `/photos/group/${groupId}/${index+1}`)!=-1){
            console.log("remove "+index);
            removePhoto(SelectedPhotos.indexOf(process.env.REACT_APP_BACKEND_URL + `/photos/group/${groupId}/${index+1}`));
        }
        else{
            console.log("add "+index);
            addPhoto(index);
        }
    }
    const FrameComponent1 = (Images) => {
        return (
            <div className="flex flex-wrap w-[200px] gap-1 p-[6px]">
                {Images.map((img, index) => (
                    <img
                    src={img}
                    key={index}
                    className="w-[91px] h-[122px] border border-black flex items-center justify-center cursor-pointer"
                    onClick={()=>{removePhoto(index)}}
                    />
                ))}
            </div>);
    }
    const FrameComponent2 = (Images) => {
        return (
            <div className="flex flex-wrap w-[200px] gap-1 p-[6px]">
                {Images.map((img, index) => (
                    <img
                    src={img}
                    key={index}
                    className="w-[91px] h-[122px] border border-black flex items-center justify-center cursor-pointer"
                    onClick={()=>{removePhoto(index)}}
                    />
                ))}
            </div>);
    }
    const FrameComponent3 = (Images) => {
        return (
            <div className="flex flex-row w-[200px] gap-[6px] pl-[10px] pt-[12px]">
                <div className="flex flex-col gap-[6.5px]">
                    <img
                        src={Images[0]}
                        key={0}
                        className="w-[87px] h-[106px] border border-black flex items-center justify-center rounded-md cursor-pointer"
                        onClick={()=>{removePhoto(0)}}
                    />
                    <img
                        src={Images[1]}
                        key={1}
                        className="w-[87px] h-[106px] border border-black flex items-center justify-center rounded-md cursor-pointer"
                        onClick={()=>{removePhoto(1)}}
                    />
                </div>
                <div className="pt-[55px] flex flex-col gap-[6.5px]">
                    <img
                        src={Images[2]}
                        key={2}
                        className="w-[87px] h-[106px] border border-black flex items-center justify-center rounded-md cursor-pointer"
                        onClick={()=>{removePhoto(2)}}
                    />
                    <img
                        src={Images[3]}
                        key={3}
                        className="w-[87px] h-[106px] border border-black flex items-center justify-center rounded-md cursor-pointer"
                        onClick={()=>{removePhoto(3)}}
                    />
                </div>
                
            </div>);
    }
    const FrameComponent4 = (Images) => {
        return (
            <div className="flex flex-wrap w-[350px] gap-[5px] pt-[8px] pl-[6px]">
                {Images.map((img, index) => (
                    <img
                    src={img}
                    key={index}
                    className="w-[138px] h-[111px] border border-black flex items-center justify-center cursor-pointer"
                    onClick={()=>{removePhoto(index)}}
                    />
                ))}
            </div>);
    }
    const FrameComponents = [FrameComponent1,FrameComponent2,FrameComponent3,FrameComponent4];
    return (
        <OuterLayout>
            <StepIndicator currentStep={3} stepCount={3} />
            <InnerBox className="p-8 pb-4">
                <PageTitle>마음에 드는 사진을<br/><span>{FRAMES[`frame${selectedFrame+1}`]["maxCount"]}장</span> 선택해주세요!</PageTitle>
                
                <div className="w-full flex flex-col gap-3">
                    <div className={`flex flex-col justify-center ${selectedFrame==3?"h-[242px]":""}`}>
                        <div className="w-full flex flex-row justify-center relative">
                            <img className={`z-0 ${selectedFrame==3?"h-[75%]":"w-[40%]"} pointer-events-none`} src={FRAMES[`frame${selectedFrame+1}`]['frame']}/>
                            <div className="absolute z-10">
                                {FrameComponents[selectedFrame](SelectedPhotos)}
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full max-w-[600px] mx-auto p-2 rounded-2xl border border-yellow-500 bg-white shadow overflow-hidden">
                        {/* Gradient overlay */}
                        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_right,white_0%,transparent_5%,transparent_95%,white_100%)] rounded-2xl" />

                        {/* Scrollable content */}
                        <div className="flex overflow-x-auto gap-4 px-4 py-2 scrollbar-hide relative z-0">
                            {photos.map((img,index)=>{
                                return(
                                    <img className={`w-24 h-24 cursor-pointer ${SelectedPhotos.includes(process.env.REACT_APP_BACKEND_URL + `/photos/group/${groupId}/${index+1}`)?"border-2 border-black brightness-50":"border-1 border-black"}`} src={process.env.REACT_APP_BACKEND_URL + `/photos/group/${groupId}/${index+1}`} onClick={()=>{togglePhoto(index)}}/>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-center">
                        <Button type="default" onClick={sendFiles}>
                            선택 완료!
                        </Button>
                    </div>
                </div>
        </InnerBox>
        </OuterLayout>
    )
};

export default SelectPhotoPage;