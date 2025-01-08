// @ts-ignore
import Slider from "react-slick";
import React, { ReactNode } from "react";
// @ts-ignore
import styled from "styled-components";
interface IProps {
  setting: any;
  children: any;
  arrowNext?: ReactNode;
  arrowPrev?: ReactNode;
  gradient?: boolean;
  padding?: boolean;
}

const SlickWrapper: any = styled.div`
  .slick-slide {
    height: inherit !important;
  }
  .slick-track {
    display: flex;
  }
  .slick-slide > div {
    height: 390px;
  }
  .slick-dots {
    bottom: 15px; /* Khoảng cách dots so với cạnh dưới */
    li {
      button:before {
        font-size: 10px; /* Kích thước của dot */
        color: #fff; /* Màu dot mặc định */
      }
    }
    li.slick-active button:before {
      color: rgb(28 117 188); /* Màu dot khi active */
    }
  }
`;

const SlickSlider = (props: IProps) => {
  const slider = React.createRef<Slider>();
  const next = () => {
    if (slider && slider.current) {
      // @ts-ignore
      slider.current.slickNext();
    }
  };
  const previous = () => {
    if (slider && slider.current) {
      // @ts-ignore
      slider.current.slickPrev();
    }
  };
  return (
    <SlickWrapper className="relative">
      <div className={`relative ${props.padding ? "px-6" : "px-0"}`}>
        {props?.gradient && (
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-black via-transparent to-transparent opacity-70"></div>
        )}
        <Slider {...props.setting} ref={slider}>
          {props.children}
        </Slider>
        <div style={{ textAlign: "center", justifyItems:"center" }}>
          <button
            className="absolute top-1/2 left-4 text-white hidden lg:block z-10 bg-white-800/[.4] rounded"
            onClick={previous}
          >
            {props.arrowPrev ? (
              props.arrowPrev
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            )}
          </button>
          <button
            className=" absolute top-1/2 right-4 text-white hidden lg:block z-20 bg-white-800/[.4] rounded"
            onClick={next}
          >
            {props.arrowNext ? (
              props.arrowNext
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </SlickWrapper>
  );
};
export default SlickSlider;
