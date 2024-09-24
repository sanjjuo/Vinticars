import React from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Button } from "@material-tailwind/react"

const Filter = () => {
    return (
        <>
            <section className='mt-[-130px]'>
                <div className="container px-4 lg:p-0">
                    <div className='bg-white p-[20px] lg:p-[40px] rounded-xl shadow-lg'>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-6">
                            <div className='flex flex-col'>

                                {/* year select */}
                                <label htmlFor="year-select" className="text-md font-light text-customGray">Select Year</label>
                                <select id="year-select" className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none mb-5">
                                    <option value="">--Select Year--</option>
                                    {Array.from({ length: 50 }, (_, i) => {
                                        const year = 2006 - i;
                                        return (
                                            <option key={year} value={year} className='text-customGray'>
                                                {year}
                                            </option>
                                        );
                                    })}
                                </select>

                                {/* mileage */}
                                <label htmlFor="mileage-select" className="text-md font-light text-customGray">Select Mileage</label>
                                <select id="mileage-select" className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none mb-5">
                                    <option value="">--Select Mileage--</option>
                                    <option value="≤10000">≤ 10000</option>
                                    <option value="≤20000">≤ 20000</option>
                                    <option value="≤30000">≤ 30000</option>
                                    <option value="≤40000">≤ 40000</option>
                                    <option value="≤50000">≤ 50000</option>
                                    <option value="≤60000">≤ 60000</option>
                                    <option value="≤70000">≤ 70000</option>
                                    <option value="≤80000">≤ 80000</option>
                                    <option value="≤80000">≤ 90000</option>
                                    <option value="≤80000">≤ 100000</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                {/* company-select */}
                                <label htmlFor="company-select" className="text-md font-light text-customGray">Select Company</label>
                                <select id="company-select" className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none mb-5">
                                    <option value="">--Select Company--</option>
                                    <option value="Ford">Ford</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Cheverolet">Cheverolet</option>
                                    <option value="Mercedez Benz">Mercedez Benz</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Lotus">Lotus</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Aston Martin">Aston Martin</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                    <option value="Fiat">Fiat</option>
                                </select>


                                {/* transmission */}
                                <label htmlFor="transmission-select" className="text-md font-light text-customGray">Select Transmission</label>
                                <select id="transmission-select" className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none mb-5">
                                    <option value="">--Select Transmission--</option>
                                    <option value="">Manual</option>
                                    <option value="">Automatic</option>
                                    <option value="">Semi-Automatic</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                {/* model */}
                                <label htmlFor="Model-select" className="text-md font-light text-customGray">Select Model</label>
                                <select id="Model-select" className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none mb-5">
                                    <option value="">--Select Model--</option>
                                    <option value="BMW M1">BMW M1</option>
                                    <option value="Mercedez Benz 300SL">Mercedez Benz 300SL</option>
                                    <option value="Ford Mustang">Ford Mustang</option>
                                    <option value="Cheverolet Corvett">Cheverolet Corvett</option>
                                    <option value="Toyota Land Cruiser FJ40">Toyota Land Cruiser FJ40</option>
                                    <option value="Lotus Elan">Lotus Elan</option>
                                    <option value="Datsun 240Z">Datsun 240Z</option>
                                    <option value="Aston Martin DB5">Aston Martin DB5</option>
                                    <option value="Volkswagen Beetle">Volkswagen Beetle</option>
                                    <option value="Fiat 124 Sport Spider">Fiat 124 Sport Spider</option>
                                </select>

                                {/* condition */}
                                <label htmlFor="condition-select" className="text-md font-light text-customGray">Select Condition</label>
                                <select id="condition-select" className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none mb-5">
                                    <option value="">--Select Condition--</option>
                                    <option value="">Certified</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-5">
                                <label htmlFor="" className='text-md font-light text-customGray'>Price</label>
                                <RangeSlider />
                                <Button className='capitalize text-md bg-main rounded-md w-full lg:w-[60%] hover:bg-subMain'>Search Inventory</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Filter;
