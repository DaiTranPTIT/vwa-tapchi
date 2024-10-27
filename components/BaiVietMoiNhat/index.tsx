import CardTinTuc from "../CardTinTuc";
import ButtonDefault from "../ButtonDefault";

export default () => {
    return <>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[20px] mb-[50px]">
            <div className="item">
                <CardTinTuc data={undefined}/>
            </div>

            <div className="item">
                <CardTinTuc data={undefined}/>
            </div>

            <div className="item">
                <CardTinTuc data={undefined}/>
            </div>

            <div className="item">
                <CardTinTuc data={undefined}/>
            </div>
        </div>
        <ButtonDefault title="Xem thêm bài viết"
                       icon={<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.583984 4.2392H11.0006M11.0006 4.2392L7.65393 0.739197M11.0006 4.2392L7.65393 7.7392"
                                  stroke="#AFCC36"/>
                        </svg>}/>
    </>
}
