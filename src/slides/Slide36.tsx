import type React from 'react';
import { Slide, Table } from '../components';
import { balanceSheet_Nov } from '../data/budget-q4';

const Slide36: React.FC = () => {
  return (
    <Slide className="balance-budget-slide">
      <h2 className="slide-title">BẢNG CÂN ĐỐI KẾ TOÁN DỰ KIẾN 30/11/2025</h2>
      <div className="budget-table-container">
        <Table data={balanceSheet_Nov} />
      </div>
    </Slide>
  );
};

export default Slide36;
