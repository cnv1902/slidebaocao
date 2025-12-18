import type { TableData } from '../components';

// Bảng 1.1: Định mức sản xuất
export const table1_1: TableData = {
  title: "Bảng 1.1: Định mức sản xuất",
  headers: ["Chỉ tiêu", "Thảm nhà tắm", "Thảm nhà bếp"],
  rows: [
    ["Chi phí NVL trực tiếp (đ)", "30.000", "60.000"],
    ["Chi phí nhân công trực tiếp (đ)", "5.000", "10.000"],
    ["Chi phí sản xuất chung (đ)", "10.000", "20.000"],
    ["Tổng giá thành định mức (đ)", "45.000", "90.000"]
  ]
};

// Bảng 1.2: Định mức bao bì & tem nhãn
export const table1_2: TableData = {
  title: "Bảng 1.2: Định mức bao bì & tem nhãn",
  headers: ["Khoản mục", "Thảm nhà tắm", "Thảm nhà bếp"],
  rows: [
    ["Bao bì (đ)", "2.000", "4.000"],
    ["Tem nhãn (đ)", "500", "1.000"],
    ["Tổng (đ)", "2.500", "5.000"]
  ]
};

// Bảng 1.3: Tổng giá thành định mức
export const table1_3: TableData = {
  title: "Bảng 1.3: Tổng giá thành định mức",
  headers: ["Sản phẩm", "Giá thành đơn vị (đ)"],
  rows: [
    ["Thảm cao su nhà tắm", "47.500"],
    ["Thảm cao su nhà bếp", "95.000"]
  ]
};

// Bảng 1.4: Bảng cân đối kế toán
export const table1_4: TableData = {
  title: "Bảng 1.4: Bảng cân đối kế toán tại ngày 31/08/2025",
  headers: ["TÀI SẢN", "Số tiền (đ)", "NGUỒN VỐN", "Số tiền (đ)"],
  rows: [
    ["A. TÀI SẢN NGẮN HẠN", "184.199.000", "A. NỢ PHẢI TRẢ", ""],
    ["I. Tiền và các khoản tương đương tiền", "", "B. VỐN CHỦ SỞ HỮU", "7.592.076.000"],
    ["II. Các khoản đầu tư tài chính ngắn hạn", "", "I. Vốn chủ sở hữu", "7.592.076.000"],
    ["III. Các khoản phải thu ngắn hạn", "", "- Vốn góp", "7.592.076.000"],
    ["IV. Hàng tồn kho", "154.400.000", "", ""],
    ["- Nguyên vật liệu", "83.000.000", "", ""],
    ["- Công cụ dụng cụ", "71.400.000", "", ""],
    ["V. Tài sản ngắn hạn khác", "29.799.000", "", ""],
    ["- Chi phí trả trước ngắn hạn", "29.799.000", "", ""],
    ["B. TÀI SẢN DÀI HẠN", "7.407.877.000", "", ""],
    ["I. Tài sản cố định", "7.225.390.000", "", ""],
    ["II. Bất động sản đầu tư", "", "", ""],
    ["III. Các khoản đầu tư tài chính dài hạn", "", "", ""],
    ["IV. Tài sản dài hạn khác", "167.487.000", "", ""],
    ["- Chi phí trả trước dài hạn", "167.487.000", "", ""],
    ["TỔNG CỘNG", "7.592.076.000", "TỔNG CỘNG", "7.592.076.000"]
  ]
};

// Bảng 1.5: Chi tiết Nguyên vật liệu
export const table1_5: TableData = {
  title: "Bảng 1.5: Chi tiết Nguyên vật liệu",
  headers: ["Loại NVL", "Đơn vị tính", "Số lượng", "Đơn giá (đ)", "Thành tiền (đ)"],
  rows: [
    ["Cao su thô", "kg", "2.000", "25.000", "50.000.000"],
    ["Phụ gia hóa học", "kg", "300", "50.000", "15.000.000"],
    ["Chất màu", "kg", "200", "90.000", "18.000.000"],
    ["", "", "", "Tổng cộng:", "83.000.000"]
  ]
};

// Bảng 1.6: Chi tiết Công cụ dụng cụs
export const table1_6: TableData = {
  title: "Bảng 1.6: Chi tiết Công cụ dụng cụ",
  headers: ["Tên CCDC", "Số lượng", "Đơn giá (đ)", "Thành tiền (đ)"],
  rows: [
    ["Khuôn ép nhỏ", "20", "1.500.000", "30.000.000"],
    ["Khuôn ép lớn", "10", "2.000.000", "20.000.000"],
    ["Dao cắt", "50", "100.000", "5.000.000"],
    ["Thước đo", "30", "50.000", "1.500.000"],
    ["Găng tay bảo hộ", "100", "30.000", "3.000.000"],
    ["Khẩu trang", "200", "5.000", "1.000.000"],
    ["Kính bảo hộ", "50", "80.000", "4.000.000"],
    ["Bàn làm việc", "10", "500.000", "5.000.000"],
    ["Giá kệ", "5", "400.000", "2.000.000"],
    ["Xe đẩy", "3", "1.000.000", "3.000.000"],
    ["Thùng chứa", "20", "150.000", "3.000.000"],
    ["", "", "Tổng cộng:", "71.400.000"]
  ]
};

