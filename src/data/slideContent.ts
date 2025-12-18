// Dữ liệu nội dung cho các slide

export const teamMembers = [
  {
    name: "Lê Thị Nguyệt",
    mssv: "225734030110489",
    role: "Nhóm trưởng"
  },
  {
    name: "Lương Thị Tuyết Nhung",
    mssv: "225734030110493",
    role: "Thành viên"
  },
  {
    name: "Nguyễn Thị Cẩm Nhung",
    mssv: "225734030110491",
    role: "Thành viên"
  },
  {
    name: "Ngô Thị Thanh Nhàn",
    mssv: "225734030110485",
    role: "Thành viên"
  },
  {
    name: "Nguyễn Hoài Nam",
    mssv: "225734030110483",
    role: "Thành viên"
  },
  {
    name: "Lê Thị Mỹ",
    mssv: "225734030110479",
    role: "Thành viên"
  },
  {
    name: "Trần Ngọc Minh",
    mssv: "225734030110473",
    role: "Thành viên"
  },
  {
    name: "Nguyễn Văn Minh",
    mssv: "225734030110475",
    role: "Thành viên"
  }
];

export const presentationOutline = {
  part1: {
    title: "I. TỔNG QUAN DOANH NGHIỆP",
    items: [
      "Giới thiệu doanh nghiệp",
      "Sản phẩm và quy trình sản xuất",
      "Định mức sản xuất",
      "Vốn kinh doanh"
    ]
  },
  part2: {
    title: "II. TỔ CHỨC CÔNG TÁC KẾ TOÁN QUẢN TRỊ",
    items: [
      "Cấu trúc chi phí",
      "Giá thành sản phẩm",
      "Điểm hòa vốn",
      "Ra quyết định ngắn hạn",
      "Dự toán"
    ]
  }
};

export const companyOverview = {
  business: "Sản xuất và kinh doanh sản phẩm từ cao su",
  accountingRegime: "Thông tư 200/2014/TT-BTC",
  methods: {
    vatMethod: "Khấu trừ",
    inventoryAccounting: "Kê khai thường xuyên",
    inventoryValuation: "Nhập trước xuất trước (FIFO)",
    costingMethod: "Phương pháp tỷ lệ",
    depreciation: "Đường thẳng"
  }
};

export const products = [
  {
    id: 1,
    name: "Thảm cao su nhà tắm",
    size: "54x54cm",
    weight: "1kg"
  },
  {
    id: 2,
    name: "Thảm cao su nhà bếp",
    size: "162x54cm",
    weight: "3kg"
  }
];

export const productionProcess = [
  {
    step: 1,
    name: "Chuẩn bị nguyên liệu",
    description: "Thu thập và kiểm tra chất lượng cao su thô"
  },
  {
    step: 2,
    name: "Pha trộn",
    description: "Trộn cao su với các phụ gia theo công thức"
  },
  {
    step: 3,
    name: "Ép định hình",
    description: "Sử dụng khuôn ép để tạo hình sản phẩm"
  },
  {
    step: 4,
    name: "Xử lý bề mặt",
    description: "Tạo vân và hoàn thiện bề mặt"
  },
  {
    step: 5,
    name: "Cắt & kiểm tra",
    description: "Cắt theo kích thước và kiểm tra chất lượng"
  },
  {
    step: 6,
    name: "Đóng gói",
    description: "Đóng gói và gắn tem nhãn sản phẩm"
  }
];
