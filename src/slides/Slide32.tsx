import type React from 'react';
import { Slide, Table } from '../components';
import { productionCostBudget } from '../data/budget-q4';

const Slide32: React.FC = () => {
  return (
    <Slide className="production-cost-budget-slide">
      <h2 className="slide-title">DỰ TOÁN CHI PHÍ SẢN XUẤT QUÝ IV</h2>
      <div className="budget-table-container">
        <Table data={productionCostBudget} />
      </div>
    </Slide>
  );
};

export default Slide32;
