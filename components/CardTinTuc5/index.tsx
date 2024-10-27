import styled from "styled-components";
import Link from "next/link";

export default () => {
    return <CardTinTuc5Wrapper>
        <div className="card-tin-tuc-5">
            <Link href={'/tin-tuc/tin-tuc-1'}>
                <div className="feature-image">
                    <img src="/images/quangcao-temp/demo-tintuc.png"/>
                </div>
            </Link>
            <div className="content">
                <Link href={'/tin-tuc/tin-tuc-1'}>
                    <h2 className="title text-textColor-default hover:text-textColor-hover">
                        Thư mời viết tham luận hội thảo NCKH: Lãnh đạo, quản lý khu vực công trong bối cảnh chuyển đổi số
                    </h2>
                </Link>
                <p className="short-des">
                    Dự kiến, tháng 3/2024, Hội thảo NCKH quốc gia: "Lãnh đạo, quản lý khu vực công trong bối cảnh chuyển đổi số" ...
                </p>
                <div className="metadata">
                    <div className="date flex gap-[8px] items-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.16536" cy="7.66668" r="6.83333" stroke="#777D93" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.16406 3.5V7.70833L11.5807 7.70833" stroke="#777D93" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>22/03/2024</p>
                    </div>
                </div>
            </div>
        </div>
    </CardTinTuc5Wrapper>
}

const CardTinTuc5Wrapper = styled.div`
    .card-tin-tuc-5 {
      display: flex;
      gap: 24px;
      .feature-image {
        width: 221px;
        height: 221px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .content {
        width: calc(100% - 221px);
        
        .title {
          font-size: 20px;
          font-weight: 700;
          line-height: 29px;
          letter-spacing: -0.01em;
          text-align: left;
          text-decoration: underline;
          margin-bottom: 12px;
        }
        
        .short-des {
          font-size: 16px;
          font-weight: 400;
          line-height: 23.2px;
          letter-spacing: 0.01em;
          text-align: justify;
          color: var(--text-primary);
          margin-bottom: 12px;
        }
        
        .date {
          color: #3E3E41;
        }
      }
    }
  
  @media screen and (max-width: 768px) {
    .card-tin-tuc-5 {
      display: flex;
      gap: 24px;

      .feature-image {
        width: 120px;
        height: 120px;
      }
      .content {
        width: calc(100% - 120px);
      }
    }
  }
`