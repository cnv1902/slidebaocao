import type React from 'react';
import '../styles/slides.css';

export interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({ children, className = '' }) => {
  return (
    <div className={`slide ${className}`}>
      <div className="slide-content">
        {children}
      </div>
    </div>
  );
};

export default Slide;
