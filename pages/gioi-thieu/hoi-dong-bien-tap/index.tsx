import { useTranslation } from "react-i18next";
import MenuVertical1 from "../../../components/MenuVertical1";
import MenuDefault from "../components/MenuDefault";
import { useEffect, useState } from "react";

export default () => {
    const [common] = useTranslation('common')
    const [langCode, setLangCode] = useState<string | null>(null);

    useEffect(() => {
      const storedLangCode = localStorage.getItem('langCode');
      setLangCode(storedLangCode);
    }, [common]);
  
    return <>
        <div>
            <div className="layout-sidebar justify-between container mx-auto">
                <div className="content">
                    <div className="border-bottom mb-[24px]">
                        <h1 className="heading-1 mb-[8px]">
                            {common("gioi-thieu.hoi-dong-bien-tap")}
                        </h1>
                    </div>

                    <div className="blog-content">
                        <h3>
                            {common("gioi-thieu.nhan-su-tap-chi")}
                        </h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>{common("gioi-thieu.thu-tu")}</th>
                                    <th>{common("gioi-thieu.name")}</th>
                                    <th>{common("gioi-thieu.chuc-vu")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{common("gioi-thieu.pgs-ts")} Dương Kim Anh</td>
                                    <td>{common("gioi-thieu.tong-bien-tap")}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>{common("gioi-thieu.ts")} Lê Hồng Việt</td>
                                    <td>{common("gioi-thieu.pho-tong-bien-tap")}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>{common("gioi-thieu.ths")} Đỗ Ngọc Nhung</td>
                                    <td>{common("gioi-thieu.thu-ky-toa-soan")}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>
                            {common("gioi-thieu.hoi-dong-co-van")}
                        </h3>
                        <table>
                            <thead>
                            <tr>
                                <th>{common("gioi-thieu.thu-tu")}</th>
                                <th>{common("gioi-thieu.name")}</th>
                                <th>{common("gioi-thieu.chuc-vu")}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>{common("gioi-thieu.ths")} Nguyễn Thị Minh Hương</td>
                                <td>{common("gioi-thieu.tong-bien-tap")}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{common("gioi-thieu.gs-ts")} Nguyễn Hữu Minh</td>
                                <td>{common("gioi-thieu.pho-tong-bien-tap")}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{common("gioi-thieu.pgs-ts")} Vũ Mạnh Lợi</td>
                                <td>{common("gioi-thieu.nguyen-pho-vien-truong")}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h3>
                            {common("gioi-thieu.hoi-dong-bien-tap")} {langCode == "en"? "of" : ""} {common("gioi-thieu.magazine-name")}
                        </h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>{common("gioi-thieu.thu-tu")}</th>
                                    <th>{common("gioi-thieu.name")}</th>
                                    <th>{common("gioi-thieu.hoc-ham-hoc-vi")}</th>
                                    <th>{common("gioi-thieu.chuc-danh-chuyen-mon")}</th>
                                    <th>{common("gioi-thieu.chuc-danh-hd")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Lê Ngọc Hùng</td>
                                    <td>{common("gioi-thieu.giao-su")}, {common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.dai-hoc-giao-duc")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Trần Quang Tiến</td>
                                    <td>{common("gioi-thieu.pho-giao-su")}, {common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.giam-doc-hoc-vien-phu-nu")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Lê Thái Phong</td>
                                    <td>{common("gioi-thieu.pho-giao-su")}, {common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.truong-khoa-quan-tri-kinh-doanh-dh-ngoai-thuong")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Trịnh Tiến Việt</td>
                                    <td>{common("gioi-thieu.pho-giao-su")}, {common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.dai-hoc-luat")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Đỗ Thị Thạch</td>
                                    <td>{common("gioi-thieu.pho-giao-su")}, {common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.nguyen-quyen-vien-truong-hvctqghcm")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Trần Thị Mỵ Lương</td>
                                    <td>{common("gioi-thieu.pho-giao-su")}, {common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.hoc-vien-phu-nu")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Dương Kim Anh</td>
                                    <td>{common("gioi-thieu.pho-giao-su")}, {common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.pho-giam-doc-hoc-vien-phu-nu")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Lê Hồng Việt</td>
                                    <td>{common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.pho-vien-truong-vien-nghien-cuu-phu-nu")}, {common("gioi-thieu.hoc-vien-phu-nu")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Nguyễn Hùng Cường</td>
                                    <td>{common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.hoc-vien-phu-nu")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Nguyễn Hải Hữu</td>
                                    <td>{common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.bo-lao-dong-thuong-binh-xa-hoi")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Hà Thị Thanh Vân</td>
                                    <td>{common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.hoc-vien-phu-nu")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Hà Thị Thúy</td>
                                    <td>{common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.hoc-vien-phu-nu")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Antonia Daskina</td>
                                    <td>{common("gioi-thieu.giao-su")}, {common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.hiep-hoi-nghe-lien-bang-nga")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Ramona Mihaila</td>
                                    <td>{common("gioi-thieu.giao-su")}, {common("gioi-thieu.tien-si")}</td>
                                    <td>{common("gioi-thieu.tap-chi-nghien-cuu-gioi")}</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>John Winterdyk</td>
                                    <td>{common("gioi-thieu.giao-su")}, {common("gioi-thieu.tien-si")}</td>
                                    <td>Mount Royal University, Canada</td>
                                    <td>{common("gioi-thieu.thanh-vien")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="mb-[28px]">
                        <h2 className="heading-1">{common("gioi-thieu.title")}</h2>
                    </div>
                    <MenuDefault/>
                </div>
            </div>
        </div>
    </>
}