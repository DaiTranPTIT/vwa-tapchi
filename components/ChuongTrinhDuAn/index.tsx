import styled from "styled-components";
import Title from "../Title";
import { dataCTDaoTao, dataDaoTao } from "../../data";
import CardBanner from "../CardBanner";
import CardEvent from "../Event/components/CardEvent";
import Button from "../Button";
import Card from "../Card";
import { useEffect, useState } from "react";
import { IDataHome } from "../../utils/interface";
import axios from "axios";
import { ip, ip3 } from "../../api/ip";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";
import { ro } from "date-fns/locale";
import CardHTQT from "../CardHTQT";
// @ts-ignore
import Slider from "react-slick";
const ChuongTrinhDuAn = (props: { dataHome: IDataHome }) => {
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
  useEffect(() => {}, []);
  if (
    props?.dataHome?.chuongTrinhDuAn?.htqt_chuong_trinh_du_ans?.data?.length > 0
  ) {
    return (
      <ChuongTrinhDaoTaoWrapper>
        <div className="bg-[#FFFFFF] py-[50px] px-[20px] lg:px-0">
          <div className="container mx-auto ">
            <Title
              title={
                props?.dataHome?.chuongTrinhDuAn?.title ?? "Chương trình dự án"
              }
              titleTop={
                props?.dataHome?.chuongTrinhDuAn?.titleTop ??
                "HOẠT ĐỘNG HỢP TÁC"
              }
              uppercase={true}
            />
            <div className="hidden lg:grid grid-cols-3 gap-[30px]">
              {props.dataHome?.chuongTrinhDuAn?.htqt_chuong_trinh_du_ans?.data?.map(
                (val, i) => {
                  if (i < 3) {
                    return (
                      <div
                        className="cursor-pointer"
                        key={i}
                        // onClick={() => {
                        //   router.push(`/chuong-trinh-du-an/${val?.id}`);
                        //
                        // }}
                      >
                        <CardHTQT
                          data={{
                            imageUrl: renderImage(
                              val?.attributes?.hinhAnh?.data?.attributes?.url
                            ),
                            title: val?.attributes?.tieuDe,
                            description: val?.attributes?.moTa ?? "",
                            dateTime: val?.attributes?.createdAt,
                            link: `/chuong-trinh-du-an/${val?.id}`,
                          }}
                          isRedTime={true}
                          isShowTime={true}
                          isShadow={true}
                          isShowMore={true}
                        />
                      </div>
                    );
                  } else {
                    return null;
                  }
                }
              )}
            </div>
            <div className="lg:hidden grid grid-cols-1 gap-[30px]">
              <Slider {...settings}>
                {props.dataHome?.chuongTrinhDuAn?.htqt_chuong_trinh_du_ans?.data?.map(
                  (val, i) => {
                    return (
                      <div
                        className="cursor-pointer pr-[16px]"
                        key={i}
                        onClick={() => {
                          router.push(`/chuong-trinh-du-an/${val?.id}`);
                        }}
                      >
                        <CardHTQT
                          data={{
                            imageUrl: renderImage(
                              val?.attributes?.hinhAnh?.data?.attributes?.url
                            ),
                            title: val?.attributes?.tieuDe,
                            description: val?.attributes?.moTa ?? "",
                            dateTime: val?.attributes?.createdAt,
                            link: `/chuong-trinh-du-an/${val?.id}`,
                          }}
                          isShowMore={true}
                        />
                      </div>
                    );
                  }
                )}
              </Slider>
            </div>
            {props.dataHome?.chuongTrinhDuAn?.htqt_chuong_trinh_du_ans?.data
              ?.length > 3 && (
              <div className="flex justify-center md:mt-[40px] mt-[20px]">
                <Button
                  type={"primary"}
                  classname="lg:w-[279px]"
                  onClick={() => {
                    router.push(`/chuong-trinh-du-an`);
                  }}
                >
                  {props?.dataHome?.tieuDeButton}
                </Button>
              </div>
            )}
          </div>
        </div>
      </ChuongTrinhDaoTaoWrapper>
    );
  } else {
    return (
      <ChuongTrinhDaoTaoWrapper>
        <div className="container mx-auto md:py-[50px] py-[20px]">
          <div>
            <Title
              title={
                props?.dataHome?.chuongTrinhDuAn?.title ?? "Chương trình dự án"
              }
              titleTop={
                props?.dataHome?.chuongTrinhDuAn?.titleTop ??
                "HOẠT ĐỘNG HỢP TÁC"
              }
              uppercase={true}
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
      </ChuongTrinhDaoTaoWrapper>
    );
  }
};

const ChuongTrinhDaoTaoWrapper = styled.div``;
export default ChuongTrinhDuAn;
