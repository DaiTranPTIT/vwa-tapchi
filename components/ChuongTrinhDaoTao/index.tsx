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

const ChuongTrinhDaoTao = (props: { dataHome: IDataHome }) => {
  const router = useRouter();

  useEffect(() => {}, []);
  if (props?.dataHome?.htqt_thong_bao_hoc_bongs?.data?.length>0){
    return (
      <ChuongTrinhDaoTaoWrapper>
        <div className="bg-[#FFFFFF] py-[50px] px-[20px] lg:px-0">
          <div className="container mx-auto ">
            <Title title={"Thông báo học bổng"} titleTop={"HỌC BỔNG"} uppercase={true} />
            <div className="hidden lg:grid grid-cols-3 gap-[30px]">
              {props.dataHome?.htqt_thong_bao_hoc_bongs?.data?.map((val, i) => {
                if (i < 6) {
                  return (
                    <div
                      className="cursor-pointer"
                      key={i}
                      onClick={() => {
                        router.push(`/hoat-dong/${val?.id}`);
                      }}
                    >
                      <CardHTQT
                        data={{
                          imageUrl: renderImage(
                            val?.attributes?.hinhAnh?.data?.attributes?.url
                          ),
                          title:val?.attributes?.tieuDe,
                          description: val?.attributes?.moTa ?? "",
                          dateTime: val?.attributes?.createdAt,
                          link: `/thong-bao-hoc-bong/${val?.id}`,
                        }}
                        isShadow={true}
                        isShowMore={true}
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="lg:hidden grid grid-cols-1 gap-[30px]">
              {props.dataHome?.htqt_thong_bao_hoc_bongs?.data?.map((val, i) => {
                return (
                  <div
                    className="cursor-pointer"
                    key={i}
                    onClick={() => {
                      router.push(`/hoat-dong/${val?.id}`);
                    }}
                  >
                    <CardHTQT
                      data={{
                        imageUrl: renderImage(
                          val?.attributes?.hinhAnh?.data?.attributes?.url
                        ),
                        title:val?.attributes?.tieuDe,
                        description: val?.attributes?.moTa ?? "",
                        dateTime: val?.attributes?.createdAt,
                        link: `/thong-bao-hoc-bong/${val?.id}`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
            {props.dataHome?.htqt_thong_bao_hoc_bongs?.data?.length > 6 && (
              <div className="flex justify-center md:mt-[40px] mt-[20px]">
                <Button
                  type={"primary"}
                  classname="lg:w-[279px]"
                  onClick={() => {
                    router.push(`/thong-bao-hoc-bong`);
                  }}
                >
                  Xem thêm
                </Button>
              </div>
            )}
          </div>
        </div>
      </ChuongTrinhDaoTaoWrapper>
    );
  }else {
    return (
      <ChuongTrinhDaoTaoWrapper>
        <div className='container mx-auto md:py-[50px] py-[20px]'>
          <div>
            <Title title={"HOẠT ĐỘNG KH, CN & ĐMST"} uppercase={true} />
          </div>
          <div className="w-full h-full justify-center items-center flex flex-col">
            <img className="mb-[16px]" src="/images/default/no_data.png" alt="image"/>
            <p className="text-secondary text-sm">Không có dữ liệu</p>
          </div>
        </div>
      </ChuongTrinhDaoTaoWrapper>
    )
  }

};

const ChuongTrinhDaoTaoWrapper = styled.div``;
export default ChuongTrinhDaoTao;
