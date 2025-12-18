import type React from 'react';
import { Slide, Table } from '../components';
import { revenueBudget_Q4 } from '../data/budget-q4';

const Slide29: React.FC = () => {
  return (
    <Slide className="revenue-budget-slide">
      <h2 className="slide-title">DỰ TOÁN DOANH THU QUÝ IV/2025</h2>
      <div className="budget-table-container">
        <Table data={revenueBudget_Q4} />
      </div>
    </Slide>
  );
};

export default Slide29;
