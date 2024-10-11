import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import brandinglogo from '../../images/branding.png';
import productlogo from '../../images/product creation.png';
import developmentlogo from '../../images/app development.png';
import marketinglogo from '../../images/digital martketing.png';
import advertisinglogo from '../../images/advertising.png';
import arrowAnimation from '../../lottie-animation/stroke-animation/data1.json';

function CreativeSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("needs-section");
        if (element && !hasAnimated) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75) {
                setIsVisible(true);
                setHasAnimated(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
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

    return (
        <section id='needs-section' className='creative-box-section py-40 relative'>
             
                {isVisible && (
                    <Player
                        autoplay
                        loop={false}
                        src={arrowAnimation}
                        style={{ height: '600px', width: '600px' }}
                        className='absolute bottom-[-220px] right-0'
                        keepLastFrame={true} 
                    />
                )}

            <h1 className='font-semibold text-[28px] text-center max-w-[640px] mx-auto pb-20'>
                Creative solutions. Exceptional results.
                Assisting brands succeed through every challenge.
            </h1>
            <div className='flex justify-between'>
                {dataSets.map(({ id, title, description, logo }) => (
                    <div key={id} className='flex flex-col gap-2 items-center p-4 marketing-boxes max-w-[400px]'>
                        <div className='hover-container flex flex-col items-center gap-2'>
                            <img src={logo} alt={title} className='hover-img' />
                            <h1 className='hover-title'>{title}</h1>
                            <p className='hover-description'>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CreativeSection;
