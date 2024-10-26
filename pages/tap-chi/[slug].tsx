import {useRouter} from "next/router";
import SectionBreadcrumb from "../../components/SectionBreadcrumb";
import TapChiSidebar from "../../components/TapChiSidebar";
import TapChiContent from "../../components/TapChiContent";

export default () => {
    const router = useRouter();
    const { slug } = router.query;

    return <>
        <div>
            <SectionBreadcrumb/>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <TapChiContent/>
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