import type React from 'react';
import { Slide } from '../components';
import { shortTermDecision } from '../data/september-data';

const Slide27: React.FC = () => {
  return (
    <Slide className="decision-slide">
      <h2 className="slide-title">RA QUYẾT ĐỊNH NGẮN HẠN</h2>
      
      <div className="decision-content">
        <div className="situation-box">
          <h3>Tình huống</h3>
          <div className="situation-details">
            <p><strong>Khách hàng:</strong> {shortTermDecision.order.customer}</p>
            <p><strong>Sản phẩm:</strong> {shortTermDecision.order.product}</p>
            <p><strong>Số lượng:</strong> {shortTermDecision.order.quantity.toLocaleString()} cái</p>
            <p><strong>Giá đề nghị:</strong> {shortTermDecision.order.priceOffered.toLocaleString()} đ/cái</p>
          </div>
          <div className="conditions">
            <h4>Điều kiện:</h4>
            <ul>
              <li>Công ty đang có công suất dư</li>
              <li>Định phí không thay đổi</li>
              <li>Không phát sinh chi phí bán hàng</li>
            </ul>
          </div>
        </div>

        <div className="analysis-box">
          <h3>Phân tích chi phí thích hợp</h3>
          <table className="decision-table">
            <thead>
              <tr>
                <th>Chỉ tiêu</th>
                <th>Số tiền (đ)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Doanh thu ({shortTermDecision.order.quantity} × {shortTermDecision.order.priceOffered.toLocaleString()})</td>
                <td className="positive">{shortTermDecision.order.totalRevenue.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Biến phí ({shortTermDecision.order.quantity} × {shortTermDecision.analysis.variableCostPerUnit.toLocaleString()})</td>
                <td className="negative">{shortTermDecision.analysis.totalVariableCost.toLocaleString()}</td>
              </tr>
              <tr className="result-row">
                <td><strong>Lợi nhuận tăng thêm</strong></td>
                <td className="highlight positive"><strong>{shortTermDecision.analysis.incrementalProfit.toLocaleString()}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="decision-box">
          <h3>Quyết định</h3>
          <div className={`decision-result ${shortTermDecision.analysis.decision === 'CHẤP NHẬN' ? 'accept' : 'reject'}`}>
            <span className="decision-icon">✓</span>
            <span className="decision-text">{shortTermDecision.analysis.decision}</span>
          </div>
          <p className="reason">{shortTermDecision.analysis.reason}</p>
        </div>
      </div>
    </Slide>
  );
};

export default Slide27;
