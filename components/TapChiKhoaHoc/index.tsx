import CardTinTuc2 from "../CardTinTuc2";
import SidebarTapChi from "../SidebarTapChi";
import ButtonDefault from "../ButtonDefault";
import { useEffect, useState } from "react";
import { getNam, getTapChiTheoSo } from "../../api/tapChi/api";
import { MTapChi } from "../../api/tapChi/typing";
import router from "next/router";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default () => {
    const [treeNam, setTreeNam] = useState<MTapChi.INamTapChi[]>([]);
    const [selectedSo, setSelectSo] = useState<MTapChi.ISoTapChi>();
    const [dsTapChi, setDsTapChi] = useState<MTapChi.ITapChi[]>();
    const {t : common} = useTranslation('common');

    const getAllSo = async () => {
        try {
            const res = await getNam();
            if(!res.data) return;

            //lấy số xuất bản mới nhất
            const latestRecord = res.data.reduce((latest, record) => {
                return new Date(record.thoiGianXuatBan) > new Date(latest.thoiGianXuatBan) ? record : latest;
            });
            if(latestRecord) setSelectSo(latestRecord);

            //ánh xạ ds số xuất bản theo năm
            const listSo = res.data.map(item => {
                return {
                    ...item,
                    nam: new Date(item.thoiGianXuatBan).getFullYear()
                }
            });
            const groupedByYear = Object.entries(listSo.reduce((acc:any, magazine:any) => {
                const { nam } = magazine;
                if (!acc[nam]) {
                  acc[nam] = [];
                }
                acc[nam].push(magazine);
                return acc;
            }, {})).map(([nam, items]: any) => ({ namXuatBan: nam, dsSoTapChi: items }))
            .sort((x, y) => y.namXuatBan - x.namXuatBan);
            setTreeNam(groupedByYear);
        } catch(err) {
            console.log(err);
        } finally {}
    }

    useEffect(() => {
        getAllSo();
    }, []);

    const getTapChi = async (idSoTapChi: string) => {
        try {
            const res = await getTapChiTheoSo({page: 1, limit: 4}, idSoTapChi);
            setDsTapChi(res.data);
        } catch (err) {
            console.log(err);
        } finally {}
    }

    useEffect(() => {
        console.log(selectedSo)
        if(selectedSo) {
            getTapChi(selectedSo.soXuatBan);
        }
    }, [selectedSo])
    
    return <>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[20px] mb-[50px]">
            <div className="item">
                <SidebarTapChi treeNam={treeNam} setSelectSo={rec => setSelectSo(rec)} selectedSo={selectedSo}/>
            </div>

            {
                selectedSo && <>
                    {dsTapChi?.map(item => {
                            return  <div className="item">
                                <CardTinTuc2 data={item} />
                            </div>
                        }
                    )}
                </>
            }
        </div>

        <ButtonDefault onClick={() => {router.push('/so-tap-chi')}} title={common("home.xem-them-bai-viet")}
                       icon={<HiArrowNarrowRight/>}/>
    </>
}