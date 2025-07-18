import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import brandinglogo from '../../images/mark-branding.png';
import productlogo from '../../images/mark-product.png';
import developmentlogo from '../../images/app development.png';
import marketinglogo from '../../images/mark-marketing.png';
import advertisinglogo from '../../images/advertising.png';

function CreativeSection() {

    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
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

    const dataSets = [
        {
            id: 1,
            title: 'Branding & Design',
            description: 'From bold new logos to refreshing existing ones, brand guidelines, and complete visual identity systems, we cover everything to elevate your brand.',
            logo: brandinglogo,
        },
        {
            id: 2,
            title: 'Product Creation',
            description: 'We take your product from concept to completion, handling design, development, and launch to deliver innovative solutions that meet your business goals.',
            logo: productlogo,
        },
        {
            id: 3,
            title: 'Digital Development',
            description: 'Designing, developing, and launching websites and apps that provide seamless user experiences and drive business growth from start to finish.',
            logo: developmentlogo,
        },
        {
            id: 4,
            title: 'Digital Marketing',
            description: 'Tailored strategies are crafted and executed to drive brand awareness, engagement, and growth through targeted campaigns across social media, search, and digital platforms.',
            logo: marketinglogo,
        },
        {
            id: 5,
            title: 'Advertising',
            description: 'Bold, guerrilla-style campaigns are crafted to reach the right audience, maximising visibility and engagement across digital, print, and unconventional platforms.',
            logo: advertisinglogo,
        },
    ];

    const sliderSettings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,  // Slowed down to 3 seconds per slide
        speed: 1000,          // Match the transition speed to autoplay for smoothness
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000, // Ensure consistency across breakpoints
                    speed: 1000
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000, // Adjust for smaller screens
                    speed: 1000
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000, 
                    speed: 1000     
                }
            }
        ]
    };


    return (
        <section ref={sectionRef} id='needs-section' className='creative-box-section pt-[38px] pb-[0px] md:pt-[140px] md:pb-[10px] relative'>
            <h1 className='font-semibold text-[18px] md:text-[28px] text-center max-w-[640px] mx-auto  description-title'>
                Creative solutions. Exceptional results.
                Assisting brands succeed through every challenge.
            </h1>
            <div>
                <div className='container mt-[30px] md:mt-0'>
                    <Slider {...sliderSettings}>
                        {dataSets.map(({ id, title, description, logo }) => (
                            <div key={id} className='flex flex-col gap-2 items-center p-2 md:p-4 marketing-boxes'>
                                <div className='hover-container flex flex-col items-center gap-2'>
                                    <img src={logo} alt={title} className='hover-img' />
                                    <h1 className='hover-title font-semibold text-[17px]'>{title}</h1>
                                    <p className='hover-description'>{description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default CreativeSection;
