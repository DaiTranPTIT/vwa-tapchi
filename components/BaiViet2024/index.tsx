import CardTinTuc2 from "../CardTinTuc2";
import ButtonDefault from "../ButtonDefault";
import { useEffect, useState } from "react";
import { getTapChiNamHienTai } from "../../api/tapChi/api";
import { MTapChi } from "../../api/tapChi/typing";
import router from "next/router";
import { HiArrowNarrowRight, HiArrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default () => {
    const [dsTapChi, setDsTapChi] = useState<MTapChi.ITapChi[]>();
    const {t : common} = useTranslation('common')

    const getDsTapChi = async () => {
        try {
            const res = await getTapChiNamHienTai({ page: 1, limit: 4 });
            setDsTapChi(res.data.result);
        } catch (err) {
            console.log(err);
        } finally { }
    }
    useEffect(() => {
        getDsTapChi();
    }, []);
    return <>
        <div className="list-posts grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mb-[50px] gap-[20px]">
            {dsTapChi?.map(item => {
                    return  <div className="item">
                        <CardTinTuc2 data={item} />
                    </div>
                }
            )}
        </div>

        <ButtonDefault onClick={() => {router.push('/so-tap-chi')}} title={common("home.xem-them-bai-viet")}
            icon={<HiArrowNarrowRight/>} />
    </>
}