import styled from "styled-components";
import Card from "../Card";
import CardEvent from "../Event/components/CardEvent";
import {dataTinTuc} from "../../data";
import MiniCard from "../Event/components/MiniCard";
import {useEffect, useRef, useState} from "react";
// @ts-ignore
import Slider from "react-slick";
import {useTranslation} from "react-i18next";
import Title from "../Title";
import CardBanner from "../CardBanner";
import Button from "../Button";
import {IDataHome, TuyenSinh} from "../../utils/interface";
import axios from "axios";
import {ip} from "../../api/ip";
import {renderImage} from "../../utils/util";
import {useRouter} from "next/router";
const News = (props:{dataHome:IDataHome}) => {
	const [common] = useTranslation("common");
	const router=useRouter();
	const SliderRef = useRef(null);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const handleNext = () => {
		if (SliderRef && SliderRef.current) {
			//@ts-ignore
			SliderRef?.current?.slickNext();
		}
	};
	const handlePrev = () => {
		if (SliderRef && SliderRef.current) {
			//@ts-ignore
			SliderRef?.current?.slickPrev();
		}
	};
	const [dataSuKien,setDataSuKien]=useState<TuyenSinh[]>([])


	const titleCard = (
		<div className='flex justify-between'>
			<div>{common('news.edu')}</div>
			<div className='button-arrow flex'>
				<button className='mr-[16px] flex items-center justify-center' onClick={handlePrev}>
					<img src='/images/icons/arrow-left.svg' alt={'image'} />
				</button>
				<button className='flex items-center justify-center' onClick={handleNext}>
					<img src='/images/icons/arrow-right.svg'  alt={'image'}/>
				</button>
			</div>
		</div>
	);
	return (
		<NewsWrapper>
			<div className=' wow fadeInDown bg-[#1421410A] py-[50px] px-[20px] lg:px-0'>
				<div className='container mx-auto'>
					<Title
						title={"Tạp chí khoa học"}
						uppercase={true}
					/>
					<div className='lg:grid hidden lg:grid-cols-2  grid-cols-1 gap-[30px] mt-[40px]'>
						{props.dataHome?.tap_chi_khoa_hocs?.data?.map((val, i) => {
							return (
								<div onClick={()=>{
									router.push(`#`)
								}} key={i}>
									<CardBanner
										imageUrl={renderImage(val?.attributes?.hinhAnh?.data?.attributes?.url)}
										title={val?.attributes?.tieuDe}
										description={val?.attributes?.moTa??''}
										dateTime={val?.attributes?.createdAt}
										key={i}
										type={"big"}
									/>
								</div>
							);
						})}
					</div>
					<div className='lg:hidden grid lg:grid-cols-2  grid-cols-1 gap-[30px] mt-[40px]'>
						{props.dataHome?.tap_chi_khoa_hocs?.data?.map((val, i) => {
							return (
								<div onClick={()=>{
									router.push(`#`)
								}} key={i}>
									<CardBanner
										imageUrl={renderImage(val?.attributes?.hinhAnh?.data?.attributes?.url)}
										title={val?.attributes?.tieuDe}
										description={val?.attributes?.moTa??''}
										dateTime={val?.attributes?.createdAt}
										key={i}
										type={"small"}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex justify-center sm:mt-[40px] mt-[20px]">
					<Button type={"primary"}
									classname="lg:w-[279px]"
									onClick={()=>{
						router.push('/tin-tuyen-sinh')
					}}>Xem thêm</Button>
				</div>
			</div>
		</NewsWrapper>
	);
};
const NewsWrapper = styled.div``;
export default News;
