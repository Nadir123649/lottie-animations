import React from 'react';
import Lottie from 'react-lottie';
import umbrellaAnimation from '../../lottie-animation/Desktop.json';
import Hero from '../Hero';
function AnimatedHeader({ isUmbrellaComplete, handleAnimationComplete }) {
    const defaultOptions = (animationData) => ({
        loop: false, // Set to false for both animations to not loop
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    });

    const [animationSpeed, setAnimationSpeed] = React.useState(0.6);

    const styles = {
        umbrellaContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
        },
        logoContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            height: '80vh',
            marginTop: '10px',
        },
        lottie: {
            width: '100%',
            height: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh',
        },
        logo: {
            width: 'auto',
            height: '50px', // Decrease the height to make the logo smaller
            maxWidth: '120px',
            maxHeight: '100%',
        },
        text: {
            color: 'white', // Change text color to white for better visibility
            textAlign: 'center', // Center align the text
            marginTop: '10px', // Add margin between logo and text
            fontSize: '16px', // Adjust font size as needed
        },
    };

    return (
        <div className="App">
            {!isUmbrellaComplete && (
                <div>
                    <div id='mobile' style={styles.umbrellaContainer}>
                        <Lottie
                            options={defaultOptions(umbrellaAnimation)}
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
                    <div class="layer overflow-hidden">
                        <div className="home-banner__umbrella home-banner__umbrella--mobile">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 64.61">
                                <path fill="#000000" d="m390,0H0v64.61c60.14-17.8,126.01-27.61,195.06-27.61s134.84,9.8,194.94,27.58V0Z"></path>
                            </svg>
                        </div>
                    </div>
                    <Hero />
                </>
            )}
        </div >
    );
}

export default AnimatedHeader;