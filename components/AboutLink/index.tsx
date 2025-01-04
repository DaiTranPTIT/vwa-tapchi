import MenuVertical1 from "../MenuVertical1";

export default (props: {currentPath?: string}) => {
    const {currentPath} = props;
    return <>
        <MenuVertical1
            hasBox={true}
            listLink={[
                {
                    title: "Hội đồng biên tập",
                    path: "/gioi-thieu/hoi-dong-bien-tap",
                },
                {
                    title: "Tôn chỉ, Mục đích hoạt động",
                    path: "/gioi-thieu/ton-chi-muc-dich",
                },
                {
                    title: "Quy trình phản biện tạp chí",
                    path: "/gioi-thieu/quy-trinh-phan-bien",
                },
                {
                    title: "Quy định và hướng dẫn dành cho tác giả",
                    path: "/gioi-thieu/quy-dinh-huong-dan",
                },
                {
                    title: "Quy định về bản quyền",
                    path: "/gioi-thieu/quy-trinh-ban-quyen",
                },
                {
                    title: "Chính sách rút bài/sửa bài",
                    path: "/gioi-thieu/chinh-sach-rut-bai",
                },
            ].filter(val => val.path != currentPath)}
        />
    </>
};