import styled, {CSSProperties} from "styled-components";
import moment from "moment";
import {router} from "next/client";
import {useRouter} from "next/router";

interface IPorps {
  data: { imageUrl: string; content: string; type?: string; description?: string; dateTime?: string; link?: string };
  style?: CSSProperties;
  type?: "big" | "small";
}
const CardHTQTChuongChinh = (props:IPorps) => {
  const {data}=props
  const router=useRouter();
  return(
    <CardHTQTChuongChinhWraper className="cursor-pointer">
    <div onClick={()=>{router.push(data?.link??'#')}}>
      <div className="relative mb-[40px] wow fadeInUp">
        <img className="w-full" src={data?.imageUrl} alt="image"/>
        <div className="absolute left-0 bottom-[-18px] w-full">
          <div className="w-full flex justify-center">
            <div className="bg-primary text-white w-[150px] h-[36px] flex justify-center items-center">
              {moment(data?.dateTime).format('DD/MM/YYYY')}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center content-card">
        {data?.content}
      </div>
    </div>
    </CardHTQTChuongChinhWraper>
  )
}
const CardHTQTChuongChinhWraper=styled.div`
.content-card{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;

  color: #18202A;
}
`
export default CardHTQTChuongChinh;