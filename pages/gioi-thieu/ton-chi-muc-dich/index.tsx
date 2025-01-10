import { useEffect, useState } from "react";
import { getContentHtml } from "../../../api/contenthtml";
import MenuVertical1 from "../../../components/MenuVertical1";
import { ContentHtml } from "../../../api/contenthtml/type";
import AboutLink from "../../../components/AboutLink";
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
      <div>
        <div className="layout-sidebar justify-between container mx-auto">
          <div className="content">
            <div className="border-bottom mb-[24px]">
              <h1 className="heading-1 mb-[8px]">
                {common("title.ton-chi-muc-dich")}
              </h1>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: data?.tonChiMucDichHoatDong ?? "",
              }}
              className="blog-content"
            ></div>
          </div>
          <div className="sidebar">
            <div className="mb-[28px]">
              <h2 className="heading-1">{common("title.gioi-thieu")}</h2>
            </div>
            <AboutLink currentPath="/gioi-thieu/ton-chi-muc-dich"/>
          </div>
        </div>
      </div>
    </>
  );
};
