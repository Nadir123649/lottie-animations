import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LovLogo from '../../images/loewe logo.png';
import rhodelogo from '../../images/rhodelogo.png';
import maylogo from '../../images/maylogo.png';
import mcdo from '../../images/mcdo.png';
import bmdord from '../../images/bmdord.png';
import drewlogo from '../../images/drewlogo.png';
import twentytwo from '../../images/twentytwo.png';
import lavas from '../../images/lavas.png';
import { Player } from '@lottiefiles/react-lottie-player';
import fila from '../../images/fila.png';
import arrowAnimation from '../../lottie-animation/stroke-animation/data1.json';

const companiesdata = [
    { id: 1, logo: LovLogo },
    { id: 2, logo: rhodelogo },
    { id: 3, logo: maylogo },
    { id: 4, logo: mcdo },
    { id: 5, logo: bmdord },
    { id: 6, logo: drewlogo },
    { id: 7, logo: twentytwo },
    { id: 8, logo: lavas },
    { id: 9, logo: fila },
];

const SliderSection = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.7,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            });
        }, observerOptions);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    const sliderSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,            // Reduced transition time for smoother sliding
        autoplaySpeed: 3000,    // Increased autoplay speed to 3 seconds between slides
        dots: false,
        arrows: false,
        cssEase: "linear",      // Linear easing for a consistent smooth effect
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    speed: 1000,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 1000,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    speed: 1000,          // Keeping consistent speed across breakpoints
                    autoplaySpeed: 3000    // Slowing down for mobile users as well
                }
            }
        ]
    };

    return (
        <section ref={sectionRef} className='py-0 md:py-10 md:pt-5 relative'>
            <div className='pt-0 pb-0 md:pt-12 md:pb-12 mb-[40px] md:mb-[30px] px-2 md:px-0'>
                <p className='font-semibold text-[18px] md:text-[28px] text-center max-w-[640px] mx-auto  description-title'>
                    Trusted to lead brands through complex and <br className='hidden md:block' /> challenging transformations
                </p>
            </div>

            <div className='container client-logo-container mx-auto px-4 mb-[48px] mt-[20px] md:mb-[20px] md:mt-[20px]'>
                <Slider {...sliderSettings}>
                    {companiesdata.map((company) => (
                        <div key={company.id} className='slide flex justify-center items-center py-2 logo-slide'>
                            <img
                                src={company.logo}
                                alt={`Logo ${company.id}`}
                                className='w-[160px] h-[63px] md:w-[234px] md:h-[60px] min-h-[60px] mx-auto block object-contain'
                            />
                        </div>

                    ))}
                </Slider>
            </div>
            {hasAnimated && (
                <Player
                    autoplay
                    loop={false}
                    src={arrowAnimation}
                    className='absolute  arrow-three'
                    keepLastFrame={true}
                />
            )}

            {/* 
            {hasAnimated && (
                <Lottie
                    animationData={arrowAnimation}
                    loop={false}
                    className='absolute arrow-two'
                    keepLastFrame={true}
                />
            )}
            {hasAnimated && (
                <Lottie
                    animationData={curlyarrowAnimation}
                    loop={false}
                    className='absolute right-[-100px] bottom-[-115px] arrow-one'
                    keepLastFrame={true}
                />
            )} */}
        </section>
    );
};

export default SliderSection;
