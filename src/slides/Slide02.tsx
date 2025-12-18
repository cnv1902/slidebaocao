import type React from 'react';
import { Slide } from '../components';
import { teamMembers } from '../data/slideContent';

const Slide02: React.FC = () => {
  return (
    <Slide className="info-slide">
      <h2 className="slide-title">THÔNG TIN ĐỀ TÀI</h2>
      
      <div className="topic-info">
        <h3 className="topic-title">SẢN XUẤT - SẢN PHẨM CAO SU</h3>
        
        <div className="instructor-info">
          <p><strong>Giảng viên hướng dẫn:</strong> Thạc sĩ Đào Thị Loan</p>
        </div>
        
        <div className="group-info">
          <p><strong>Nhóm thực hiện:</strong> Kế toán quản trị_Lớp 10_Nhóm 2</p>
        </div>
      </div>
      
      <div className="team-members">
        <h4>Danh sách thành viên:</h4>
        <table className="members-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>MSSV</th>
              <th>Vai trò</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{member.name}</td>
                <td>{member.mssv}</td>
                <td>{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Slide>
  );
};

export default Slide02;
