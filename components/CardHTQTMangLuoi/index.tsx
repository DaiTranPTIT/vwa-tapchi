import styled, { CSSProperties } from "styled-components";
import moment from "moment/moment";
import { da } from "date-fns/locale";
interface IPorps {
  data: {
    imageUrl: string;
    title: string;
    description?: string;
    dateTime?: string;
    link?: string;
  };
  style?: CSSProperties;
  type?: "big" | "small";
}
const CardHTQTMangLuoi = (props: IPorps) => {
  const { data } = props;
  return (
    <CardHTQTMangLuoiWrapper className="bg-[#1421410A] w-full">
      <div className="flex w-full">
        <div className="wow fadeInUp">
          <img className="h-[337px] w-[337px] object-cover" src={data?.imageUrl} />
        </div>
        <div className="content py-[45px] px-[40px] wow fadeInUp">
          <div className="border-l-2 pl-[12px] md:border-primary-500 content wow fadeInUp mb-[24px]">
            <div className="flex mb-[10px]">
              <img className="mr-[16px]" src="/images/icons/web.svg" alt="icon" />
              <a className="text-primary" href={props.data.link??'#'}> {props.data.link}</a>
            </div>
            <div className="card-content">{props.data.title}</div>
          </div>
          <div className="description">{data?.description}</div>
        </div>
      </div>
    </CardHTQTMangLuoiWrapper>
  );
};
const CardHTQTMangLuoiWrapper = styled.div`
.card-content{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #18202A;
}
  .description{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #73787E;
  }
`;
export default CardHTQTMangLuoi;
