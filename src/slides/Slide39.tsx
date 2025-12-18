import type React from 'react';
import { Slide } from '../components';

const Slide39: React.FC = () => {
  return (
    <Slide className="thankyou-slide">
      <div className="thankyou-content">
        <div className="thankyou-header">
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
        
        <div className="thankyou-main">
          <h1 className="thankyou-title">CẢM ƠN QUÝ THẦY CÔ</h1>
          <h2 className="thankyou-subtitle">ĐÃ LẮNG NGHE!</h2>
          
          <div className="project-info">
            <p className="project-name">Đồ án: Kế toán Quản trị - Sản xuất sản phẩm cao su</p>
            <p className="group-name">Nhóm 2 - Lớp 10 - Kế toán Quản trị</p>
            <p className="instructor">GVHD: ThS. Đào Thị Loan</p>
          </div>
          
          <div className="decorative-element thankyou-deco"></div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide39;
