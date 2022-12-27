import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStared";

function Hero() {
    return (
        <section id="home" className="flex md:flex-row flex-col items-center sm:py-16 py-6">
            <div className="flex flex-1 sm:items-start items-center xl:px-0 sm:px-16 flex-col">

                <div className="flex items-center py-6 px-4 mb-2 rounded-[10px] bg-discount-gradient">
                    <img src={discount} alt="discount-icon" className="w-[32px] h-[32px]" />
                    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                        <span className="text-white">20%</span> Discount For
                        <span className="text-white"> 1 Month</span> Account
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="text-white font-poppins flex-1 ss:text-[72px] font-semibold text-[52px] ss:leading-[100px] leading-[75px]">
                        The Next <br className="sm:block hidden" />
                        <span className="text-gradient"> Generation</span>
                    </h1>
                    <div className="ss:flex hidden md:mr-4">
                        <GetStarted />
                    </div>
                </div>
                <h1 className="font-poppins text-white ss:text-[68px] font-semibold text-[52px] w-full">
                    Payment Method
                </h1>
                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[420px] mt-5">
                    Do exercitation fugiat occaecat labore commodo anim consequat exercitation quis.
                    Culpa eu magna pariatur minim minim aliqua esse deserunt ea tempor incididunt.
                </p>
            </div>
            <div className='flex-1 flex justify-center items-center relative md:my-0 my-10'>
                <img src={robot} alt="hero-image" className="w-[100%] h-[100%] z-[5]" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
                <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full"></div>
                <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
            </div>
        </section>
    );
}

export default Hero;