import React from "react";
import {features} from "../constants/index.js";
import {Button} from "./index.js";

function Business() {
    return (
        <section id="features" className='flex md:flex-row flex-col sm:py-16 py-6'>
        	<div className='text-white flex-1 flex flex-col items-start justify-center'>
        		<h2 className='w-full font-poppins font-semibold xs:text-[48px] sm:text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]'>
        			You do the business,<br className='sm:block hidden' /> we'll handle the money.
        		</h2>
        		<p className='font-poppins text-dimWhite text-[18px] mt-5 leading-[30.8px] sm:max-w-[470px]'>
	        		Nostrud dolor mollit sint fugiat nostrud pariatur proident in occaecat
	        		laborum voluptate dolor anim labore nostrud nisi consectetur nostrud culpa
	        		do commodo pariatur consectetur cupidatat features ad tempor irure.
        		</p>
        		<Button styles='mt-10' />
        	</div>
        	<div className='flex-1 text-white flex items-center sm:mt-0 mt-7'>
        		<ul className='list-none m-0 p-0'>
        			{features.map((feature,index) => (
	        			<li key={feature.id} className={`flex justify-center md:items-center items-start md:p-6 py-6 rounded-[20px] feature-card ${index == feature.length - 1 ? 'mb-0':'mb-6'}`}>
	        				<div className='w-[64px] h-[64px] flex justify-center items-center rounded-full bg-dimBlue'>
	        					<img
	        						src={feature.icon}
	        						alt={feature.title}
	        						className='w-[50%] h-[50%] object-contain'
	        					/>
	        				</div>
	        				<div className='flex-1 flex flex-col ml-3'>
	        					<h4 className='font-semibold text-[18px] leading-[23px] mb-1'>{feature.title}</h4>
	        					<p className='text-dimWhite font-normal text-[18px] font-poppins'>
	        						{feature.content}
	        					</p>
	        				</div>
	        			</li>
        			))}
        		</ul>
        	</div>
        </section>
    );
}

export default Business;