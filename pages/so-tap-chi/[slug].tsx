import TapChiSidebar from "../../components/TapChiSidebar";
import DetailSoTapChi from "../../components/DetailSoTapChi";

export default () => {
    return <>
        <div>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <DetailSoTapChi/>
                </div>
                <div className="sidebar">
                    <div className="mb-[28px]">
                        <h2 className="heading-1">Tạp chí khoa học</h2>
                    </div>
                    <TapChiSidebar/>
                </div>
            </div>
        </div>
    </>
}