import type React from 'react';
import { Slide } from '../components';

const Slide13: React.FC = () => {
  return (
    <Slide className="section-intro-slide">
      <h2 className="slide-title">II. TỔ CHỨC CÔNG TÁC KẾ TOÁN QUẢN TRỊ</h2>
      
      <div className="intro-content">
        <div className="production-info">
          <h3>Thông tin sản lượng tháng 9/2025</h3>
          <div className="production-grid">
            <div className="production-item">
              <div className="product-icon">🛁</div>
              <h4>Thảm cao su nhà tắm</h4>
              <p className="quantity">8.000 cái</p>
            </div>
            <div className="production-item">
              <div className="product-icon">🏠</div>
              <h4>Thảm cao su nhà bếp</h4>
              <p className="quantity">5.000 cái</p>
            </div>
          </div>
        </div>

        <div className="analysis-topics">
          <h3>Nội dung phân tích</h3>
          <div className="topics-grid">
            <div className="topic-card">
              <span className="topic-icon">📊</span>
              <span>Cấu trúc chi phí</span>
            </div>
            <div className="topic-card">
              <span className="topic-icon">💰</span>
              <span>Giá thành sản phẩm</span>
            </div>
            <div className="topic-card">
              <span className="topic-icon">⚖️</span>
              <span>Điểm hòa vốn</span>
            </div>
            <div className="topic-card">
              <span className="topic-icon">📈</span>
              <span>Ra quyết định ngắn hạn</span>
            </div>
            <div className="topic-card">
              <span className="topic-icon">📋</span>
              <span>Dự toán</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide13;
