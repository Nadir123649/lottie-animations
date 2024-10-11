import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import asset7Logo from '../../images/Asset-7.png';
import Lottie from 'lottie-react'; // Import Lottie
import arrowAnimation from '../../lottie-animation/stroke-animation/data2.json';
import curlyarrowAnimation from '../../lottie-animation/stroke-animation/data4.json';
import { Player } from 'lottie-react';

const companiesdata = [
    { id: 1, logo: asset7Logo },
    { id: 2, logo: asset7Logo },
];

const SliderSection = () => {
    const sliderSettings = {
        infinite: true,
        slidesToShow: 2,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className='py-20 relative'>
            <div className='container client-logo-container mx-auto px-4 mb-[90px]'>
                <Slider {...sliderSettings}>
                    {companiesdata.map((company) => (
                        <div key={company.id} className='slide flex justify-center items-center py-2'>
                            <img src={company.logo} alt={`Logo ${company.id}`} className='bg-[#F1F1F1] max-w-[430px] mx-auto w-full block' />
                        </div>
                    ))}
                </Slider>
            </div>
            {/* <div className='flex justify-center mb-4'>
              
            </div> */}
              <Lottie 
                    animationData={arrowAnimation} 
                    loop={false} 
                    style={{ width: 300, height: 300 }} 
                    className='absolute left-[20px] bottom-[30px]'
                    keepLastFrame={true} 
            />
            <Lottie 
                    animationData={curlyarrowAnimation} 
                    loop={false} 
                    style={{ width: 200, height: 300 }} 
                    className='absolute right-[20px] bottom-[-30px]'
                    keepLastFrame={true} 
                />
            <div>
                <p className='text-3xl text-black font-semibold text-center'>
                    Trusted to lead brands through complex and <br /> challenging transformations
                </p>
            </div>
        </section>
    );
};

export default SliderSection;
