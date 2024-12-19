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
                            {common("gioi-thieu.quy-trinh-phan-bien")}
                        </h1>
                    </div>

                    <div className="blog-content">
                        <h3>
                            {common("quy-trinh-phan-bien.content")}
                        </h3>
                        <h4>
                            {common("quy-trinh-phan-bien.buoc1-1")}
                        </h4>
                        <p>
                            {common("quy-trinh-phan-bien.buoc1-2")}
                        </p>
                        <p>
                            {common("quy-trinh-phan-bien.buoc1-3")}
                        </p>
                        <h4>
                            {common("quy-trinh-phan-bien.buoc2-1")}
                        </h4>
                        <p>
                            {common("quy-trinh-phan-bien.buoc2-2")} </p>
                        <p>
                            {common("quy-trinh-phan-bien.buoc2-3")}
                        </p>
                        <h4>
                            {common("quy-trinh-phan-bien.buoc3-1")}
                        </h4>
                        <p>
                            {common("quy-trinh-phan-bien.buoc3-2")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc3-3")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc3-4")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc3-5")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc3-6")}
                        </p>

                        <h4>{common("quy-trinh-phan-bien.buoc4-1")}</h4>
                        <p>{common("quy-trinh-phan-bien.buoc4-2")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc4-3")}</p>

                        <h4>{common("quy-trinh-phan-bien.buoc5-1")}</h4>
                        <p>{common("quy-trinh-phan-bien.buoc5-2")}</p>

                        <h4>{common("quy-trinh-phan-bien.buoc6-1")}</h4>
                        <p>{common("quy-trinh-phan-bien.buoc6-2")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc6-3")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc6-4")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc6-5")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc6-6")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc6-7")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc6-8")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc6-9")}</p>

                        <h4>{common("quy-trinh-phan-bien.buoc7-1")}</h4>
                        <p>{common("quy-trinh-phan-bien.buoc7-2")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc7-3")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc7-4")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc7-5")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc7-6")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc7-7")}</p>
                        <h4>{common("quy-trinh-phan-bien.buoc8-1")}</h4>
                        <p>{common("quy-trinh-phan-bien.buoc8-2")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc8-3")}</p>
                        <h4>{common("quy-trinh-phan-bien.buoc9-1")}</h4>
                        <p>{common("quy-trinh-phan-bien.buoc9-2")}
                        </p>
                        <p>{common("quy-trinh-phan-bien.buoc9-3")}</p>
                        <h4>{common("quy-trinh-phan-bien.buoc10-1")}</h4>
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