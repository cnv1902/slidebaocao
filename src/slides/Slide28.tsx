import type React from 'react';
import { Slide } from '../components';
import { budgetAssumptions } from '../data/budget-q4';

const Slide28: React.FC = () => {
  return (
    <Slide className="budget-intro-slide">
      <h2 className="slide-title">DỰ TOÁN QUÝ IV/2025 - GIỚI THIỆU</h2>
      
      <div className="budget-intro-content">
        <div className="assumptions-section">
          <h3>Các giả định</h3>
          
          <div className="assumption-grid">
            <div className="assumption-card">
              <h4>Giá bán (chưa VAT)</h4>
              <div className="price-list">
                <div className="price-item">
                  <span>Thảm nhà tắm:</span>
                  <strong>{budgetAssumptions.prices.nhaTam.toLocaleString()} đ</strong>
                </div>
                <div className="price-item">
                  <span>Thảm nhà bếp:</span>
                  <strong>{budgetAssumptions.prices.nhaBep.toLocaleString()} đ</strong>
                </div>
              </div>
            </div>

            <div className="assumption-card">
              <h4>Chính sách</h4>
              <ul className="policy-list">
                <li>{budgetAssumptions.policies.salesPolicy}</li>
                <li>Tồn kho TP cuối kỳ = {budgetAssumptions.policies.finishedGoodsInventory}</li>
                <li>Tồn kho NVL cuối kỳ = {budgetAssumptions.policies.materialsInventory}</li>
                <li>{budgetAssumptions.policies.paymentToSuppliers}</li>
              </ul>
            </div>

            <div className="assumption-card">
              <h4>Dự kiến tiêu thụ T1/2026</h4>
              <div className="forecast-list">
                <div className="forecast-item">
                  <span>Thảm nhà tắm:</span>
                  <strong>{budgetAssumptions.forecast.jan2026.nhaTam.toLocaleString()} cái</strong>
                </div>
                <div className="forecast-item">
                  <span>Thảm nhà bếp:</span>
                  <strong>{budgetAssumptions.forecast.jan2026.nhaBep.toLocaleString()} cái</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="budget-overview">
          <h3>Hệ thống dự toán</h3>
          <div className="budget-flow">
            <div className="flow-step">1. Dự toán doanh thu</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">2. Dự toán sản xuất</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">3. Dự toán NVL</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">4. Dự toán chi phí</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">5. Báo cáo tài chính</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide28;
