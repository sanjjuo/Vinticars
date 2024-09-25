import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { body, partners } from '../../Data'

const Search = () => {
    const [menu, setMenu] = useState("company")
    return (
        <>
            <section className='py-[50px]'>
            <div className="container px-4 lg:p-0">
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0'>
                        <div>
                            <h1 className='text-3xl font-bold text-subMain capitalize m-0'>I want search</h1>
                        </div>
                        <div className='flex gap-4'>
                            <Button className='bg-main font-normal capitalize text-sm lg:text-base p-3 hover:bg-white hover:text-main'
                                onClick={() => setMenu("company")}>Browse Company</Button>
                            <Button className='bg-gray-300 font-normal text-black capitalize p-3 text-sm lg:text-base hover:bg-main hover:text-white'
                                onClick={() => setMenu("body")}>Browse Body Style</Button>
                        </div>
                    </div>

                    {/* car companies */}
                    {menu === "company" ? (
                        <div className='mt-16'>
                            <div className='grid grid-cols-1 lg:grid-cols-5 gap-3'>
                                {partners.map((item, index) => (
                                    <div key={index} className='flex items-center justify-center w-full h-[130px] p-1 border-[2px] border-gray-400 rounded-lg cursor-pointer
                                     hover:border-main'>
                                        <div className='w-[100px] h-[100px] overflow-hidden'>
                                            <img src={item.image} alt="" className='w-full h-full object-contain transition-all duration-500 
                                         ease-in-out transform scale-100 hover:scale-105' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className='mt-16'>
                            <div className='grid grid-cols-1 lg:grid-cols-5 gap-3'>
                                {body.map((item, index) => (
                                    <div key={index} className='w-full h-full flex flex-col p-2 items-center justify-center border-[2px] border-gray-400 hover:border-main rounded-lg cursor-pointer'>
                                        <div className='w-[100px] h-[100px] flex items-center flex-col transition duration-500 ease-in-out scale-100
                                      hover:scale-105 overflow-hidden'>
                                            <img src={item.image} alt="" className='w-full h-full object-contain transition-all duration-500' />
                                            <p className='text-black font-medium text-base'>{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Search
