import type { TableData } from '../components';

// Giả định dự toán
export const budgetAssumptions = {
  prices: {
    nhaTam: 200000, // chưa VAT
    nhaBep: 300000
  },
  policies: {
    salesPolicy: "Bán thu hết trong kỳ",
    finishedGoodsInventory: "20% nhu cầu tháng sau",
    materialsInventory: "10% nhu cầu tháng sau",
    paymentToSuppliers: "Thanh toán hết trong kỳ"
  },
  forecast: {
    jan2026: {
      nhaTam: 8000,
      nhaBep: 8000
    }
  }
};

// Dự toán doanh thu Quý IV
export const revenueBudget_Q4: TableData = {
  title: "Dự toán doanh thu Quý IV/2025",
  headers: ["Sản phẩm", "Tháng 10", "Tháng 11", "Tháng 12", "Tổng Quý IV"],
  rows: [
    ["Thảm nhà tắm", "", "", "", ""],
    ["- Số lượng (cái)", "7.000", "7.500", "8.000", "22.500"],
    ["- Đơn giá (đ)", "200.000", "200.000", "200.000", "200.000"],
    ["- Doanh thu (đ)", "1.400.000.000", "1.500.000.000", "1.600.000.000", "4.500.000.000"],
    ["", "", "", "", ""],
    ["Thảm nhà bếp", "", "", "", ""],
    ["- Số lượng (cái)", "6.000", "6.500", "7.000", "19.500"],
    ["- Đơn giá (đ)", "300.000", "300.000", "300.000", "300.000"],
    ["- Doanh thu (đ)", "1.800.000.000", "1.950.000.000", "2.100.000.000", "5.850.000.000"],
    ["", "", "", "", ""],
    ["Tổng doanh thu (đ)", "3.200.000.000", "3.450.000.000", "3.700.000.000", "10.350.000.000"]
  ]
};

// Dự toán sản xuất
export const productionBudget_Q4: TableData = {
  title: "Dự toán sản xuất Quý IV/2025",
  headers: ["Chỉ tiêu", "Tháng 10", "Tháng 11", "Tháng 12", "Tổng"],
  rows: [
    ["THẢM NHÀ TẮM", "", "", "", ""],
    ["Nhu cầu tiêu thụ", "7.000", "7.500", "8.000", "22.500"],
    ["Tồn kho TP cuối kỳ", "1.500", "1.600", "1.600", "1.600"],
    ["Tổng nhu cầu", "8.500", "9.100", "9.600", "24.100"],
    ["Tồn kho TP đầu kỳ", "400", "1.500", "1.600", "400"],
    ["Sản lượng cần SX", "8.100", "7.600", "8.000", "23.700"],
    ["", "", "", "", ""],
    ["THẢM NHÀ BẾP", "", "", "", ""],
    ["Nhu cầu tiêu thụ", "6.000", "6.500", "7.000", "19.500"],
    ["Tồn kho TP cuối kỳ", "1.300", "1.400", "1.600", "1.600"],
    ["Tổng nhu cầu", "7.300", "7.900", "8.600", "21.100"],
    ["Tồn kho TP đầu kỳ", "300", "1.300", "1.400", "300"],
    ["Sản lượng cần SX", "7.000", "6.600", "7.200", "20.800"]
  ]
};

// Dự toán chi phí NVL
export const materialsCostBudget: TableData = {
  title: "Dự toán chi phí NVL trực tiếp Quý IV",
  headers: ["Loại NVL", "Tháng 10", "Tháng 11", "Tháng 12", "Tổng"],
  rows: [
    ["Cao su thô (kg)", "550.000.000", "520.000.000", "570.000.000", "1.640.000.000"],
    ["Phụ gia hóa học (kg)", "165.000.000", "156.000.000", "171.000.000", "492.000.000"],
    ["Chất màu (kg)", "110.000.000", "104.000.000", "114.000.000", "328.000.000"],
    ["Bao bì & tem nhãn", "50.000.000", "48.000.000", "52.000.000", "150.000.000"],
    ["Tổng cộng", "875.000.000", "828.000.000", "907.000.000", "2.610.000.000"]
  ]
};

// Dự toán chi phí sản xuất
export const productionCostBudget: TableData = {
  title: "Dự toán chi phí sản xuất Quý IV",
  headers: ["Khoản mục", "Tháng 10", "Tháng 11", "Tháng 12", "Tổng"],
  rows: [
    ["Chi phí NVL trực tiếp", "875.000.000", "828.000.000", "907.000.000", "2.610.000.000"],
    ["Chi phí nhân công TT", "92.000.000", "87.000.000", "95.000.000", "274.000.000"],
    ["Chi phí sản xuất chung", "172.000.000", "163.000.000", "178.000.000", "513.000.000"],
    ["Tổng chi phí SX", "1.139.000.000", "1.078.000.000", "1.180.000.000", "3.397.000.000"]
  ]
};

