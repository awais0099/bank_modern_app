import React from "react";
import {Button} from "./index";

function CTA() {
    return (
        <section id='cta' className='flex md:flex-row flex-col justify-center items-center
        	sm:px-16 px-6 sm:py-12 py-4 sm:my-16 my-6 bg-black-gradient rounded-[20px] box-shadow'>
	        	<div className='flex-1 flex flex-col justify-center sm:items-start sm:pl-0 pl-3 md:mr-[200px] py-10'>
	        		<h2 className='font-poppins font-bold text-white xs:text-[48px] text-[40px] sm:mb-4 mb-2'>
	        			Let's try our service now!
	        		</h2>
	        		<p className='font-poppins text-[18px] font-normal text-dimWhite sm:max-w-[470px]'>
	        			Proident nisi ea irure dolor deserunt consectetur nisi nulla.
	        			Proident nisi ea irure dolor deserunt consectetur nisi nulla.
	        		</p>
	        	</div>
	        	<div className='flex justify-center items-center'>
	        		<Button />
	        	</div>
        </section>
    );
}

export default CTA;