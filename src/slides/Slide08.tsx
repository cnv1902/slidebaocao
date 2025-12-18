import type React from 'react';
import { Slide, Table } from '../components';
import { table1_5 } from '../data/tables';

const Slide08: React.FC = () => {
  return (
    <Slide className="detail-slide">
      <h2 className="slide-title">CHI TIẾT NGUYÊN VẬT LIỆU</h2>
      
      <div className="highlight-box">
        <div className="highlight-amount">
          <span className="label">Tổng Nguyên vật liệu:</span>
          <span className="amount">83.000.000 đ</span>
        </div>
      </div>
      
      <div className="detail-content">
        <Table data={table1_5} />
      </div>
    </Slide>
  );
};

export default Slide08;
