import TapChiSticky from "../../components/TapChiSticky";

export default () => {
    return <>
        <div className="layout-sidebar justify-between container mx-auto pt-[24px]">
            <div className="content">
                <div className="border-bottom mb-[24px]">
                    <h1 className="heading-1 mb-[8px]">
                        Hướng dẫn gửi bài
                    </h1>
                </div>
                <div className="blog-content">
                    <p>
                        Quý vị đặt mua Tạp chí theo link dưới đây:
                    </p>
                    <a>
                        https://docs.google.com/forms/d/e/1FAIpQLSd62tkhQ5Agsypk1cg9t1psMyEAXWye...
                    </a>
                    <p>
                        Mọi thông tin chi tiết vui lòng liên hệ:
                        Tạp chí Khoa học Học viện Phụ nữ Việt Nam, số 68 Nguyễn Chí Thanh, Đống Đa, Hà Nội
                        SDT: 0983.160389 ( ThS. Đỗ Ngọc Nhung - Thư ký tòa soạn)
                    </p>
                </div>
            </div>
            <div className="sidebar">
                <TapChiSticky/>
            </div>
        </div>
    </>
}