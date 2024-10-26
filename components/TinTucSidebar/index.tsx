import Link from "next/link";

export default () => {
    const listNam = [
        {
            title: 'Kỹ năng số tác động đến khả năng có việc làm của sinh viên...',
            path: '/'
        },
        {
            title: 'Chúc mừng ngày Báo chí Cách mạng Việt Nam 21/06',
            path: '/'
        },
        {
            title: 'Thư mời viết tham luận hội thảo NCKH: Lãnh đạo, quản lý ....',
            path: '/'
        },
        {
            title: 'Thư mời viết bài tham luận hội thảo khoa học quốc gia KV miền Bắc',
            path: '/'
        },
        {
            title: 'Thư mời viết bài cho hội thảo khoa học quốc tế vai trò ...',
            path: '/'
        }
    ]
    return <>
        <ul className="nav-link no-border">
            {
                listNam.map(item => {
                    return (
                        <li className="item">
                            <div className="flex gap-[10px] justify-between">
                                <Link className="link" href={item.path}>
                                    {item.title}
                                </Link>
                                <Link href={item.path}>
                                    <div className="btn-link">
                                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.2H13.5M13.5 5.2L9.48394 1M13.5 5.2L9.48394 9.4" stroke="#3E3E41" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </>
}