import styled from "styled-components";

export default () => {
  return <BannerHomeWrapper>
    <div className="banner-home flex">
      <div className="content">
        <h2 className="title">Thư mời viết bài tham luận hội thảo khoa học quốc gia khu vực miền Bắc</h2>
        <h4 className="description">“Rà soát, xác định vấn đề xã hội cấp thiết với phụ nữ, trẻ em vùng dân tộc thiểu số và miền núi; khuyến nghị, đề xuất nội dung, giải pháp vận động hỗ trợ phụ nữ dân tộc thiểu số giai đoạn tiếp theo" </h4>
      </div>
      <div className="banner-image">
        <img src={'/images/home/banner-home.jpg'}/>
      </div>
    </div>
  </BannerHomeWrapper>
}

const BannerHomeWrapper = styled.div`
  .banner-home {
    .content {
      background: linear-gradient(299.06deg, #AFCC36 -9.53%, #70931F 80.52%);
      padding: 32px 40px;
      width: 490px;
      
      .title {
        font-size: 28px;
        font-weight: 700;
        line-height: 37.8px;
        letter-spacing: -0.01em;
        text-align: left;
        color: white;
        margin-bottom: 16px;
      }
      
      .description {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: justify;
        color: white;
      }
    }
    .banner-image {
      width: calc(100% - 490px);
      height: 290px;
      overflow: hidden;
      img {
        object-fit: cover;
      }
    }
  }
`

