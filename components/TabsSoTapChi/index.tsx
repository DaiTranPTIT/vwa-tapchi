import {useState} from "react";
import styled from "styled-components";

export default () => {
    const [soTaiLieuSelected, selectSoTaiLieu] = useState<string>('so_1');
    const soTaiLieu = [
        {
            title: 'Số 1',
            key: 'so_1'
        },
        {
            title: 'Số 2',
            key: 'so_2'
        },
        {
            title: 'Số 3',
            key: 'so_3'
        },
        {
            title: 'Số 4',
            key: 'so_4'
        }
    ]
    return <TabsSoTapChiWrapper>
        <ul className="tabs">
            {
                soTaiLieu.map(item => {
                    return (
                        <li className={`item ${item.key === soTaiLieuSelected ? 'active': ''}`} onClick={() => selectSoTaiLieu(item.key)}>
                            {item.title}
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
        padding: 12px 16px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        cursor: pointer;
        transition: .2s;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        text-align: center; 
        color: var(--text-primary);
      }
      
      li.item.active {
        background-color: #F4F4F4;
      }
    }
`