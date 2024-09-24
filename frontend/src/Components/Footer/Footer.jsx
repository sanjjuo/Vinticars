import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Footer = () => {
    return (
        <>
            <section className='py-[50px] bg-[url("footer.jpg")] bg-cover bg-center bg-fixed bg-no-repeat w-full h-full bg-black/85 bg-blend-darken'>
                <div className="container px-4 lg:p-0">
                    {/* first part */}
                    <div className='flex flex-col lg:flex-row pb-10 lg:pb-0 justify-between items-center border-0 border-b-[1px] border-customGray'>
                        <div className='w-[150px] h-[150px]'>
                            <img src="logo.png" alt="" className='w-full h-full object-cover' />
                        </div>
                        <div>
                            <ul className='flex items-center gap-5'>
                                <li className='text-white text-2xl'><FaFacebookF /></li>
                                <li className='text-white text-2xl'><IoLogoInstagram /></li>
                                <li className='text-white text-2xl'><HiOutlineGlobeAlt /></li>
                                <li className='text-white text-2xl'><FaTwitter /></li>
                                <li className='text-white text-2xl'><GrYoutube /></li>
                            </ul>
                        </div>
                    </div>

                    {/* second part */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-5 my-16">
                        {/* first col */}
                        <div>
                            <h3 className='text-white text-xl tracking-wider font-semibold mb-10'>Contact Information</h3>
                            <p className='text-customGray'>We provide everything you need to build an amazing dealership.</p>
                            <ul className='mt-5 text-customGray space-y-5'>
                                <li className='flex items-center gap-2'><ImLocation className='text-main text-4xl' />1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104</li>
                                <li className='flex items-center gap-2'><MdPhone className='text-main text-2xl' />(007) 123 456 7890</li>
                                <li className='flex items-center gap-2'><MdEmail className='text-main text-2xl' />support@example.com</li>
                            </ul>
                        </div>

                        {/* second col */}
                        <div>
                            <h3 className='text-white text-xl tracking-wider font-semibold mb-10'>Useful Links</h3>
                            <ul className='mt-5 text-customGray space-y-5'>
                                <li className='transition duration-500 transform scale-100 ease-in-out hover:scale-105 cursor-pointer hover:text-main'>
                                    Change Oil and Filter</li>
                                <li className='transition duration-500 transform scale-100 ease-in-out hover:scale-105 cursor-pointer hover:text-main'>
                                    Brake Pads Replacement</li>
                                <li className='transition duration-500 transform scale-100 ease-in-out hover:scale-105 cursor-pointer hover:text-main'>
                                    Timing Belt Replacement</li>
                                <li className='transition duration-500 transform scale-100 ease-in-out hover:scale-105 cursor-pointer hover:text-main'>
                                    Pre-purchase Car Inspection</li>
                                <li className='transition duration-500 transform scale-100 ease-in-out hover:scale-105 cursor-pointer hover:text-main'>
                                    Starter Replacement</li>
                                <li className='transition duration-500 transform scale-100 ease-in-out hover:scale-105 cursor-pointer hover:text-main'>
                                    Air Conditioning</li>
                            </ul>
                        </div>

                        {/* third col */}
                        <div>
                            <h3 className='text-white text-xl tracking-wider font-semibold mb-10'>Recent Posts</h3>
                            <ul className='mt-5 text-customGray space-y-3'>
                                <li className='flex items-center gap-4 border-0 border-b-[1px] border-customGray pb-3'>
                                    <img src="c1.jpg" alt="" className='w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] object-cover' />
                                    <ul className='text-customGray space-y-2'>
                                        <li className='transition duration-500 transform scale-100 ease-in-out hover:scale-105 cursor-pointer hover:text-main'>Time to change your</li>
                                        <li className='flex items-center gap-2 text-sm'><SlCalender className='text-main' />September 10, 2021</li>
                                    </ul>
                                </li>

                                <li className='flex items-center gap-4 border-0 border-b-[1px] border-customGray pb-3'>
                                    <img src="c3.jpg" alt="" className='w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] object-cover' />
                                    <ul className='text-customGray space-y-2'>
                                        <li className='transition duration-500 transform scale-100 ease-in-out hover:scale-105 cursor-pointer hover:text-main'>The best time to</li>
                                        <li className='flex items-center gap-2 text-sm'><SlCalender className='text-main' />September 10, 2021</li>
                                    </ul>
                                </li>

                                <li className='flex items-center gap-4'>
                                    <img src="c5.jpg" alt="" className='w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] object-cover' />
                                    <ul className='text-customGray space-y-2'>
                                        <li className='transition duration-500 transform scale-100 ease-in-out hover:scale-105 cursor-pointer hover:text-main'>Replacing a timing</li>
                                        <li className='flex items-center gap-2 text-sm'><SlCalender className='text-main' />September 10, 2021</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        {/* fourth col */}
                        <div>
                            <h3 className='text-white text-xl tracking-wider font-semibold mb-10'>Download App</h3>
                            <p className='text-customGray'>Download Our Car Dealer Mobile Application.</p>
                            <ul className='mt-5 space-y-3'>
                                <li>
                                    <img src="appstore.png" alt="" />
                                </li>
                                <li>
                                    <img src="play-store.png" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* third part */}
                <div className='border-0 border-t-[1px] border-customGray pt-10'>
                    <div className="container px-4 lg:px-0">
                        <ul className='flex flex-col justify-center items-center text-center lg:text-left lg:flex lg:flex-row lg:justify-between lg:items-center'>
                            <li className='text-customGray'>&copy;Copyright {new Date().getFullYear()} VintiCars Developed by <span className='text-main'>Mohamed Sanjeed</span></li>
                            <li className='text-customGray'>
                                <ul className='mt-5 lg:mt-0 flex flex-col lg:flex-row items-center gap-4 capitalize'>
                                    <li>privacy policy</li>
                                    <li>terms and conditions</li>
                                    <li>contact us</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
