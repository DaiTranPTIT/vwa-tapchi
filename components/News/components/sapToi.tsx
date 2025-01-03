import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {ip} from "../../../api/ip";
import moment from "moment";
import {AuthContext} from "../../../context/AuthContext";
import {DataNewListV2} from "../../../utils/interface";
import CardEvent from "../../CardEvent";
import {renderImage} from "../../../utils/util";
import CardBanner from "../../CardBanner";
import Pagination from "../../pagination";
import {useRouter} from "next/router";
import CardHTQTNews from "../../CardHTQTNews";

const SapToi = (props:{type:string,conditionSearch:any}) => {
  const router=useRouter();
  const {type}=props
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(2);
  const [total, setTotal] = useState<number>(0);
  const { langCode,dataConfigLang } = useContext(AuthContext);
  const [condition, setCondition] = useState<any>();
  const [dataNew, setDataNew] = useState<DataNewListV2[]>([]);
  const handleGetAllEvent = async () => {
    try {
      const res = await axios.get(
        `${ip}/htqt-tin-tuc-su-kiens?locale=${langCode}&populate=deep`,
        {
          params: {
            filters: {
              kieu: {
                $eq: type,
              },
              thoiGianBatDau: {
                $gt: moment().endOf("day").toISOString(),
                // $lte: moment().endOf("day").toISOString(),
              },
              ...condition,
              ...props.conditionSearch
            },
            sort: ['createdAt:desc'],
            pagination: {
              page: page,
              pageSize: limit,
            },
          },
        }
      );
      if (res) {
        setDataNew(res?.data?.data ?? []);
        setTotal(res?.data?.meta?.pagination?.total ?? 0);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(()=>{
    if (type==='event'){
      handleGetAllEvent();
    }
  },[langCode,page,condition,type,props.conditionSearch])
  return(
    <>
      <div className="lg:mb-[80px] mb-[20px]">
        <div className="title-event lg:mb-[40px] mb-[16px] flex justify-between">
          <h2>{dataConfigLang?.suKienSapToi}</h2>
          {/*<div className="show-more flex items-center cursor-pointer">*/}
          {/*  <div className="mr-[24px] shrink-0">Xem thêm</div>*/}
          {/*  <img src="./images/icons/arrow-right-2.svg" alt="image" />*/}
          {/*</div>*/}
        </div>

          {dataNew?.length > 0 ? (
            <>
            <div className={"hidden lg:grid grid-cols-2 gap-[30px] "}>
              {dataNew
                // ?.filter((item) => {
                //   return moment(item?.attributes.thoiGianBatDau).isAfter(
                //     moment()
                //   );
                // })
                ?.map((val, i) => {
                  if (i < 2) {
                    return (
                      <div
                        onClick={() => {
                          router.push(`/tin-tuc/${val?.id}`);
                        }}
                        key={i}
                      >
                        {/*<CardEvent*/}
                        {/*  data={{*/}
                        {/*    imageUrl: renderImage(*/}
                        {/*      val?.attributes?.hinhAnh?.data?.attributes*/}
                        {/*        ?.url*/}
                        {/*    ),*/}
                        {/*    title: val?.attributes?.tieuDe,*/}
                        {/*    content: val?.attributes?.moTa ?? "",*/}
                        {/*    dateTime: val?.attributes.thoiGianBatDau,*/}
                        {/*    dateStart: val?.attributes.thoiGianBatDau,*/}
                        {/*    dateEnd: val?.attributes.thoiGianKetThuc,*/}
                        {/*    link: `/tin-tuc/${val?.id}`,*/}
                        {/*  }}*/}
                        {/*  key={i}*/}
                        {/*/>*/}
                        <CardHTQTNews data={{
                          imageUrl: renderImage(  val?.attributes?.hinhAnh?.data?.attributes?.url),
                          content: val?.attributes?.tieuDe,
                          dateTime:val?.attributes?.createdAt,
                          description: val?.attributes.moTa ?? "",
                          link: `/tin-tuc/${val?.id}`,
                        }}
                        />
                      </div>
                    );
                  }
                })}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden">
          {dataNew.map((val, i) => {
            return (
              <div className={"mb-[24px]"} key={i}>
                {/*<CardBanner*/}
                {/*  imageUrl={renderImage(*/}
                {/*    val?.attributes?.hinhAnh?.data?.attributes?.url*/}
                {/*  )}*/}
                {/*  title={val?.attributes?.tieuDe}*/}
                {/*  description={val?.attributes?.moTa ?? ""}*/}
                {/*  dateTime={val?.attributes?.createdAt}*/}
                {/*  key={i}*/}
                {/*  type={"small"}*/}
                {/*/>*/}
                <CardHTQTNews data={{
                  imageUrl: renderImage(  val?.attributes?.hinhAnh?.data?.attributes?.url),
                  content: val?.attributes?.tieuDe,
                  dateTime:val?.attributes?.createdAt,
                  description: val?.attributes.moTa ?? "",
                  link: `/tin-tuc/${val?.id}`,
                }}/>
              </div>
            );
          })}
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
      </div>

    </>
  )
}
export default SapToi;