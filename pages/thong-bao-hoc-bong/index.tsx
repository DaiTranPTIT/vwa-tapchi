import styled from "styled-components";
import Title from "../../components/Title";
import React, { useContext, useEffect, useRef, useState } from "react";
import { DataDonVi, GioiThieu } from "../../utils/interface";
import { useRouter } from "next/router";
import axios from "axios";
import { ip } from "../../api/ip";
import { dataDaoTao, dataDeTai, dataNghienCuu } from "../../data";
import CardNghienCuu from "../../components/CardNghienCuu";
import CardDeTai from "../../components/CardDeTai";
import CardEvent from "../../components/Event/components/CardEvent";
import { ETYPEDONVI } from "../../data/enum";
import { renderImage } from "../../utils/util";
import Pagination from "../../components/pagination";
import { AuthContext } from "../../context/AuthContext";
import CardHTQTMangLuoi from "../../components/CardHTQTMangLuoi";
import CardHTQTChuongChinh from "../../components/CardHTQTChuongChinh";
import {Controller, useForm} from "react-hook-form";
import DropdownFake from "../../components/Dropdown";
import moment from "moment";

const ThongBaoHocBong = () => {
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);
  const [total, setTotal] = useState<number>(0);
  const [dataGioiThieu, setDataGioiThieu] = useState<DataDonVi[]>([]);
  const router = useRouter();
  const [condition, setCondition] = useState<any>();
  const { langCode,dataConfigLang } = useContext(AuthContext);
  const contentRef = useRef<HTMLDivElement>(null);
  let timmer: NodeJS.Timeout | undefined;
  const [type, setType] = useState<string>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const getData = async (type: string) => {
    try {
      const res = await axios.get(
        `${ip}/htqt-thong-bao-hoc-bongs?locale=${langCode}`,
        {
          params: {
            filters: {
              kieu: {
                $eq: type,
              },
              ...condition,
            },
            sort:{
              createdAt:'desc'
            },
            populate: "deep",
            pagination: {
              page: page,
              pageSize: limit,
            },
          },
        }
      );
      if (res) {
        setDataGioiThieu(res?.data?.data ?? []);
        // setDataChiTiet(res?.data?.[0]);
        setTotal(res?.data?.meta?.pagination?.total ?? 0);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (router?.query) {
      getData(router?.query?.type as string);
      setType(router?.query?.type as string);
    }
  }, [router, page, langCode,condition]);
  useEffect(() => {
    setPage(1);
  }, [type]);
  const onSubmit = (data: any) => {
    setPage(1)
    if (data && data?.keyword !== "" && data?.keyword) {
      setCondition(
        {
          ...condition,
          tieuDe: {
            '$containsi': data?.keyword,
          },
        }
      );
    } else {
      delete condition?.tieuDe;
      setCondition({ ...condition });
    }
  };
  const option = [
    { value: "Tất cả", label: "Tất cả" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },

  ];
  return (
    <DonViNghienCuuWrapper>
      <div className="container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px] px-[20px] lg:px-0">
        <>
          <Title title={dataConfigLang?.thongBaoHocBong} titleTop={dataConfigLang?.hocBong} uppercase={true} />
          <div className="mb-[40px]">
            <div className="lg:flex  grid sm:grid-cols-2 grid-cols-1 lg:gap-[30px] sm:gap-[16px] justify-end">
              <div className="dropdown  mb-[16px] md:mb-0 ">
                <Controller
                  name={"type"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DropdownFake
                      option={option}
                      onChange={(val) => {
                        if (val?.value === "Tất cả") {
                          delete condition?.createdAt;
                          setCondition({ ...condition });
                        } else {
                          setCondition({
                            ...condition,
                            createdAt: {
                              $gte: moment()
                                .set("years", +val?.value)
                                .startOf("years")
                                .toISOString(),
                              $lte: moment()
                                .set("years", +val?.value)
                                .endOf("years")
                                .toISOString(),
                            },
                          });
                        }
                      }}
                      value={value}
                      placeholder={dataConfigLang?.nam}
                    />
                  )}
                />
              </div>
              <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="h-full">
                  <div className="search flex item-center lg:h-full h-[36px]">
                    <div className="relative w-full">
                      <input
                        className="w-full"
                        placeholder={dataConfigLang?.timKiem}
                        {...register("keyword", {})}
                      />
                      {/*<div className='icon absolute top-[9.5px] left-[14.5px]'>*/}
                      {/*	<img src={"/images/icons/search.svg"} alt={"image"} />*/}
                      {/*</div>*/}
                    </div>
                    <button type="submit">
                      <img src={"/images/icons/search-pri.svg"} alt={"image"} />
                    </button>
                  </div>
                  {errors.keyword && <p className="error-text">{dataConfigLang?.batBuoc}</p>}
                </form>
              </div>
            </div>
          </div>
          {dataGioiThieu?.length > 0 ? (
            <>
              <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                {dataGioiThieu?.map((val, i) => {
                  return (
                    <CardHTQTChuongChinh
                      data={{
                        imageUrl: renderImage(
                          val?.attributes?.hinhAnh?.data?.attributes?.url
                        ),
                        content: val?.attributes?.tieuDe,
                        description: val?.attributes?.moTa ?? "",
                        dateTime: val?.attributes?.createdAt,
                        link: `/thong-bao-hoc-bong/${val?.id}`,
                      }}
                      key={i}
                    />
                  );
                })}{" "}
              </div>
            </>
          ) : (
            <>
              <div className="w-full h-full justify-center items-center flex flex-col">
                <img
                  className="mb-[16px]"
                  src="/images/default/no_data.png"
                  alt="image"
                />
                <p className="text-secondary text-sm">{dataConfigLang?.khongCoDuLieu}</p>
              </div>
            </>
          )}
        </>
      </div>
      <div className="show-more flex items-center justify-center md:mt-[16px] cursor-pointer">
        <Pagination
          page={page}
          limit={limit}
          total={total}
          handleChangePage={(page) => {
            setPage(page);
          }}
        />
      </div>
    </DonViNghienCuuWrapper>
  );
};
const DonViNghienCuuWrapper = styled.div`

  .search {
    input {
      height: 100%;
      padding-left: 20px;
      background: #f1f3f5;
      border-radius: 4px 0 0 4px;

      &:focus {
        outline: none;
      }
    }

    img {
      width: 20px;
      height: 20px;
    }

    button {
      padding: 4px 12px;
      background: #f1f3f5;
      border-radius: 0px 4px 4px 0px;
      font-family: "Inter";
      font-style: normal;
      line-height: 20px;

      display: flex;
      align-items: center;

      color: #ffffff;
    }
  }`;
export default ThongBaoHocBong;
