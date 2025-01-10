import { useEffect, useState } from "react";
import { getContentHtml } from "../../../api/contenthtml";
import { ContentHtml } from "../../../api/contenthtml/type";
import MenuVertical1 from "../../../components/MenuVertical1";
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
                {common("title.chinh-sach-rut-bai")}
              </h1>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: data?.chinhSachRutBaiSuaBai ?? "",
              }}
              className="blog-content"
            ></div>
          </div>
          <div className="sidebar">
            <div className="mb-[28px]">
              <h2 className="heading-1">{common("common.gioi-thieu")}</h2>
            </div>
            <AboutLink currentPath="/gioi-thieu/chinh-sach-rut-bai"/>
          </div>
        </div>
      </div>
    </>
  );
};
