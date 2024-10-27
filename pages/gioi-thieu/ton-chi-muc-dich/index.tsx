import MenuVertical1 from "../../../components/MenuVertical1";

export default () => {
    return <>
        <div>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <div className="border-bottom mb-[24px]">
                        <h1 className="heading-1 mb-[8px]">
                            Tôn chỉ, Mục đích hoạt động
                        </h1>
                    </div>

                    <div className="blog-content">
                        <p>Tạp chí Khoa học Học viện Phụ nữ Việt Nam công bố các công trình nghiên cứu khoa học trong
                            các lĩnh vực giảng dạy và nghiên cứu của cán bộ, giảng viên, nghiên cứu viên trong và ngoài
                            Học viện.
                        </p><p>Thông tin các kết quả nghiên cứu trong và ngoài nước liên quan đến giới, phụ nữ và phát
                        triển nhằm phục vụ cho công tác đào tạo và nghiên cứu khoa học của Học viện.
                    </p><p>Tuyên truyền chủ trương, chính sách, pháp luật của Đảng và Nhà nước trong lĩnh vực giáo dục
                        và đào tạo, khoa học và công nghệ, hoạt động khoa học công nghệ của Hội Liên hiệp Phụ nữ Việt
                        Nam.
                    </p><p>Ngày 24/1/2018, Tạp chí Khoa học Học viện Phụ nữ Việt Nam được thành lập theo Quyết định số
                        01/QĐ-HVPNVN của Giám đốc Học viện Phụ nữ Việt Nam và hoạt động theo Giấy phép xuất bản số
                        561/GP-BTTTT ngày 13/11/2017.
                    </p><p>Tạp chí Khoa học Học viện Phụ nữ Việt Nam được tính điểm từ năm 2020 theo Quyết định số
                        18/QĐ-HĐGSNN này 30/06/2020 của hội đồng Giáo sư Nhà nước.
                    </p><p>Tạp chí Khoa học Học viện Phụ nữ Việt Nam đăng tải các bài viết tiếng Việt và tiếng Anh.
                        Tạp chí có mã số ISSN 2615-9007, xuất bản định kỳ 3 tháng/1kỳ và có trang web điện tử
                        http://tapchikhoahoc.hvpnvn.edu.vn. Ngày 6/7/2022, Tạp chí Khoa học Học viện Phụ nữ Việt
                        Nam được Hội đồng Chức danh Giáo sư Nhà nước xét tính điểm khoa học ở 02 Hội đồng liên ngành
                        Triết học - Chính trị học – Xã hội học (0.5 điểm) và ngành Kinh tế (0.25 điểm) kể từ năm
                        2022.</p>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="mb-[28px]">
                        <h2 className="heading-1">Giới thiệu</h2>
                    </div>
                    <MenuVertical1 hasBox={true} listLink={[
                        {
                            title: 'Tôn chỉ, mục đích học động',
                            path: '/'
                        },
                        {
                            title: 'Quy trình phản biện tạp chí',
                            path: '/'
                        },
                        {
                            title: 'Quy định và hướng dẫn dành cho tác giả',
                            path: '/'
                        },
                        {
                            title: 'Quy định về bản quyền',
                            path: '/'
                        },
                        {
                            title: 'Chính sách rút bài/sửa bài',
                            path: '/'
                        }
                    ]}/>
                </div>
            </div>
        </div>
    </>
}