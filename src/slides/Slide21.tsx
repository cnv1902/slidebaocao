import type React from 'react';
import { useState } from 'react';
import { Slide, Table } from '../components';
import { costCard_NhaTam, costCard_NhaBep } from '../data/september-data';

const Slide21: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tables = [costCard_NhaTam, costCard_NhaBep];
  const tabNames = ['Thảm nhà tắm', 'Thảm nhà bếp'];

  return (
    <Slide className="cost-card-slide">
      <h2 className="slide-title">THẺ TÍNH GIÁ THÀNH SẢN PHẨM</h2>
      
      <div className="tabs-container">
        <div className="tabs-header">
          {tabNames.map((name, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {name}
            </button>
          ))}
        </div>
        
        <div className="tab-content">
          <Table data={tables[activeTab]} />
          
          <div className="cost-summary">
            {activeTab === 0 ? (
              <>
                <div className="summary-item">
                  <span>Số lượng sản xuất:</span>
                  <strong>8.000 cái</strong>
                </div>
                <div className="summary-item highlight">
                  <span>Giá thành đơn vị:</span>
                  <strong>40.075 đ</strong>
                </div>
                <div className="summary-item">
                  <span>Tổng giá thành:</span>
                  <strong>320.600.000 đ</strong>
                </div>
              </>
            ) : (
              <>
                <div className="summary-item">
                  <span>Số lượng sản xuất:</span>
                  <strong>5.000 cái</strong>
                </div>
                <div className="summary-item highlight">
                  <span>Giá thành đơn vị:</span>
                  <strong>72.238 đ</strong>
                </div>
                <div className="summary-item">
                  <span>Tổng giá thành:</span>
                  <strong>361.190.000 đ</strong>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide21;
