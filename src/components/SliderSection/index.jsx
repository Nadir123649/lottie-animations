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
import fila from '../../images/fila.png';
import Lottie from 'lottie-react';
import arrowAnimation from '../../lottie-animation/stroke-animation/data2.json';
import curlyarrowAnimation from '../../lottie-animation/stroke-animation/data4.json';

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
        speed: 5000,
        dots: false,
        arrows: false,
        autoplaySpeed: 300,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section ref={sectionRef} className='py-10 md:pt-20 relative'>
            <div className='container client-logo-container mx-auto px-4 mb-[48px] mt-[20px] md:mb-[90px] md:mt-[0px]'>
                <Slider {...sliderSettings}>
                    {companiesdata.map((company) => (
                        <div key={company.id} className='slide flex justify-center items-center  gap-2py-2 logo-slide'>
                            <img src={company.logo} alt={`Logo ${company.id}`} className='max-w-[234px] mx-auto w-full block h-auto min-h-[63px] max-h-[63px] object-contain' />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='pt-0 pb-0 md:pt-12 md:pb-12 mb-[0px] md:mb-[90px] px-2 md:px-0'>
                <p className='text-lg md:text-3xl text-black font-normal text-center'>
                    Trusted to lead brands through complex and <br /> challenging transformations
                </p>
            </div>

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
            )}
        </section>
    );
};

export default SliderSection;
