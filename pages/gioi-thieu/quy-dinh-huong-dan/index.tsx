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
                            {common("quy-dinh-huong-dan.content")}
                        </h1>
                    </div>
                    <div className="blog-content">
                        <h3>{common("quy-dinh-huong-dan.hinh-thuc-1")}</h3>
                        <p>{common("quy-dinh-huong-dan.hinh-thuc-2")}
                        </p><p>{common("quy-dinh-huong-dan.hinh-thuc-3")}
                    </p><p>{common("quy-dinh-huong-dan.hinh-thuc-4")}</p>

                        <h3>{common("quy-dinh-huong-dan.cau-truc-bai-bao")}</h3>
                        <h4>{common("quy-dinh-huong-dan.cau-truc-bai-bao-1")}</h4>
                        <h4>{common("quy-dinh-huong-dan.cau-truc-bai-bao-2")}</h4>
                        <h4>{common("quy-dinh-huong-dan.cau-truc-bai-bao-3")}</h4>
                        <p>{common("quy-dinh-huong-dan.cau-truc-bai-bao-4")}
                        </p><p>{common("quy-dinh-huong-dan.cau-truc-bai-bao-5")}</p>
                        <h4>{common("quy-dinh-huong-dan.tu-khoa")}</h4>
                        <h4>{common("quy-dinh-huong-dan.noi-dung")}</h4>
                        <h4>{common("quy-dinh-huong-dan.dat-van-de")}</h4> {common("quy-dinh-huong-dan.dat-van-de-1")}
                        <h4>{common("quy-dinh-huong-dan.doi-tuong-va-phuong-phap-nghien-cuu")}</h4> {common("quy-dinh-huong-dan.doi-tuong-va-phuong-phap-nghien-cuu-1")}
                        <h4>{common("quy-dinh-huong-dan.ket-qua-nghien-cuu")}</h4> {common("quy-dinh-huong-dan.ket-qua-nghien-cuu-1")}
                        <h4>{common("quy-dinh-huong-dan.ket-luan")}</h4>{common("quy-dinh-huong-dan.ket-luan-1")}
                        <h4>{common("quy-dinh-huong-dan.tai-lieu-tham-khao")}</h4>{common("quy-dinh-huong-dan.tai-lieu-tham-khao-1")}
                        <p>{common("quy-dinh-huong-dan.tai-lieu-tham-khao-2")}
                        </p><p>{common("quy-dinh-huong-dan.tai-lieu-tham-khao-3")}
                    </p><p>{common("quy-dinh-huong-dan.tai-lieu-tham-khao-4")}
                    </p><p>{common("quy-dinh-huong-dan.tai-lieu-tham-khao-5")}
                    </p><p>{common("quy-dinh-huong-dan.tai-lieu-tham-khao-6")}
                    </p><p>{common("quy-dinh-huong-dan.tai-lieu-tham-khao-7")}
                    </p><p>{common("quy-dinh-huong-dan.tai-lieu-tham-khao-8")}
                    </p><p>{common("quy-dinh-huong-dan.tai-lieu-tham-khao-9")}</p>
                        <h4>{common("quy-dinh-huong-dan.the-loai-tham-khao")}</h4>
                        <h4>{common("quy-dinh-huong-dan.the-loai-tham-khao-1")}</h4>
                        <h4>{common("quy-dinh-huong-dan.the-loai-tham-khao-2")}</h4>
                        <h4>{common("quy-dinh-huong-dan.the-loai-tham-khao-3")}</h4>
                        <h4>{common("quy-dinh-huong-dan.the-loai-tham-khao-4")}</h4>
                        <h4>{common("quy-dinh-huong-dan.the-loai-khac")}</h4> {common("quy-dinh-huong-dan.the-loai-khac-1")}
                        <h4>{common("quy-dinh-huong-dan.check-dao-van")}</h4>
                        <h3>{common("quy-dinh-huong-dan.gui-nhan-bai")}</h3>
                        <h4>{common("quy-dinh-huong-dan.gui-nhan-bai-1")}</h4>{common("quy-dinh-huong-dan.gui-nhan-bai-2")}
                        <h4>{common("quy-dinh-huong-dan.dia-chi-lien-he")}</h4>
                        <p>{common("quy-dinh-huong-dan.dia-chi-lien-he-1")}
                        </p><p>{common("quy-dinh-huong-dan.dia-chi-lien-he-2")}
                    </p><p>{common("quy-dinh-huong-dan.dia-chi-lien-he-3")}
                    </p><p>{common("quy-dinh-huong-dan.dia-chi-lien-he-4")}
                    </p><p>{common("quy-dinh-huong-dan.dia-chi-lien-he-5")}</p>
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