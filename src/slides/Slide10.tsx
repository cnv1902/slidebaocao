import type React from 'react';
import { Slide, Table } from '../components';
import { table1_7 } from '../data/tables';

const Slide10: React.FC = () => {
  return (
    <Slide className="detail-slide">
      <h2 className="slide-title">CHI PHÍ TRẢ TRƯỚC NGẮN HẠN</h2>
      
      <div className="highlight-box">
        <div className="highlight-amount">
          <span className="label">Tổng Chi phí trả trước ngắn hạn:</span>
          <span className="amount">29.799.000 đ</span>
        </div>
      </div>
      
      <div className="detail-content">
        <Table data={table1_7} />
      </div>
    </Slide>
  );
};

export default Slide10;
