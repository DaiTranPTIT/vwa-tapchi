import MenuVertical1 from "../../../components/MenuVertical1";

export default () => {
    return <>
        <div>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <div className="border-bottom mb-[24px]">
                        <h1 className="heading-1 mb-[8px]">
                            Quy định và hướng dẫn dành cho tác giả khi nộp bài
                        </h1>
                    </div>
                    <div className="blog-content">
                        <h3>I. Hình thức trình bày</h3>
                        <p>- Bài viết được trình bày trên giấy A4 theo chiều đứng (portrait),dài không quá 6000 từ
                            không kể tóm tắt.
                        </p><p>- Bảng mã: Unicode; kiểu chữ: Times New Roman; Cỡ chữ: 13, Giãn dòng:single.
                    </p><p>- Mật độ chữ bình thường, không được nén hoặc kéo dãn khoảng cách giữa các chữ.</p>

                        <h3>II. Cấu trúc bài báo</h3>
                        <h4>1. Bài báo thuộc thể loại nghiên cứu</h4>
                        <h4>1.1. Tên bài báo (tiếng Việt và tiếng Anh)</h4>
                        <h4>1.2. Tóm tắt (tiếng Việt và tiếng Anh)</h4>
                        <p>Tóm tắt bằng Tiếng Việt: không quá 250 từ, tóm tắt những điểm quan trọng nhất của bài viết.
                            Tuy phần tóm tắt ngắn nhưng phải chứa đựng đầy đủ nội dung, gồm các phần như mục tiêu và
                            phạm vi nghiên cứu, miêu tả những phương pháp đã được sử dụng và kết quả nghiên cứu. Tất cả
                            những gì được nêu trong tóm tắt đều phải hiện diện trong thân bài chính.
                        </p><p>Tóm tắt bằng Tiếng Anh: dịch từ tóm tắt bằng tiếng Việt.</p>
                        1.3. Từ khóa (tiếng Việt và tiếng Anh): Liệt kê 3-5 từ.
                        <h4>1.4. Nội dung</h4>
                        <h4>1.4.1. Đặt vấn đề:</h4> Tác giả có thể mở đầu bài báo bằng nhiều cách, nhưng phải nêu được
                        những ý chính sau: tính cấp thiết, ý nghĩa, tác dụng của công trình nghiên cứu. Phần đặt vấn đề
                        cần trình bày một cách ngắn gọn hiện trạng của những kiến thức có liên quan đến tồn tại hiện còn
                        của vấn đề được giới thiệu trong bài gửi đăng và những cách xem xét về tồn tại đó.
                        <h4>1.4.2. Đối tượng và phương pháp nghiên cứu:</h4> trình bày rõ đối tượng và phương pháp
                        nghiên cứu sử dụng trong công trình nghiên cứu.
                        <h4>1.4.3. Kết quả nghiên cứu và thảo luận:</h4> chỉ trình bày các kết quả rút ra trực tiếp từ
                        công trình nghiên cứu được gởi đăng. Chỉ những kết quả này mới là đối tượng để phân tích và bàn
                        luận trong bài đăng. Trong phần này tác giả nêu lên những nhận xét của mình qua so sánh kết quả
                        nghiên cứu đăng trong bài với những kết quả đã được công bố thuộc cùng chuyên ngành. Các định
                        hướng mới nảy sinh cũng được trình bày
                        <h4>1.4.4. Kết luận và kiến nghị:</h4> khẳng định lại những kết quả rút ra từ công trình và
                        trình bày những đề xuất, khuyến nghị với các cấp liên quan.
                        <h4>1.5. Tài liệu tham khảo:</h4> Trích dẫn và tài liệu tham khảo theo phiên bản APA phiên bản
                        thứ 6.
                        <p>- Trích dẫn trong bài để trong ngoặc đơn, tên tác giả, năm, số trang (nếu có). Ví dụ: (Nguyễn
                            Dư, 2006); (Trosborg, 1987, tr. 147-167).
                        </p><p>- Bài nghiên cứu phải có mục tài liệu tham khảo ở cuối bài, được sắp xếp theo thứ tự ABC
                        theo họ của các tác giả. Tất cả các trích dẫn trong bài đều phải được thể hiện trong danh mục
                        tài liệu tham khảo và ngược lại.
                    </p><p>- Đối với sách: Họ tên tác giả (năm xuất bản). Tên sách (chữ nghiêng). Nhà xuất bản, nơi xuất
                        bản.
                    </p><p>Ví dụ: i) Nguyễn Dư (2006). Khơi lại dòng xưa. Nxb Lao Động, Hà Nội.
                    </p><p>ii) Porter, M. E. (1990). The Competitive Advantages of Nations. Free Press, New York.
                    </p><p>- Đối với tạp chí: Họ tên tác giả (năm xuất bản). Tên bài tạp chí (chữ thẳng). Tên Tạp chí
                        (chữ nghiêng), Quyển (Số), trang, số doi (nếu có).
                    </p><p>Ví dụ: i) Hà Hữu Nga (2015). Đô thị và vùng kinh tế. Tạp chí Phát triển bền vững Vùng, 5(3),
                        tr. 67-74.
                    </p><p>ii) Trosborg, A. (1987). Apology strategies in natives/non-natives. Journal of Pragmatics,
                        11(1), pp. 147-167, doi:10.1086/245343.</p>
                        <h4>2. Bài báo thuộc thể loại tham khảo và trao đổi ý kiến bao gồm các phần sau:</h4>
                        <h4>2.1. Tóm tắt.</h4>
                        <h4>2.2. Mở đầu.</h4>
                        <h4>2.3. Nội dung.</h4>
                        <h4>2.4. Tài liệu tham khảo.</h4>
                        <h4>3. Các thể loại khác (dịch thuật, tin tức, sự kiện, thông tin quảng bá…):</h4> trình bày
                        theo quy định của Luật Báo chí.
                        - Cuối bài viết ghi thông tin về tác giả: Họ và tên, học hàm, học vị, chức vụ công tác, nơi công
                        tác, địa chỉ liên lạc, số điện thoại, email.
                        - Đối với bài không sử dụng, Tạp chí xin phép không gửi trả lại bản thảo.
                        <h4>4. Các bài viết được gửi đến Tạp chí đều được check đạo văn trên phần mềm Simidoc (bài viết
                            được chấp nhận đăng cần đạt tỷ lệ trùng lặp đạt dưới 20%)</h4>
                        <h3>III. Hình thức gửi, nhận bài</h3>
                        <h4>1. Hình thức:</h4> Tác giả gửi bài viết về Tạp chí sẽ đăng nhập thực hiện gửi bài trên
                        webstie: http://tapchikhoahoc.hvpnvn.edu.vn hoặc gửi về địa chỉ email: tapchikh@vwa.edu.vn
                        <h4>2. Địa chỉ liên hệ:</h4>
                        <p>Tạp chí Khoa học Học viện Phụ nữ Việt Nam
                        </p><p>P. 1503, tầng 15, tòa A2, Học viện Phụ nữ Việt Nam
                    </p><p>Địa chỉ: số 68 Nguyễn Chí Thanh, Đống Đa,Hà Nội
                    </p><p>Di động: 0983.160389 (Thư ký tòa soạn Tạp chí)
                    </p><p>Đặt mua Tạp chí theo địa chỉ: https://forms.gle/qXrZhF33MPiDM47L7</p>
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