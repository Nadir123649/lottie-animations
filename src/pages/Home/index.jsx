import React from 'react';
import AnimatedHeader from '../../components/Header/header';
import Innovative from '../../components/Inovative';
import CreativeSection from '../../components/Creative';
import SliderSection from '../../components/SliderSection';
import Footer from '../../components/Footer';

const Home = () => {
    const [isUmbrellaComplete, setUmbrellaComplete] = React.useState(false);

    const handleAnimationComplete = () => {
        setUmbrellaComplete(true);
    };
    return (
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
    );
}

export default Home;
