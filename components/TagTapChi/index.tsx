import styled from "styled-components";

export default () => {
    return <TagTapChiWrapper>
        <div className="flex gap-[16px] flex-wrap">
            <strong>
                Từ khoá:
            </strong>
            <ul className="list-tag">
                <li>
                    Financial consumer protection
                </li>
                <li>
                    Legal framework
                </li>
                <li>
                    international norms
                </li>
                <li>
                    enforcement mechanims
                </li>
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