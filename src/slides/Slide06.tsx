import type React from 'react';
import { useState } from 'react';
import { Slide, Table } from '../components';
import { table1_1, table1_2, table1_3 } from '../data/tables';

const Slide06: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tables = [table1_1, table1_2, table1_3];
  const tabNames = ['Định mức sản xuất', 'Bao bì & tem nhãn', 'Tổng giá thành'];

  return (
    <Slide className="quota-slide">
      <h2 className="slide-title">ĐỊNH MỨC SẢN XUẤT</h2>
      
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

export default Slide06;
