import type React from 'react';
import { Slide } from '../components';
import { products, productionProcess } from '../data/slideContent';

const Slide05: React.FC = () => {
  return (
    <Slide className="product-slide">
      <h2 className="slide-title">SẢN PHẨM VÀ QUY TRÌNH SẢN XUẤT</h2>
      
      <div className="products-section">
        <h3 className="subsection-title">Sản phẩm</h3>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-number">SP {product.id}</div>
              <h4>{product.name}</h4>
              <p><strong>Kích thước:</strong> {product.size}</p>
              <p><strong>Trọng lượng:</strong> {product.weight}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="process-section">
        <h3 className="subsection-title">Quy trình sản xuất</h3>
        <div className="process-timeline">
          {productionProcess.map((step) => (
            <div key={step.step} className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <h4>{step.name}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default Slide05;
