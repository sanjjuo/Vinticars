import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { BiLink } from "react-icons/bi";
import { PiArrowsLeftRightFill } from "react-icons/pi";
import { CgMaximize } from "react-icons/cg";
import { cars } from '../../Data';

const Cars = () => {
    return (
        <>
            <section className='py-[50px]'>
                <div className="container px-4 lg:p-0">
                    <h1 className='text-center text-[25px] lg:text-[50px] text-subMain font-extrabold mb-5'>Our Featured Cars</h1>
                    <p className='text-[14px] text-justify lg:text-[16px] text-customGray font-light'>Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable
                        for any car dealer websites, business or corporate websites.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4 mt-10">
                        {cars.map((item, index) => (
                            <Card className="mt-6 w-full lg:w-96 rounded-none group cursor-pointer" key={index}>
                                <CardHeader className="relative h-56">
                                    <img
                                        src={item.image}
                                        alt="card-image"
                                        className='object-cover w-full h-full'
                                    />
                                    <p className='absolute bottom-2 right-2 m-0 bg-main text-white p-2 w-[40%] text-center rounded-md'>{item.price}</p>
                                    <ul className='bg-main absolute top-2 bottom-2 right-2 left-2 rounded-md flex justify-center items-center gap-2 opacity-0 
                                    transition-all ease-out duration-700 scale-75 group-hover:opacity-100 group-hover:scale-100'>
                                        <li className='bg-white text-main w-[40px] h-[40px] rounded-md flex justify-center items-center cursor-pointer text-2xl'>
                                            <BiLink /></li>
                                        <li className='bg-white text-main w-[40px] h-[40px] rounded-md flex justify-center items-center cursor-pointer text-2xl'>
                                            <PiArrowsLeftRightFill /></li>
                                        <li className='bg-white text-main w-[40px] h-[40px] rounded-md flex justify-center items-center cursor-pointer text-2xl'>
                                            <CgMaximize /></li>
                                    </ul>
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-0 cursor-pointer">
                                        {item.title}
                                    </Typography>
                                    <Typography>
                                        <ul className='flex items-center justify-between mt-4'>
                                            <li className='flex flex-col items-center cursor-default'>Year
                                                <span className='font-bold'>{item.date}</span></li>
                                            <li className='flex flex-col items-center cursor-default'>Company
                                                <span className='font-bold'>{item.company}</span></li>
                                            <li className='flex flex-col items-center cursor-default'>Transmission
                                                <span className='font-bold'>{item.transmission}</span></li>
                                        </ul>
                                    </Typography>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cars
