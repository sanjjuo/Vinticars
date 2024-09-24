import React, { useState } from 'react';
import { FaPlay, FaTimes } from "react-icons/fa";
import ReactPlayer from 'react-player';

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlaying = () => {
        setIsPlaying(true);
    };

    const handleClose = () => {
        setIsPlaying(false);
    };

    return (
        <>
            <section className='py-[50px] bg-[url("video.jpg")] bg-center bg-no-repeat bg-black/70 bg-blend-darken bg-cover w-full h-full'>
                <div className="container px-4 lg:p-0">
                    <div className='flex flex-col justify-center items-center gap-7 h-[100vh]'>
                        {!isPlaying ? (
                            <div
                                className='bg-white text-main w-[100px] h-[100px] rounded-full flex justify-center items-center text-xl
                                transition ease-in-out duration-700 hover:bg-main hover:text-white cursor-pointer'
                                onClick={handlePlaying}
                            >
                                <FaPlay />
                            </div>
                        ) : (
                            <div className="relative w-full h-[500px]">
                                <ReactPlayer
                                    url="https://youtu.be/aCLcVRFIfGk?si=QFfkMEnu4zAhEUM7"
                                    width="100%"
                                    height="500px"
                                    playing={true}
                                    controls={true}
                                    className="w-full h-full"
                                />
                                <button
                                    onClick={handleClose}
                                    className='absolute top-[-10px] right-[-50px] bg-white text-main w-[40px] h-[40px] rounded-full flex justify-center items-center text-xl
                                    transition ease-in-out duration-300 hover:bg-main hover:text-white cursor-pointer'
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        )}
                        <h1 className='text-center max-w-[850px] text-white text-lg lg:text-[40px] capitalize font-bold cursor-default'>
                            Want to know more about? Play our promotional video now!
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Video;
