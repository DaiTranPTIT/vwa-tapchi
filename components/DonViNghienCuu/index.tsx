import styled from "styled-components";
import Title from "../Title";
import { dataDaoTao } from "../../data";
import CardEvent from "../Event/components/CardEvent";
import {IDataHome} from "../../utils/interface";
import {renderImage} from "../../utils/util";
import Pagination from "../pagination";
import React, {useState} from "react";
import CardHTQT from "../CardHTQT";

const DonViNghienCuu = (props:{dataHome:IDataHome}) => {
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(3);
	const [total, setTotal] = useState<number>(0);
	if (props.dataHome?.htqt_mang_luoi_doi_tacs?.data?.length>0){
		return (
			<DonViWrapper className="bg-[#1421410A] sm:py-[50px] py-[20px]">
				<div className='container mx-auto px-[20px] lg:px-0 lg:mt-[50px] mt-[20px] '>
					<Title title={"Mạng lưới đối tác"} titleTop={"ĐỐI TÁC"} uppercase={true} />
					<div className='grid lg:grid-cols-3 grid-cols-1 gap-[30px]'>
						{props.dataHome?.htqt_mang_luoi_doi_tacs?.data?.map((val, i) => {
							if (i<3){
								return (
									<CardHTQT
										data={{
											imageUrl: renderImage(val?.attributes?.hinhAnh?.data?.attributes?.url),
											title: val?.attributes?.tieuDe,
											// description: val?.attributes?.moTa??'',
											// // dateTime: val?.attributes?.createdAt,
											// link: val?.attributes?.duongDan,
										}}
										type={'small'}
										isCenterTitle={true}
										key={i}
									/>
								);
							}else {
								return null;
							}

						})}
					</div>
					{/*<div className="show-more flex items-center justify-center md:mt-[16px] cursor-pointer">*/}
					{/*	<Pagination*/}
					{/*		page={page}*/}
					{/*		limit={limit}*/}
					{/*		total={total}*/}
					{/*		handleChangePage={(page) => {*/}
					{/*			console.log("page", page);*/}
					{/*			setPage(page);*/}
					{/*		}}*/}
					{/*	/>*/}
					{/*</div>*/}
				</div>
			</DonViWrapper>
		);
	}else {
		return (
			<DonViWrapper>
				<div className='container mx-auto md:py-[50px] py-[20px]'>
					<div>
						<Title title={"Mạng lưới đối tác"} uppercase={true} />
					</div>
					<div className="w-full h-full justify-center items-center flex flex-col">
						<img className="mb-[16px]" src="/images/default/no_data.png" alt="image"/>
						<p className="text-secondary text-sm">Không có dữ liệu</p>
					</div>
				</div>
			</DonViWrapper>
		)
	}

};
const DonViWrapper = styled.div``;
export default DonViNghienCuu;
