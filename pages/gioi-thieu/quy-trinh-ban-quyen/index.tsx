import MenuDefault from "../components/MenuDefault";

export default () => {
    return <>
        <div>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <div className="border-bottom mb-[24px]">
                        <h1 className="heading-1 mb-[8px]">
                            Quy định về bản quyền
                        </h1>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="mb-[28px]">
                        <h2 className="heading-1">Giới thiệu</h2>
                    </div>
                    <MenuDefault/>
                </div>
            </div>
        </div>
    </>
}