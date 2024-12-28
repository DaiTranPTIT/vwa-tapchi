export interface HoiDongBienTap {
  _id: string;
  maCanBo: string;
  ssoId: string;
  hoTen: string;
  hocHam: string;
  hocVi: string;
  chucVu: string;
  chucDanhChuyenMon: string;
  chucDanhHoiDong: string;
  loai: LoaiHoiDongBienTap;
  active: boolean;
}
