import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { IDataHome } from "../../utils/interface";
import axios from "axios";
import { ip } from "../../api/ip";
import { renderImage } from "../../utils/util";
// @ts-ignore
import Slider from "react-slick";
import styled from "styled-components";
import { dataBannerSlide } from "../../data";
import { images } from "next/dist/build/webpack/config/blocks/images";
import { useRouter } from "next/router";

const BannerHome = (props: { dataHome: IDataHome }) => {
  const SliderRef = useRef(null);
  const router = useRouter();
  useEffect(() => {}, []);
  const settings = {
    dots: false,
    infinite: true,
    // fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  const handleNext = () => {
    if (SliderRef && SliderRef.current) {
      //@ts-ignore
      SliderRef?.current?.slickNext();
    }
  };
  const handlePrev = () => {
    if (SliderRef && SliderRef.current) {
      //@ts-ignore
      SliderRef?.current?.slickPrev();
    }
  };
  return (
    <BannerWrapper>
      <div className="hidden lg:block relativ border-b-2 border-primary">
        {/*<button*/}
        {/*  className="hidden lg:flex next-btn mr-[16px] cursor-pointer  items-center justify-center absolute top-1/2 left-0 z-50 btn-next btn"*/}
        {/*  onClick={handlePrev}*/}
        {/*>*/}
        {/*  <img*/}
        {/*    className={"w-[60px]"}*/}
        {/*    src="/images/icons/arrow-left.svg"*/}
        {/*    alt={"image"}*/}
        {/*  />*/}
        {/*</button>*/}
        {/*<button*/}
        {/*  className="hidden lg:flex prev-btn cursor-pointer  items-center justify-center absolute top-1/2 right-0 z-50 btn-prev btn"*/}
        {/*  onClick={handleNext}*/}
        {/*>*/}
        {/*  <img*/}
        {/*    className={"w-[60px]"}*/}
        {/*    src="/images/icons/arrow-right.svg"*/}
        {/*    alt={"image"}*/}
        {/*  />*/}
        {/*</button>*/}
        <div className="relative ">
          {props.dataHome?.banner?.length > 0 ? (
            <Slider {...settings} ref={SliderRef}>
              {props.dataHome?.banner?.map((value, index) => {
                return (
                  <a
                    href={value.linkTo}
                    target={"_blank"}
                    rel={"noreferrer"}
                    key={index}
                    className="h-full pb-0"
                  >
                    <img
                      className="w-full max-h-[714px] wow fadeInUp"
                      src={renderImage(value?.images?.data?.attributes?.url)}
                      alt="image"
                    />
                  </a>
                );
              })}
            </Slider>
          ) : (
            <img
              className="w-full max-h-[714px]"
              src="/images/default/no_image.png"
              alt="image"
            />
          )}

          <div className="absolute top-0 left-0 h-full wow fadeInLeft">
            <div className="trapezoid h-full w-[675px] "></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <div className="trapezoid-2 h-[383px] w-[685px] relative wow fadeInLeft">
              {/*<div className="absolute bottom-0 right-0 w-[48px] h-[31px] trapezoid-3 ">*/}

              {/*</div>*/}
              <div className="flex justify-center items-center w-full h-full ">
                <div className="max-w-[55%]">
                  <div className="title-banner-1 mb-[24px]">
                    {props.dataHome?.title}
                  </div>
                  <div className="title-banner-2 mb-[24px]">
                    {props.dataHome?.title2}
                  </div>
                  <div className="">
                    <Button
                      type={"default"}
                      classname="lg:w-[239px]"
                      onClick={() => {
                        router.push("/tin-tuc");
                      }}
                    >
                      Xem thêm
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<Slider {...settings} ref={SliderRef}>*/}
        {/*	{props.dataHome?.banner?.map((value,index)=>{*/}
        {/*		return(*/}
        {/*			<a href={value.linkTo} target={"_blank"} rel={"noreferrer"} key={index}>*/}
        {/*				<img*/}
        {/*					className='w-full max-h-[620px] wow fadeInUp object-cover object-bottom'*/}
        {/*					src={renderImage(value?.images?.data?.attributes?.url)}*/}
        {/*					alt={"image"}*/}
        {/*				/>*/}
        {/*			</a>*/}
        {/*		)*/}
        {/*	})}*/}
        {/*</Slider>*/}
      </div>
      <div className="lg:hidden ">
        <div className="bg-primary py-[20px] px-[20px]">
          <div className="title-banner-1 mb-[24px]">
            {props.dataHome?.title}
          </div>
          <div className="title-banner-2 mb-[24px]">
            {props.dataHome?.title2}
          </div>
          <div className="flex justify-center">
            <Button
              type={"default"}
              classname="lg:w-[239px]"
              onClick={() => {
                router.push("/tin-tuc");
              }}
            >
              Xem thêm
            </Button>
          </div>
        </div>
        <div>
          {props.dataHome?.banner?.length > 0 ? (
            <Slider {...settings} ref={SliderRef}>
              {props.dataHome?.banner?.map((value, index) => {
                return (
                  <a
                    href={value.linkTo}
                    target={"_blank"}
                    rel={"noreferrer"}
                    key={index}
                  >
                    <img
                      className="w-full h-[200px] wow fadeInUp object-cover"
                      src={renderImage(value?.images?.data?.attributes?.url)}
                      alt="image"
                    />
                  </a>
                );
              })}
            </Slider>
          ) : (
            <img
              className="w-full h-[200px]"
              src="/images/default/no_image.png"
              alt="image"
            />
          )}
        </div>
      </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  .title-banner-1 {
    font-family: "SVN-Product Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-transform: uppercase;

    /* White */

    color: #ffffff;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .title-banner-2 {
    ont-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    /* White */

    color: #ffffff;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .trapezoid {
    -webkit-clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
    background: linear-gradient(
      89.41deg,
      rgba(255, 255, 255, 0.77) 33.53%,
      rgba(255, 255, 255, 0) 109.74%
    );
    box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
  }
  .trapezoid-2 {
    -webkit-clip-path: polygon(0 0, 83% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 83% 0, 100% 100%, 0% 100%);

    background: linear-gradient(90deg, #9e0600 0%, #de221a 94.79%);

    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #de221a;
    }
  }
  .trapezoid-3 {
    -webkit-clip-path: polygon(100% 0, 0 0, 23% 76%);
    clip-path: polygon(100% 0, 0 0, 23% 76%);

    background: linear-gradient(90deg, #9e0600 0%, #de221a 94.79%);
  }
  .btn {
    background: rgba(237, 240, 242, 0.4);
  }
  .slick-dots {
    bottom: 33px;
  }
  .slick-dots li.slick-active button:before {
    font-size: 16px;
  }
  .slick-dots li button:before {
    font-size: 16px;
  }
`;
export default BannerHome;
