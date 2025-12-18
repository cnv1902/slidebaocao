import type React from 'react';
import { Slide } from '../components';
import { bepAnalysis } from '../data/september-data';

const Slide26: React.FC = () => {
  return (
    <Slide className="bep-analysis-slide">
      <h2 className="slide-title">KẾT QUẢ PHÂN TÍCH ĐIỂM HÒA VỐN</h2>
      
      <div className="bep-results">
        <div className="bep-metrics">
          <div className="metric-row">
            <div className="metric-box primary">
              <span className="label">Tỷ lệ lãi/BP bình quân</span>
              <span className="value">{(bepAnalysis.weightedCM * 100).toFixed(2)}%</span>
            </div>
          </div>

          <div className="metric-row">
            <div className="metric-box success">
              <span className="label">Doanh thu hòa vốn</span>
              <span className="value">{bepAnalysis.bepRevenue.toLocaleString()} đ</span>
              <div className="breakdown">
                <p>• Thảm nhà tắm: 287.245.232 đ (1.436 cái)</p>
                <p>• Thảm nhà bếp: 287.245.232 đ (957 cái)</p>
              </div>
            </div>
          </div>

          <div className="metric-row">
            <div className="metric-box warning">
              <span className="label">Thời gian hòa vốn</span>
              <span className="value">{bepAnalysis.bepDays} ngày</span>
            </div>
            
            <div className="metric-box info">
              <span className="label">Doanh thu an toàn</span>
              <span className="value">{bepAnalysis.safetyMargin.toLocaleString()} đ</span>
              <span className="percent">({bepAnalysis.safetyMarginPercent}%)</span>
            </div>
          </div>
        </div>

        <div className="bep-chart-placeholder">
          <h4>Biểu đồ điểm hòa vốn</h4>
          <div className="chart-visual">
            <div className="chart-axis">
              <div className="revenue-line">
                <span>Doanh thu</span>
              </div>
              <div className="cost-line">
                <span>Tổng chi phí</span>
              </div>
              <div className="bep-point">
                <span>●</span>
                <label>Điểm hòa vốn<br/>574.490.464 đ</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide26;