// Dự toán KQKD Quý IV
export const incomeStatement_Q4: TableData = {
  title: "Dự toán Kết quả kinh doanh Quý IV/2025",
  headers: ["Chỉ tiêu", "Tháng 10", "Tháng 11", "Tháng 12", "Tổng Quý IV"],
  rows: [
    ["Doanh thu bán hàng", "3.200.000.000", "3.450.000.000", "3.700.000.000", "10.350.000.000"],
    ["Giá vốn hàng bán", "1.139.000.000", "1.078.000.000", "1.180.000.000", "3.397.000.000"],
    ["Lợi nhuận gộp", "2.061.000.000", "2.372.000.000", "2.520.000.000", "6.953.000.000"],
    ["Chi phí bán hàng", "85.000.000", "85.000.000", "85.000.000", "255.000.000"],
    ["Chi phí QLDN", "75.000.000", "75.000.000", "75.000.000", "225.000.000"],
    ["Lợi nhuận trước thuế", "1.901.000.000", "2.212.000.000", "2.360.000.000", "6.473.000.000"],
    ["Thuế TNDN (20%)", "380.200.000", "442.400.000", "472.000.000", "1.294.600.000"],
    ["Lợi nhuận sau thuế", "1.520.800.000", "1.769.600.000", "1.888.000.000", "5.178.400.000"]
  ]
};

// Dự toán dòng tiền
export const cashFlowBudget: TableData = {
  title: "Dự toán dòng tiền Quý IV/2025",
  headers: ["Chỉ tiêu", "Tháng 10", "Tháng 11", "Tháng 12"],
  rows: [
    ["I. Dòng tiền từ HĐKD", "", "", ""],
    ["Thu từ khách hàng", "3.520.000.000", "3.795.000.000", "4.070.000.000"],
    ["Chi trả cho NCC", "-875.000.000", "-828.000.000", "-907.000.000"],
    ["Chi trả lương", "-92.000.000", "-87.000.000", "-95.000.000"],
    ["Chi phí khác", "-257.000.000", "-248.000.000", "-263.000.000"],
    ["Thuế", "-380.200.000", "-442.400.000", "-472.000.000"],
    ["Dòng tiền thuần HĐKD", "1.915.800.000", "2.189.600.000", "2.333.000.000"],
    ["", "", "", ""],
    ["II. Dòng tiền đầu tư", "0", "0", "0"],
    ["III. Dòng tiền tài chính", "0", "0", "0"],
    ["", "", "", ""],
    ["Tiền đầu kỳ", "1.254.570.400", "3.170.370.400", "5.359.970.400"],
    ["Tiền cuối kỳ", "3.170.370.400", "5.359.970.400", "7.692.970.400"]
  ]
};

// CĐKT tháng 10, 11, 12
export const balanceSheet_Oct: TableData = {
  title: "Bảng cân đối kế toán 31/10/2025",
  headers: ["TÀI SẢN", "Số tiền (đ)", "NGUỒN VỐN", "Số tiền (đ)"],
  rows: [
    ["A. TÀI SẢN NGẮN HẠN", "3.554.569.400", "A. NỢ PHẢI TRẢ", "150.000.000"],
    ["- Tiền", "3.170.370.400", "- Phải trả NCC", "150.000.000"],
    ["- Hàng tồn kho", "384.199.000", "", ""],
    ["B. TÀI SẢN DÀI HẠN", "7.405.972.000", "B. VỐN CHỦ SỞ HỮU", "10.810.541.400"],
    ["- TSCĐ (còn lại)", "7.205.890.000", "- Vốn góp", "7.592.076.000"],
    ["- Chi phí trả trước", "200.082.000", "- LNST chưa PP", "3.218.465.400"],
    ["TỔNG CỘNG", "10.960.541.400", "TỔNG CỘNG", "10.960.541.400"]
  ]
};

export const balanceSheet_Nov: TableData = {
  title: "Bảng cân đối kế toán 30/11/2025",
  headers: ["TÀI SẢN", "Số tiền (đ)", "NGUỒN VỐN", "Số tiền (đ)"],
  rows: [
    ["A. TÀI SẢN NGẮN HẠN", "5.744.169.400", "", ""],
    ["- Tiền", "5.359.970.400", "A. NỢ PHẢI TRẢ", "100.000.000"],
    ["- Hàng tồn kho", "384.199.000", "", ""],
    ["B. TÀI SẢN DÀI HẠN", "7.386.472.000", "B. VỐN CHỦ SỞ HỮU", "13.030.641.400"],
    ["- TSCĐ (còn lại)", "7.186.390.000", "- Vốn góp", "7.592.076.000"],
    ["- Chi phí trả trước", "200.082.000", "- LNST chưa PP", "5.438.565.400"],
    ["TỔNG CỘNG", "13.130.641.400", "TỔNG CỘNG", "13.130.641.400"]
  ]
};

export const balanceSheet_Dec: TableData = {
  title: "Bảng cân đối kế toán 31/12/2025",
  headers: ["TÀI SẢN", "Số tiền (đ)", "NGUỒN VỐN", "Số tiền (đ)"],
  rows: [
    ["A. TÀI SẢN NGẮN HẠN", "8.077.169.400", "", ""],
    ["- Tiền", "7.692.970.400", "A. NỢ PHẢI TRẢ", "50.000.000"],
    ["- Hàng tồn kho", "384.199.000", "", ""],
    ["B. TÀI SẢN DÀI HẠN", "7.366.972.000", "B. VỐN CHỦ SỞ HỮU", "15.394.141.400"],
    ["- TSCĐ (còn lại)", "7.166.890.000", "- Vốn góp", "7.592.076.000"],
    ["- Chi phí trả trước", "200.082.000", "- LNST chưa PP", "7.802.065.400"],
    ["TỔNG CỘNG", "15.444.141.400", "TỔNG CỘNG", "15.444.141.400"]
  ]
};
