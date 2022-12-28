import React from "react";
import { quotes, people01 } from "../assets";
import { feedback } from "../constants";
import {FeedBackCard} from "./index";

function Testimonial() {
    return (
        <section id="testimononial md:py-16 py-6">
            <div className="w-full flex md:flex-row flex-col items-center justify-between sm:mb-16 mb-6">
                <h2 className='w-full font-poppins font-semibold xs:text-[48px] sm:text-[40px] text-[28px] text-white xs:leading-[76.8px] sm:leading-[66.8px] leading-[46.8px]'>
                    What people are <br className="md:block hidden" /> saying about us
                </h2>
                <p className='font-poppins text-dimWhite text-[18px] mt-5 leading-[30.8px] sm:max-w-[470px]'>
	        		Nostrud dolor mollit sint fugiat nostrud pariatur proident in occaecat
	        		laborum voluptate dolor
        		</p>
            </div>
            <div className="flex flex-row flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                {feedback.map((feedback, index) => (
                    <FeedBackCard
                        key={feedback.id}
                        img={feedback.img}
                        name={feedback.name}
                        title={feedback.title}
                        content={feedback.content}
                    />
                ))}
            </div>
        </section>
    );
}

export default Testimonial;