import MenuVertical1 from "../../../components/MenuVertical1"

export default () => {
    return <>
        <MenuVertical1 hasBox={true} listLink={[
            {
                title: 'Hội đồng biên tập',
                path: '/gioi-thieu/hoi-dong-bien-tap'
            },
            {
                title: 'Tôn chỉ, mục đích học động',
                path: '/gioi-thieu/ton-chi-muc-dich'
            },
            {
                title: 'Quy trình phản biện tạp chí',
                path: '/gioi-thieu/quy-trinh-phan-bien'
            },
            {
                title: 'Quy định và hướng dẫn dành cho tác giả',
                path: '/gioi-thieu/quy-dinh-huong-dan'
            },
            {
                title: 'Quy định về bản quyền',
                path: '/gioi-thieu/quy-trinh-ban-quyen'
            },
            {
                title: 'Chính sách rút bài/sửa bài',
                path: '/gioi-thieu/chinh-sach-rut-bai'
            }
        ]} />
    </>
}