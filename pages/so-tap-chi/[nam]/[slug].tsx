
import { useRouter } from "next/router";
import DetailSoTapChi from "../../../components/DetailSoTapChi";
import MenuVertical1 from "../../../components/MenuVertical1";
import { getNam } from "../../../api/tapChi/api";
import { useEffect, useState } from "react";
import { MTapChi } from "../../../api/tapChi/typing";

export default () => {
    const router = useRouter();
    const { nam, slug } = router.query;
    const [treeNam, setTreeNam] = useState<MTapChi.INamTapChi[]>([]);
    const [namHienTai, setNamHienTai] = useState<MTapChi.INamTapChi>()

    const getAllSo = async () => {
        try {
            const res = await getNam({ 'sort': '{"thoiGianXuatBan": -1}' });
            if (!res.data) return;

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
            const namHt = groupedByYear.find(item => item.namXuatBan === nam);
            setNamHienTai(namHt);
        } catch (err) {
            console.log(err);
        } finally { }
    }

    useEffect(() => {
        if(nam) getAllSo();
    }, [nam]);

    return <>
        <div>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <DetailSoTapChi nam={String(nam)} so={String(slug)} namHienTai={namHienTai}/>
                </div>
                <div className="sidebar">
                    <div className="mb-[28px]">
                        <h2 className="heading-1">Tạp chí khoa học</h2>
                    </div>
                    <MenuVertical1 hasBox={true} listLink={
                        treeNam.map(item => {
                            return {
                                title: `Năm ${item.namXuatBan}`,
                                path: `/so-tap-chi/${item.namXuatBan}/${item.dsSoTapChi[0].soXuatBan}`
                            }
                        })
                    } />
                </div>
            </div>
        </div>
    </>
}