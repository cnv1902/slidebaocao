import type React from 'react';
import { Slide, Table } from '../components';
import { table2_8 } from '../data/tables';

const Slide19: React.FC = () => {
  return (
    <Slide className="summary-slide">
      <h2 className="slide-title">TỔNG HỢP BIẾN PHÍ VÀ ĐỊNH PHÍ</h2>
      
      <div className="summary-content">
        <Table data={table2_8} />
        
        <div className="summary-notes">
          <p className="note-item">
            <strong>Biến phí:</strong> Chi phí thay đổi theo sản lượng
          </p>
          <p className="note-item">
            <strong>Định phí:</strong> Chi phí cố định không đổi theo sản lượng
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default Slide19;
