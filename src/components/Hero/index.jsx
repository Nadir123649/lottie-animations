import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import logoAnimation from '../../lottie-animation/logo main.json';

function Hero() {
    const [isSlideComplete, setIsSlideComplete] = useState(false);
    const [animationSpeed, setAnimationSpeed] = useState(0.5);
    const [isJiggling, setIsJiggling] = useState(false);

    const defaultOptions = (animationData) => ({
        loop: false, // Set to false for both animations to not loop
        autoplay: isSlideComplete, // Start Lottie only after slide animation
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    });

    // Slide-up animation CSS
    const styles = {
        container: {
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            overflow: 'hidden',
            transform: isSlideComplete ? 'translateY(0)' : 'translateY(100%)'
        },
        heroContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            height: '80vh',
            marginTop: '10px',
            transform: isSlideComplete ? 'translateY(0)' : 'translateY(100%)', // Slide up
            opacity: isSlideComplete ? 1 : 0,
            transition: 'transform 1s ease-in-out, opacity 1s ease-in-out', // Transition effect
        },
        lottie: {
            width: 'auto',
            height: '60px',
            maxWidth: '320px',
            maxHeight: '100%',
        },
        text: {
            color: 'white',
            textAlign: 'center',
            animation: isJiggling ? 'jiggle 0.5s infinite' : 'none', // Apply jiggle animation
        },
    };

    const jiggleKeyframes = `
        @keyframes jiggle {
            0% { transform: translateY(0); }
            25% { transform: translateY(-5px); }
            50% { transform: translateY(5px); }
            75% { transform: translateY(-3px); }
            100% { transform: translateY(0); }
        }
    `;

    useEffect(() => {
        // Add jiggle effect after slide up completes
        const timer = setTimeout(() => {
            setIsSlideComplete(true);
            setIsJiggling(true);
        }, 500); // Adjust slide up time as needed

        // Stop jiggling after a certain duration
        const jiggleTimer = setTimeout(() => {
            setIsJiggling(false);
        }, 2000); // Duration of the jiggle effect

        return () => {
            clearTimeout(timer);
            clearTimeout(jiggleTimer);
        };
    }, []);

    return (
        <section className="home-banner">
            <style>{jiggleKeyframes}</style>
            <div style={styles.container}>
                <div style={styles.heroContainer}>
                    <Lottie
                        options={defaultOptions(logoAnimation)}
                        speed={animationSpeed}
                        style={styles.lottie}
                    />
                    <h1 style={styles.text}>An umbrella company delivering bold solutions across all areas of creative communications</h1>
                </div>
            </div>
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
