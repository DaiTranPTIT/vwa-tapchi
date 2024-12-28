import { getRequest, IApiResponse } from "..";
import { ContentHtml } from "./type";

export const getContentHtml = (): Promise<IApiResponse<ContentHtml[]>> => {
  return getRequest("setting/public/landing");
};
