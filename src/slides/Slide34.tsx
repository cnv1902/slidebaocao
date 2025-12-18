import type React from 'react';
import { Slide, Table } from '../components';
import { cashFlowBudget } from '../data/budget-q4';

const Slide34: React.FC = () => {
  return (
    <Slide className="cashflow-budget-slide">
      <h2 className="slide-title">DỰ TOÁN DÒNG TIỀN QUÝ IV/2025</h2>
      <div className="budget-table-container">
        <Table data={cashFlowBudget} />
        <div className="cashflow-summary">
          <h4>Tóm tắt dòng tiền</h4>
          <p>Số dư tiền tăng từ <strong>1.255 triệu đ</strong> (30/9) lên <strong>7.693 triệu đ</strong> (31/12)</p>
          <p className="positive">Dòng tiền hoạt động kinh doanh dương qua 3 tháng</p>
        </div>
      </div>
    </Slide>
  );
};

export default Slide34;
