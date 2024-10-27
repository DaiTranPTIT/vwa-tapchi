import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import styled from "styled-components";

interface IProps {
    onClick?: () => any,
    title: string
    icon?: ReactJSXElement,
    ghost?: boolean
}
export default (props: IProps) => {
    return <ButtonDefault>
        <button onClick={props.onClick} className={`button-outline flex gap-[8px] items-center`}>
        <span>{props.title}</span>{props.icon}
    </button>
    </ButtonDefault>
}

const ButtonDefault = styled.div`
        .button-outline {
            padding: 10px 20px;
            font-size: 15px;
            font-weight: 700;
            line-height: 17.25px;
            text-align: left;
            color: var(--primary-color);
            transition: .2s;
            border: 1px solid var(--primary-color);
        
            &:hover {
                background-color: var(--primary-color) !important;
                color: white !important;
            }
        }
    `