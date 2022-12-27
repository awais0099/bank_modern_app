import React from "react";
import {Button} from "./index.js";
import {card} from '../assets';

function CardDeal() {
    return (
        <section id="features" className='flex md:flex-row flex-col sm:py-16 py-6'>
        	<div className='text-white flex-1 flex flex-col items-start justify-center'>
        		<h2 className='w-full font-poppins font-semibold xs:text-[48px] sm:text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]'>
        			Find better card deal in few easy steps.
        		</h2>
        		<p className='font-poppins text-dimWhite text-[18px] mt-5 leading-[30.8px] sm:max-w-[470px]'>
	        		Nostrud dolor mollit sint fugiat nostrud pariatur proident in occaecat
	        		laborum voluptate dolor anim labore nostrud nisi consectetur nostrud culpa
	        		do commodo pariatur consectetur cupidatat features ad tempor irure.
        		</p>
        		<Button styles='mt-10' />
        	</div>
            <div className='flex-1 flex justify-center items-center md:mt-10 mt-0 md:mr-10 mr-0 relative'>
        		<img src={card} alt="card-deal" className="w-[100%] h-[100%] z-[5]" />
            </div>
        </section>
    );
}

export default CardDeal;