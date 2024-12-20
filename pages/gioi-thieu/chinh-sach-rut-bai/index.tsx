import { useTranslation } from "react-i18next";
import MenuVertical1 from "../../../components/MenuVertical1";
import MenuDefault from "../components/MenuDefault";

export default () => {
    const [common] = useTranslation('common')
    return <>
        <div>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <div className="border-bottom mb-[24px]">
                        <h1 className="heading-1 mb-[8px]">
                            {common("gioi-thieu.chinh-sach-rut-bai")}
                        </h1>
                    </div>

                    <div className="blog-content">
                        <p>{common("chinh-sach-rut-bai.content1")}
                        </p><p>{common("chinh-sach-rut-bai.content2")}
                    </p><p>{common("chinh-sach-rut-bai.content3")}
                    </p><p>{common("chinh-sach-rut-bai.content4")}
                    </p><p>{common("chinh-sach-rut-bai.content5")}
                    </p><p>{common("chinh-sach-rut-bai.content6")}
                    </p><p>{common("chinh-sach-rut-bai.content7")}
                    </p><p>{common("chinh-sach-rut-bai.content8")}</p>
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