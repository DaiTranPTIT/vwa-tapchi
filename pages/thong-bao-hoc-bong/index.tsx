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

const ThongBaoHocBong = () => {
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(4);
  const [total, setTotal] = useState<number>(0);
  const [dataGioiThieu, setDataGioiThieu] = useState<DataDonVi[]>([]);
  const router = useRouter();
  const [condition, setCondition] = useState<any>();
  const { langCode } = useContext(AuthContext);
  const contentRef = useRef<HTMLDivElement>(null);
  let timmer: NodeJS.Timeout | undefined;
  const [type, setType] = useState<string>();

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
            populate: "deep",
            pagination: {
              page: page,
              pageSize: limit,
            },
          },
        }
      );
      if (res) {
        console.log("resss", res);
        setDataGioiThieu(res?.data?.data ?? []);
        // setDataChiTiet(res?.data?.[0]);
        setTotal(res?.data?.metadata?.total ?? 0);
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
  }, [router, page, langCode]);
  useEffect(() => {
    setPage(1);
  }, [type]);
  return (
    <DonViNghienCuuWrapper>
      <div className="container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px]">
        <>
          <Title title={"THÔNG BÁO HỌC BỔNG"} titleTop="học bổng" uppercase={true} />

          {dataGioiThieu?.length > 0 ? (
            <>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                {dataGioiThieu?.map((val, i) => {
                  return (
                    <CardHTQTChuongChinh
                      data={{
                        imageUrl: renderImage(
                          val?.attributes?.hinhAnh?.data?.attributes?.url
                        ),
                        content: val?.attributes?.tieuDe,
                        description: val?.attributes?.moTa ?? "",
                        // dateTime: val.createdAt,
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
                <p className="text-secondary text-sm">Không có dữ liệu</p>
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
            console.log("page", page);
            setPage(page);
          }}
        />
      </div>
    </DonViNghienCuuWrapper>
  );
};
const DonViNghienCuuWrapper = styled.div``;
export default ThongBaoHocBong;
