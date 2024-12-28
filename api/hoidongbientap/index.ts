import { getRequest, IApiResponse } from "..";
import { HoiDongBienTap } from "./type";

export const getAllHoiDongBienTap = (): Promise<
  IApiResponse<HoiDongBienTap[]>
> => {
  return getRequest("hoi-dong-bien-tap/public/many");
};
