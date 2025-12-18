import type React from 'react';
import { Slide, Table } from '../components';
import { table1_4 } from '../data/tables';

const Slide07: React.FC = () => {
  return (
    <Slide className="balance-sheet-slide">
      <h2 className="slide-title">BẢNG CÂN ĐỐI KẾ TOÁN 31/08/2025</h2>
      
      <div className="balance-sheet-content">
        <Table data={table1_4} />
      </div>
      
      <div className="highlight-note">
        <p>* Các mục được phân tích chi tiết ở các slide tiếp theo</p>
      </div>
    </Slide>
  );
};

export default Slide07;
