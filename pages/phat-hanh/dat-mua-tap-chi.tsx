import { useTranslation } from "react-i18next";
import TapChiSticky from "../../components/TapChiSticky";

export default () => {
    const [common] = useTranslation('common')
    return <>
        <div className="layout-sidebar justify-between container mx-auto pt-[24px]">
            <div className="content">
                <div className="border-bottom mb-[24px]">
                    <h1 className="heading-1 mb-[8px]">
                        {common("dat-mua-tap-chi.title")}
                    </h1>
                </div>
                <div className="blog-content">
                    <p>
                        {common("dat-mua-tap-chi.content")}
                    </p>
                    <a>
                        {common("dat-mua-tap-chi.content1")}
                    </a>
                    <p>
                        {common("dat-mua-tap-chi.content2")}
                    </p>
                </div>
            </div>
            <div className="sidebar">
                <TapChiSticky/>
            </div>
        </div>
    </>
}