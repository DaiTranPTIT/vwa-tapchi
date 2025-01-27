import styled from "styled-components";
import Title from "../Title";
import { ip } from "../../api/ip";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IDataHome } from "../../utils/interface";
import { renderImage } from "../../utils/util";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import { el } from "date-fns/locale";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Button from "../Button";

const Discover = (props: { dataHome: IDataHome }) => {
  const [tabs, setTabs] = useState<string>("ALBUMIMAGE");
  const router = useRouter();
  const [common] = useTranslation("common");
  const { dataConfig } = useAuth();
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <DiscoverWrapper className=" md:px-0 ">
      {/*<div className={"discover-1 md:pt-[109px] md:pb-[96px] py-[20px] "}>*/}
      <div className={"w-full h-[555px]"}>
        {hasWindow && (
          <ReactPlayer
            url={props.dataHome?.duongDanVideo}
            width={"100%"}
            height={"555px"}
          />
        )}

        {/*<iframe width="100%" height="555" src={props.dataHome?.duongDanVideo??''} title="YouTube video player"*/}
        {/*				frameBorder="0"*/}
        {/*				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
        {/*				allowFullScreen></iframe>*/}
        {/*<div className='container mx-auto wow fadeInUp'>*/}
        {/*	<Title title={"Khám phá cùng chúng tôi"} uppercase={true} type={"default"} />*/}
        {/*	<div className=' title-dis relative px-[30px] md:mt-[28px]'>*/}
        {/*		<div className='absolute top-[-15px] left-[15px] text-6xl'>“</div>*/}
        {/*		<div className='text-center'>*/}
        {/*			“ Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis*/}
        {/*			enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”{" "}*/}
        {/*		</div>*/}
        {/*		<div className='text-center'>{getDataConfig("website-description")}</div>*/}
        {/*		<div className='absolute bottom-[-15px] right-[15px] text-6xl'>”</div>*/}
        {/*	</div>*/}
        {/*	<div className='flex justify-center md:mt-[80px] rounded-3xl overflow-hidden'>*/}
        {/*		<img*/}
        {/*			className='w-[130px] h-[130px] rounded-full overflow-hidden'*/}
        {/*			src={`/images/home/logo-dis.png`}*/}
        {/*			alt='image'*/}
        {/*		/>*/}
        {/*	</div>*/}
        {/*</div>*/}
      </div>
    </DiscoverWrapper>
  );
};

const DiscoverWrapper = styled.div`
  .discover-1 {
    background-image: url("/images/home/kham-pha.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .title-dis {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    color: #ffffff;
  }
  .tabs-item {
    padding-bottom: 8px;
    cursor: pointer;
    margin-right: 50px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    /* identical to box height, or 200% */

    display: flex;
    align-items: center;

    /* Gray/Gray-8 */

    color: #343a40;
    svg {
      margin-right: 12px;
    }
  }
  .tabs-item-active {
    color: var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
    svg {
      path {
        fill: var(--primary-color);
      }
    }
  }
`;
export default Discover;
