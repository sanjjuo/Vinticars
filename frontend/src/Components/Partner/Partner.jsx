import React from 'react'
import Slider from 'react-slick'
import { partners } from '../../Data';

const Partner = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='py-[50px]'>
                <div className="container">
                    <h5 className='text-center text-customGray text-sm font-light tracking-widest mb-20 cursor-default'>OUR PARTNERS & SUPPORTERS</h5>
                    <Slider {...settings}>
                        {partners.map((item, index) => (
                            <div className='w-[80px] h-[80px]' key={index}>
                                <img src={item.image} alt="" className='w-full h-full object-contain transition ease-in-out duration-700 
                                transform scale-100 hover:scale-110 cursor-pointer' />
                            </div>
                        ))}
                    </Slider>
                </div>

            </section>
        </>
    )
}

export default Partner
