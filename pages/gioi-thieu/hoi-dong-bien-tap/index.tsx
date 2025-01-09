import { useEffect, useState } from "react";
import { getAllHoiDongBienTap } from "../../../api/hoidongbientap";
import { HoiDongBienTap } from "../../../api/hoidongbientap/type";
import MenuVertical1 from "../../../components/MenuVertical1";
import {
  LoaiHoiDongBienTap,
  ShortNameHocHam,
  ShortNameHocVi,
} from "../../../utils/constant";
import AboutLink from "../../../components/AboutLink";

export default () => {
  const [data, setData] = useState<HoiDongBienTap[]>([]);
  const getData = async () => {
    const res = await getAllHoiDongBienTap();
    setData(res?.data ?? []);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div className="layout-sidebar justify-between container mx-auto">
          <div className="content">
            <div className="border-bottom mb-[24px]">
              <h1 className="heading-1 mb-[8px] max-[459px]:justify-items-center">Hội đồng biên tập</h1>
            </div>

            <div className="blog-content">
              <h3>Nhân sự Tạp chí</h3>
              <table>
                <thead>
                  <tr>
                    <th>TT</th>
                    <th>Họ và tên</th>
                    <th>Chức vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter((item) => item.loai === LoaiHoiDongBienTap.NHAN_SU)
                    .map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          {[
                            ShortNameHocHam[item?.hocHam],
                            ShortNameHocVi[item?.hocVi],
                          ].join("")}{" "}
                          {item.hoTen}
                        </td>
                        <td>{item.chucVu}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <h3>Hội đồng cố vấn Tạp chí Khoa học Học viện Phụ nữ Việt Nam</h3>
              <table>
                <thead>
                  <tr>
                    <th>TT</th>
                    <th>Họ và tên</th>
                    <th>Chức vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter(
                      (item) => item.loai === LoaiHoiDongBienTap.HOI_DONG_CO_VAN
                    )
                    .map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          {[
                            ShortNameHocHam[item?.hocHam],
                            ShortNameHocVi[item?.hocVi],
                          ].join("")}{" "}
                          {item.hoTen}
                        </td>
                        <td>{item.chucVu}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <h3>
                Hội đồng Biên tập Tạp chí Khoa học Học viện Phụ nữ Việt Nam
              </h3>
              <table>
                <thead>
                  <tr>
                    <th>TT</th>
                    <th>Họ và tên</th>
                    <th>Học hàm, học vị</th>
                    <th>Chức danh chuyên môn</th>
                    <th>Chức danh HĐ</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter(
                      (item) =>
                        item.loai === LoaiHoiDongBienTap.HOI_DONG_BIEN_TAP
                    )
                    .map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.hoTen}</td>
                        <td>
                          {[item?.hocHam, item?.hocVi]
                            ?.filter((item) => item)
                            .join(", ")}
                        </td>
                        <td>{item?.chucDanhChuyenMon}</td>
                        <td>{item?.chucDanhHoiDong}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="sidebar">
            <div className="mb-[28px]">
              <h2 className="heading-1">Giới thiệu</h2>
            </div>
            <AboutLink currentPath="/gioi-thieu/hoi-dong-bien-tap"/>
          </div>
        </div>
      </div>
    </>
  );
};
