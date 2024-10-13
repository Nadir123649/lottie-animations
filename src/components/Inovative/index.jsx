import React, { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import rightarrowAnimation from '../../lottie-animation/stroke-animation/data3.json';


function Innovative() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.9 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <section
            ref={sectionRef}
            className={`box fadeIn relative flex justify-center items-center flex-col pt-0 px-3 mt-[44px] md:px-5 md:pt-[50px] pb-20 md:mt-[0px] ${hasAnimated ? 'fade-up' : ''}`}
        >
            <h1 className="text-center text-lg md:text-2xl font-normal leading-normal md:leading-[38px]">
                We do everything imaginable in the world of creative <br className="hidden md:block" />
                communications, from design and product creation <br className="hidden md:block" />
                to website and app development, digital marketing, and advertising.
            </h1>

            {hasAnimated && (
                <Player
                    autoplay
                    loop={false}
                    src={rightarrowAnimation}
                    className="absolute left-[25px] max-w-[640px] arrow-four w-full"
                    keepLastFrame={true}
                />
            )}
            <p className="text-center text-sm md:text-lg font-[400] leading-normal mt-[30px] md:mt-[50px] max-w-full md:max-w-[855px] w-full">
                Our core focus is bringing your brand to life in fresh, unorthodox, and often
                provocative ways. With a team of some of the brightest, most passionate, and
                tenacious creative problem solvers, along with our trusted partners, we collaborate
                to express your brand’s values and personality through every channel that makes
                sense—and even a few that don’t!
            </p>
            {/* {hasAnimated && (
                <Player
                    autoplay
                    loop={false}
                    src={leftarrowAnimation}
                    className="absolute right-[40px] bottom-[-90px] max-w-[640px] arrow-five w-full"
                    keepLastFrame={true}
                />
            )} */}
        </section>
    );
}

export default Innovative;
