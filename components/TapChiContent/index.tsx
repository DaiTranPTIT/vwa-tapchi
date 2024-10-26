import styled from "styled-components";
import TapChiInfoOverall from "../TapChiInfoOverall";
import TagTapChi from "../TagTapChi";
import CardTinTuc3 from "../CardTinTuc3";
import BaiVietCungSo from "../BaiVietCungSo";

export default () => {
    return <TapChiContentWrapper>
        <div className="section-content">
            <h2 className="meta-title">Tổng quan</h2>
            <div className="main-content mb-[28px]">
                <div className="post-wrapper">
                    <strong className="title">
                        Tác giả:
                    </strong>
                    <p className="post-info">
                        Bùi Duy Phú (buiduyphu@gmail.com; Đại học Đại Nam), Nguyễn Nhật Minh (nguyennhatminh@gmail.com; Học viện Ngân hàng)
                    </p>
                </div>
                <div className="post-wrapper">
                    <strong className="title">
                        Tóm tắt:
                    </strong>
                    <p className="post-info">
                        The protection of financial consumers plays a crucial role in promoting the development of the financial system contributing significantly to economic growth and overall financial objectives in each country. Therefore, many major organizations worldwide have developed principles or provided recommendations as reference frameworks for implementing financial consumer protection practices. Among these, the “39 Good Practices for Financial Consumer Protection” by the World Bank and the “10 Principles for Financial Consumer Protection” by the G20/OECD stand out prominently. While not legally binding, these principles are considered essential foundations for countries to consult in constructing and refining their legal and institutional frameworks. Building on this foundation, the article elaborates on specific international norms, legal frameworks, and enforcement mechanisms for financial consumer protection proposed by the World Bank and G20/OECD. The aim is to assist policymakers in enhancing their legal frameworks for the protection of financial consumers.
                    </p>
                </div>
                <TapChiInfoOverall/>
            </div>
            <div className="mb-[50px]">
                <TagTapChi/>
            </div>
            <div className="so-moi-nhat mb-[50px]">
                <CardTinTuc3/>
            </div>
            <div className="">
                <BaiVietCungSo/>
            </div>
        </div>
    </TapChiContentWrapper>
}

const TapChiContentWrapper = styled.div`
  h2.meta-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 40.6px;
    text-align: left;
    color: var(--text-primary);
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid #A9CBED;
  }

  .so-moi-nhat {
    padding: 32px 0;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #777D93;
  }
  .main-content {
    padding: 24px;
    background-color: #EFF6FB;
    border-radius: 8px;
    
    .post-wrapper {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #CDE1F4;
      .title {
        font-size: 18px;
        font-weight: 700;
        line-height: 26.1px;
        letter-spacing: 0.01em;
        text-align: left;
        color: var(--text-primary);
        margin-bottom: 8px;
      }
      
      .post-info {
        font-size: 16px;
        font-weight: 400;
        line-height: 23.2px;
        letter-spacing: 0.01em;
        text-align: justify;
        color: var(--text-primary);
      }
    }
  }
`