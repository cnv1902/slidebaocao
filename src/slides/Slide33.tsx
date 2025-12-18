import type React from 'react';
import { Slide, Table } from '../components';
import { incomeStatement_Q4 } from '../data/budget-q4';

const Slide33: React.FC = () => {
  return (
    <Slide className="income-budget-slide">
      <h2 className="slide-title">DỰ TOÁN KẾT QUẢ KINH DOANH QUÝ IV/2025</h2>
      <div className="budget-table-container">
        <Table data={incomeStatement_Q4} />
        <div className="key-highlights">
          <div className="highlight-item">
            <span>Tổng doanh thu Quý IV:</span>
            <strong>10.350.000.000 đ</strong>
          </div>
          <div className="highlight-item success">
            <span>Lợi nhuận sau thuế:</span>
            <strong>5.178.400.000 đ</strong>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide33;
