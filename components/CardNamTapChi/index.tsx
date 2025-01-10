import styled from "styled-components";
import Link from "next/link";
import { MTapChi } from "../../api/tapChi/typing";
import { useTranslation } from "react-i18next";

interface IProps {
    namTapChi?: MTapChi.INamTapChi
}
export default (props: IProps) => {
    const {t : common} = useTranslation("common");
    const {namTapChi} = props;
    return <CardNamTapChiWrapper>
        <div className="card-type-2">
            <div className="heading">
                <div className="flex items-center justify-between max-[459px]:flex-col max-[459px]:items-start ">
                    <h2 className="title max-[459px]:text-xs">{common("common.year")} {namTapChi?.namXuatBan}</h2>
                    <strong className="sub-title">{common("so-tap-chi.tu-thang1-thang12")} {namTapChi?.namXuatBan}</strong>
                </div>
            </div>
            <div className="card-body">
                <ul className="ds-so-tapchi">
                    {
                        namTapChi?.dsSoTapChi.map(item => {
                            return <li className="item">
                            <div className="flex items-center gap-x-[12px] max-[459px]:flex-col max-[459px]:items-start">
                                <Link href={`/so-tap-chi/${namTapChi.namXuatBan}/${item.soXuatBan}`} className="link">
                                    {item.quyen}, {item.soXuatBan}
                                </Link>
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
        @media (max-width: 1025px) {
          font-size: 16px;
        }

        @media (max-width: 459px) {
          font-size: 14px;
        }
      }
        @media (max-width: 1025px) {
                font-size: 16px;
            }

        @media (max-width: 459px) {
            font-size: 14px;
        }
    }
  }
`