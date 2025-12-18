import type React from 'react';
import { useState } from 'react';
import '../styles/slides.css';

export interface TableData {
  headers: string[];
  rows: (string | number)[][];
  title?: string;
  collapsible?: boolean;
}

interface TableProps {
  data: TableData;
  className?: string;
}

const Table: React.FC<TableProps> = ({ data, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(!data.collapsible);

  const toggleExpand = () => {
    if (data.collapsible) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`table-container ${className}`}>
      {data.title && (
        <div className="table-title" onClick={toggleExpand}>
          {data.title}
          {data.collapsible && (
            <span className="toggle-icon">{isExpanded ? '▼' : '▶'}</span>
          )}
        </div>
      )}
      {isExpanded && (
        <table className="data-table">
          <thead>
            <tr>
              {data.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
