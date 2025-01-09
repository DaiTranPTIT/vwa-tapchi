import styled from "styled-components";
import TagQuangCao from "../TagQuangCao";
import { useState } from "react";

export default () => {
    const [isVisible, setIsVisible] = useState(true)
    const [isExiting, setIsExiting] = useState(false);
    
    const handleClose =()=>{
        setIsExiting(true);
        setTimeout(() => setIsVisible(false), 300);
    }

    if(isVisible)  return <QuangCaoWrapper>
        <div className={`relative quang-cao-box ${isExiting ? "fade-out" : "fade-in"}`}>
            <img className="h-[145px] object-cover w-[100%]" src={'/images/quangcao-temp/qc.jpg'}/>
            <div className="absolute content">
                <div className="container mx-auto h-[100%] relative">
                    <div className= "tag-quang-cao absolute">
                        <TagQuangCao handleClose={handleClose}/>
                    </div>
                </div>
            </div>
        </div>
      </QuangCaoWrapper>;
  else return <></>;
};

const QuangCaoWrapper = styled.div`
  .quang-cao-box {
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 1;
    transform: translateY(0);
    &.fade-in {
      opacity: 1;
      transform: translateY(0);
    }

    &.fade-out {
      opacity: 0;
      transform: translateX(-10px);
    }
    .content {
      width: 100%;
      top: 0;
      left: 0;
      height: 100%;
    }

    .tag-quang-cao {
      right: 0;
      top: 12px;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
  }
`;
