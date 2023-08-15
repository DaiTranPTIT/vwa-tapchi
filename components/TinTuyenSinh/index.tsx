import styled from "styled-components";
import Title from "../Title";
import CardEvent from "../Event/components/CardEvent";
// @ts-ignore
import Slider from "react-slick";
import Button from "../Button";
import { da, el, tr } from "date-fns/locale";
import axios from "axios";
import { ip } from "../../api/ip";
import { Key, useContext, useEffect, useState } from "react";
import { IDataHome } from "../../utils/interface";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";
import CardHTQT from "../CardHTQT";
import { AuthContext } from "../../context/AuthContext";

interface IProps {
  type: string;
  name: string;
  description: any;
}

const TinTuyenSinh = (props: { dataHome: IDataHome }) => {
  const { dataConfigLang } = useContext(AuthContext);
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  console.log("props?.dataHome?.tinTuc", props?.dataHome?.tinTuc);
  if (props.dataHome?.tinTuc?.htqt_tin_tuc_su_kiens?.data?.length > 0) {
    return (
      <TinTuyenSinhWrapper className="bg-[#1421410A] px-[20px] lg:px-0 md:py-[50px] py-[20px] ">
        <div className="container mx-auto">
          <div>
            <Title
              title={props?.dataHome?.tinTuc?.title ?? "Tin tức - sự kiện"}
              titleTop={
                props?.dataHome?.tinTuc?.titleTop ?? "TỪ TIN TỨC CỦA CHÚNG TÔI"
              }
              uppercase={true}
              description={""}
            />
          </div>
          <div className="lg:grid lg:grid-cols-3 gap-[30px] hidden mt-[30px]">
            {/*{props.dataHome?.tinTuc?.htqt_tin_tuc_su_kiens?.data?.map((value, i) => {*/}
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
            {props.dataHome?.tinTuc?.htqt_tin_tuc_su_kiens?.data?.map(
              (
                val: {
                  attributes: {
                    tieuDe: any;
                    thoiGianBatDau: any;
                    moTa: any;
                    hinhAnh: { data: { attributes: { url: string } } };
                  };
                  id: any;
                },
                i: number
              ) => {
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
                      isShowMore={true}
                      key={i}
                    />
                  );
                }
              }
            )}
          </div>
          <div className="lg:hidden block mt-[20px]">
            <Slider {...settings}>
              {props.dataHome?.tinTuc?.htqt_tin_tuc_su_kiens?.data?.map(
                (
                  value: {
                    attributes: {
                      tieuDe: any;
                      thoiGianBatDau: any;
                      moTa: any;
                      hinhAnh: { data: { attributes: { url: string } } };
                    };
                    id: any;
                  },
                  i: Key | null | undefined
                ) => {
                  return (
                    <div className="pr-[16px]">
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
                        isShowMore={true}
                        key={i}
                      />
                    </div>
                  );
                }
              )}
            </Slider>
          </div>
          {props.dataHome?.tinTuc?.htqt_tin_tuc_su_kiens?.data?.length > 3 && (
            <div className="flex justify-center sm:mt-[40px] mt-[20px]">
              <Button
                type={"primary"}
                classname="lg:w-[279px]"
                onClick={() => {
                  router.push("/tin-tuc");
                }}
              >
                {props?.dataHome?.tieuDeButton}
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
              title={props?.dataHome?.tinTuc?.title ?? "Tin tức - sự kiện"}
              titleTop={
                props?.dataHome?.tinTuc?.titleTop ?? "TỪ TIN TỨC CỦA CHÚNG TÔI"
              }
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
            <p className="text-secondary text-sm">{dataConfigLang?.khongCoDuLieu}</p>
          </div>
        </div>
      </TinTuyenSinhWrapper>
    );
  }
};

const TinTuyenSinhWrapper = styled.div``;
export default TinTuyenSinh;
