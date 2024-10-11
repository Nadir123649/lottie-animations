import React, { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import rightarrowAnimation from '../../lottie-animation/stroke-animation/data3.json';
import leftarrowAnimation from '../../lottie-animation/stroke-animation/data5.json';

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
            { threshold: 0.4 }
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
        <section ref={sectionRef} className="box fadeIn relative flex justify-center items-center flex-col px-3 md:px-5 py-20">
            <h1 className="text-center text-lg md:text-3xl font-bold leading-normal md:leading-[40px]">
                We do everything imaginable in the world of creative <br className="hidden md:block" />
                communications, from design and product creation <br className="hidden md:block" />
                to website and app development, digital marketing, and advertising.
            </h1>

            {hasAnimated && (
                <Player
                    autoplay
                    loop={false}
                    src={rightarrowAnimation}
                    // style={{ width: 200, height: 300 }}
                    className='absolute left-[20px] arrow-four w-full'
                    keepLastFrame={true}
                />
            )}

            <p className="text-center text-sm md:text-xl font-normal leading-normal mt-[30px] md:mt-[50px] max-w-full md:max-w-[855px] w-full">
                Our core focus is bringing your brand to life in fresh, unorthodox, and often
                provocative ways. With a team of some of the brightest, most passionate, and
                tenacious creative problem solvers, along with our trusted partners, we collaborate
                to express your brand’s values and personality through every channel that makes
                sense—and even a few that don’t!
            </p>

            {hasAnimated && (
                <Player
                    autoplay
                    loop={false}
                    src={leftarrowAnimation}

                    className='absolute right-[40px] bottom-[-130px]  arrow-five w-full'
                    keepLastFrame={true}
                />
            )}
        </section>
    );
}

export default Innovative;
