import styled from "styled-components";
import TinTucSidebar from "../../components/TinTucSidebar";

export default () => {
    return <DetailTinTucWrapper>
        <div className="layout-sidebar justify-between container mx-auto">
            <div className="content">
                <h1 className="post-title">Thư mời viết bài tham luận hội thảo khoa học quốc gia khu vực miền Bắc</h1>
                <div className="post-content">
                    “Rà soát, xác định vấn đề xã hội cấp thiết với phụ nữ, trẻ em vùng dân tộc thiểu số và miền núi; khuyến nghị, đề xuất nội dung, giải pháp vận động hỗ trợ phụ nữ dân tộc thiểu số giai đoạn tiếp theo"
                    Trân trọng kính mời các chuyên gia, các nhà khoa học, các nhà hoạt động thực tiễn, nhà quản lý, nhà hoạch định chính sách, đại diện các bên liên quan thực hiện Dự án 8 quan tâm gửi bài viết tới Hội thảo của chúng tôi
                    Thông tin liên hệ và gửi bài: TS. Nguyễn Thị Tuyết Nga, Giảng viên Khoa Giới & Phát triển(Email: nttuyetnga@vwa.edu.vn; Mobile: 093 640 8166); hoặc NCS. Nguyễn Thị Lan, giảng viên Khoa Giới và Phát triển (Email: lannt@vwa.edu.vn; Mobile: 0975888191).
                    <img src="/images/quangcao-temp/image-post.png"/>
                </div>
            </div>
            <div className="sidebar">
                <TinTucSidebar/>
            </div>
        </div>
    </DetailTinTucWrapper>
}

const DetailTinTucWrapper = styled.div`
    .post-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 46.4px;
      text-align: left;
      color: var(--text-primary);
      padding-bottom: 8px;
      margin-bottom: 24px;
      border-bottom: 1px solid #A9CBED;
    }
  
  .post-content {
    font-size: 16px;
    font-weight: 400;
    line-height: 23.2px;
    letter-spacing: 0.01em;
    text-align: justify;
    color: var(--text-primary);
  }
`