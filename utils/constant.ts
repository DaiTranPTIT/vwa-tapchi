// User roles
export enum USER_ROLE {
  USER = "USER",
  DOANH_NGHIEP = "DOANH_NGHIEP",
  ADMIN = "ADMIN",
}

export const dataGender = [
  {
    value: "Male",
    label: "Nam",
  },
  {
    value: "Female",
    label: "Nữ",
  },
];

export const dataLevel = [1, 2, 3, 4, 5].map((item) => ({
  value: item,
  label: item,
}));

export enum EHinhThucLamViec {
  Part_Time = "PartTime",
  Full_Time = "FullTime",
  Thuc_Tap = "Thực tập",
  Thuc_Tap_TN = "Thực tập tốt nghiệp",
  Khac = "Khác",
}

export const colorHinhThuc = {
  FullTime: "careerfy-blue",
  PartTime: "careerfy-red",
  Khác: "careerfy-green",
  "Thực tập": "careerfy-yellow",
  "Thực tập tốt nghiệp": "careerfy-purple",
};

export enum EChungThuc {
  CHUA_CHUNG_THUC = "Chưa chứng thực",
  CHUNG_THUC = "Chứng thực",
  TU_CHOI = "Từ chối",
}

export enum ETrangThaiBaiDang {
  CHO_DUYET = "Chờ duyệt",
  DA_DUYET = "Đã duyệt",
  TU_CHOI = "Từ chối",
}

export enum ETrangThaiUngVien {
  Cho_Duyet = "Chờ xử lý",
  Duyet = "Tiếp nhận",
  Tu_Choi = "Từ chối",
}

export enum LoaiHoiDongBienTap {
  NHAN_SU = "Nhân sự Tạp chí",
  HOI_DONG_CO_VAN = "Hội đồng cố vấn",
  HOI_DONG_BIEN_TAP = "Hội đồng biên tập",
}

export enum EHocHam {
  GIAO_SU = "Giáo sư",
  PHO_GIAO_SU = "Phó Giáo sư",
}

export enum EHocVi {
  CU_NHAN = "Cử nhân",
  KY_SU = "Kỹ sư",
  THAC_SY = "Thạc sĩ",
  TIEN_SY = "Tiến sĩ",
}

export const ShortNameHocHam: any = {
  [EHocHam.GIAO_SU]: "GS.",
  [EHocHam.PHO_GIAO_SU]: "PGS.",
};

export const ShortNameHocVi: any = {
  [EHocVi.THAC_SY]: "ThS.",
  [EHocVi.TIEN_SY]: "TS.",
  [EHocVi.KY_SU]: "KS.",
  [EHocVi.CU_NHAN]: "CN.",
};

export const ListMenu = [
  {
    title: '',
    url: ''
  }
]