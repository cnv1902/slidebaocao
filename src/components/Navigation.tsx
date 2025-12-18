import type React from 'react';
import '../styles/slides.css';

export interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="navigation">
      <button
        className="nav-button prev"
        onClick={onPrevious}
        disabled={currentSlide === 0}
        aria-label="Previous slide"
      >
        ←
      </button>
      <div className="slide-counter">
        {currentSlide + 1} / {totalSlides}
      </div>
      <button
        className="nav-button next"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
};

export default Navigation;
