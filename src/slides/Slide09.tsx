import type React from 'react';
import { Slide, Table } from '../components';
import { table1_6 } from '../data/tables';

const Slide09: React.FC = () => {
  return (
    <Slide className="detail-slide">
      <h2 className="slide-title">CHI TIẾT CÔNG CỤ DỤNG CỤ</h2>
      
      <div className="highlight-box">
        <div className="highlight-amount">
          <span className="label">Tổng Công cụ dụng cụ:</span>
          <span className="amount">71.400.000 đ</span>
        </div>
      </div>
      
      <div className="detail-content">
        <Table data={table1_6} />
      </div>
    </Slide>
  );
};

export default Slide09;
