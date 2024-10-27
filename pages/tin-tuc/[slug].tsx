import styled from "styled-components";
import MenuVertical1 from "../../components/MenuVertical1";

export default () => {
    return <DetailTinTucWrapper>
        <div className="layout-sidebar justify-between container mx-auto">
            <div className="content">
                <h1 className="post-title">Thư mời viết bài tham luận hội thảo khoa học quốc gia khu vực miền Bắc</h1>
                <p className="blog-content mb-[40px]">
                    “Rà soát, xác định vấn đề xã hội cấp thiết với phụ nữ, trẻ em vùng dân tộc thiểu số và miền núi; khuyến nghị, đề xuất nội dung, giải pháp vận động hỗ trợ phụ nữ dân tộc thiểu số giai đoạn tiếp theo"
                    Trân trọng kính mời các chuyên gia, các nhà khoa học, các nhà hoạt động thực tiễn, nhà quản lý, nhà hoạch định chính sách, đại diện các bên liên quan thực hiện Dự án 8 quan tâm gửi bài viết tới Hội thảo của chúng tôi
                    Thông tin liên hệ và gửi bài: TS. Nguyễn Thị Tuyết Nga, Giảng viên Khoa Giới & Phát triển(Email: nttuyetnga@vwa.edu.vn; Mobile: 093 640 8166); hoặc NCS. Nguyễn Thị Lan, giảng viên Khoa Giới và Phát triển (Email: lannt@vwa.edu.vn; Mobile: 0975888191).
                </p>
                <img src="/images/quangcao-temp/image-post.png"/>
            </div>
            <div className="sidebar">
                <MenuVertical1 listLink={[
                        {
                            title: 'Kỹ năng số tác động đến khả năng có việc làm của sinh viên...',
                            path: '/'
                        },
                        {
                            title: 'Chúc mừng ngày Báo chí Cách mạng Việt Nam 21/06',
                            path: '/'
                        },
                        {
                            title: 'Thư mời viết tham luận hội thảo NCKH: Lãnh đạo, quản lý ....',
                            path: '/'
                        },
                        {
                            title: 'Thư mời viết bài tham luận hội thảo khoa học quốc gia KV miền Bắc',
                            path: '/'
                        },
                        {
                            title: 'Thư mời viết bài cho hội thảo khoa học quốc tế vai trò ...',
                            path: '/'
                        }
                    ]
                }/>
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
`