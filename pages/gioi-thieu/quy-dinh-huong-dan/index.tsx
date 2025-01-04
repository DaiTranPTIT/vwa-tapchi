import { useState, useEffect } from "react";
import { getContentHtml } from "../../../api/contenthtml";
import { ContentHtml } from "../../../api/contenthtml/type";
import MenuVertical1 from "../../../components/MenuVertical1";
import AboutLink from "../../../components/AboutLink";

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
      <div>
        <div className="layout-sidebar justify-between container mx-auto">
          <div className="content">
            <div className="border-bottom mb-[24px]">
              <h1 className="heading-1 mb-[8px]">
                Quy định và hướng dẫn dành cho tác giả khi nộp bài
              </h1>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.quyDinhHuongDanChoTacGia ?? "",
              }}
              className="blog-content"
            ></div>
          </div>
          <div className="sidebar">
            <div className="mb-[28px]">
              <h2 className="heading-1">Giới thiệu</h2>
            </div>
            <AboutLink currentPath="/gioi-thieu/quy-dinh-huong-dan"/>
          </div>
        </div>
      </div>
    </>
  );
};
