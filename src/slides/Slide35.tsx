import type React from 'react';
import { Slide, Table } from '../components';
import { balanceSheet_Oct } from '../data/budget-q4';

const Slide35: React.FC = () => {
  return (
    <Slide className="balance-budget-slide">
      <h2 className="slide-title">BẢNG CÂN ĐỐI KẾ TOÁN DỰ KIẾN 31/10/2025</h2>
      <div className="budget-table-container">
        <Table data={balanceSheet_Oct} />
      </div>
    </Slide>
  );
};

export default Slide35;
