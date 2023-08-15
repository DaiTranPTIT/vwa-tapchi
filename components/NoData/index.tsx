import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const NoData = () => {
  const { dataConfigLang } = useContext(AuthContext);
  return(
    <>
      <div className="w-full h-full justify-center items-center flex flex-col">
        <img
          className="mb-[16px]"
          src="/images/default/no_data.png"
          alt="image"
        />
        <p className="text-secondary text-sm">{dataConfigLang?.khongCoDuLieu}</p>
      </div>
    </>
  )
}
export default NoData;