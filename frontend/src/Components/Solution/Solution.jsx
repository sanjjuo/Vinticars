import { Button } from '@material-tailwind/react';
import React from 'react';
import { MdDone } from "react-icons/md";
import { MdPhone } from "react-icons/md";

const Solution = () => {
    return (
        <>
            <section className='py-[50px]'>
                <div className="container px-4 lg:p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className='lg:w-[500px] h-[600px] relative overflow-hidden'>
                            <img src="solution.jpg" alt="" className='w-full h-full object-cover transition ease-in-out duration-500 transform scale-100
                             hover:scale-110' />
                            <h3 className='absolute right-[0px] bottom-0 text-center bg-main text-white text-lg lg:text-2xl font-semibold p-2 w-full cursor-default'>We Provide Our Best Services</h3>
                        </div>
                        <div>
                            <h1 className='mt-5 lg:mt-0 text-center lg:text-start text-[25px] lg:text-[50px] text-subMain font-extrabold mb-5 cursor-default'>We Provide Best Solution Vehicles</h1>
                            <p className='text-[14px] text-justify lg:text-[16px] text-customGray font-light cursor-default'>At VintiCars, we not only provide the finest selection of vintage vehicles but also ensure they are maintained
                                to the highest standards. Our expert team is dedicated to preserving the authenticity
                                and performance of each classic car. Experience seamless service and unmatched care for your vehicle.</p>
                            <ul className='mt-5 space-y-4 font-semibold'>
                                <li className='flex items-center gap-2 cursor-default'><MdDone className='text-main text-xl' />
                                    Comprehensive Restoration to maintain originality and performance.</li>
                                <li className='flex items-center gap-2 cursor-default'><MdDone className='text-main text-xl' />
                                    Regular Maintenance Plans to keep your car in pristine condition.</li>
                                <li className='flex items-center gap-2 cursor-default'><MdDone className='text-main text-xl' />
                                    Expert Mechanical Services from vintage car specialists.</li>
                                <li className='flex items-center gap-2 cursor-default'><MdDone className='text-main text-xl' />
                                    Authentic Parts Replacement to preserve the integrity of your vehicle.</li>
                                <li className='flex items-center gap-2 cursor-default'><MdDone className='text-main text-xl' />
                                    Consultation & Inspection for tailored advice on your car's needs.</li>
                            </ul>
                            <div>
                                <ul className='mt-8 flex flex-col gap-10 lg:flex lg:flex-row items-center lg:gap-20'>
                                    <li><Button className='bg-main capitalize text-xl rounded-md font-normal hover:bg-subMain'>Our Services</Button></li>
                                    <li className='bg-customGray/20 w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-main group cursor-pointer'><MdPhone className='text-main text-2xl group-hover:text-white'/></li>
                                    <li className='flex flex-col text-customGray cursor-default'>Call Anytime <span className='text-black font-semibold cursor-pointer'>+88 (9800) 6802</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solution
