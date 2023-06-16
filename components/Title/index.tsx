import styled from "styled-components";

interface IProps {
  title: string;
  titleTop?: string;
  description?: string;
  uppercase?: boolean;
  type?: "primary" | "default";
}
const Title = (props: IProps) => {
  return (
    <TitleWrapper>
      <div className="flex flex-col items-center lg:mb-[40px] mb-[20px]">
        {props?.titleTop && <div className="title-top mb-[12px]">{props?.titleTop}</div>}
        <div
          className={` ${props.uppercase ? "uppercase" : ""} ${
            props.type === "default" ? "text-white" : "text-black"
          } text-center`}
        >
          {props.title}
        </div>
        {/*<div className={`border-b-2 ${props.type==='default'?'border-white-500 md:border-white-500':'border-primary-500 md:border-primary-500'} md:border-b-4  pb-[12px] w-[64px]`}></div>*/}
        {/*<div className={`border-b-2 ${props.type==='default'?'border-white-500 md:border-white-500':'border-primary-500 md:border-primary-500'} md:border-b-4  pb-[12px] w-[114px]`}></div>*/}
      </div>
      {props.description && (
        <div
          className={`description text-center ${
            props.type === "default" ? "text-white" : "text-black"
          }`}
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>
      )}
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #18202a;
  .title-top {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    /* Redmain */

    color: #de221a;
  }
  .description {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;
export default Title;
