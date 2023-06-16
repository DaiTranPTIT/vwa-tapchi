import styled from "styled-components";
import Title from "../Title";
import CardEvent from "../Event/components/CardEvent";
// @ts-ignore
import Slider from "react-slick";
import Button from "../Button";
import { da, el, tr } from "date-fns/locale";
import axios from "axios";
import { ip } from "../../api/ip";
import { useEffect, useState } from "react";
import { IDataHome } from "../../utils/interface";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";
import CardHTQT from "../CardHTQT";
interface IProps {
  type: string;
  name: string;
  description: any;
}
const TinTuyenSinh = (props: { dataHome: IDataHome }) => {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
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
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleRedirect = (id: string) => {
    router.push(`/tin-tuc/${id}`);
  };
  if (props.dataHome?.htqt_tin_tuc_su_kiens?.data?.length > 0) {
    return (
      <TinTuyenSinhWrapper className="bg-[#1421410A] px-[20px] lg:px-0 md:py-[50px] py-[20px] ">
        <div className="container mx-auto">
          <div>
            <Title
              title={"Tin tức - sự kiện"}
              titleTop={"TỪ TIN TỨC CỦA CHÚNG TÔI"}
              uppercase={true}
              description={""}
            />
          </div>
          <div className="lg:grid lg:grid-cols-3 gap-[30px] hidden mt-[30px]">
            {/*{props.dataHome?.htqt_tin_tuc_su_kiens?.data?.map((value, i) => {*/}
            {/*	if (i < 6) {*/}
            {/*		if (i === 0 || i === 5) {*/}
            {/*			return (*/}
            {/*				<div className='col-span-2 ' key={i}>*/}
            {/*					<CardEvent*/}
            {/*						data={{*/}
            {/*							imageUrl: renderImage(value?.attributes?.hinhAnh?.data?.attributes?.url),*/}
            {/*							content: value?.attributes?.tieuDe,*/}
            {/*							dateTime: value?.attributes?.createdAt,*/}
            {/*							description: value?.attributes?.moTa ?? "",*/}
            {/*							link: `/tin-tuc/${value?.id}?type=TUYENSINH_DAIHOC`,*/}
            {/*						}}*/}
            {/*						type={"big"}*/}
            {/*					/>*/}
            {/*				</div>*/}
            {/*			);*/}
            {/*		} else {*/}
            {/*			return (*/}
            {/*				<div key={i}>*/}
            {/*					<CardEvent*/}
            {/*						data={{*/}
            {/*							imageUrl: renderImage(value?.attributes?.hinhAnh?.data?.attributes?.url),*/}
            {/*							content: value?.attributes?.tieuDe,*/}
            {/*							dateTime: value?.attributes?.createdAt,*/}
            {/*							description: value?.attributes?.moTa ?? "",*/}
            {/*							link: `/tin-tuc/${value?.id}?type=TUYENSINH_DAIHOC`,*/}
            {/*						}}*/}
            {/*						type={"small"}*/}
            {/*					/>*/}
            {/*				</div>*/}
            {/*			);*/}
            {/*		}*/}
            {/*	}*/}
            {/*})}*/}
            {props.dataHome?.htqt_tin_tuc_su_kiens?.data?.map((val, i) => {
              if (i < 3) {
                return (
                  <CardHTQT
                    data={{
                      title: val?.attributes?.tieuDe,
                      dateTime: val?.attributes?.thoiGianBatDau,
                      description: val?.attributes?.moTa,
                      imageUrl: renderImage(
                        val?.attributes?.hinhAnh?.data?.attributes?.url
                      ),
                      link: `/tin-tuc/${val?.id}`,
                    }}
                    isShowTime={true}
                    isArrow2={true}
                    key={i}
                  />
                );
              }
            })}
          </div>
          <div className="lg:hidden block mt-[20px]">
            <Slider {...settings}>
              {props.dataHome?.htqt_tin_tuc_su_kiens?.data?.map((value, i) => {
                return (
                  <div>
                    <CardHTQT
                      data={{
                        title: value?.attributes?.tieuDe,
                        dateTime: value?.attributes?.thoiGianBatDau,
                        description: value?.attributes?.moTa,
                        imageUrl: renderImage(
                          value?.attributes?.hinhAnh?.data?.attributes?.url
                        ),
                        link: `/tin-tuc/${value?.id}`,
                      }}
                      isShowTime={true}
                      isArrow2={true}
                      key={i}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          {props.dataHome?.htqt_tin_tuc_su_kiens?.data?.length > 3 && (
            <div className="flex justify-center sm:mt-[40px] mt-[20px]">
              <Button
                type={"primary"}
                classname="lg:w-[279px]"
                onClick={() => {
                  router.push("/tin-tuc");
                }}
              >
                Xem thêm
              </Button>
            </div>
          )}
        </div>
      </TinTuyenSinhWrapper>
    );
  } else {
    return (
      <TinTuyenSinhWrapper>
        <div className="container mx-auto md:py-[50px] py-[20px]">
          <div>
            <Title
              title={"Tin tức - sự kiện"}
              uppercase={true}
              description={""}
            />
          </div>
          <div className="w-full h-full justify-center items-center flex flex-col">
            <img
              className="mb-[16px]"
              src="/images/default/no_data.png"
              alt="image"
            />
            <p className="text-secondary text-sm">Không có dữ liệu</p>
          </div>
        </div>
      </TinTuyenSinhWrapper>
    );
  }
};

const TinTuyenSinhWrapper = styled.div``;
export default TinTuyenSinh;
