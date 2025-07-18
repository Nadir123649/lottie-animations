import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import umbrellaAnimation from '../../lottie-animation/Desktop.json';
import mobileUmbrellaAnimation from '../../lottie-animation/mobile.json'; // Assuming you have a separate mobile animation
import Hero from '../Hero';

function AnimatedHeader({ isUmbrellaComplete, handleAnimationComplete }) {
    const [isMobile, setIsMobile] = useState(false); // State to track if it's mobile or not

    // Function to detect screen width and update isMobile state
    const detectScreenSize = () => {
        setIsMobile(window.innerWidth <= 768); // 768px threshold for mobile
    };

    useEffect(() => {
        detectScreenSize(); // Check screen size on initial load
        window.addEventListener('resize', detectScreenSize); // Listen for screen resizing
        return () => {
            window.removeEventListener('resize', detectScreenSize); // Cleanup event listener on unmount
        };
    }, []);

    const defaultOptions = (animationData) => ({
        loop: false, // Set to false for both animations to not loop
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    });

    const [animationSpeed, setAnimationSpeed] = useState(1.4);

    const styles = {
        umbrellaContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
        },
        lottie: {
            width: '100%',
            height: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh',
        },
    };

    return (
        <div className="App">
            {!isUmbrellaComplete && (
                <div>
                    <div style={styles.umbrellaContainer}>
                        <Lottie
                            options={defaultOptions(isMobile ? mobileUmbrellaAnimation : umbrellaAnimation)} // Use mobile or desktop animation
                            speed={animationSpeed}
                            style={styles.lottie}
                            eventListeners={[
                                {
                                    eventName: 'complete',
                                    callback: () => handleAnimationComplete(),
                                },
                            ]}
                        />
                    </div>
                </div>
            )}

            {isUmbrellaComplete && (
                <>
                    <Hero />
                </>
            )}
        </div>
    );
}

export default AnimatedHeader;
