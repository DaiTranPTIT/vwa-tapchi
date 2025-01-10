import { ICardTinTuc } from "./models/card-tin-tuc";
import styled from "styled-components";
import Link from "next/link";
import { MTapChi } from "../../api/tapChi/typing";
import { useTranslation } from "react-i18next";

interface IProps {
  data?: MTapChi.ITapChi;
}
export default (props: IProps) => {
  const {t : common} = useTranslation("common");
  return (
    <CardTInTucWrapper>
      <div className="card">
        <Link href={`/tap-chi/${props.data?._id}`}>
          <div className="feature-image relative">
            <img src="./images/default/logo-tap-chi.jpg" />
            {props.data?.thongTinXuatBan[0]?.lock && (
              <div className="tag absolute">{common("card.da-khoa")}</div>
            )}
          </div>
        </Link>
        <Link href={`/tap-chi/${props.data?._id}`}>
          <h2 className="title">{props.data?.tieuDe}</h2>
        </Link>
      </div>
    </CardTInTucWrapper>
  );
};

const CardTInTucWrapper = styled.div`
  .card {
    .feature-image {
      background-color: #f8f8f8;
      padding: 24px;
      margin-bottom: 16px;
      height: 270px;
      img {
        transition: 0.2s;
        height: 100%;
        object-fit: contain;
        margin: auto;
      }
      :hover {
        img {
          transform: scale(1.1);
        }
      }

      .tag {
        background-color: #ffa827;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.1px;
        text-align: right;
        color: white;
        padding: 3px 12px;
        bottom: 0;
        left: 0;
      }
    }

    .title {
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
      text-align: left;
      color: #2387e3;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
