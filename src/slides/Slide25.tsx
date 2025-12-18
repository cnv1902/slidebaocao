import type React from 'react';
import { Slide } from '../components';
import { bepAnalysis } from '../data/september-data';

const Slide25: React.FC = () => {
  return (
    <Slide className="bep-intro-slide">
      <h2 className="slide-title">PHÂN TÍCH ĐIỂM HÒA VỐN (BEP)</h2>
      
      <div className="bep-intro-content">
        <div className="intro-section">
          <h3>Dữ liệu đầu vào</h3>
          <div className="data-grid">
            {bepAnalysis.products.map((product, index) => (
              <div key={index} className="product-data-card">
                <h4>{product.name}</h4>
                <div className="data-item">
                  <span>Số lượng bán:</span>
                  <strong>{product.quantity.toLocaleString()} cái</strong>
                </div>
                <div className="data-item">
                  <span>Doanh thu:</span>
                  <strong>{product.revenue.toLocaleString()} đ</strong>
                </div>
                <div className="data-item">
                  <span>Giá bán:</span>
                  <strong>{product.price.toLocaleString()} đ</strong>
                </div>
                <div className="data-item">
                  <span>Biến phí/SP:</span>
                  <strong>{product.variableCost.toLocaleString()} đ</strong>
                </div>
                <div className="data-item highlight">
                  <span>Tỷ lệ lãi/BP:</span>
                  <strong>{(product.contributionMarginRatio * 100).toFixed(2)}%</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="summary-section">
          <div className="summary-box">
            <h4>Tổng hợp</h4>
            <div className="summary-row">
              <span>Tổng doanh thu:</span>
              <strong>{bepAnalysis.totalRevenue.toLocaleString()} đ</strong>
            </div>
            <div className="summary-row">
              <span>Tổng biến phí:</span>
              <strong>{bepAnalysis.totalVariableCost.toLocaleString()} đ</strong>
            </div>
            <div className="summary-row">
              <span>Tổng định phí:</span>
              <strong>{bepAnalysis.totalFixedCost.toLocaleString()} đ</strong>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide25;
