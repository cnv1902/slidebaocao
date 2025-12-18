import type React from 'react';
import { Slide } from '../components';
import { companyOverview } from '../data/slideContent';

const Slide04: React.FC = () => {
  return (
    <Slide className="overview-slide">
      <h2 className="slide-title">I. TỔNG QUAN DOANH NGHIỆP</h2>
      
      <div className="overview-content">
        <div className="overview-section">
          <h3 className="section-title">Ngành nghề kinh doanh</h3>
          <p className="section-text">{companyOverview.business}</p>
        </div>

        <div className="overview-section">
          <h3 className="section-title">Chế độ kế toán</h3>
          <p className="section-text">{companyOverview.accountingRegime}</p>
        </div>

        <div className="overview-section">
          <h3 className="section-title">Các phương pháp áp dụng</h3>
          <div className="methods-grid">
            <div className="method-item">
              <strong>Phương pháp tính thuế GTGT:</strong>
              <span>{companyOverview.methods.vatMethod}</span>
            </div>
            <div className="method-item">
              <strong>Phương pháp hạch toán hàng tồn kho:</strong>
              <span>{companyOverview.methods.inventoryAccounting}</span>
            </div>
            <div className="method-item">
              <strong>Phương pháp tính giá hàng tồn kho:</strong>
              <span>{companyOverview.methods.inventoryValuation}</span>
            </div>
            <div className="method-item">
              <strong>Phương pháp tính giá thành:</strong>
              <span>{companyOverview.methods.costingMethod}</span>
            </div>
            <div className="method-item">
              <strong>Phương pháp khấu hao TSCĐ:</strong>
              <span>{companyOverview.methods.depreciation}</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide04;
