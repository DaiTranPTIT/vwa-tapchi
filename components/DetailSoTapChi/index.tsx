import TabsSoTapChi from "../TabsSoTapChi";
import CardTinTuc2 from "../CardTinTuc2";

export default () => {
    return <>
        <div>
            <div className="card-type-2">
                <div className="heading" style={{paddingBottom: 0}}>
                    <div className="flex items-center justify-between">
                        <h2 className="title">Năm 2024</h2>
                        <TabsSoTapChi/>
                    </div>
                </div>
                <div className="card-body">
                    <div className="grid grid-cols-3 gap-x-[30px] gap-y-[80px]">
                        <div className="grid-items">
                            <CardTinTuc2/>
                        </div>
                        <div className="grid-items">
                            <CardTinTuc2/>
                        </div>
                        <div className="grid-items">
                            <CardTinTuc2/>
                        </div>
                        <div className="grid-items">
                            <CardTinTuc2/>
                        </div>
                        <div className="grid-items">
                            <CardTinTuc2/>
                        </div>
                        <div className="grid-items">
                            <CardTinTuc2/>
                        </div>
                        <div className="grid-items">
                            <CardTinTuc2/>
                        </div>
                        <div className="grid-items">
                            <CardTinTuc2/>
                        </div>
                        <div className="grid-items">
                            <CardTinTuc2/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}