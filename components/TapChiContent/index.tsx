import styled from "styled-components";
import TapChiInfoOverall from "../TapChiInfoOverall";
import TagTapChi from "../TagTapChi";
import CardTinTuc3 from "../CardTinTuc3";
import BaiVietCungSo from "../BaiVietCungSo";
import Button from "../Button";
import React from "react";
import { MTapChi } from "../../api/tapChi/typing";
import router from "next/router";
import { useTranslation } from "react-i18next";

interface IProps {
    soMoiNhat?: MTapChi.ISoTapChi,
    tapChiInfo?: MTapChi.ITapChi;
}
export default (props: IProps) => {
    const {t : common} = useTranslation("common");
    return <TapChiContentWrapper>
        <div className="section-content">
            <h2 className="meta-title">{common("so-tap-chi.tong-quan")}</h2>
            <div className="main-content mb-[28px]">
                <div className="post-wrapper">
                    <strong className="title">
                        {common("so-tap-chi.tac-gia")}:
                    </strong>
                    <p className="post-info">
                        {props.tapChiInfo?.danhSachNguoiThamGia.map(item => {
                            return `${item.hoTen} (${item.email}; ${item.toChuc})`;
                        }).join(', ')}
                    </p>
                </div>
                <div className="post-wrapper">
                    <strong className="title">
                        {common("so-tap-chi.tac-gia")}:
                    </strong>
                    <p className="post-info" dangerouslySetInnerHTML={{ __html: props.tapChiInfo?.tomTat ?? '' }}></p>
                </div>
                <TapChiInfoOverall tapChiInfo={props.tapChiInfo}/>
            </div>
            <div className="mb-[40px] md:mb-[50px]">
                <TagTapChi tagsTapChi={props.tapChiInfo?.tuKhoa}/>
            </div>
            <div className="so-moi-nhat mb-[40px] md:mb-[50px]">
                <CardTinTuc3 soMoiNhat={props.soMoiNhat}/>
            </div>
            <div className="mb-[40px] md:mb-[50px]">
                <BaiVietCungSo soTapChi={props.tapChiInfo?.thongTinXuatBan[0].soXuatBan} idBaiHienTai={props.tapChiInfo?._id}/>
            </div>
            <Button
                type={"primary"}
                classname="flex gap-[8px] items-center"
                onClick={() => {router.push('/phat-hanh/dat-mua-tap-chi')}}
            >
                {common("so-tap-chi.mua-bai-tai-day")}
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.583984 4.2392H11.0006M11.0006 4.2392L7.65393 0.739197M11.0006 4.2392L7.65393 7.7392" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Button>
        </div>
    </TapChiContentWrapper>
}

const TapChiContentWrapper = styled.div`
  h2.meta-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 40.6px;
    text-align: left;
    color: var(--text-primary);
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid #A9CBED;
  }

  .so-moi-nhat {
    padding: 32px 0;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #777D93;
  }
  .main-content {
    padding: 24px;
    background-color: #EFF6FB;
    border-radius: 8px;
    
    .post-wrapper {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #CDE1F4;
      .title {
        font-size: 18px;
        font-weight: 700;
        line-height: 26.1px;
        letter-spacing: 0.01em;
        text-align: left;
        color: var(--text-primary);
        margin-bottom: 8px;
      }
      
      .post-info {
        font-size: 16px;
        font-weight: 400;
        line-height: 23.2px;
        letter-spacing: 0.01em;
        text-align: justify;
        color: var(--text-primary);
      }
    }
  }
`