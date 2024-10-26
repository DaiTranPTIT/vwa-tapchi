import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";

export default () => {
    return <>
        <Sidebar>
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
    </>
}