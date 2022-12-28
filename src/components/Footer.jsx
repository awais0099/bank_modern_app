import React from "react";
import {logo} from '../assets/index.js';
import {footerLinks} from '../constants/index.js';
import {socialMedia} from '../constants/index';

function Footer() {

    return (
        <footer className='flex flex-col sm:py-16 py-6'>
        	<div className='flex-1 flex md:flex-row flex-col items-start w-full mb-8'>
        		<div className='flex flex-col justify-start md:mb-0 mb-10'>
        			<img src={logo} alt="footer-logo" className='w-[124px] h-[32px] sm:mb-5 mb-2' />
        			<p className="font-poppins text-dimWhite font-normal text-[18px] sm:max-w-[310px]">
        				Non do officia voluptate id cupidatat exercitation mollit dolore
        			</p>
        		</div>

        		<div className='flex-[1.5] w-full flex flex-row flex-wrap'>
        			{footerLinks.map((link) => (
        				<div key={link.title} className='flex-1 flex flex-col ss:my-0 my-4 min-w-[150px]'>
        					<h4 className='font-poppins text-white leading-[27px] font-medium text-[18px]'>{link.title}</h4>
        					<ul className='m-0 p-0 list-none mt-4'>
	        					{link.links.map((item, index) => (
	        						<li key={item.name} className={`${link.links.length - 1 == index ? 'mb-0':'mb-4'}`}>
	        							<a href={item.link} className='font-poppins text-dimWhite text-[16px] leading-[24px] cursor-pointer hover:text-secondary font-normal'>
	        								{item.name}
	        							</a>
	        						</li>
	        					))}
        					</ul>
        				</div>
        			))}
        		</div>
        	</div>
        	<div className='flex sm:flex-row flex-col justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]'>
        		<p className='font-poppins text-center text-dimWhite text-[18px] font-normal'>2022 Hookbank. All Rights Reserved</p>
        		<div className='flex flex-row justify-center md:mt-0 mt-6'>
        			{socialMedia.map((social,index) => (
        				<img
        					src={social.icon}
        					alt={social.id}
        					key={social.id}
        					className={`w-[22px] h-[22px] object-contain cursor-pointer ${socialMedia.length -1 == index ? 'mr-0':'mr-6'}`}
        				/>
        			))}
        		</div>
        	</div>
        </footer>
    );
}

export default Footer;