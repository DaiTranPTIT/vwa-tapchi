import { useRouter } from "next/router";
import SectionBreadcrumb from "../../components/SectionBreadcrumb";
import TapChiContent from "../../components/TapChiContent";
import MenuVertical1 from "../../components/MenuVertical1";
import { useEffect, useState } from "react";
import { MTapChi } from "../../api/tapChi/typing";
import { getNam, getTapChiDetail, getTapChiTheoSo } from "../../api/tapChi/api";
import { useTranslation } from "react-i18next";

export default () => {
    const router = useRouter();
    const { slug } = router.query;
    const [treeNam, setTreeNam] = useState<MTapChi.INamTapChi[]>([]);
    const [selectedSo, setSelectSo] = useState<MTapChi.ISoTapChi>();
    const [tapChiInfo, setTapChiInfo] = useState<MTapChi.ITapChi>();
    const {t : common} = useTranslation("common");

    const getAllSo = async () => {
        try {
            const res = await getNam({'sort': '{"thoiGianXuatBan": -1}'});
            if (!res.data) return;

            //lấy số xuất bản mới nhất
            const latestRecord = res.data.reduce((latest, record) => {
                return new Date(record.thoiGianXuatBan) > new Date(latest.thoiGianXuatBan) ? record : latest;
            });
            if (latestRecord) setSelectSo(latestRecord);

            //ánh xạ ds số xuất bản theo năm
            const listSo = res.data.map(item => {
                return {
                    ...item,
                    nam: new Date(item.thoiGianXuatBan).getFullYear()
                }
            });
            const groupedByYear = Object.entries(listSo.reduce((acc: any, magazine: any) => {
                const { nam } = magazine;
                if (!acc[nam]) {
                    acc[nam] = [];
                }
                acc[nam].push(magazine);
                return acc;
            }, {})).map(([nam, items]: any) => ({ namXuatBan: nam, dsSoTapChi: items })).sort((x, y) => y.namXuatBan - x.namXuatBan);
            setTreeNam(groupedByYear);
        } catch (err) {
            console.log(err);
        } finally { }
    }

    const getDetailTapChi = async () => {
        try {
            const res = await getTapChiDetail(String(slug));
            if(res.data) setTapChiInfo(res.data);
        } catch(err) {console.log(err)}
        finally {}
    }

    useEffect(() => {
        if(slug) {
            getAllSo();
            getDetailTapChi();
        }
    }, [slug]);

    return <>
        <div>
            <SectionBreadcrumb tapChiInfo={tapChiInfo}/>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <TapChiContent soMoiNhat={selectedSo} tapChiInfo={tapChiInfo}/>
                </div>
                <div className="sidebar">
                    <div className="mb-[28px]">
                        <h2 className="heading-1">{common("title.tap-chi-khoa-hoc")}</h2>
                    </div>
                    <MenuVertical1 hasBox={true} listLink={
                        treeNam.map(item => {
                            return {
                                title: `${common("common.year")} ${item.namXuatBan}`,
                                path: `/so-tap-chi/${item.namXuatBan}/${item.dsSoTapChi[0].soXuatBan}`
                            }
                        })
                    } />
                </div>
            </div>
        </div>
    </>
}