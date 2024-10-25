import {ICardTinTuc} from "./models/card-tin-tuc";
import styled from "styled-components";
import Link from "next/link";

interface IProps {
    data?: ICardTinTuc
}
export default (props: IProps) => {
    return <CardTInTucWrapper>
        <div className="card">
            <Link href={'/tap-chi/tap-chi-1'}>
                <div className="feature-image relative">
                    <img src="./images/default/logo-tap-chi.jpg"/>
                    <div className="tag absolute">Đã khoá</div>
                </div>
            </Link>
            <Link href={'/tap-chi/tap-chi-1'}>
                <h2 className="title">
                    Hình ảnh người phụ nữ trong văn xuôi Việt Nam tiêu biểu giai đoạn 1945-1975: Phân tích từ cách tiếp cận Giới
                </h2>
            </Link>
        </div>
    </CardTInTucWrapper>
}

const CardTInTucWrapper = styled.div`
	.card {
      .feature-image {
        background-color: #F8F8F8;
        padding: 24px;
        margin-bottom: 16px;
        height: 270px;
        img {
          transition: .2s;
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
          background-color: #FFA827;
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
        color: #2387E3;
        :hover {
          text-decoration: underline;
        }
      }
    }
`;