import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import styled from "styled-components";

export default () => {
    return <SidebarWrapper>
        <Sidebar width="100%" className="custom-sidebar">
            <Menu>
                <SubMenu label="Năm 2024">
                    <MenuItem>Quyển. 21, Số 1</MenuItem>
                    <MenuItem>Quyển. 22, Số 2</MenuItem>
                    <MenuItem>Quyển. 22, Số 3</MenuItem>
                    <MenuItem>Quyển. 22, Số 4</MenuItem>
                </SubMenu>
                <SubMenu label="Năm 2023">
                    <MenuItem>Quyển. 21, Số 1</MenuItem>
                    <MenuItem>Quyển. 22, Số 2</MenuItem>
                    <MenuItem>Quyển. 22, Số 3</MenuItem>
                    <MenuItem>Quyển. 22, Số 4</MenuItem>
                </SubMenu>
                <SubMenu label="Năm 2022">
                    <MenuItem>Quyển. 21, Số 1</MenuItem>
                    <MenuItem>Quyển. 22, Số 2</MenuItem>
                    <MenuItem>Quyển. 22, Số 3</MenuItem>
                    <MenuItem>Quyển. 22, Số 4</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    </SidebarWrapper>
}

const SidebarWrapper  = styled.div`
  .custom-sidebar {
    .ps-sidebar-container {
      background-color: transparent;
      .ps-menuitem-root.ps-submenu-root  {
        &>.ps-menu-button:not(.ps-submenu-content) {
          flex-direction: row-reverse;
          gap: 20px;
          &>span.ps-menu-label {
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
`