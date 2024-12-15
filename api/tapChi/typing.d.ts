export module MTapChi {
	interface ITapChi {
    _id: string,
    tieuDe: string,
    tieuDeEn: string,
    tomTat: string,
    tomTatEn: string,
    urls: string[],
    nguonNgu: ENgonNgu,
    tuKhoa: string[],
    tuKhoaEn: string[],
    taiLieuThamKhao: string,
    trangThaiSoDuyet: ETrangThaiSoDuyet,
    trangThaiDuyetPhanBien: ETrangThaiDuyetPhanBien,
    ssoId: string,
    hoTen: string,
    danhSachNguoiThamGia: INguoiThamGia[],
    createdAt: string,
    updatedAt: string,
    chuyenNganh: string,
    soLanPhanBien: number,
    danhSachNguoiPhanBien: INguoiPhanBien[],
    ghiChu: string,
    trangThaiBienTap?: ETrangThaiBienTap,
    trangThaiXuatBan?: EDuyetDangXuatBan,
    urlFileDangXuatBan?: string,
    soTrangBatDau?: number, 
    soTrangKetThuc?: number,
    hasXuatBan?: boolean,
    ghiChuBienTap?: string,
    urlsFileDaBienTap?: string[],
    thongTinXuatBan: ISoTapChi[]
  }
  interface INguoiThamGia {
    hoTen: string,
    email: string,
    hocHam: string,
    hocVi: string,
    toChuc: string,
    vaiTro: EVaiTro[],
    ssoId?: string
  }
  interface ISoTapChi {
    _id: string,
    soXuatBan: string,
    urlBia1: string,
    urlBia2: string,
    urlBia3: string,
    urlBia4: string,
    volumn: string,
    quyen: string,
    thoiGianXuatBan: string,
    moTa: string,
    urlFilePhatHanh: string,
    tapChiKhoaHocDuocXuatBanId: string[],
    urlMucLuc: string,
    lock: boolean,
    createdAt: string,
    updatedAt: string
  }

  interface INamTapChi {
    namXuatBan: string, 
    dsSoTapChi: ISoTapChi[]
  }
}