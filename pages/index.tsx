import type {NextPage} from "next";
import React from "react";
import styled from "styled-components";
import BannerHome from "../components/BannerHome";
import BoxQuangCao from "../components/BoxQuangCao";
import SectionTinTuc from "../components/SectionTinTuc";
import BaiVietMoiNhat from "../components/BaiVietMoiNhat";
import BaiViet2024 from "../components/BaiViet2024";
import TapChiKhoaHoc from "../components/TapChiKhoaHoc";

const Home: NextPage = () => {
	return (
		<HomeWrapper>
			<section className="container mx-auto">
				<div className="py-0 py-[20px]">
					<BannerHome/>
				</div>
			</section>

			<section className="section-quang-cao">
				<BoxQuangCao/>
			</section>

			<section className="section-tin-tuc">
				<div className="container mx-auto pt-[40px]">
					<SectionTinTuc element={<BaiVietMoiNhat/>} title={'Bài viết mới nhất'}/>
				</div>
				<div className="container mx-auto pt-[40px]">
					<SectionTinTuc element={<TapChiKhoaHoc/>} title={'Tạp chí khoa học'}/>
				</div>
				<div className="container mx-auto pt-[40px] pb-[40px]">
					<SectionTinTuc element={<BaiViet2024/>} title={`Năm ${(new Date()).getFullYear()}`}/>
				</div>
			</section>
		</HomeWrapper>
	);
};
const HomeWrapper = styled.div`
	
`;
export default Home;
