import styled from "styled-components";
import CardEvent from "../Event/components/CardEvent";
import Title from "../Title";
import React, { useContext, useEffect, useState } from "react";
// @ts-ignore
import Slider from "react-slick";
import { GioiThieu, GioiThieuBanner, IDataHome } from "../../utils/interface";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";
import axios from "axios";
import { ip } from "../../api/ip";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button";

const About = () => {
  const router = useRouter();
  const [dataGioiThieu, setDataGioiThieu] = useState<GioiThieuBanner>();

  const { dataThongTin, langCode,dataConfigLang } = useContext(AuthContext);
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
        <div className="lg:grid lg:grid-cols-2 gap-[40px]">
          <div className="wow fadeInLeft">
            <div className="lg:hidden">
              <Title
                title={"HOẠT ĐỘNG HỢP TÁC QUỐC TẾ"}
                titleTop={"Giới thiệu"}
              />
            </div>
            <div className="hidden lg:block title-1 mb-[12px] uppercase">
              {dataGioiThieu?.tieuDe}
            </div>
            <div className="title-mo-ta hidden lg:block title-2 lg:mb-[40px] mn-[16px]">
              {dataGioiThieu?.moTa}
            </div>
            <div className="lg:hidden block">
              <div className="  content-banner-2 wow fadeInUp mb-[16px]" dangerouslySetInnerHTML={{__html:dataGioiThieu?.noiDung??''}}>

              </div>
            </div>
            <div className="flex justify-center lg:block">
              <Button
                type={"primary"}
                classname="lg:w-[239px]"
                onClick={() => {
                  router.push("/gioi-thieu?type=GT");
                }}
              >
                {dataConfigLang?.xemThem}
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className=" content-banner-2 wow fadeInUp">
              <div dangerouslySetInnerHTML={{__html:dataGioiThieu?.noiDung??''}}>

              </div>
              {/*{dataGioiThieu?.noiDung}*/}
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};
const AboutWrapper = styled.div`
  .title-1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    
    color: #de221a;
  }
  .title-2 {
    font-family: "SVN-Product Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;

    /* Black */

    color: #18202a;
  }
  .content-banner-2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    color: #73787e;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }
  .title-mo-ta{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
export default About;
