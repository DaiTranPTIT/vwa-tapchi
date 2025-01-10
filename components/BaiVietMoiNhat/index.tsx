import CardTinTuc from "../CardTinTuc";
import ButtonDefault from "../ButtonDefault";
import { useEffect, useState } from "react";
import { MTapChi } from "../../api/tapChi/typing";
import { getTapChi } from "../../api/tapChi/api";
import router from "next/router";
import { useTranslation } from "react-i18next";

export default () => {
    const [dsTapChi, setDsTapChi] = useState<MTapChi.ITapChi[]>();
    const {t : common} = useTranslation("common");
    const getDsTapChi = async () => {
        try {
            const res = await getTapChi({page: 1, limit: 4});
            setDsTapChi(res.data);
        } catch(err) {
            console.log(err);
        } finally {}
    }
    useEffect(() => {
        getDsTapChi();
    }, [])
    return <>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[20px] mb-[50px]">
            {
                dsTapChi?.map(item => {
                    return <div className="item">
                    <CardTinTuc data={item}/>
                </div>
                })
            }
        </div>
        <ButtonDefault onClick={() => {router.push('/so-tap-chi')}} title={common("button.xem-them-bai-viet")}
                       icon={<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.583984 4.2392H11.0006M11.0006 4.2392L7.65393 0.739197M11.0006 4.2392L7.65393 7.7392"
                                  stroke="#AFCC36"/>
                        </svg>}/>
    </>
}
