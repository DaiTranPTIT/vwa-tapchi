import styled from "styled-components";
import TapChiSticky from "../../components/TapChiSticky";
import CardNamTapChi from "../../components/CardNamTapChi";
import { useEffect, useState } from "react";
import { MTapChi } from "../../api/tapChi/typing";
import { getNam } from "../../api/tapChi/api";

export default () => {
    const [treeNam, setTreeNam] = useState<MTapChi.INamTapChi[]>([]);

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
        } catch (err) {
            console.log(err);
        } finally { }
    }

    useEffect(() => {
        getAllSo();
    }, []);
    return <SoTapChiWrapper>
        <div className="layout-sidebar justify-between container mx-auto">
            <div className="content">
                <ul className="list-nam">
                    {treeNam.map(item => {
                        return <li className="item">
                            <CardNamTapChi namTapChi={item}/>
                        </li>
                    })}
                </ul>
            </div>
            <div className="sidebar">
                <TapChiSticky />
            </div>
        </div>
    </SoTapChiWrapper>
}

const SoTapChiWrapper = styled.div`
    
`