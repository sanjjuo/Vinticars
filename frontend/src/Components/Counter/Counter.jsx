import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counter, setCounter] = useState(false);
    return (
        <>
            <section className='mt-[-100px] lg:mt-[-150px]'>
                <div className="container px-4 lg:p-0">
                    <div className='bg-main rounded-lg p-5 lg:h-[230px] flex justify-center items-center'>
                        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-52">
                                {/* first col */}
                                <div>
                                    <ul className='text-center'>
                                        <li className='text-4xl lg:text-5xl text-white font-bold'>
                                            <span className="inline-block w-[130px]">
                                                {counter && <CountUp start={100} end={400} duration={40} />}k
                                            </span>
                                        </li>
                                        <li className='text-white text-lg lg:text-xl'>Vehicles Stock</li>
                                    </ul>
                                </div>

                                {/* second col */}
                                <div>
                                    <ul className='text-center'>
                                        <li className='text-4xl lg:text-5xl text-white font-bold'>
                                            <span className="inline-block w-[130px]">
                                                {counter && <CountUp start={0} end={25} duration={10} />}+
                                            </span>
                                        </li>
                                        <li className='text-white text-lg lg:text-xl'>Years Experience</li>
                                    </ul>
                                </div>

                                {/* third col */}
                                <div>
                                    <ul className='text-center'>
                                        <li className='text-4xl lg:text-5xl text-white font-bold'>
                                            <span className="inline-block w-[130px]">
                                                {counter && <CountUp start={900} end={3990} duration={15} />}+
                                            </span>
                                        </li>
                                        <li className='text-white text-lg lg:text-xl'>Satisfied Clients</li>
                                    </ul>
                                </div>

                                {/* fourth col */}
                                <div>
                                    <ul className='text-center'>
                                        <li className='text-4xl lg:text-5xl text-white font-bold'>
                                            <span className="inline-block w-[130px]">
                                                {counter && <CountUp start={20} end={150} duration={10} />}+
                                            </span>
                                        </li>
                                        <li className='text-white text-lg lg:text-xl'>Dealer Review</li>
                                    </ul>
                                </div>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Counter;
