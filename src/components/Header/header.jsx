import React from 'react';
import Lottie from 'react-lottie';
import umbrellaAnimation from '../../lottie-animation/Desktop.json';
import Hero from '../Hero';
function AnimatedHeader() {
    const defaultOptions = (animationData) => ({
        loop: false, // Set to false for both animations to not loop
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    });

    const [animationSpeed, setAnimationSpeed] = React.useState(0.5);
    const [isUmbrellaComplete, setUmbrellaComplete] = React.useState(false);

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
            flexDirection: 'column', // Add this to stack logo and text vertically
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            height: '80vh',
            marginTop: '10px', // Adjust the margin top to be less
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
            maxWidth: '320px',
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
            {/* Render the umbrella animation */}
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
                                    callback: () => setUmbrellaComplete(true), // Set to true when umbrella animation completes
                                },
                            ]}
                        />
                    </div>
                </div>
            )}

            {isUmbrellaComplete && (
                <Hero />
            )
            }
        </div >
    );
}

export default AnimatedHeader;