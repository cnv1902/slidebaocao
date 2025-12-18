import { useState, useEffect } from 'react';
import './App.css';
import { Navigation } from './components';
import Slide01 from './slides/Slide01';
import Slide02 from './slides/Slide02';
import Slide03 from './slides/Slide03';
import Slide04 from './slides/Slide04';
import Slide05 from './slides/Slide05';
import Slide06 from './slides/Slide06';
import Slide07 from './slides/Slide07';
import Slide08 from './slides/Slide08';
import Slide09 from './slides/Slide09';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide14 from './slides/Slide14';
import Slide15 from './slides/Slide15';
import Slide16 from './slides/Slide16';
import Slide17 from './slides/Slide17';
import Slide18 from './slides/Slide18';
import Slide19 from './slides/Slide19';
import Slide20 from './slides/Slide20';
import Slide21 from './slides/Slide21';
import Slide22 from './slides/Slide22';
import Slide23 from './slides/Slide23';
import Slide24 from './slides/Slide24';
import Slide25 from './slides/Slide25';
import Slide26 from './slides/Slide26';
import Slide27 from './slides/Slide27';
import Slide28 from './slides/Slide28';
import Slide29 from './slides/Slide29';
import Slide30 from './slides/Slide30';
import Slide31 from './slides/Slide31';
import Slide32 from './slides/Slide32';
import Slide33 from './slides/Slide33';
import Slide34 from './slides/Slide34';
import Slide35 from './slides/Slide35';
import Slide36 from './slides/Slide36';
import Slide37 from './slides/Slide37';
import Slide38 from './slides/Slide38';
import Slide39 from './slides/Slide39';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <Slide01 />,
    <Slide02 />,
    <Slide03 />,
    <Slide04 />,
    <Slide05 />,
    <Slide06 />,
    <Slide07 />,
    <Slide08 />,
    <Slide09 />,
    <Slide10 />,
    <Slide11 />,
    <Slide12 />,
    <Slide13 />,
    <Slide14 />,
    <Slide15 />,
    <Slide16 />,
    <Slide17 />,
    <Slide18 />,
    <Slide19 />,
    <Slide20 />,
    <Slide21 />,
    <Slide22 />,
    <Slide23 />,
    <Slide24 />,
    <Slide25 />,
    <Slide26 />,
    <Slide27 />,
    <Slide28 />,
    <Slide29 />,
    <Slide30 />,
    <Slide31 />,
    <Slide32 />,
    <Slide33 />,
    <Slide34 />,
    <Slide35 />,
    <Slide36 />,
    <Slide37 />,
    <Slide38 />,
    <Slide39 />,
  ];

  const totalSlides = slides.length;

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPreviousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="app">
      <div className="slide-container">
        {slides[currentSlide]}
      </div>
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={goToNextSlide}
        onPrevious={goToPreviousSlide}
      />
    </div>
  );
}

export default App;
