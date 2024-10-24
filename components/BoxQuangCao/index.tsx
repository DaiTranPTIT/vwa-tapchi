import styled from "styled-components";
import TagQuangCao from "../TagQuangCao";

export default () => {
    return <QuangCaoWrapper>
        <div className="relative quang-cao-box">
            <img className="h-[145px] object-cover w-[100%]" src={'./images/quangcao-temp/qc-test.jpg'}/>
            <div className="absolute content">
                <div className="container mx-auto h-[100%] relative">
                    <div className="tag-quang-cao absolute">
                        <TagQuangCao/>
                    </div>
                </div>
            </div>
        </div>
    </QuangCaoWrapper>
}

const QuangCaoWrapper = styled.div`
    .quang-cao-box {
      .content {
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
      }
      
      .tag-quang-cao {
        right: 0;
        top: 12px;
      }
    }
`