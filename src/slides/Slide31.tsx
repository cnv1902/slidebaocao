import type React from 'react';
import { Slide, Table } from '../components';
import { materialsCostBudget } from '../data/budget-q4';

const Slide31: React.FC = () => {
  return (
    <Slide className="materials-budget-slide">
      <h2 className="slide-title">DỰ TOÁN CHI PHÍ NGUYÊN VẬT LIỆU</h2>
      <div className="budget-table-container">
        <Table data={materialsCostBudget} />
        <div className="materials-note">
          <p><strong>Lưu ý:</strong> Chi phí NVL bao gồm cao su thô, phụ gia hóa học, chất màu, và bao bì tem nhãn</p>
        </div>
      </div>
    </Slide>
  );
};

export default Slide31;
