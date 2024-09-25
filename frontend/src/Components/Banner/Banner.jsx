import React from 'react'
import Slider from 'react-slick';
import { banner } from '../../Data';
import { motion } from "framer-motion"

const Banner = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    return (
        <>
            <Slider {...settings} className='lg:mt-[-200px] z-[-1]'>
                {/* <div> */}
                {banner.map((item, index) => (
                    <div className='h-[500px] lg:h-[700px] relative' key={index}>
                        <img src={item.image} className='w-full h-full object-cover' />
                        <div className='absolute top-[55%] lg:absolute lg:top-[25%] left-[10%] right-[10%] flex flex-col justify-center items-center'>
                            <motion.h1 initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1}}
                             className='text-[45px] lg:text-[200px] !font-serif stroke-white tracking-widest drop-shadow-[-8px_4px_6px_rgba(0,0,0,.8)] m-0' style={{ fontFamily: 'Lora, serif' }}>
                                VINTI<span className='text-white !font-serif' style={{ fontFamily: 'Lora, serif' }}>CARS</span></motion.h1>
                            <p className='absolute top-[225px] text-white font-extrabold text-3xl tracking-widest !font-serif' style={{ fontFamily: 'Lora, serif' }}>Timeless Classics, Unmatched Elegance</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default Banner
