import Link from "next/link";

export default () => {
    const listNam = [
        {
            title: 'Năm 2024',
            path: '/'
        },
        {
            title: 'Năm 2023',
            path: '/'
        },
        {
            title: 'Năm 2022',
            path: '/'
        },
        {
            title: 'Năm 2021',
            path: '/'
        },
        {
            title: 'Năm 2020',
            path: '/'
        }
    ]
    return <>
        <ul className="nav-link">
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