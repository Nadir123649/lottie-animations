import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import logoAnimation from '../../lottie-animation/logo main.json';

function Hero() {
    const [isSlideComplete, setIsSlideComplete] = useState(false);
    const [animationSpeed, setAnimationSpeed] = useState(2);
    const [isJiggling, setIsJiggling] = useState(false);

    const defaultOptions = (animationData) => ({
        loop: false,
        autoplay: isSlideComplete,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    });

    // Slide-up animation CSS
    const styles = {
        lottie: {
            width: '100%',
            maxWidth: '200px',
            height: 'auto',
            position: 'relative',
            zIndex: 22,

        },

    };


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSlideComplete(true);
            setIsJiggling(true);
        }, 500);

        const jiggleTimer = setTimeout(() => {
            setIsJiggling(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
            clearTimeout(jiggleTimer);
        };
    }, []);

    return (
        <section className="home-banner">
            <div style={{ position: 'relative', zIndex: 22 }}>
                <Lottie
                    options={defaultOptions(logoAnimation)}
                    speed={animationSpeed}
                    style={{ ...styles.lottie, }}
                />
            </div>

            <h1>An umbrella company delivering bold solutions across all areas of creative communications</h1>

            <div className="home-banner__umbrella home-banner__umbrella--desktop">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 253.9">
                    <path d="m1440,0H0v253.9C222.04,162.44,465.26,112,720.23,112s497.88,50.38,719.77,141.74V0Z" fill="#000000"></path>
                </svg>
            </div>
            <div className="home-banner__umbrella home-banner__umbrella--mobile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 64.61">
                    <path fill="#000000" d="m390,0H0v64.61c60.14-17.8,126.01-27.61,195.06-27.61s134.84,9.8,194.94,27.58V0Z"></path>
                </svg>
            </div>

        </section>
    );
}

export default Hero;
