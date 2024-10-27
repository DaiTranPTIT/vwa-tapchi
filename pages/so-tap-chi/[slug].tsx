import DetailSoTapChi from "../../components/DetailSoTapChi";
import MenuVertical1 from "../../components/MenuVertical1";

export default () => {
    return <>
        <div>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <DetailSoTapChi/>
                </div>
                <div className="sidebar">
                    <div className="mb-[28px]">
                        <h2 className="heading-1">Tạp chí khoa học</h2>
                    </div>
                    <MenuVertical1 hasBox={true} listLink={[
                        {
                            title: 'Năm 2024',
                            path: '/'
                        },
                        {
                            title: 'Năm 2023',
                            path: '/'
                        },
                        {
                            title: 'Năm 2022',
                            path: '/'
                        },
                        {
                            title: 'Năm 2021',
                            path: '/'
                        },
                        {
                            title: 'Năm 2020',
                            path: '/'
                        }
                    ]}/>
                </div>
            </div>
        </div>
    </>
}