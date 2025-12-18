import type React from 'react';
import { Slide, Table } from '../components';
import { taxReport } from '../data/september-data';

const Slide22: React.FC = () => {
  return (
    <Slide className="tax-report-slide">
      <h2 className="slide-title">BÁO CÁO THUẾ GTGT THÁNG 9/2025</h2>
      
      <div className="tax-content">
        <Table data={taxReport} />
        
        <div className="tax-visualization">
          <div className="tax-flow">
            <div className="tax-box output">
              <h4>Thuế đầu ra</h4>
              <p className="amount">240.000.000 đ</p>
            </div>
            
            <div className="tax-arrow">→</div>
            
            <div className="tax-box input">
              <h4>Thuế đầu vào</h4>
              <p className="amount">22.405.000 đ</p>
              <ul className="tax-details">
                <li>NVL: 19.640.000</li>
                <li>CCDC: 840.000</li>
                <li>Điện nước: 1.925.000</li>
              </ul>
            </div>
            
            <div className="tax-arrow">=</div>
            
            <div className="tax-box payable">
              <h4>Còn phải nộp</h4>
              <p className="amount highlight">217.595.000 đ</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide22;
