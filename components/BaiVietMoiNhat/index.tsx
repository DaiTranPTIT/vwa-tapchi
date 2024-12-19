import CardTinTuc from "../CardTinTuc";
import ButtonDefault from "../ButtonDefault";
import { useEffect, useState } from "react";
import { MTapChi } from "../../api/tapChi/typing";
import { getTapChi } from "../../api/tapChi/api";
import router from "next/router";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default () => {
    const [dsTapChi, setDsTapChi] = useState<MTapChi.ITapChi[]>();
    const {t : common} = useTranslation('common')

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
        <ButtonDefault onClick={() => {router.push('/so-tap-chi')}} title={common("home.xem-them-bai-viet")}
                       icon={<HiArrowNarrowRight/>}/>
    </>
}