// Bảng 1.7: Chi phí trả trước ngắn hạn
export const table1_7: TableData = {
  title: "Bảng 1.7: Chi phí trả trước ngắn hạn",
  headers: ["Khoản mục", "QLDN (đ)", "Bán hàng (đ)", "Sản xuất (đ)", "Tổng (đ)"],
  rows: [
    ["Bảo hiểm tài sản", "2.000.000", "1.500.000", "5.000.000", "8.500.000"],
    ["Công cụ dụng cụ", "3.000.000", "2.500.000", "10.000.000", "15.500.000"],
    ["Vật liệu văn phòng", "2.000.000", "1.500.000", "2.299.000", "5.799.000"],
    ["Tổng cộng", "7.000.000", "5.500.000", "17.299.000", "29.799.000"]
  ]
};

// Bảng 1.8: Chi phí trả trước dài hạn
export const table1_8: TableData = {
  title: "Bảng 1.8: Chi phí trả trước dài hạn",
  headers: ["Khoản mục", "QLDN (đ)", "Bán hàng (đ)", "Sản xuất (đ)", "Tổng (đ)"],
  rows: [
    ["Phần mềm kế toán", "30.000.000", "-", "-", "30.000.000"],
    ["Phần mềm quản lý bán hàng", "-", "25.000.000", "-", "25.000.000"],
    ["Hệ thống giám sát sản xuất", "-", "-", "112.487.000", "112.487.000"],
    ["Tổng cộng", "30.000.000", "25.000.000", "112.487.000", "167.487.000"]
  ]
};

// Bảng 1.9: Tài sản cố định
export const table1_9: TableData = {
  title: "Bảng 1.9: Tài sản cố định",
  headers: ["Loại TSCĐ", "Nguyên giá (đ)", "Giá trị còn lại (đ)"],
  rows: [
    ["I. TSCĐ vô hình", "150.000.000", "120.000.000"],
    ["- Bằng sáng chế", "150.000.000", "120.000.000"],
    ["II. TSCĐ hữu hình", "8.850.000.000", "7.105.390.000"],
    ["1. QLDN", "500.000.000", "400.000.000"],
    ["- Máy tính", "300.000.000", "240.000.000"],
    ["- Bàn ghế văn phòng", "200.000.000", "160.000.000"],
    ["2. Bán hàng", "350.000.000", "280.000.000"],
    ["- Xe vận chuyển", "250.000.000", "200.000.000"],
    ["- Thiết bị trưng bày", "100.000.000", "80.000.000"],
    ["3. Sản xuất", "8.000.000.000", "6.425.390.000"],
    ["- Nhà xưởng", "5.000.000.000", "4.000.000.000"],
    ["- Máy trộn cao su", "1.500.000.000", "1.200.000.000"],
    ["- Máy ép thủy lực", "1.000.000.000", "800.000.000"],
    ["- Hệ thống xử lý bề mặt", "500.000.000", "425.390.000"],
    ["Tổng TSCĐ", "9.000.000.000", "7.225.390.000"]
  ]
};

// Bảng 2.1: Chi phí NVL trực tiếp - Chi tiết
export const table2_1: TableData = {
  title: "Bảng 2.1: Chi tiết NVL cho 2 sản phẩm",
  headers: ["Loại NVL", "ĐVT", "Thảm nhà tắm", "Thảm nhà bếp", "Tổng"],
  rows: [
    ["Cao su thô", "kg", "200.000.000", "300.000.000", "500.000.000"],
    ["Phụ gia hóa học", "kg", "60.000.000", "90.000.000", "150.000.000"],
    ["Chất màu", "kg", "40.000.000", "60.000.000", "100.000.000"],
    ["Tổng cộng", "", "300.000.000", "450.000.000", "750.000.000"]
  ]
};

// Bảng 2.2: Bao bì & tem nhãn
export const table2_2: TableData = {
  title: "Bảng 2.2: Bao bì & tem nhãn",
  headers: ["Khoản mục", "Thảm nhà tắm", "Thảm nhà bếp", "Tổng"],
  rows: [
    ["Bao bì", "16.000.000", "20.000.000", "36.000.000"],
    ["Tem nhãn", "4.000.000", "5.000.000", "9.000.000"],
    ["Tổng cộng", "20.000.000", "25.000.000", "45.000.000"]
  ]
};

