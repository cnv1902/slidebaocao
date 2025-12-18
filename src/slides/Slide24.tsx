import type React from 'react';
import { Slide, Table } from '../components';
import { balanceSheet_Sep30 } from '../data/september-data';

const Slide24: React.FC = () => {
  return (
    <Slide className="balance-sheet-slide">
      <h2 className="slide-title">BẢNG CÂN ĐỐI KẾ TOÁN 30/09/2025</h2>
      
      <div className="balance-content">
        <Table data={balanceSheet_Sep30} />
        
        <div className="comparison-note">
          <h4>So sánh với 31/08/2025</h4>
          <div className="comparison-items">
            <div className="compare-item increase">
              <span>Tổng tài sản:</span>
              <span>7.592 triệu → 9.064 triệu</span>
              <span className="change">+19,4%</span>
            </div>
            <div className="compare-item increase">
              <span>LNST chưa phân phối:</span>
              <span>0 → 1.255 triệu</span>
            </div>
            <div className="compare-item">
              <span>Tiền và tương đương:</span>
              <span>0 → 1.255 triệu</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide24;
