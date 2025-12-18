import type React from 'react';
import { Slide, Table } from '../components';
import { table1_8 } from '../data/tables';

const Slide11: React.FC = () => {
  return (
    <Slide className="detail-slide">
      <h2 className="slide-title">CHI PHÍ TRẢ TRƯỚC DÀI HẠN</h2>
      
      <div className="highlight-box">
        <div className="highlight-amount">
          <span className="label">Tổng Chi phí trả trước dài hạn:</span>
          <span className="amount">167.487.000 đ</span>
        </div>
      </div>
      
      <div className="detail-content">
        <Table data={table1_8} />
      </div>
    </Slide>
  );
};

export default Slide11;
