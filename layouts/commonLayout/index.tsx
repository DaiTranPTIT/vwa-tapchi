import {useRouter} from "next/router";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import i18n from "../../i18n";
import ScrollTopButton from "./components/ScrollTopButton";
import Footer from "./footer";
import Header from "./header";
import Head from "next/head";
import axios from "axios";
import {ip} from "../../api/ip";

const CommonLayout = ({ children }: any) => {
	const [language, setLanguage] = useState<string>("");
	const { langCode, setDataConfigLang,setLangCode } = useContext(AuthContext);
	const { pathname } = useRouter();

	useEffect(() => {
		(async () => {
			const langCode = localStorage.getItem("langCode") || "en";
			setLanguage(langCode);
			i18n.changeLanguage(langCode);
		})();
	}, []);

	const handleChangeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
		setLanguage(lang);
		localStorage.setItem("langCode", lang);
		setLangCode(lang);
	};

	const getConfigButton = async () => {
		try {
			const res = await axios.get(
				`${ip}/htqt-nut-trang?locale=${langCode}&populate=deep`,
				{
					params: {
						// filters: {
						// 	// thoiGianBatDau: {
						// 	//   $lte: moment().endOf("day").toISOString(),
						// 	//   // $lte: moment().endOf("day").toISOString(),
						// 	// },
						// 	thoiGianKetThuc: {
						// 		$lt: moment().startOf("day").toISOString(),
						// 		// $lte: moment().endOf("day").toISOString(),
						// 	},
						// },
						// pagination: {
						// 	page: page,
						// 	pageSize: limit,
						// },
					},
				}
			);
			if (res){
				setDataConfigLang(res?.data?.data?.attributes ?? {});
			}

		} catch (e) {}
	};
	useEffect(() => {
		getConfigButton();
	}, [langCode]);
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<link rel="icon" href="/favicon.ico"></link>
				<title>Tạp chí khoa học - Học viện Phụ nữ Việt Nam</title>
			</Head>
			<div className='flex flex-col min-h-screen bg-[#FFFFFF]'>
				<Header language={language} handleChangeLanguage={handleChangeLanguage} />
				<div className='flex-auto overflow-hidden'>{children}</div>
				<Footer />
				<ScrollTopButton />
			</div>
		</>

	);
};
export default React.memo(CommonLayout);