// Bảng 2.3: Tổng hợp chi phí NVL trực tiếp
export const table2_3: TableData = {
  title: "Bảng 2.3: Tổng hợp chi phí NVL trực tiếp",
  headers: ["Khoản mục", "Thảm nhà tắm", "Thảm nhà bếp", "Tổng cộng"],
  rows: [
    ["Chi phí NVL", "300.000.000", "450.000.000", "750.000.000"],
    ["Bao bì & tem nhãn", "20.000.000", "25.000.000", "45.000.000"],
    ["Tổng cộng", "320.000.000", "475.000.000", "795.000.000"]
  ]
};

// Bảng 2.4: Chi phí nhân công trực tiếp
export const table2_4: TableData = {
  title: "Bảng 2.4: Chi phí nhân công trực tiếp",
  headers: ["Khoản mục", "Thảm nhà tắm", "Thảm nhà bếp", "Tổng cộng"],
  rows: [
    ["Lương cơ bản", "28.000.000", "32.000.000", "60.000.000"],
    ["Phụ cấp", "5.600.000", "6.400.000", "12.000.000"],
    ["BHXH (17,5%)", "5.880.000", "6.720.000", "12.600.000"],
    ["Tổng cộng", "39.480.000", "45.120.000", "84.600.000"]
  ]
};

// Bảng 2.5: Chi phí sản xuất chung
export const table2_5: TableData = {
  title: "Bảng 2.5: Chi phí sản xuất chung",
  headers: ["Khoản mục", "Thảm nhà tắm", "Thảm nhà bếp", "Tổng cộng"],
  rows: [
    ["Lương nhân viên gián tiếp", "15.000.000", "20.000.000", "35.000.000"],
    ["BHXH (17,5%)", "2.625.000", "3.500.000", "6.125.000"],
    ["Khấu hao TSCĐ", "30.000.000", "40.000.000", "70.000.000"],
    ["Điện nước", "8.000.000", "12.000.000", "20.000.000"],
    ["Vật liệu phụ", "5.000.000", "8.000.000", "13.000.000"],
    ["Công cụ dụng cụ", "3.000.000", "5.000.000", "8.000.000"],
    ["Chi phí khác", "2.000.000", "3.062.000", "5.062.000"],
    ["Tổng cộng", "65.625.000", "91.562.000", "157.187.000"]
  ]
};

// Bảng 2.6: Chi phí bán hàng
export const table2_6: TableData = {
  title: "Bảng 2.6: Chi phí bán hàng",
  headers: ["Khoản mục", "Số tiền (đ)"],
  rows: [
    ["Lương nhân viên bán hàng", "40.000.000"],
    ["BHXH (17,5%)", "7.000.000"],
    ["Khấu hao TSCĐ", "5.833.333"],
    ["Vận chuyển", "15.000.000"],
    ["Quảng cáo", "10.000.000"],
    ["Chi phí khác", "2.166.667"],
    ["Tổng cộng", "80.000.000"]
  ]
};

// Bảng 2.7: Chi phí quản lý doanh nghiệp
export const table2_7: TableData = {
  title: "Bảng 2.7: Chi phí quản lý doanh nghiệp",
  headers: ["Khoản mục", "Số tiền (đ)"],
  rows: [
    ["Lương nhân viên QLDN", "50.000.000"],
    ["BHXH (17,5%)", "8.750.000"],
    ["Khấu hao TSCĐ", "3.333.333"],
    ["Văn phòng phẩm", "3.000.000"],
    ["Điện thoại, internet", "2.000.000"],
    ["Chi phí khác", "2.916.667"],
    ["Tổng cộng", "70.000.000"]
  ]
};

// Bảng 2.8: Tổng hợp Biến phí và Định phí
export const table2_8: TableData = {
  title: "Bảng 2.8: Phân loại Biến phí và Định phí",
  headers: ["Khoản mục", "Biến phí (đ)", "Định phí (đ)", "Tổng cộng (đ)"],
  rows: [
    ["Chi phí NVL trực tiếp", "795.000.000", "-", "795.000.000"],
    ["Chi phí nhân công trực tiếp", "84.600.000", "-", "84.600.000"],
    ["Chi phí sản xuất chung", "46.000.000", "111.187.000", "157.187.000"],
    ["Chi phí bán hàng", "25.000.000", "55.000.000", "80.000.000"],
    ["Chi phí QLDN", "-", "70.000.000", "70.000.000"],
    ["Tổng cộng", "950.600.000", "236.187.000", "1.186.787.000"]
  ]
};
