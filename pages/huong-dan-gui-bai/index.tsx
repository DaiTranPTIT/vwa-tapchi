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
                    <strong>Hướng dẫn gửi bài trực tiếp trên website</strong> (dành cho tác giả)
                    <p>Địa chỉ Tòa soạn: P410 tòa A2, Học viện Phụ nữ Việt Nam, 68 Nguyễn Chí Thanh, Đống Đa, Hà Nội
                    </p><p>Điện thoại: (84-24) 3775-4452
                    </p><p>Email: tapchikh@vwa.edu.vn</p>
                    <h3>1. Tài khoản</h3>
                    <p>1.1. Đăng ký tài khoản
                    </p><p>Bước 1: Truy cập vào đường dẫn: <a href="http://tapchikhoahoc.hvpnvn.edu.vn/">http://tapchikhoahoc.hvpnvn.edu.vn/</a>
                    </p><p>Bước 2: Góc phải trên cùng của website bấm vào “Register” hoặc “đăng ký”.</p>
                    <img className="my-[16px] mx-auto" src="/images/huong-dan-gui-bai/login-btn.png"/>
                    <p>Bước 3: Nhập đầy đủ thông tin trường có dấu (*) là bắt buộc, sau đó nhấn “Đăng ký tài khoản”.</p>
                    <img className="my-[16px] mx-auto max-w-[700px]" src="/images/huong-dan-gui-bai/dang_ky.png"/>
                    <p>Bước 4: Sau khi tạo tài khoản hệ thống sẽ gửi thông tin đăng nhập vào email người dùng đã nhập ở trên, Click vào link để đăng nhập vào hệ thống.</p>
                    <img className="my-[16px] mx-auto max-w-[700px]" src="/images/huong-dan-gui-bai/mail.png"/>
                    <p>Bước 5: Bấm vào link để truy cập vào phần mềm, Bấm vào “log in” để đăng nhập, sau khi đăng nhập bạn cần thay đổi lại mật khẩu.(Hãy nhớ mật khẩu mới để truy cập cho những lần sau).
                    </p><p>1.2. Đăng nhập
                    </p><p>Bước 1: Truy cập vào đường dẫn: <a href="http://tapchikhoahoc.hvpnvn.edu.vn/">http://tapchikhoahoc.hvpnvn.edu.vn/</a>
                    </p><p>Bước 2: Góc phải trên cùng của website bấm vào “Login” hoặc “Đăng nhập”.</p>
                    <img className="my-[16px] mx-auto" src="/images/huong-dan-gui-bai/login-btn.png"/>
                    <p>Bước 3: Nhập email và mật khẩu. vừa đăng ký ở bước trên</p>
                    <img className="my-[16px] mx-auto max-w-[700px]" src="/images/huong-dan-gui-bai/dang-nhap.png"/>
                    <h3>2. Bài viết</h3>
                    <p>2.1.Gửi bài viết
                    </p><p>Yêu cầu đăng nhập để gửi bài viết</p>
                    <img className="my-[16px] mx-auto" src="/images/huong-dan-gui-bai/yeu-cau-nhap.png"/>
                    <p>2.2. Gửi file cho bài viết</p>
                    <p>2.2.1. gửi files bản thảo.</p>
                    <img className="my-[16px] mx-auto" src="/images/huong-dan-gui-bai/gui-file.png"/>
                    <p>2.2.2. Xác nhận / Approve & Next.</p>
                    <img className="my-[16px] mx-auto" src="/images/huong-dan-gui-bai/xacnhan.png"/>
                </div>
            </div>
            <div className="sidebar">
                <TapChiSticky/>
            </div>
        </div>
    </>
}