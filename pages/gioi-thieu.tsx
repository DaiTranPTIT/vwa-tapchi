import { useForm } from "react-hook-form";

import styled from "styled-components";

import React, {useContext, useEffect, useRef, useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import moment from "moment";
import ReactToPrint from "react-to-print";
import { ip } from "../api/ip";
import {GioiThieu, GioiThieuNC} from "../utils/interface";
import Title from "../components/Title";
import {da, tr} from "date-fns/locale";
import {dataNghienCuu} from "../data";
import CardNghienCuu from "../components/CardNghienCuu";
import {AuthContext} from "../context/AuthContext";

const GioiThieu = () => {
	const [sendSuccess, setSendSuccess] = useState<boolean>(false);
	const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
	const [dataGioiThieu, setDataGioiThieu] = useState<any>();
	const [dataGioiThieuNC, setDataGioiThieuNC] = useState<GioiThieuNC[]>([]);
	const router = useRouter();
	const contentRef = useRef<HTMLDivElement>(null);
	let timmer: NodeJS.Timeout | undefined;
	const [type, setType] = useState<string>();
const {dataThongTin}=useContext(AuthContext)
	const getData = async (typeStr:string) => {
		try {
			if (typeStr==='NC'){
				const res = await axios.get(`${ip}/qlkh-dinh-huong-nghien-cuus`);
				if (res) {
					console.log("resss", res);
					setDataGioiThieuNC(res?.data?.data);
					setDataChiTiet(res?.data?.data?.[0]);
				}
			}
			if (typeStr==='KH'){
				const res = await axios.get(`${ip}/chien-luoc-phat-trien`);
				if (res) {
					console.log("resss", res);
					setDataGioiThieu(res?.data?.data);
					setDataChiTiet(res?.data?.data?.[0]);
				}
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
	}, [router]);

	return (
		<ChiTietWrapper>
			<div className='container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px]'>
				{type === "KH" && (
					<>
						<Title title={"Chiến lược phát triển KH, CN & ĐMST"} uppercase={true} />
						<div dangerouslySetInnerHTML={{__html:dataGioiThieu?.attributes?.htmlContent}}>
						</div>
					</>
				)}
				{type === "NC" && (
					<>
						<Title title={"ĐỊNH HƯỚNG NGHIÊN CỨU"} uppercase={true} />
						{dataGioiThieuNC?.map((val,i)=>{
							return(
								<CardNghienCuu data={{
									no:val?.attributes?.so,
									title:val?.attributes.tieuDe,
									content:val?.attributes?.moTa
								}}
								key={i}/>
							)
						})}
					</>
				)}
				{type === "LH" && (
					<div className="lien-he">
						<Title title={"THÔNG TIN LIÊN HỆ"} uppercase={true} />
						<div className='flex justify-between items-center'>
							<div className='info'>
								<p className='mb-[40px]'>{dataThongTin?.tenPhongTiepNhan}</p>
								<div className='item-info flex mb-[20px]'>
									<img className='mr-[16px]' src='/images/icons/user.svg' alt={"icon"} />
									<div>{dataThongTin?.truongPhong}</div>
								</div>
								<div className='item-info flex mb-[20px]'>
									<img className='mr-[16px]' src='/images/icons/phone.svg' alt={"icon"} />
									<div>{dataThongTin?.soDienThoai}</div>
								</div>
								<div className='item-info flex mb-[20px]'>
									<img className='mr-[16px]' src='/images/icons/mail.svg' alt={"icon"} />
									<div>{dataThongTin?.email}</div>
								</div>
								<div className='item-info flex '>
									<img className='mr-[16px]' src='/images/icons/location.svg' alt={"icon"} />
									<div>{dataThongTin?.coSo1}</div>
								</div>
							</div>
							<div>
								<iframe
									src={dataThongTin?.googleMap}
									width='600'
									height='450'
									// style='border:0;'
									// allowFullScreen='fa'
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
								></iframe>
							</div>
						</div>
					</div>
				)}
			</div>
		</ChiTietWrapper>
	);
};
const ChiTietWrapper = styled.div`
	.info {
		p {
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 18px;
			line-height: 22px;

			color: #18202a;
		}
	}
	h2 {
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 36px;
		line-height: 40px;
		/* identical to box height, or 111% */

		display: flex;
		align-items: center;

		color: #000000;
	}
	.list-menu {
		.item-menu {
			font-family: "Inter";
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 20px;
			/* identical to box height, or 143% */

			color: #000000;
			&:hover {
				//background-color: #DE221A;
				color: #de221a;
			}
		}
		.active {
			color: #de221a;
			font-weight: 700;
		}
	}
.lien-he{
	.item-info {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 18px;

		/* Black */

		color: #18202a;
	}
}
	.chien-luoc{
		.item-info {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 28px;

			color: #18202A;
		}
	}
	.muc-1{
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 22px;
		/* identical to box height */


		/* Black */

		color: #18202A;
	}
	.muc-2{
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 20px;
		/* identical to box height, or 111% */


		/* Black */

		color: #18202A;
	}
`;
export default GioiThieu;
