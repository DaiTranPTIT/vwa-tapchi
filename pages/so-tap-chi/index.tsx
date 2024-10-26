import styled from "styled-components";
import TapChiSticky from "../../components/TapChiSticky";
import CardNamTapChi from "../../components/CardNamTapChi";

export default () => {
    return <SoTapChiWrapper>
        <div className="layout-sidebar justify-between container mx-auto">
            <div className="content">
                <ul className="list-nam">
                    <li className="item">
                        <CardNamTapChi/>
                    </li>
                    <li className="item">
                        <CardNamTapChi/>
                    </li>
                    <li className="item">
                        <CardNamTapChi/>
                    </li>
                    <li className="item">
                        <CardNamTapChi/>
                    </li>
                    <li className="item">
                        <CardNamTapChi/>
                    </li>
                </ul>
            </div>
            <div className="sidebar">
                <TapChiSticky/>
            </div>
        </div>
    </SoTapChiWrapper>
}

const SoTapChiWrapper = styled.div`
    
`