import { useEffect, useState } from "react";
import { getContentHtml } from "../../api/contenthtml";
import { ContentHtml } from "../../api/contenthtml/type";
import TapChiSticky from "../../components/TapChiSticky";
import { useTranslation } from "react-i18next";

export default () => {
  const [data, setData] = useState<ContentHtml>();
  const {t : common} = useTranslation("common");
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
            <h1 className="heading-1 mb-[8px]">{common("title.dat-mua-tap-chi")}</h1>
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
