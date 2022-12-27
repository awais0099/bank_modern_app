import React from "react";
import {stats} from '../constants/index.js';

function Stats() {
    return (
        <section id="stats" className='flex justify-center items-center flex-row flex-wrap md:mb-20 mb-6'>
        	{stats.map((stat) => (
        		<div key={stat.id} className='flex-1 flex justify-start flex-row m-3 items-center font-poppins text-white'>
        			<h4 className='xs:text[40px] text-[30px] xs:leading-[53px] leading-[40px] font-semibold'>{stat.value}</h4>
        			<p className='xs:leading-[26px] leading-[21px] xs:text-[20px] text-[15px] font-normal text-gradient uppercase ml-3'>{stat.title}</p>
        		</div>
        	))}
        </section>
    );
}

export default Stats;