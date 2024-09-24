import React from 'react'
import Slider from 'react-slick'
import { article } from '../../Data';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from "react-icons/hi";

const Article = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
            <section className='article-section py-[50px]'>
                <div className="container px-4 lg:p-0">
                    <h1 className='text-center text-[25px] lg:text-[50px] text-subMain font-extrabold mb-5'>Our Recent News & Articles</h1>
                    <p className='text-[14px] lg:text-center text-justify lg:text-[16px] text-customGray font-light'>Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme.
                        Suitable for any car dealer websites, business or corporate websites.</p>
                    <div className='mt-10'>
                        <Slider {...settings}>
                            {article.map((item, index) => (
                                <div className='relative shadow-md border overflow-hidden w-full h-[350px]' key={index}>
                                    <div className='w-full h-[150px] overflow-hidden'>
                                        <img src={item.image} alt="" className='w-full h-full object-cover transition-all ease-in-out duration-500 transform scale-100
                                        hover:scale-110'/>
                                        <p className='absolute top-5 right-5 bg-main text-white p-2 w-[70px] lg:w-[100px] text-4xl lg:text-5xl flex flex-col items-center font-bold'>17
                                            <span className='text-sm lg:text-lg font-normal'>May</span></p>
                                    </div>
                                    <div className='p-3 lg:p-10'>
                                        <p className='text-lg text-customGray font-light'>{item.smallTitle}</p>
                                        <h3 className='text-xl lg:text-2xl'>{item.title}</h3>
                                        <Link className='absolute bottom-5 flex items-center gap-2 text-main'>Read more <HiArrowNarrowRight /></Link>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Article
