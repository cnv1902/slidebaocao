import type React from 'react';
import { Slide, Table } from '../components';
import { table2_7 } from '../data/tables';

const Slide18: React.FC = () => {
  return (
    <Slide className="cost-slide split-layout">
      <h2 className="slide-title">CHI PHÍ QUẢN LÝ DOANH NGHIỆP</h2>
      
      <div className="split-content">
        <div className="left-panel">
          <Table data={table2_7} />
        </div>
        
        <div className="right-panel">
          <div className="info-box">
            <h3>Bảng lương nhân viên QLDN</h3>
            <p className="note">Xem Hình 2.2 trong báo cáo chi tiết</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide18;
