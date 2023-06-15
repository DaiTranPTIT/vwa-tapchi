import styled from "styled-components";
import CardEvent from "../Event/components/CardEvent";
import Title from "../Title";
import React from "react";
// @ts-ignore
import Slider from "react-slick";
import { IDataHome } from "../../utils/interface";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";

const KhamPha = (props: { dataHome: IDataHome }) => {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <AboutWrapper>
      <div className="kham-pha md:py-[50px] py-[20px] md:mt-[50px] mt-[20px]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/*<div className="dicover mb-[20px] lg:mb-0">*/}
          {/*  {props.dataHome?.khamPha?.title?.toUpperCase()}*/}
          {/*</div>*/}
          <div className="flex flex-col items-center mb-[20px] lg:mb-0">
            <div className="count mb-[20px]">
              {props.dataHome?.khamPha?.duLieu?.[0]?.soLuong} +
            </div>
            <div className="des">
              {props.dataHome?.khamPha?.duLieu?.[0]?.title?.toUpperCase()}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="count mb-[20px]">
              {props.dataHome?.khamPha?.duLieu?.[1]?.soLuong} +
            </div>
            <div className="des">
              {props.dataHome?.khamPha?.duLieu?.[1]?.title?.toUpperCase()}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="count mb-[20px]">
              {props.dataHome?.khamPha?.duLieu?.[2]?.soLuong} +
            </div>
            <div className="des">
              {props.dataHome?.khamPha?.duLieu?.[2]?.title?.toUpperCase()}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="count mb-[20px]">
              {props.dataHome?.khamPha?.duLieu?.[3]?.soLuong} +
            </div>
            <div className="des">
              {props.dataHome?.khamPha?.duLieu?.[3]?.title?.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};
const AboutWrapper = styled.div`
  .kham-pha {
    background-image: url("./images/about/bg-kp.png");
    .dicover {
      font-family: "Be Vietnam Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 35px;

      color: #ffffff;
    }
    .count {
      font-family: "Be Vietnam Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 51px;
      color: #ffffff;
    }
    .des {
      font-family: "Be Vietnam Pro";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;

      color: #ffffff;
    }
  }
  .item {
    .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;

      color: #de221a;
    }
    .content {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #18202a;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
  .van-tat {
    .item {
      .content {
        &:hover {
          color: #de221a;
        }
      }
    }
  }
  .height-grid{
    grid-template-rows: repeat(2, minmax(0, 235px));
  }
`;
export default KhamPha;
