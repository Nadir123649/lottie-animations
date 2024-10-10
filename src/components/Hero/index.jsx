import React from "react";
import Lottie from "react-lottie";
import logoAnimation from '../../lottie-animation/logo main.json';

function Hero() {
    const [animationSpeed, setAnimationSpeed] = React.useState(0.5);
    const defaultOptions = (animationData) => ({
        loop: false, // Set to false for both animations to not loop
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    });
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
            height: '60px', // Decrease the height to make the logo smaller
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
        <section class="home-banner">
            <div class="home-banner__inner">
                <Lottie
                    options={defaultOptions(logoAnimation)}
                    speed={animationSpeed}
                    style={styles.logo}
                />
                <h1>An umbrella company delivering bold solutions across all areas of creative communications</h1>
            </div>
            <div class="home-banner__umbrella home-banner__umbrella--desktop">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 253.9">
                    <path d="m1440,0H0v253.9C222.04,162.44,465.26,112,720.23,112s497.88,50.38,719.77,141.74V0Z"
                        fill="#000000"></path>
                </svg>
            </div>
            <div class="home-banner__umbrella home-banner__umbrella--mobile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 64.61">
                    <path fill="#000000" d="m390,0H0v64.61c60.14-17.8,126.01-27.61,195.06-27.61s134.84,9.8,194.94,27.58V0Z">
                    </path>
                </svg>
            </div>
        </section>
    );
}

export default Hero