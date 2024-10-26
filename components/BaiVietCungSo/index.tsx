import styled from "styled-components";
import CardTinTuc4 from "../CardTinTuc4";

export default () => {
    return <BaiVietCungSoWrapper>
        <div>
            <h2 className="heading">Bài viết cùng số</h2>
        </div>
        <ul className="ds-bai-viet">
            <li className="item">
                <CardTinTuc4/>
            </li>
            <li className="item">
                <CardTinTuc4/>
            </li>
            <li className="item">
                <CardTinTuc4/>
            </li>
            <li className="item">
                <CardTinTuc4/>
            </li>
        </ul>
    </BaiVietCungSoWrapper>
}


const BaiVietCungSoWrapper = styled.div`
    h2.heading {
      font-size: 28px;
      margin-bottom: 24px;
      font-weight: 700;
      line-height: 40.6px;
      text-align: left;
      color: var(--text-primary);
    }
  
  ul.ds-bai-viet {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  ul.ds-bai-viet li.item {
    padding: 16px 24px;
    border-radius: 8px;
    background-color: #F4F4F4;
    position: relative;
    :after {
      content: '';
      position: absolute;
      width: 8px;
      height: 100%;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      background-color: var(--primary-color);
      top: 0;
      left: 0;
    }
  }
`
