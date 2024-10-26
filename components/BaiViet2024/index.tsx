import styled from "styled-components";
import CardTinTuc2 from "../CardTinTuc2";

export default () => {
    return <>
        <div className="list-posts grid grid-cols-4 mb-[50px] gap-[20px]">
            <div className="item">
                <CardTinTuc2 data={undefined}/>
            </div>

            <div className="item">
                <CardTinTuc2 data={undefined}/>
            </div>

            <div className="item">
                <CardTinTuc2 data={undefined}/>
            </div>

            <div className="item">
                <CardTinTuc2 data={undefined}/>
            </div>
        </div>

        <button onClick={() => {}}
                className={`button-outline flex gap-[8px] items-center`}
        >
            <span>Xem thêm bài viết</span>
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.583984 4.2392H11.0006M11.0006 4.2392L7.65393 0.739197M11.0006 4.2392L7.65393 7.7392" stroke="#AFCC36" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </>
}