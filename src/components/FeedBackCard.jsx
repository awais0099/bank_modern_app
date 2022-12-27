import React from "react";
import { quotes } from "../assets";

function FeedBackCard({name, content, title, img}) {
    return (
        <div className="flex flex-col items-start justify-between
            rounded-[10px] py-12 px-10 md:mr-10 sm:mr-5 mr-0 max-w-[370px] feedback-card">
            <img src={quotes} alt="quotes" className="w-[32px] h-[42px]" />
            <p className='font-poppins py-10 font-normal text-dimWhite text-[18px] leading-[30.8px]'>
                {content}
            </p>
            <div className="flex flex-row justify-center items-center">
                <img src={img} alt="people01" className="w-[36px] h-[36px]" />
                <p className="flex flex-col ml-3">
                    <span className="text-white">{name}</span>
                    <span className="text-dimWhite">{title}</span>
                </p>
            </div>
        </div>
    );
}

export default FeedBackCard;