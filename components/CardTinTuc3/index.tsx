import styled from "styled-components";
import Link from "next/link";
import ButtonDefault from "../ButtonDefault";
import { MTapChi } from "../../api/tapChi/typing";
import { formatDate } from "../../utils/util";
import router from "next/router";
import { useTranslation } from "react-i18next";

interface IProps {
  soMoiNhat?: MTapChi.ISoTapChi
}
export default (props: IProps) => {
    const {t : common} = useTranslation("common");
    return <CardTinTuc3Wrapper>
        <div className="card md:flex gap-[24px]">
            <div className="card-image">
                <img src="/images/default/logo-tap-chi.jpg"/>
            </div>
            <div className="card-content">
                <h2 className="title">
                  {common("so-tap-chi.so-moi-nhat")}
                </h2>
                <div className="meta flex gap-x-[16px] mb-[20px] md:mb-[40px] max-[459px]:flex-col">
                    <div className="date">
                      {common("so-tap-chi.ngay")} {formatDate(props.soMoiNhat?.thoiGianXuatBan)}
                    </div>
                    <div className="vertical-line"></div>
                    <Link href="/">
                      {common("so-tap-chi.tap-chi")}: {props.soMoiNhat?.quyen}, {props.soMoiNhat?.soXuatBan}
                    </Link>
                </div>
                <ButtonDefault onClick={() => {router.push('/so-tap-chi')}} title={common("button.xem-cac-tap-va-so")}
                               icon={<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M0.583984 4.2392H11.0006M11.0006 4.2392L7.65393 0.739197M11.0006 4.2392L7.65393 7.7392"
                                         stroke="#AFCC36"/>
                               </svg>}/>
            </div>
        </div>
    </CardTinTuc3Wrapper>
}

const CardTinTuc3Wrapper = styled.div`
    .card {
      .card-image {
        width: 114px;
      }
      .card-content {
        .title {
          color: var(--text-primary);
          font-size: 24px;
          font-weight: 700;
          line-height: 34.8px;
          text-align: left;
          margin-bottom: 12px;
        }
        
        .meta {
          .date {
            font-size: 18px;
            font-weight: 400;
            line-height: 26.1px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #3E3E41;
          }
          
          .vertical-line {
            width: 1px;
            background-color: var(--primary-color);
          }
          
          a {
            font-size: 18px;
            font-weight: 400;
            line-height: 26.1px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #2387E3;
            text-decoration: underline;
          }
        }
      }
    }
`