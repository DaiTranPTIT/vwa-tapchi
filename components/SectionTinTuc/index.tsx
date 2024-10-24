import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import styled from "styled-components";

interface IProps {
    element: ReactJSXElement,
    title: string
}
export default (props: IProps) => {
    return <SectionTinTucWrapper>
        <div className="container-tin-tuc">
            <div className="title">
                {props.title}
            </div>
            <div className="hozional-line"></div>
            <div className="content">
                {props.element}
            </div>
        </div>
    </SectionTinTucWrapper>
}

const SectionTinTucWrapper = styled.div`
    .container-tin-tuc {
      background-color: #FFFFFF;
      border: 1px solid #E0E0E0;
      padding: 24px;
      
      .title {
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        text-align: left;
        color: var(--text-primary);
      }
      
      .hozional-line {
        width: 100%;
        height: 2px;
        background-color: #A4CBEA;
        margin: 20px 0;
      }
    }
`