import Link from "next/link";
import styled, { CSSProperties } from "styled-components";
import moment from "moment";
interface IPorps {
  data: {
    title: string;
    imageUrl: string;
    content?: string;
    type?: string;
    description?: string;
    dateTime?: string;
    link?: string;
  };
  style?: CSSProperties;
  isShowTime?:boolean;
  isRedTime?:boolean;
  isShadow?:boolean;
  isArrow2?:boolean;
  type?: "big" | "small";
}
const CardHTQT = (props: IPorps) => {
  const { data,isShowTime,isShadow,isRedTime,isArrow2 } = props;
  return (
    <CardHTQTWrapper className={`bg-white ${isShadow?'shadow':''}`}>
      <Link href={data.link ? data.link : "#"} className="h-full">
        <div className="wow fadeInUp" style={props.style}>
          <div>
            <img src={data?.imageUrl} className="h-[285px] w-full object-cover" alt="image" />
          </div>
          <div className="content p-[24px] wow fadeInUp">
            {isShowTime&&<div className=" flex mb-[16px]">
              {isRedTime? <img className="mr-[12px]" src="/images/icons/time-2.svg" alt="icon" />: <img className="mr-[12px]" src="/images/icons/time.svg" alt="icon" />}
                <div className="time">
                  {moment(data?.dateTime).format("DD/MM/YYYY")}
                </div>
            </div>}
            {data?.title&& <div className="title mb-[16px] min-h-[56px]">{data?.title}</div>}
            {data?.description&& <div className="description mb-[16px] min-h-[72px]">{data?.description}</div>}

            <div className="show-more flex">
              <div className={"mr-2"}>Xem thêm</div>
              {isArrow2?<svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0.663574L5.5 5.16357L1.5 9.66357" stroke="#DE221A" stroke-width="1.7"/>
                  <path d="M7.5 0.663574L11.5 5.16357L7.5 9.66357" stroke="#DE221A" stroke-width="1.7"/>
                </svg>
                : <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 7H13M13 7L7.7381 1.5M13 7L7.7381 12.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                  />
                </svg>}

            </div>
          </div>
        </div>
      </Link>
    </CardHTQTWrapper>
  );
};
const CardHTQTWrapper = styled.div`
  .shadow-content{
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
  .show-more{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;


    color: #DE221A;

  }
  .time {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #18202a;
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;

    color: #18202a;


    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .description {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    display: flex;
    align-items: center;

    /* gray 2 */

    color: #73787e;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
export default CardHTQT;
