import { useTranslation } from "react-i18next";
import MenuVertical1 from "../MenuVertical1";

export default (props: {currentPath?: string}) => {
    const {currentPath} = props;
    const {t : common} = useTranslation("common");
    return <>
        <MenuVertical1
            hasBox={true}
            listLink={[
                {
                    title: common("title.bai-viet-moi-nhat"),
                    path: "/gioi-thieu/hoi-dong-bien-tap",
                },
                {
                    title: common("title.ton-chi-muc-dich"),
                    path: "/gioi-thieu/ton-chi-muc-dich",
                },
                {
                    title: common("title.quy-trinh-phan-bien"),
                    path: "/gioi-thieu/quy-trinh-phan-bien",
                },
                {
                    title: common("title.quy-dinh-huong-dan"),
                    path: "/gioi-thieu/quy-dinh-huong-dan",
                },
                {
                    title: common("title.quy-trinh-ban-quyen"),
                    path: "/gioi-thieu/quy-trinh-ban-quyen",
                },
                {
                    title: common("title.chinh-sach-rut-bai"),
                    path: "/gioi-thieu/chinh-sach-rut-bai",
                },
            ].filter(val => val.path != currentPath)}
        />
    </>
};