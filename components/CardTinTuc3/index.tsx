import styled from "styled-components";
import Link from "next/link";
import ButtonDefault from "../ButtonDefault";
import { MTapChi } from "../../api/tapChi/typing";
import { formatDate } from "../../utils/util";
import router from "next/router";
import { HiArrowNarrowRight } from "react-icons/hi";
import soTapChi from "../../pages/so-tap-chi";

interface IProps {
  soMoiNhat?: MTapChi.ISoTapChi
}
export default (props: IProps) => {
    return <CardTinTuc3Wrapper>
        <div className="card md:flex gap-[24px]">
            <div className="card-image">
                <img src="/images/default/logo-tap-chi.jpg"/>
            </div>
            <div className="card-content">
                <h2 className="title">
                    Số mới nhất
                </h2>
                <div className="meta flex gap-[16px] mb-[20px] md:mb-[40px]">
                    <div className="date">
                        Ngày {formatDate(props.soMoiNhat?.thoiGianXuatBan)}
                    </div>
                    <div className="vertical-line"></div>
                    <Link href={`/so-tap-chi/${(new Date(props.soMoiNhat?.thoiGianXuatBan || '').getFullYear())}/${props.soMoiNhat?.soXuatBan}`}>
                        Tạp chí: {props.soMoiNhat?.quyen}, {props.soMoiNhat?.soXuatBan}
                    </Link>
                </div>
                <ButtonDefault onClick={() => {router.push('/so-tap-chi')}} title="Xem tất cả các tập và số"
                               icon={<HiArrowNarrowRight/>}/>
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