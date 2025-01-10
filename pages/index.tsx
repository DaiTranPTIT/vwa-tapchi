import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import BannerHome from "../components/BannerHome";
import BoxQuangCao from "../components/BoxQuangCao";
import SectionTinTuc from "../components/SectionTinTuc";
import BaiVietMoiNhat from "../components/BaiVietMoiNhat";
import BaiViet2024 from "../components/BaiViet2024";
import TapChiKhoaHoc from "../components/TapChiKhoaHoc";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const {t : common} = useTranslation("common");
  return (
    <HomeWrapper>
      <section className="container mx-auto">
        <div className="py-0 py-[20px]">
          <BannerHome />
        </div>
      </section>

      <section className="section-quang-cao">
        <BoxQuangCao />
      </section>

      <section className="section-tin-tuc">
        <div className="container mx-auto pt-[40px]">
          <SectionTinTuc
            element={<BaiVietMoiNhat />}
            title={common("title.bai-viet-moi-nhat")}
          />
        </div>
        <div className="container mx-auto pt-[40px]">
          <SectionTinTuc
            element={<TapChiKhoaHoc />}
            title={common("title.tap-chi-khoa-hoc")}
          />
        </div>
        <div className="container mx-auto pt-[40px] pb-[40px]">
          <SectionTinTuc
            element={<BaiViet2024 />}
            title={`${common("common.year")} ${new Date().getFullYear()}`}
          />
        </div>
      </section>
    </HomeWrapper>
  );
};
const HomeWrapper = styled.div`
@media (max-width: 800px) {
  .section-quang-cao{
    display:none;
  }
}
`;
export default Home;
