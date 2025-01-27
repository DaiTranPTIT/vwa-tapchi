import router from "next/router";
import { useEffect, useState } from "react";
import { getNam, getTapChiTheoSo } from "../../api/tapChi/api";
import { MTapChi } from "../../api/tapChi/typing";
import { ELoaiTapChi } from "../../utils/constant";
import ButtonDefault from "../ButtonDefault";
import CardTinTuc2 from "../CardTinTuc2";
import SidebarTapChi from "../SidebarTapChi";

export default () => {
  const [treeNam, setTreeNam] = useState<MTapChi.INamTapChi[]>([]);
  const [treeChuyenDe, setTreeChuyenDe] = useState<MTapChi.INamTapChi[]>([]);
  const [selectedSo, setSelectSo] = useState<MTapChi.ISoTapChi>();
  const [dsTapChi, setDsTapChi] = useState<MTapChi.ITapChi[]>();

  const buildData = (loai: ELoaiTapChi, data: MTapChi.ISoTapChi[]) => {
    //lấy số xuất bản mới nhất
    const latestRecord = data.reduce((latest, record) => {
      return new Date(record.thoiGianXuatBan) > new Date(latest.thoiGianXuatBan)
        ? record
        : latest;
    });
    if (latestRecord) setSelectSo(latestRecord);

    //ánh xạ ds số xuất bản theo năm
    const listSo = data.map((item) => {
      return {
        ...item,
        nam:
          loai === ELoaiTapChi.CHUYEN_DE
            ? ELoaiTapChi.CHUYEN_DE
            : new Date(item.thoiGianXuatBan).getFullYear(),
      };
    });

    const groupedByYear = Object.entries(
      listSo.reduce((acc: any, magazine: any) => {
        const { nam } = magazine;
        if (!acc[nam]) {
          acc[nam] = [];
        }
        acc[nam].push(magazine);
        return acc;
      }, {})
    )
      .map(([nam, items]: any) => ({ namXuatBan: nam, dsSoTapChi: items }))
      .sort((x, y) => y.namXuatBan - x.namXuatBan);
    if (loai === ELoaiTapChi.THUONG_KY) setTreeNam(groupedByYear);
    else setTreeChuyenDe(groupedByYear);
  };

  const getAllSo = async () => {
    try {
      const res = await getNam();
      if (!res.data) return;

      buildData(
        ELoaiTapChi.THUONG_KY,
        res.data.filter((item) => item.loai === ELoaiTapChi.THUONG_KY)
      );
      buildData(
        ELoaiTapChi.CHUYEN_DE,
        res.data.filter((item) => item.loai === ELoaiTapChi.CHUYEN_DE)
      );
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    getAllSo();
  }, []);

  const getTapChi = async (idSoTapChi: string) => {
    try {
      const res = await getTapChiTheoSo({ page: 1, limit: 3 }, idSoTapChi);
      setDsTapChi(res.data);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    console.log(selectedSo);
    if (selectedSo) {
      getTapChi(selectedSo.soXuatBan);
    }
  }, [selectedSo]);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 max-[425]:flex-col gap-[20px] mb-[50px] overflow-hidden box-border">
        <div className="">
          <SidebarTapChi
            treeNam={[...treeChuyenDe, ...treeNam]}
            setSelectSo={(rec) => setSelectSo(rec)}
            selectedSo={selectedSo}
          />
        </div>

        {selectedSo && (
          <>
            {dsTapChi?.map((item) => {
              return (
                <div className="">
                  <CardTinTuc2 data={item} />
                </div>
              );
            })}
          </>
        )}
      </div>

      <ButtonDefault
        onClick={() => {
          router.push("/so-tap-chi");
        }}
        title="Xem thêm bài viết"
        icon={
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.583984 4.2392H11.0006M11.0006 4.2392L7.65393 0.739197M11.0006 4.2392L7.65393 7.7392"
              stroke="#AFCC36"
            />
          </svg>
        }
      />
    </>
  );
};
