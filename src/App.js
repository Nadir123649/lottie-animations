import React from 'react';
import CreativeSection from './components/Creative';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Innovative from './components/Inovative';
import SliderSection from './components/SliderSection';
import AnimatedHeader from './components/Header/header';
import './App.css';
import './index.css';

function App() {
  const [isUmbrellaComplete, setUmbrellaComplete] = React.useState(false);

  const handleAnimationComplete = () => {
    setUmbrellaComplete(true);
  };
  return (
    <div className="App">
      <div>

        <AnimatedHeader isUmbrellaComplete={isUmbrellaComplete} handleAnimationComplete={handleAnimationComplete} />
        {isUmbrellaComplete &&
          <div>
            <Innovative />
            <CreativeSection />
            <SliderSection />
          <Footer />
          </div>}
      </div>
    </div>
  );
}

export default App;
