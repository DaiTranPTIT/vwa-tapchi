import styled from "styled-components";
import Breadcrumb from "../Breadcrumb";
import Button from "../Button";
import React from "react";
import router from "next/router";
import { MTapChi } from "../../api/tapChi/typing";
import { useTranslation } from "react-i18next";

interface IProps {
    tapChiInfo?: MTapChi.ITapChi;
}
export default (props: IProps) => {
    const {t : common} = useTranslation("common");
    return <SectionBreadcrumb>
        <div className="container mx-auto pt-[16px] pb-[48px] container-breadcrumb">
            <div className="max-[459px]:hidden">
                <Breadcrumb data={[
                    {
                        title: common("common.home"),
                        path: '/'
                    },
                    {
                        title: props.tapChiInfo?.tieuDe || '',
                        path: `/tap-chi/${props.tapChiInfo?._id}`
                    }
                ]}/>
            </div>
            <div className="description-tapchi md:flex gap-[40px] mt-[28px]">
                <div className="banner-image">
                    <img src={'/images/default/logo-tap-chi.jpg'}/>
                </div>
                <div className="flex flex-col gap-[24px] max-w-[850px]">
                    <h1 className="title">
                        {props.tapChiInfo?.tieuDe}
                    </h1>
                    <h3 className="description">
                        {common("so-tap-chi.tap-chi")}: {props.tapChiInfo?.thongTinXuatBan[0].quyen}, {props.tapChiInfo?.thongTinXuatBan[0].soXuatBan}
                    </h3>
                    <Button
                        type={"primary"}
                        classname="button-type-2 flex gap-[8px] items-center"
                        onClick={() => {router.push('/phat-hanh/dat-mua-tap-chi')}}
                    >
                        {common("so-tap-chi.mua-bai-tai-day")}
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.583984 4.2392H11.0006M11.0006 4.2392L7.65393 0.739197M11.0006 4.2392L7.65393 7.7392" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    </SectionBreadcrumb>
}

const SectionBreadcrumb = styled.div`
    background: linear-gradient(86.42deg, #254D16 15.03%, #2A8B05 100%);
	.container-breadcrumb {
        .banner-image {
          width: 150px;
          height: 207px;
          border: 3px solid #FFFFFF;
          border-radius: 3px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .title {
            font-size: 34px;
            font-weight: 700;
            line-height: 49.3px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #FFFFFF;
            text-decoration: underline;
        }
        .description {
              font-size: 18px;
              font-weight: 700;
              line-height: 26.1px;
              letter-spacing: 0.01em;
              color: #FFFFFF;
        }
    }

  @media screen and (max-width: 768px) {
    .container-breadcrumb {
      .title {
        font-size: 24px;
        line-height: 36px;
      }
    .banner-image {
          width: 350px;
          height: 100%;
          border: 3px solid #FFFFFF;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom:20px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
    }
  }

  @media screen and (max-width: 459px) {
    .container-breadcrumb {
      .title {
        font-size: 24px;
        line-height: 36px;
      }
    .banner-image {
          width: 150px;
          height: 207px;
          border: 3px solid #FFFFFF;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom:20px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
    }
  }
`;

