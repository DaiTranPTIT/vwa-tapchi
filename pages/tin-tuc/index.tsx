import CardTinTuc5 from "../../components/CardTinTuc5";

export default () => {
    return <div className="container mx-auto py-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            <div className="item">
                <CardTinTuc5/>
            </div>
            <div className="item">
                <CardTinTuc5/>
            </div>
            <div className="item">
                <CardTinTuc5/>
            </div>
            <div className="item">
                <CardTinTuc5/>
            </div>
            <div className="item">
                <CardTinTuc5/>
            </div>
            <div className="item">
                <CardTinTuc5/>
            </div>
        </div>
    </div>
}