import styled from "styled-components";
import React, {useContext, useEffect, useRef, useState} from "react";
import { useRouter } from "next/router";
import axios from "axios";
import TableBase from "../components/tableBase";
import { dataDanhMuc, dataQuyChe } from "../data";
import { GioiThieu } from "../utils/interface";
import { ip } from "../api/ip";
import Title from "../components/Title";
import { Controller, useForm } from "react-hook-form";
import DropdownFake from "../components/Dropdown";
import { rules } from "../utils/rules";
import moment from "moment";
import { renderImage } from "../utils/util";
import TableBaseV2 from "../components/TableBaseV2";
import Pagination from "../components/pagination";
import {AuthContext} from "../context/AuthContext";

const QuyChe = () => {
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
  const [dataGioiThieu, setDataGioiThieu] = useState<GioiThieu[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();
  const [condition, setCondition] = useState<any>();
  const contentRef = useRef<HTMLDivElement>(null);
  let timmer: NodeJS.Timeout | undefined;
  const {langCode,dataConfigLang}=useContext(AuthContext)
  const [type, setType] = useState<string>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const getData = async () => {
    try {
      const res = await axios.get(`${ip}/htqt-van-ban-quy-dinhs`, {
        params: {
          filters: {
            kieu: {
              $eq: type,
            },
            ...condition,
          },
          sort: ['createdAt:desc'],
          pagination: {
            page: page,
            pageSize: limit,
          },
        },
      });
      if (res) {
        setDataGioiThieu(res?.data?.data ?? []);
        setTotal(res?.data?.metadata?.total ?? 0);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getDatav2 = async () => {
    try {
      let filter =
        router?.query?.type === "Học viện"
          ? { coQuanBanHanh: { $eq: router?.query?.type } }
          : { coQuanBanHanh: { $ne: "Học viện" } };
      const res = await axios.get(`${ip}/htqt-van-ban-quy-dinhs?locale=${langCode}`, {
        params: {
          filters: {
            kieu: {
              $eq: type,
            },
            ...filter,
            ...condition,
          },
          populate: "taiLieuDinhKem",
          sort: [{ ngayBanHanh: "desc" }],
          pagination: {
            page: page,
            pageSize: limit,
          },
        },
      });
      if (res) {
        setDataGioiThieu(res?.data?.data ?? []);
        setTotal(res?.data?.meta?.pagination?.total ?? 0);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getDatav2();
  }, [router, page, condition,langCode]);

  const columns = [
    {
      title: dataConfigLang?.quyCheBang?.hangMot,
      dataIndex: "index",
      align:"center"
    },
    {
      title: dataConfigLang?.quyCheBang?.hangHai,
      dataIndex: "attributes",
      align:"center",
      render: (val: any) => {
        return val?.so;
      },
    },
    {
      title: dataConfigLang?.quyCheBang?.hangBa,
      dataIndex: "attributes",
      align:"center",
      render: (val: any) => {
        return val
          ? moment(val?.ngayBanHanh).format("DD/MM/YYYY")
          : dataConfigLang?.khongCoDuLieu;
      },
    },
    {
      title: dataConfigLang?.quyCheBang?.hangBon,
      dataIndex: "attributes",
      align:"center",
      render: (val: any) => {
        return val
          ? moment(val?.thoiGianHieuLuc).format("DD/MM/YYYY")
          : dataConfigLang?.khongCoDuLieu;
      },
    },
    {
      title: dataConfigLang?.quyCheBang?.hangNam,
      dataIndex: "attributes",
      align:"center",
      width: 300,
      render: (val: any) => {
        return (

          <div className="w-[250px]">
            {val?.trichYeu}
          </div>
        );
      },
    },
    {
      title: dataConfigLang?.quyCheBang?.hangSau,
      dataIndex: "attributes",
      align:"center",
      render: (val: any) => {
       return(
         <div className="w-[80px]">
           {val?.loaiVanBan}
         </div>
       )
      },
    },
    {
      title: dataConfigLang?.quyCheBang?.hangBay,
      dataIndex: "attributes",
      align:"center",
      render: (val: any) => {
        return (
          <div className="w-[80px]">
            {val?.coQuanBanHanh}
          </div>
        );
      },
    },
    {
      title:dataConfigLang?.quyCheBang?.hangTam,
      dataIndex: "attributes",
      width: "200px",
      render: (val: any) => {
        return (
          <div className="w-[200px] overflow-hidden break-words ">
            <a
              className="block link-download underline"
              href={renderImage(val?.taiLieuDinhKem?.data?.attributes?.url)}
            >
              {val?.taiLieuDinhKem?.data?.attributes?.name}
            </a>
          </div>
        );
      },
    },
  ];
  const onSubmit = (data: any) => {
    console.log("data", data);
    // getData({
    // 	keyword: data?.keyword,
    // 	type: data?.type,
    // 	startDate: moment(data?.startDate).toISOString(),
    // 	endDate: moment(data?.endDate).toISOString(),
    // });
    if (data && data?.keyword !== "" && data?.keyword) {
      setCondition(
        // JSON.stringify({
        //   tieuDe: { $ne: data?.keyword },
        // })
        {
          ...condition,
          trichYeu: {
            '$containsi': data?.keyword,
          },
        }
      );
    } else {
      delete condition?.trichYeu;
      setCondition({ ...condition });
    }
  };
  const option = [
    { value: "Tất cả", label: "Tất cả" },
    { value: "Quốc hội", label: "Quốc hội" },
    { value: "Chính phủ", label: "Chính phủ" },
    { value: "Bộ KH & CN", label: "Bộ KH & CN" },
    { value: "Bộ GD & DT", label: "Bộ GD & DT" },
    { value: "Bộ tài chính", label: "Bộ tài chính" },
    { value: "Học viện", label: "Học viện" },
  ];
  return (
    <QuyCheWrapper>
      <div className="container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px] px-[20px] md:px-0">
        <Title
          title={dataConfigLang?.titleQuyChe}
          titleTop={dataConfigLang?.quyChe}
          uppercase={true}
        />
        <div className="mb-[40px]">
          <div className="lg:flex  grid sm:grid-cols-2 grid-cols-1 lg:gap-[30px] sm:gap-[16px] justify-end">
            {/*<div className="dropdown lg:mr-[24px] mb-[16px] md:mb-0">*/}
            {/*  <Controller*/}
            {/*    name={"type"}*/}
            {/*    control={control}*/}
            {/*    render={({ field: { onChange, value } }) => (*/}
            {/*      <DropdownFake*/}
            {/*        option={option}*/}
            {/*        onChange={(val) => {*/}
            {/*          if (val?.value === "Tất cả") {*/}
            {/*            console.log("cc", condition);*/}
            {/*            delete condition?.coQuanBanHanh;*/}
            {/*            setCondition({ ...condition });*/}
            {/*          } else {*/}
            {/*            setCondition({*/}
            {/*              ...condition,*/}
            {/*              coQuanBanHanh: {*/}
            {/*                $eq: val?.value,*/}
            {/*              },*/}
            {/*            });*/}
            {/*          }*/}
            {/*        }}*/}
            {/*        value={value}*/}
            {/*        placeholder={dataConfigLang?.vanBanCap}*/}
            {/*      />*/}
            {/*    )}*/}
            {/*  />*/}
            {/*</div>*/}
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
                {errors.keyword && <p className="error-text">Bắt buộc</p>}
              </form>
            </div>
          </div>
        </div>
        <div>

          <TableBase
            //@ts-ignore
            columns={columns}
            dataSource={dataGioiThieu?.map((val, i) => {
              return {
                ...val,
                index: i + 1,
              };
            })}
          />
          {/*<TableBaseV2*/}
          {/*  columns={columns}*/}
          {/*  dataSource={dataGioiThieu?.map((val, i) => {*/}
          {/*    return {*/}
          {/*      ...val,*/}
          {/*      index: i + 1,*/}
          {/*    };*/}
          {/*  })}*/}
          {/*/>*/}
        </div>
        <div className="show-more flex items-center justify-center md:mt-[16px] cursor-pointer mb-[50px]">
          <Pagination
            page={page}
            limit={limit}
            total={total}
            handleChangePage={(page) => {
              console.log("page", page);
              setPage(page);
            }}
          />
        </div>
      </div>
    </QuyCheWrapper>
  );
};
const QuyCheWrapper = styled.div`
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
  }
`;
export default QuyChe;
