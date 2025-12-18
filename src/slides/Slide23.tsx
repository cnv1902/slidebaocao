import type React from 'react';
import { Slide, Table } from '../components';
import { incomeStatement_Sep } from '../data/september-data';

const Slide23: React.FC = () => {
  return (
    <Slide className="income-statement-slide">
      <h2 className="slide-title">BÁO CÁO KẾT QUẢ KINH DOANH THÁNG 9/2025</h2>
      
      <div className="income-content">
        <div className="income-table">
          <Table data={incomeStatement_Sep} />
        </div>
        
        <div className="key-metrics">
          <h3>Các chỉ số quan trọng</h3>
          <div className="metrics-grid">
            <div className="metric-card revenue">
              <span className="metric-label">Doanh thu</span>
              <span className="metric-value">2.400 triệu đ</span>
            </div>
            <div className="metric-card gross-profit">
              <span className="metric-label">Lợi nhuận gộp</span>
              <span className="metric-value">1.718 triệu đ</span>
              <span className="metric-percent">71,6%</span>
            </div>
            <div className="metric-card net-profit">
              <span className="metric-label">Lợi nhuận sau thuế</span>
              <span className="metric-value">1.255 triệu đ</span>
              <span className="metric-percent">52,3%</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide23;
