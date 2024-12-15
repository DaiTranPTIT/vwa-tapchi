import styled from "styled-components";
import Link from "next/link";
import { MTapChi } from "../../api/tapChi/typing";

interface IProps {
    namTapChi?: MTapChi.INamTapChi
}
export default (props: IProps) => {
    const {namTapChi} = props;
    return <CardNamTapChiWrapper>
        <div className="card-type-2">
            <div className="heading">
                <div className="flex items-center justify-between">
                    <h2 className="title">Năm {namTapChi?.namXuatBan}</h2>
                    <strong className="sub-title">Từ tháng 1- tháng 12 {namTapChi?.namXuatBan}</strong>
                </div>
            </div>
            <div className="card-body">
                <ul className="ds-so-tapchi">
                    {
                        namTapChi?.dsSoTapChi.map(item => {
                            return <li className="item">
                            <div className="flex items-center gap-[12px]">
                                <Link href={`/so-tap-chi/${namTapChi.namXuatBan}/${item.soXuatBan}`} className="link">
                                    {item.quyen}, {item.soXuatBan}
                                </Link>
                                <div className="vertical-line"></div>
                                <p className="meta">
                                    {new Intl.DateTimeFormat('vi-VN', { year: 'numeric', month: 'long' }).format(new Date(item.thoiGianXuatBan))}
                                </p>
                            </div>
                        </li>
                        })
                    }
                </ul>
            </div>
        </div>
    </CardNamTapChiWrapper>
}

const CardNamTapChiWrapper = styled.div`
  .ds-so-tapchi {
    .item {
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid #D6D6D5;
      :last-child {
        padding-bottom: 0px;
        margin-bottom: 0;
        border-bottom: 0;
      }
      .link {
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
        text-align: center;
        color: var(--text-main);
        text-decoration: underline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
`