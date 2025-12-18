import type React from 'react';
import { Slide, Table } from '../components';
import { productionBudget_Q4 } from '../data/budget-q4';

const Slide30: React.FC = () => {
  return (
    <Slide className="production-budget-slide">
      <h2 className="slide-title">DỰ TOÁN SẢN XUẤT QUÝ IV/2025</h2>
      <div className="budget-table-container">
        <Table data={productionBudget_Q4} />
      </div>
    </Slide>
  );
};

export default Slide30;
