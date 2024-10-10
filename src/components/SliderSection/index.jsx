import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import asset7Logo from '../../images/Asset-7.png';

const companiesdata = [
    { id: 1, logo: asset7Logo },
    { id: 2, logo: asset7Logo},
];

const SliderSection = () => {
    
    const sliderSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        dots: false,
        arrows: false,
        autoplaySpeed: 2000,
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
        <section className='bg-[#F1F1F1]'>
            <div className='container client-logo-container mx-auto px-4'>
                <Slider {...sliderSettings}>
                    {companiesdata.map((company) => (
                        <div key={company.id} className='slide flex justify-center items-center p-4'>
                            <img src={company.logo} alt={`Logo ${company.id}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default SliderSection;
