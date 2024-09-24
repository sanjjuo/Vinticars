import React from 'react'
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from "react-icons/hi";

const Services = () => {
    return (
        <>
            <section className='py-[50px]'>
                <div className="container px-4 lg:p-0">
                    <h1 className='text-center text-[25px] lg:text-[50px] text-subMain font-extrabold mb-5'>We Provide Vintage Cars</h1>
                    <p className='text-[14px] lg:text-[16px] text-justify text-customGray font-light'>At <span className='text-main font-medium'>VINTICARS</span>, we are passionate about preserving the legacy of vintage cars. Our specialized
                        services cater to the unique needs of classic vehicles, ensuring they stay in pristine condition while
                        maintaining their original charm. Whether you're restoring a timeless masterpiece or need regular maintenance,
                        our team of skilled experts is dedicated to delivering excellence for every vintage car lover.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-5 my-10">
                        <div className='flex flex-col text-center items-center lg:items-start lg:text-left lg:border-r-2 lg:border-b-0 lg:p-[10px_20px_10px_0] group overflow-hidden cursor-pointer'>
                            <div className='w-[100px] h-[100px] mb-2'>
                                <img src="/restore.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold text-subMain'>Full Restoration</h1>
                                <p className='font-light text-customGray text-justify'>Bringing your vintage car back to its original glory with meticulous attention to detail,
                                    from bodywork and paint to interior and mechanical components.</p>
                                <Link className='transition transform translate-x-[-82px] duration-700 group-hover:translate-x-0 
                                    flex items-center gap-2 text-main font-semibold'>Readmore <HiArrowNarrowRight /></Link>
                            </div>
                        </div>

                        <div className='flex flex-col text-center items-center lg:items-start lg:text-left lg:border-r-2 lg:border-b-0 lg:p-[10px_20px_10px_0] group overflow-hidden cursor-pointer'>
                            <div className='w-[100px] h-[100px] mb-2'>
                                <img src="/engine.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold text-subMain'>Engine Rebuilding & Tuning</h1>
                                <p className='font-light text-customGray text-justify'>Ensuring your classic car's engine performs like it did decades ago,
                                    with precision tuning and complete overhauls for improved reliability.</p>
                                <Link className='transition transform translate-x-[-82px] duration-700 group-hover:translate-x-0 
                                    flex items-center gap-2 text-main font-semibold'>Readmore <HiArrowNarrowRight /></Link>
                            </div>
                        </div>

                        <div className='flex flex-col text-center items-center lg:items-start lg:text-left lg:border-r-2 lg:border-b-0 lg:p-[10px_20px_10px_0] group overflow-hidden cursor-pointer'>
                            <div className='w-[100px] h-[100px] mb-2'>
                                <img src="/maintain.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold text-subMain'>Classic Car Maintenance</h1>
                                <p className='font-light text-customGray text-justify'>Regular maintenance and expert repairs to keep your vintage car running smoothly,
                                    while preserving its original character.</p>
                                <Link className='transition transform translate-x-[-82px] duration-700 group-hover:translate-x-0 
                                    flex items-center gap-2 text-main font-semibold'>Readmore <HiArrowNarrowRight /></Link>
                            </div>
                        </div>

                        <div className='flex flex-col text-center items-center lg:items-start lg:text-left lg:p-[10px_20px_10px_0] group overflow-hidden cursor-pointer'>
                            <div className='w-[100px] h-[100px] mb-2'>
                                <img src="/price.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold text-subMain'>Best Prices In District</h1>
                                <p className='font-light text-customGray text-justify'>Find the best deals on classic and vintage cars at unbeatable prices. We offer top-quality vehicles at competitive rates,
                                    ensuring you get great value for your dream car.</p>
                                <Link className='transition transform translate-x-[-82px] duration-700 group-hover:translate-x-0 
                                    flex items-center gap-2 text-main font-semibold'>Readmore <HiArrowNarrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
