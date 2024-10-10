import './App.css';
import './index.css';
import CreativeSection from './components/Creative';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Innovative from './components/Inovative';
import SliderSection from './components/SliderSection';
import AnimatedHeader from './components/Header/header';

function App() {
  return (
    <div className="App">
      <div>
        <AnimatedHeader />
        <Innovative />
        <CreativeSection />
        <SliderSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
