import styled from "styled-components";
import Link from "next/link";
import { MTapChi } from "../../api/tapChi/typing";
import { formatDate } from "../../utils/util";

interface IProps {
  data?: MTapChi.ITapChi;
}
export default (props: IProps) => {
  return (
    <CardTInTucWrapper>
      <div className="card">
        <Link href={`/tap-chi/${props.data?._id}`}>
          <div className="feature-image relative">
            <img src="/images/default/logo-tap-chi.jpg" />
            {props.data?.thongTinXuatBan[0]?.lock && (
              <div className="tag absolute">Đã khoá</div>
            )}
          </div>
        </Link>
        <Link href={`/tap-chi/${props.data?._id}`}>
          <h2 className="title">{props.data?.tieuDe}</h2>
        </Link>
        <p className="author-name">{props.data?.hoTen}</p>
        <div className="metadata">
          <div className="label">Ngày đăng</div>
          <div className="value flex items-center gap-[8px]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.63464"
                cy="6.77843"
                r="5.46667"
                stroke="#777D93"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.63477 3.44507V6.81174L9.3681 6.81174"
                stroke="#777D93"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>
              {formatDate(props.data?.thongTinXuatBan[0].thoiGianXuatBan)}
            </span>
          </div>
          <div className="label">Số trang</div>
          <div className="value flex items-center gap-[8px]">
            <svg
              width="11"
              height="14"
              viewBox="0 0 11 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83203 0.64502H10.432V10.3117"
                stroke="#777D93"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.832031 2.31177H3.36536C3.91765 2.31177 4.36536 2.75948 4.36536 3.31177V6.27843H7.63203C8.18432 6.27843 8.63203 6.72615 8.63203 7.27843V12.9118H0.832031V2.31177Z"
                stroke="#777D93"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.19788 6.44513L4.16456 2.7118"
                stroke="#777D93"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.63281 8.04504H6.89948"
                stroke="#777D93"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.63281 9.64502H6.89948"
                stroke="#777D93"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.63281 11.245H6.89948"
                stroke="#777D93"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>
              {props.data?.soTrangBatDau} - {props.data?.soTrangKetThuc}
            </span>
          </div>
          <div className="label">Lượt xem</div>
          <div className="value flex items-center gap-[8px]">
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6.56057" cy="4.36502" r="1.80667" stroke="#777D93" />
              <path
                d="M11.9806 4.33781C11.9806 4.33781 9.55401 7.36398 6.56063 7.36398C3.56724 7.36398 1.14062 4.33781 1.14062 4.33781C1.14062 4.33781 3.56724 1.31165 6.56063 1.31165C9.55401 1.31165 11.9806 4.33781 11.9806 4.33781Z"
                stroke="#777D93"
                stroke-linejoin="round"
              />
            </svg>
            <span>82</span>
          </div>
        </div>
      </div>
    </CardTInTucWrapper>
  );
};

const CardTInTucWrapper = styled.div`
  .metadata {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12.5px 16px;
    .label {
      color: #b2b5c1;
      font-size: 14px;
      font-weight: 400;
      line-height: 16.1px;
      text-align: left;
    }
    .value {
      color: #3e3e41;
      font-size: 15px;
      font-weight: 400;
      line-height: 17.25px;
      text-align: left;
    }
  }

  .author-name {
    font-size: 16px;
    font-weight: 400;
    line-height: 23.2px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #3e3e41;
    padding: 12px 0;
    margin-bottom: 12px;
    border-bottom: 1px solid rgba(178, 181, 193, 0.5);
  }

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
