import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface IProps {
    tagsTapChi?: string[]
}

export default (props: IProps) => {
    const {t : common} = useTranslation("common");
    const {tagsTapChi} = props;
    return <TagTapChiWrapper>
        <div className="flex gap-[16px] flex-wrap">
            <strong>
                {common("so-tap-chi.tu-khoa")}:
            </strong>
            <ul className="list-tag">
                {
                    tagsTapChi?.map(item => <li>
                        {item}
                    </li>)
                }
            </ul>
        </div>
    </TagTapChiWrapper>
}

const TagTapChiWrapper = styled.div`
    ul.list-tag {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      li {
        font-size: 14px;
        font-weight: 400;
        line-height: 20.3px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #777D93;
        background-color: #F4F4F4;
        padding: 2px 12px;
        border-radius: 15px;
      }
    }
`