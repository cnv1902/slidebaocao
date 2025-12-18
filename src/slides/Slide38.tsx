import type React from 'react';
import { Slide } from '../components';

const Slide38: React.FC = () => {
  return (
    <Slide className="summary-slide">
      <h2 className="slide-title">TỔNG KẾT</h2>
      
      <div className="summary-content">
        <div className="achievements">
          <h3>Thành tựu đạt được</h3>
          <div className="achievements-grid">
            <div className="achievement-card">
              <span className="icon">📊</span>
              <h4>Doanh thu</h4>
              <p className="value">12.750 triệu đ</p>
              <p className="period">Tháng 9 + Quý IV</p>
            </div>
            <div className="achievement-card success">
              <span className="icon">💰</span>
              <h4>Lợi nhuận sau thuế</h4>
              <p className="value">6.433 triệu đ</p>
              <p className="period">Tháng 9 + Quý IV</p>
            </div>
            <div className="achievement-card">
              <span className="icon">📈</span>
              <h4>Tăng trưởng tài sản</h4>
              <p className="value">+103%</p>
              <p className="period">8/2025 → 12/2025</p>
            </div>
          </div>
        </div>

        <div className="key-indicators">
          <h3>Các chỉ số quan trọng</h3>
          <div className="indicators-list">
            <div className="indicator-item">
              <span className="label">Biên lợi nhuận gộp:</span>
              <span className="value">67,2%</span>
            </div>
            <div className="indicator-item">
              <span className="label">Biên lợi nhuận ròng:</span>
              <span className="value">50,0%</span>
            </div>
            <div className="indicator-item">
              <span className="label">Điểm hòa vốn:</span>
              <span className="value">7 ngày</span>
            </div>
            <div className="indicator-item">
              <span className="label">Doanh thu an toàn:</span>
              <span className="value">317%</span>
            </div>
          </div>
        </div>

        <div className="evaluation">
          <h3>Đánh giá</h3>
          <div className="eval-points">
            <div className="eval-item positive">
              <span className="check">✓</span>
              <p>Hiệu quả sản xuất cao, kiểm soát chi phí tốt</p>
            </div>
            <div className="eval-item positive">
              <span className="check">✓</span>
              <p>Khả năng sinh lời vượt trội so với ngành</p>
            </div>
            <div className="eval-item positive">
              <span className="check">✓</span>
              <p>Dự toán Quý IV khả thi và đạt hiệu quả cao</p>
            </div>
            <div className="eval-item positive">
              <span className="check">✓</span>
              <p>Dòng tiền mạnh mẽ, tài chính ổn định</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide38;
