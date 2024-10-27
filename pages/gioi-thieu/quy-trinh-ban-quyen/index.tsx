import MenuVertical1 from "../../../components/MenuVertical1";

export default () => {
    return <>
        <div>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <div className="border-bottom mb-[24px]">
                        <h1 className="heading-1 mb-[8px]">
                            Hội đồng biên tập
                        </h1>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="mb-[28px]">
                        <h2 className="heading-1">Giới thiệu</h2>
                    </div>
                    <MenuVertical1 hasBox={true} listLink={[
                        {
                            title: 'Tôn chỉ, mục đích học động',
                            path: '/'
                        },
                        {
                            title: 'Quy trình phản biện tạp chí',
                            path: '/'
                        },
                        {
                            title: 'Quy định và hướng dẫn dành cho tác giả',
                            path: '/'
                        },
                        {
                            title: 'Quy định về bản quyền',
                            path: '/'
                        },
                        {
                            title: 'Chính sách rút bài/sửa bài',
                            path: '/'
                        }
                    ]}/>
                </div>
            </div>
        </div>
    </>
}