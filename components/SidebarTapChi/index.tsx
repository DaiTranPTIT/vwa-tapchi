import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import styled from "styled-components";
import { MTapChi } from "../../api/tapChi/typing";
import { ELoaiTapChi } from "../../utils/constant";

interface IProps {
  treeNam: MTapChi.INamTapChi[];
  selectedSo?: MTapChi.ISoTapChi;
  setSelectSo: (rec: MTapChi.ISoTapChi) => void;
}
export default (props: IProps) => {
  const { treeNam, setSelectSo, selectedSo } = props;
  return (
    <SidebarWrapper>
      <Sidebar width="100%" className="custom-sidebar">
        <Menu>
          {treeNam.map((nam) => {
            return (
              <SubMenu
                label={
                  nam.namXuatBan === ELoaiTapChi.CHUYEN_DE
                    ? ELoaiTapChi.CHUYEN_DE
                    : `Năm ${nam.namXuatBan}`
                }
              >
                {nam.dsSoTapChi.map((so) => {
                  return (
                    <MenuItem
                      className={`${
                        selectedSo?._id === so._id ? "active" : ""
                      }`}
                      onClick={() => setSelectSo(so)}
                    >
                      {so.quyen}, {so.soXuatBan}
                    </MenuItem>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </Sidebar>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  .custom-sidebar {
    .ps-sidebar-container {
      background-color: transparent;
      .ps-menuitem-root.ps-submenu-root {
        & > .ps-menu-button:not(.ps-submenu-content) {
          flex-direction: row-reverse;
          gap: 20px;
          & > span.ps-menu-label {
            font-size: 18px;
            font-weight: 700;
            line-height: 27px;
            text-align: left;
            color: var(--text-primary);
          }
          .ps-submenu-expand-icon {
            display: flex;
            span {
              width: 6px;
              height: 6px;
            }
          }
        }
      }
    }
    border: 0;
  }
`;
