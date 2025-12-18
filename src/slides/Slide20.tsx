import type React from 'react';
import { Slide } from '../components';

const Slide20: React.FC = () => {
  return (
    <Slide className="calculation-slide">
      <h2 className="slide-title">GIÁ THÀNH SẢN PHẨM - PHƯƠNG PHÁP TỶ LỆ</h2>
      
      <div className="calculation-content">
        <div className="calculation-steps">
          <div className="step-box">
            <div className="step-label">Bước 1</div>
            <div className="step-content">
              <p><strong>Tổng giá thành thực tế:</strong></p>
              <p className="amount">681.787.000 đ</p>
            </div>
          </div>

          <div className="step-box">
            <div className="step-label">Bước 2</div>
            <div className="step-content">
              <p><strong>Tổng giá thành định mức:</strong></p>
              <p className="amount">711.820.000 đ</p>
            </div>
          </div>

          <div className="step-box">
            <div className="step-label">Bước 3</div>
            <div className="step-content">
              <p><strong>Tỷ lệ giá thành:</strong></p>
              <p className="amount">95,78%</p>
              <p className="formula">= 681.787.000 / 711.820.000 × 100%</p>
            </div>
          </div>

          <div className="result-box">
            <h3>Kết quả</h3>
            <div className="result-grid">
              <div className="result-item">
                <p className="product-name">Thảm cao su nhà tắm</p>
                <p className="unit-cost">Giá thành đơn vị: <strong>40.075 đ</strong></p>
                <p className="total-cost">Tổng giá thành: <strong>320.600.000 đ</strong></p>
              </div>
              <div className="result-item">
                <p className="product-name">Thảm cao su nhà bếp</p>
                <p className="unit-cost">Giá thành đơn vị: <strong>72.238 đ</strong></p>
                <p className="total-cost">Tổng giá thành: <strong>361.190.000 đ</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide20;
