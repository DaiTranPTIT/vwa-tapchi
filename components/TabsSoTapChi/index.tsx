import styled from "styled-components";
import { MTapChi } from "../../api/tapChi/typing";

export default (props: {listSo?: MTapChi.ISoTapChi[], soHienTai?: string, selectSoTaiLieu: (soXuatBan: string) => void}) => {
    const {listSo, soHienTai, selectSoTaiLieu} = props;

    return <TabsSoTapChiWrapper>
        <ul className="tabs">
            {
                listSo?.map(item => {
                    return (
                        <li className={`item ${item.soXuatBan === soHienTai ? 'active': ''}`} onClick={() => selectSoTaiLieu(item.soXuatBan)}>
                            {item.soXuatBan}
                        </li>
                    )
                })
            }
        </ul>
    </TabsSoTapChiWrapper>
}

const TabsSoTapChiWrapper = styled.div`
    ul.tabs {
    display: flex;
    gap: 8px;

    li.item {
      display: flex;
      padding: 12px 16px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      cursor: pointer;
      transition: 0.2s;
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      text-align: center;
      color: var(--text-primary);

      &.active {
        background-color: #F4F4F4;
            }
        }
    }

    @media (max-width: 459px) {
        ul.tabs {
        flex-direction: column;
        margin-bottom:10px;
        width:100%;
        }

        ul.tabs li.item {
        flex-direction: column;
        align-items: flex-start;
        border-radius: 8px;
        width:100%;
        }
    }
`