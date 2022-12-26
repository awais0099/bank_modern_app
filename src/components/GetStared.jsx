import React from "react";
import { arrowUp } from "../assets";

function GetStarted() {
    return (
        <div className="flex justify-center items-center rounded-full w-[140px] h-[140px]
            bg-blue-gradient p-[2px] cursor-pointer">
            <div className="flex flex-col justify-center items-center rounded-full w-[100%] h-[100%] bg-primary">
                <div className="flex justify-center items-start flex-row">
                    <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img src={arrowUp} alt="arrow-icon" className="w-[23px] h-[23px] ml-2 object-contain" />
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">Started</span>
                </p>
            </div>
        </div>
    );
}

export default GetStarted;