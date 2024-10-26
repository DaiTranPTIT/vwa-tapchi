import styled from "styled-components";
import Link from "next/link";

export default () => {
    return <CardTinTuc3Wrapper>
        <div className="card">
            <div className="card-image">
                <img src="/images/default/logo-tap-chi.jpg"/>
            </div>
            <div className="card-content">
                <h2 className="title">
                    Số mới nhất
                </h2>
                <div className="meta">
                    <div className="date">
                        Ngày 17/12/2024
                    </div>
                    <div className="vertical-line"></div>
                    <Link href="/">
                        Tạp chí: Quyển. 26, Số 2-2024
                    </Link>
                </div>
                <button onClick={() => {}}
                        className={`button-outline flex gap-[8px] items-center`}
                >
                    <span>Xem tất cả các tập và số</span>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.583984 4.2392H11.0006M11.0006 4.2392L7.65393 0.739197M11.0006 4.2392L7.65393 7.7392" stroke="#AFCC36" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </CardTinTuc3Wrapper>
}

const CardTinTuc3Wrapper = styled.div`
    .card {
      display: flex;
      gap: 24px;
      
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
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
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