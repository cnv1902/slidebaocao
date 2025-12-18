import type React from 'react';
import { Slide, Table } from '../components';
import { table2_5 } from '../data/tables';

const Slide16: React.FC = () => {
  return (
    <Slide className="cost-slide split-layout">
      <h2 className="slide-title">CHI PHÍ SẢN XUẤT CHUNG</h2>
      
      <div className="split-content">
        <div className="left-panel">
          <Table data={table2_5} />
        </div>
        
        <div className="right-panel">
          <div className="info-box">
            <h3>Bảng lương nhân viên sản xuất</h3>
            <p className="note">Xem Hình 2.1 trong báo cáo chi tiết</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide16;
