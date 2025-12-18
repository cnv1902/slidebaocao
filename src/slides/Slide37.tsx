import type React from 'react';
import { Slide, Table } from '../components';
import { balanceSheet_Dec } from '../data/budget-q4';

const Slide37: React.FC = () => {
  return (
    <Slide className="balance-budget-slide">
      <h2 className="slide-title">BẢNG CÂN ĐỐI KẾ TOÁN DỰ KIẾN 31/12/2025</h2>
      <div className="budget-table-container">
        <Table data={balanceSheet_Dec} />
        <div className="year-end-summary">
          <h4>Kết thúc năm 2025</h4>
          <div className="summary-metrics">
            <div className="metric">
              <span>Tổng tài sản:</span>
              <strong>15.444 triệu đ</strong>
            </div>
            <div className="metric success">
              <span>LNST tích lũy:</span>
              <strong>7.802 triệu đ</strong>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide37;
