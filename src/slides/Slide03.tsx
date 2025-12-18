import type React from 'react';
import { Slide } from '../components';
import { presentationOutline } from '../data/slideContent';

const Slide03: React.FC = () => {
  return (
    <Slide className="outline-slide">
      <h2 className="slide-title">NỘI DUNG THUYẾT TRÌNH</h2>
      
      <div className="outline-container">
        <div className="outline-section">
          <div className="section-header part1">
            <h3>{presentationOutline.part1.title}</h3>
          </div>
          <ul className="outline-list">
            {presentationOutline.part1.items.map((item, index) => (
              <li key={index} className="outline-item">
                <span className="item-number">{index + 1}</span>
                <span className="item-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="outline-divider"></div>
        
        <div className="outline-section">
          <div className="section-header part2">
            <h3>{presentationOutline.part2.title}</h3>
          </div>
          <ul className="outline-list">
            {presentationOutline.part2.items.map((item, index) => (
              <li key={index} className="outline-item">
                <span className="item-number">{index + 1}</span>
                <span className="item-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>
  );
};

export default Slide03;
