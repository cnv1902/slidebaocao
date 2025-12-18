import type React from 'react';
import { Slide } from '../components';

const Slide01: React.FC = () => {
  return (
    <Slide className="cover-slide">
      <div className="cover-header">
        <div className="logo-left">
          <div className="logo-placeholder">
            <div className="logo-text">ĐẠI HỌC VINH</div>
          </div>
        </div>
        <div className="logo-right">
          <div className="logo-placeholder">
            <div className="logo-text">KHOA KTQTKD</div>
          </div>
        </div>
      </div>
      
      <div className="cover-content">
        <div className="decorative-element top-left"></div>
        <div className="decorative-element bottom-right"></div>
        
        <h1 className="main-title">BÁO CÁO ĐỒ ÁN</h1>
        <h2 className="subtitle">HỌC PHẦN KẾ TOÁN QUẢN TRỊ</h2>
        
        <div className="cover-footer">
          <p className="academic-year">Năm học 2024-2025</p>
        </div>
      </div>
    </Slide>
  );
};

export default Slide01;
