import { useEffect, useState } from "react";
import { getContentHtml } from "../../api/contenthtml";
import { ContentHtml } from "../../api/contenthtml/type";
import TapChiSticky from "../../components/TapChiSticky";

export default () => {
  const [data, setData] = useState<ContentHtml>();
  const getData = async () => {
    const res: any = await getContentHtml();
    setData(res?.data ?? {});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="layout-sidebar justify-between container mx-auto pt-[24px]">
        <div className="content">
          <div className="border-bottom mb-[24px]">
            <h1 className="heading-1 mb-[8px]">Đặt mua tạp chí</h1>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.phatHanhDatMuaTapChi ?? "",
            }}
            className="blog-content"
          ></div>
        </div>
        <div className="sidebar">
          <TapChiSticky />
        </div>
      </div>
    </>
  );
};
