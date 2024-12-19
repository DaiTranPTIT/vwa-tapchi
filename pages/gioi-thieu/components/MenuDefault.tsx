import { useTranslation } from "react-i18next"
import MenuVertical1 from "../../../components/MenuVertical1"

export default () => {
    const {t : common} = useTranslation('common')
    return <>
        <MenuVertical1 hasBox={true} listLink={[
            {
                title: common("gioi-thieu.hoi-dong-bien-tap"),
                path: '/gioi-thieu/hoi-dong-bien-tap'
            },
            {
                title: common("gioi-thieu.ton-chi-muc-dich"),
                path: '/gioi-thieu/ton-chi-muc-dich'
            },
            {
                title: common("gioi-thieu.quy-trinh-phan-bien"),
                path: '/gioi-thieu/quy-trinh-phan-bien'
            },
            {
                title: common("gioi-thieu.quy-dinh-huong-dan"),
                path: '/gioi-thieu/quy-dinh-huong-dan'
            },
            {
                title: common("gioi-thieu.quy-trinh-ban-quyen"),
                path: '/gioi-thieu/quy-trinh-ban-quyen'
            },
            {
                title: common("gioi-thieu.chinh-sach-rut-bai"),
                path: '/gioi-thieu/chinh-sach-rut-bai'
            }
        ]} />
    </>
}