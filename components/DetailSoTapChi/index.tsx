import TabsSoTapChi from "../TabsSoTapChi";
import CardTinTuc2 from "../CardTinTuc2";
import { useEffect, useState } from "react";
import { MTapChi } from "../../api/tapChi/typing";
import { getTapChiTheoSo } from "../../api/tapChi/api";

interface IProps {
    nam?: string,
    so?: string,
    namHienTai?: MTapChi.INamTapChi
}
export default (props: IProps) => {
    const {nam, so, namHienTai} = props;
    const [dsTapChi, setDsTapChi] = useState<MTapChi.ITapChi[]>();
    const [soTaiLieuSelected, selectSoTaiLieu] = useState<string>();

    const getTapChi = async (idSoTapChi: string) => {
        try {
            const res = await getTapChiTheoSo({}, idSoTapChi);
            setDsTapChi(res.data);
        } catch (err) {
            console.log(err);
        } finally {}
    }

    useEffect(() => {
        if(so) {
            selectSoTaiLieu(so);
        }
    }, [so]);

    useEffect(() => {
        if(soTaiLieuSelected) getTapChi(soTaiLieuSelected);
    }, [soTaiLieuSelected])
        
    return <>
        <div>
            <div className="card-type-2">
                <div className="heading" style={{paddingBottom: 0}}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-[16px]">
                        <h2 className="title">Năm {nam}</h2>
                        <TabsSoTapChi 
                            listSo={namHienTai?.dsSoTapChi} 
                            soHienTai={soTaiLieuSelected} 
                            selectSoTaiLieu={(e) => {selectSoTaiLieu(e)}}/>
                    </div>
                </div>
                <div className="card-body">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-[30px] gap-y-[80px]">
                        {
                            dsTapChi?.map(item => {
                                return <div className="grid-items">
                                <CardTinTuc2 data={item}/>
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}