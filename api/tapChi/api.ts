import { getRequest, IApiResponse } from "..";
import { MTapChi } from "./typing";

export const getTapChi = (condition?: { [key: string]: any }): Promise<IApiResponse<MTapChi.ITapChi[]>> => {
	return getRequest("tap-chi-khoa-hoc/public/many", condition);
};

export const getTapChiNamHienTai = (condition?: { [key: string]: any }): Promise<any> => {
	return getRequest("tap-chi-khoa-hoc/public/nam-hien-tai", condition);
};

export const getNam = (condition?: { [key: string]: any }): Promise<IApiResponse<MTapChi.ISoTapChi[]>> => {
	return getRequest("xuat-ban-tap-chi/public/nam", condition);
};

export const getTapChiTheoSo = (condition?: { [key: string]: any }, idSoTapChi?: string): Promise<IApiResponse<MTapChi.ITapChi[]>> => {
	return getRequest(`tap-chi-khoa-hoc/public/many/so-tap-chi/${idSoTapChi}`, condition);
};

export const getTapChiDetail = (idTapChi: string): Promise<IApiResponse<MTapChi.ITapChi>> => {
	return getRequest(`tap-chi-khoa-hoc/public/${idTapChi}`);
};