import type { TableData } from '../components';

// Bảng 2.9: Thẻ tính giá thành thảm nhà tắm
export const costCard_NhaTam: TableData = {
  title: "Thẻ tính giá thành - Thảm cao su nhà tắm",
  headers: ["Khoản mục", "Định mức", "Tỷ lệ", "Thực tế"],
  rows: [
    ["Chi phí NVL trực tiếp", "240.000.000", "95,78%", "229.872.000"],
    ["Chi phí nhân công trực tiếp", "40.000.000", "95,78%", "38.312.000"],
    ["Chi phí sản xuất chung", "100.000.000", "95,78%", "95.780.000"],
    ["Tổng chi phí sản xuất", "380.000.000", "", "363.964.000"],
    ["Bao bì & tem nhãn", "20.000.000", "", "20.000.000"],
    ["Tổng giá thành", "400.000.000", "", "383.964.000"],
    ["Số lượng sản xuất", "8.000", "", "8.000"],
    ["Giá thành đơn vị", "50.000", "", "47.996"],
    ["", "", "", ""]
  ]
};

// Bảng 2.10: Thẻ tính giá thành thảm nhà bếp
export const costCard_NhaBep: TableData = {
  title: "Thẻ tính giá thành - Thảm cao su nhà bếp",
  headers: ["Khoản mục", "Định mức", "Tỷ lệ", "Thực tế"],
  rows: [
    ["Chi phí NVL trực tiếp", "360.000.000", "95,78%", "344.808.000"],
    ["Chi phí nhân công trực tiếp", "60.000.000", "95,78%", "57.468.000"],
    ["Chi phí sản xuất chung", "150.000.000", "95,78%", "143.670.000"],
    ["Tổng chi phí sản xuất", "570.000.000", "", "545.946.000"],
    ["Bao bì & tem nhãn", "30.000.000", "", "30.000.000"],
    ["Tổng giá thành", "600.000.000", "", "575.946.000"],
    ["Số lượng sản xuất", "5.000", "", "5.000"],
    ["Giá thành đơn vị", "120.000", "", "115.189"],
    ["", "", "", ""]
  ]
};

// Bảng 2.15: Báo cáo Thuế
export const taxReport: TableData = {
  title: "Bảng 2.15: Báo cáo Thuế GTGT tháng 9/2025",
  headers: ["Chỉ tiêu", "Số tiền (đ)"],
  rows: [
    ["I. Thuế GTGT đầu ra", "240.000.000"],
    ["- Doanh thu chịu thuế GTGT 10%", "2.400.000.000"],
    ["", ""],
    ["II. Thuế GTGT đầu vào được khấu trừ", "22.405.000"],
    ["- Thuế GTGT của NVL", "19.640.000"],
    ["- Thuế GTGT của CCDC", "840.000"],
    ["- Thuế GTGT của điện, nước", "1.925.000"],
    ["", ""],
    ["III. Thuế GTGT còn phải nộp (I - II)", "217.595.000"]
  ]
};

// Bảng 2.17: Báo cáo kết quả kinh doanh tháng 9/2025
export const incomeStatement_Sep: TableData = {
  title: "Bảng 2.17: Báo cáo kết quả kinh doanh tháng 9/2025",
  headers: ["Chỉ tiêu", "Số tiền (đ)"],
  rows: [
    ["1. Doanh thu bán hàng", "2.400.000.000"],
    ["- Thảm cao su nhà tắm (6.000 × 200.000)", "1.200.000.000"],
    ["- Thảm cao su nhà bếp (4.000 × 300.000)", "1.200.000.000"],
    ["", ""],
    ["2. Giá vốn hàng bán", "681.787.000"],
    ["- Thảm cao su nhà tắm (6.000 × 40.075)", "240.450.000"],
    ["- Thảm cao su nhà bếp (4.000 × 72.238)", "288.952.000"],
    ["- Chi phí bán hàng phân bổ", "80.000.000"],
    ["- Chi phí QLDN phân bổ", "72.385.000"],
    ["", ""],
    ["3. Lợi nhuận gộp (1 - 2)", "1.718.213.000"],
    ["", ""],
    ["4. Chi phí bán hàng", "80.000.000"],
    ["5. Chi phí quản lý doanh nghiệp", "70.000.000"],
    ["", ""],
    ["6. Lợi nhuận thuần từ HĐKD", "1.568.213.000"],
    ["", ""],
    ["7. Chi phí thuế TNDN (20%)", "313.642.600"],
    ["", ""],
    ["8. Lợi nhuận sau thuế", "1.254.570.400"]
  ]
};

// Bảng 2.19: Bảng cân đối kế toán 30/09/2025
export const balanceSheet_Sep30: TableData = {
  title: "Bảng 2.19: Bảng cân đối kế toán tại ngày 30/09/2025",
  headers: ["TÀI SẢN", "Số tiền (đ)", "NGUỒN VỐN", "Số tiền (đ)"],
  rows: [
    ["A. TÀI SẢN NGẮN HẠN", "1.638.769.400", "A. NỢ PHẢI TRẢ", "217.595.000"],
    ["I. Tiền và tương đương tiền", "1.254.570.400", "- Thuế GTGT phải nộp", "217.595.000"],
    ["II. Hàng tồn kho", "384.199.000", "", ""],
    ["- Nguyên vật liệu", "83.000.000", "B. VỐN CHỦ SỞ HỮU", "8.846.646.400"],
    ["- Công cụ dụng cụ", "71.400.000", "I. Vốn góp", "7.592.076.000"],
    ["- Thành phẩm tồn kho", "229.799.000", "II. LNST chưa phân phối", "1.254.570.400"],
    ["III. Chi phí trả trước ngắn hạn", "0", "", ""],
    ["", "", "", ""],
    ["B. TÀI SẢN DÀI HẠN", "7.425.472.000", "", ""],
    ["I. Tài sản cố định", "7.225.390.000", "", ""],
    ["- Nguyên giá", "9.000.000.000", "", ""],
    ["- Khấu hao lũy kế", "-1.774.610.000", "", ""],
    ["II. Chi phí trả trước dài hạn", "200.082.000", "", ""],
    ["", "", "", ""],
    ["TỔNG CỘNG", "9.064.241.400", "TỔNG CỘNG", "9.064.241.400"]
  ]
};

// Data cho phân tích BEP
export const bepAnalysis = {
  products: [
    {
      name: "Thảm cao su nhà tắm",
      quantity: 6000,
      revenue: 1200000000,
      price: 200000,
      variableCost: 40075,
      contributionMargin: 159925,
      contributionMarginRatio: 0.7996
    },
    {
      name: "Thảm cao su nhà bếp",
      quantity: 4000,
      revenue: 1200000000,
      price: 300000,
      variableCost: 72238,
      contributionMarginRatio: 0.7592
    }
  ],
  totalRevenue: 2400000000,
  totalVariableCost: 950600000,
  totalFixedCost: 236187000,
  weightedCM: 0.839,
  bepRevenue: 574490464,
  bepDays: 7,
  safetyMargin: 1825509536,
  safetyMarginPercent: 317
};

// Data cho quyết định ngắn hạn
export const shortTermDecision = {
  order: {
    customer: "Mường Thanh Hospitality",
    product: "Thảm cao su nhà tắm",
    quantity: 1000,
    priceOffered: 30000,
    totalRevenue: 30000000
  },
  analysis: {
    variableCostPerUnit: 16790,
    totalVariableCost: 16790000,
    incrementalProfit: 13210000,
    decision: "CHẤP NHẬN",
    reason: "Lợi nhuận tăng thêm 13.210.000 đ khi có công suất dư"
  }
};
