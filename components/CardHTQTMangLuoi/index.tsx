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
      <a href={props.data?.link?props.data?.link:"#"} target={"_blank"}>
        <div className="lg:flex w-full">
          <div className="wow fadeInUp shrink-0">
            <img className="lg:h-[337px] lg:w-[337px] h-[200px] w-full object-cover" src={data?.imageUrl} />
          </div>
          <div className="content lg:py-[45px] lg:px-[40px] px-[16px] py-[16px]  wow fadeInUp">
            <div className="border-l-2 pl-[12px] lg:border-primary-500 content wow fadeInUp mb-[24px]">
              <div className="flex mb-[10px]">
                <img className="mr-[16px]" src="/images/icons/web.svg" alt="icon" />
                <a className="text-primary" href={props.data.link??'#'} target={'_blank'}> {props.data.link}</a>
              </div>
              <div className="card-content">{props.data.title}</div>
            </div>
            <div className="description">{data?.description}</div>
          </div>
        </div>
      </a>

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

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
  .description{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #73787E;


    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
export default CardHTQTMangLuoi;
