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

                    <div className="blog-content">
                        <p>- Quy định về việc hủy, rút lại bài báo (chỉ áp dụng với bài báo chưa được xuất bản trên bản
                            in/bản điện tử ) trên Tạp chí Khoa học Học viện Phụ nữ Việt Nam
                        </p><p>- Việc hủy bài báo được Tổng biên tập áp dụng cho các bài báo đang trong quá trình xuất
                        bản nhưng bị phát hiện:
                    </p><p>Có lỗi sai nghiêm trọng làm thay đổi kết quả của bài báo;
                    </p><p>Nội dung bài viết trùng với một bài báo khác đã được xuất bản;
                    </p><p>Tác giả có những vi phạm đạo đức nghiên cứu và công bố công trình khoa học như nộp bài báo
                        cho nhiều tạp chí cùng lúc, giả mạo trong tuyên bố về quyền tác giả, đạo văn, ngụy tạo dữ liệu,
                        và những trường hợp tương tự;
                    </p><p>- Tác giả được phép rút lại bài viết trong lần phản biện lần 1, sau lần phản biện 2 tác giả
                        không được phép rút lại bài viết khi chưa được sự chấp thuận của Tổng biên tập Tạp chí. Việc rút
                        lại bài báo đã xuất bản được thực hiện theo yêu cầu của:
                    </p><p>Tác giả và/hoặc đồng tác giả bài báo; hoặc
                    </p><p>Tổng biên tập theo đề nghị của các thành viên trong cộng đồng khoa học.</p>
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