import styled from "styled-components";
import CardEvent from "../Event/components/CardEvent";
import Title from "../Title";
import React, { useContext, useEffect, useState } from "react";
// @ts-ignore
import Slider from "react-slick";
import {GioiThieu, GioiThieuBanner, IDataHome} from "../../utils/interface";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";
import axios from "axios";
import { ip } from "../../api/ip";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button";

const About = () => {
  const router = useRouter();
  const [dataGioiThieu, setDataGioiThieu] = useState<GioiThieuBanner>();

  const { dataThongTin, langCode } = useContext(AuthContext);
  const getData = async (typeStr: string) => {
    try {
      const res = await axios.get(
        `${ip}/htqt-gioi-thieu?locale=${langCode}&populate=deep`
      );
      if (res) {
        console.log("resss", res);
        setDataGioiThieu(res?.data?.data?.attributes?.gioiThieu);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (router?.query) {
      getData(router?.query?.type as string);
    }
  }, [router, langCode]);
  return (
    <AboutWrapper>
      <div className="container mx-auto lg:mt-[50px] mt-[20px] px-[20px] lg:px-0 sm:pb-[75px] pb-[20px]">
        <div className="grid grid-cols-2 gap-[40px]">
          <div className="">
            <div className="title-1 mb-[12px]">Giới thiệu</div>
            <div className="title-2 mb-[40px]">GIỚI THIỆU <br/> HOẠT ĐỘNG HỢP TÁC QUỐC TẾ</div>
            <div className="">
              <Button
                type={"primary"}
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
            {dataGioiThieu?.moTa}
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};
const AboutWrapper = styled.div`
  .title-1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;

    /* Redmain */

    color: #DE221A;
  }
  .title-2{
    font-family: 'SVN-Product Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;

    /* Black */

    color: #18202A;
  }
`;
export default About;
