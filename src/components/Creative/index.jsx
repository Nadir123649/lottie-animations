import React from 'react';
import Slider from 'react-slick';
import MainImage from "../../images/Asset-7.png";

function CreativeSection() {
    const sliderSettings = {
        infinite: true,
        slidesToShow: 2,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
        <section className='bg-[#F1F1F1]'>
            <div className='container client-logo-conainer  mx-auto px-4'>
                
            </div>
        </section>
    );
}

export default CreativeSection