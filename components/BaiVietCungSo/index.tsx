import styled from "styled-components";
import CardTinTuc4 from "../CardTinTuc4";
import { useEffect, useState } from "react";
import { MTapChi } from "../../api/tapChi/typing";
import { getTapChiTheoSo } from "../../api/tapChi/api";
import { useTranslation } from "react-i18next";

export default (props: {soTapChi?: string, idBaiHienTai?: string}) => {
    const {t : common} = useTranslation("common");
    const [dsTapChi, setDsTapChi] = useState<MTapChi.ITapChi[]>();

    const getTapChi = async (idSoTapChi: string) => {
        try {
            const res = await getTapChiTheoSo({}, idSoTapChi);
            setDsTapChi(res.data);
        } catch (err) {
            console.log(err);
        } finally {}
    }

    useEffect(() => {
      if(props.soTapChi) {
        getTapChi(props.soTapChi);
      }
    }, [props.soTapChi]);

    return <BaiVietCungSoWrapper>
        <div>
            <h2 className="heading">{common("so-tap-chi.bai-viet-cung-so")}</h2>
        </div>
        <ul className="ds-bai-viet">
            {dsTapChi?.filter(item => {
              if(!props.idBaiHienTai) return true;
              else {
                return item._id !== props.idBaiHienTai;
              }
            }).map(item => {
              return <li className="item">
                <CardTinTuc4 data={item}/>
              </li>
            })}
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
