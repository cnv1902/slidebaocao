import type React from 'react';
import { useState } from 'react';
import { Slide, Table } from '../components';
import { table2_1, table2_2, table2_3 } from '../data/tables';

const Slide14: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tables = [table2_1, table2_2, table2_3];
  const tabNames = ['Chi tiết NVL', 'Bao bì & tem nhãn', 'Tổng hợp'];

  return (
    <Slide className="cost-slide">
      <h2 className="slide-title">CHI PHÍ NGUYÊN VẬT LIỆU TRỰC TIẾP</h2>
      
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
        </div>
      </div>
    </Slide>
  );
};

export default Slide14;
