import type React from 'react';
import { Slide, Table } from '../components';
import { table1_9 } from '../data/tables';

const Slide12: React.FC = () => {
  return (
    <Slide className="detail-slide">
      <h2 className="slide-title">TÀI SẢN CỐ ĐỊNH</h2>
      
      <div className="highlight-box">
        <div className="highlight-amount">
          <span className="label">Tổng Tài sản cố định (giá trị còn lại):</span>
          <span className="amount">7.225.390.000 đ</span>
        </div>
      </div>
      
      <div className="detail-content">
        <Table data={table1_9} />
      </div>
    </Slide>
  );
};

export default Slide12;
