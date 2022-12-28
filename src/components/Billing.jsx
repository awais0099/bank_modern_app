import React from "react";
import {bill, apple, google} from '../assets';

function Billing() {
    return (
        <section id="billing" className='flex md:flex-row flex-col-reverse sm:py-16 py-6'>
        	<div className='flex-1 flex justify-center items-center md:mt-10 mt-0 md:mr-10 mr-0 relative'>
        		<img src={bill} alt="billing-card" className="w-[100%] h-[100%] z-[5]" />
                <div className="absolute -left-1/2 top-0 w-[50%] h-[50%] white__gradient z-[3] rounded-full"></div>
                <div className="absolute -left-1/2 bottom-0 w-[50%] h-[50%] pink__gradient z-[0] rounded-full"></div>
            </div>
            <div className='text-white flex-1 flex flex-col items-start justify-center'>
        		<h2 className='w-full font-poppins font-semibold xs:text-[48px] sm:text-[40px] text-[28px] text-white xs:leading-[76.8px] sm:leading-[66.8px]'>
        			Easily control your,<br className='sm:block hidden' /> billing & invoicing.
        		</h2>
        		<p className='font-poppins text-dimWhite text-[18px] mt-5 leading-[30.8px] sm:max-w-[470px]'>
	        		Nostrud dolor mollit sint fugiat nostrud pariatur proident in occaecat
	        		laborum voluptate dolor anim labore nostrud nisi consectetur nostrud culpa
	        		do commodo pariatur consectetur cupidatat features ad tempor irure.
        		</p>
        		<div className="flex flex-row flex-wrap items-center mt-10">
                    <img src={apple} alt="apple" className="w-[128px] h-[42px] cursor-pointer" />
                    <img src={google} alt="google" className="w-[128px] h-[42px] cursor-pointer" />
                </div>
                
        	</div>
        </section>
    );
}

export default Billing;