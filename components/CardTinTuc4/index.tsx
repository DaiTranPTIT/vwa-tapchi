import styled from "styled-components";
import { MTapChi } from "../../api/tapChi/typing";
import { formatDate } from "../../utils/util";
import Link from "next/link";

interface IProps {
    data?: MTapChi.ITapChi
}
export default (props: IProps) => {
    const {data} = props;
    return <CardTinTuc4Wrapper>
        <div className="card">
            <Link href={`/tap-chi/${data?._id}`}>
                <h2 className="title">
                    {data?.tieuDe}
                </h2>
            </Link>
            <p className="meta-date flex gap-[8px] items-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.16536" cy="8.16658" r="6.83333" stroke="#777D93" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.16406 3.99988V8.20821L11.5807 8.20821" stroke="#777D93" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span>{formatDate(data?.thongTinXuatBan[0].thoiGianXuatBan)}</span>
            </p>
        </div>
    </CardTinTuc4Wrapper>
}

const CardTinTuc4Wrapper = styled.div`
    .card {
      .title {
        font-size: 18px;
        font-weight: 700;
        line-height: 26.1px;
        letter-spacing: 0.01em;
        text-align: left;
        color: var(--text-primary);
        text-decoration: underline;
        margin-bottom: 8px;
      }
    }
`
