import styled, {CSSProperties} from "styled-components";
import Link from "next/link";
import moment from "moment";
interface IPorps {
  data: { imageUrl: string; content: string; type?: string; description?: string; dateTime?: string; link?: string };
  style?: CSSProperties;
  type?: "big" | "small";
}
const CardHTQTNews = (props:IPorps) => {
  return(
    <CardNews className="shadow">


        <Link href={props.data.link ? props.data.link : "#"} className='h-full'>
          <div className='card cursor-pointer h-full flex flex-col' style={props.style}>
            <div>
              <img
                className={"image-card wow fadeInUp md:h-[321px] h-full w-full object-cover"}
                src={props.data.imageUrl}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/images/default/no_image.png";
                }}
                alt={"image"}
              />
            </div>

            <div className='px-[20px] flex flex-col justify-center  pb-[26px] pt-[24px] bg-white'>
              <div className='  content wow fadeInUp h-full mb-[16px]'>
                {props.data.dateTime && (
                  <div className='time-content flex items-center mb-[16px]'>
                    <div className="day">
                      {moment(props.data.dateTime).days()}
                    </div>
                    <div className="line h-[30px] border-r-2 border-[#73787E] ml-[20px] mr-[6px]">

                    </div>
                    <div className="month">
                      THÁNG {moment(props.data.dateTime).month()+1}
                    </div>
                  </div>
                )}

                <div className="content min-h-[48px] ">{props.data.content}</div>
              </div>

              {props.data.description && <div className='description mb-[16px]'>{props.data.description}</div>}
              <div className="show-more flex items-center">
                <div className={"mr-2"}>Xem thêm</div>
                <svg
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
                </svg>
              </div>
            </div>
          </div>
        </Link>



    </CardNews>
  )
}
const CardNews=styled.div`
.time-content{
  .day{
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;
color: #DE221A;
  }
  .line{
    
  }
  .month{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #73787E;
  }
}
  .content{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;

    color: #18202A;
  }
`
export default CardHTQTNews;