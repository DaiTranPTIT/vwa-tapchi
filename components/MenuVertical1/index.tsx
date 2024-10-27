import Link from "next/link";

interface IProps{
    listLink: {
        title: string,
        path: string
    }[],
    hasBox?: boolean
}
export default (props: IProps) => {
    return <>
        <ul className={`nav-link ${props.hasBox? '': 'no-border'}`}>
            {
                props.listLink.map(item => {
                    return (
                        <li className="item">
                            <div className="flex gap-[10px] justify-between">
                                <Link className="link text-textColor-default hover:text-textColor-hover" href={item.path}>
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