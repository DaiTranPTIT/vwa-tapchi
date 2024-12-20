import { useTranslation } from "react-i18next";
import TapChiSticky from "../../components/TapChiSticky";

export default () => {
    const [common] = useTranslation('common')
    return <>
        <div className="layout-sidebar justify-between container mx-auto pt-[24px]">
            <div className="content">
                <div className="border-bottom mb-[24px]">
                    <h1 className="heading-1 mb-[8px]">
                        {common("huong-dan-gui-bai.title")}
                    </h1>
                </div>
                <div className="blog-content">
                    <strong>{common("huong-dan-gui-bai.content")}</strong>
                    <p>{common("huong-dan-gui-bai.address")} P410 tòa A2, Học viện Phụ nữ Việt Nam, 68 Nguyễn Chí Thanh, Đống Đa, Hà Nội
                    </p><p>{common("huong-dan-gui-bai.phone")} (84-24) 3775-4452
                    </p><p>Email: tapchikh@vwa.edu.vn</p>
                    <h3>{common("huong-dan-gui-bai.tai-khoan")}</h3>
                    <p>{common("huong-dan-gui-bai.dang-ky")}
                    </p><p>{common("huong-dan-gui-bai.dang-ky-b1")} <a href="http://tapchikhoahoc.hvpnvn.edu.vn/">http://tapchikhoahoc.hvpnvn.edu.vn/</a>
                    </p><p>{common("huong-dan-gui-bai.dang-ky-b2")}</p>
                    <img className="my-[16px] mx-auto" src="/images/huong-dan-gui-bai/login-btn.png"/>
                    <p>{common("huong-dan-gui-bai.dang-ky-b3")}</p>
                    <img className="my-[16px] mx-auto max-w-[700px]" src="/images/huong-dan-gui-bai/dang_ky.png"/>
                    <p>{common("huong-dan-gui-bai.dang-ky-b4")}</p>
                    <img className="my-[16px] mx-auto max-w-[700px]" src="/images/huong-dan-gui-bai/mail.png"/>
                    <p>{common("huong-dan-gui-bai.dang-ky-b5")}
                    </p><p>{common("huong-dan-gui-bai.dang-nhap")}
                    </p><p>{common("huong-dan-gui-bai.dang-nhap-b1")} <a href="http://tapchikhoahoc.hvpnvn.edu.vn/">http://tapchikhoahoc.hvpnvn.edu.vn/</a>
                    </p><p>{common("huong-dan-gui-bai.dang-nhap-b2")}</p>
                    <img className="my-[16px] mx-auto" src="/images/huong-dan-gui-bai/login-btn.png"/>
                    <p>{common("huong-dan-gui-bai.dang-nhap-b3")}</p>
                    <img className="my-[16px] mx-auto max-w-[700px]" src="/images/huong-dan-gui-bai/dang-nhap.png"/>
                    <h3>{common("huong-dan-gui-bai.bai-viet")}</h3>
                    <p>{common("huong-dan-gui-bai.gui-bai-viet")}
                    </p><p>{common("huong-dan-gui-bai.gui-bai-viet1")}</p>
                    <img className="my-[16px] mx-auto" src="/images/huong-dan-gui-bai/yeu-cau-nhap.png"/>
                    <p>{common("huong-dan-gui-bai.gui-file-bai-viet")}</p>
                    <p>{common("huong-dan-gui-bai.gui-file-bai-viet1")}</p>
                    <img className="my-[16px] mx-auto" src="/images/huong-dan-gui-bai/gui-file.png"/>
                    <p>{common("huong-dan-gui-bai.gui-file-bai-viet2")}</p>
                    <img className="my-[16px] mx-auto" src="/images/huong-dan-gui-bai/xacnhan.png"/>
                </div>
            </div>
            <div className="sidebar">
                <TapChiSticky/>
            </div>
        </div>
    </>
}