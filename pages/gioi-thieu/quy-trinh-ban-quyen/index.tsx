import { useTranslation } from "react-i18next";
import MenuDefault from "../components/MenuDefault";

export default () => {
    const [common] = useTranslation('common')
    return <>
        <div>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <div className="border-bottom mb-[24px]">
                        <h1 className="heading-1 mb-[8px]">
                            {common("gioi-thieu.quy-trinh-ban-quyen")}
                        </h1>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="mb-[28px]">
                        <h2 className="heading-1">{common("gioi-thieu.title")}</h2>
                    </div>
                    <MenuDefault/>
                </div>
            </div>
        </div>
    </>
}