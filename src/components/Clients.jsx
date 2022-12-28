import React from "react";
import { airbnb, binance, dropbox, coinbase } from "../assets"; 
import {clients} from '../constants/index';

function Clients() {
    return (
        <section id="clients" className='flex justify-center items-center my-10'>
        	<div className='w-full flex flex-wrap justify-center items-center'>
        		{clients.map((client) => (
		        	<div key={client.id} className='flex-1 sm:min-w-[192px] min-w-[120px] md:mb-0 mb-8'>
		        		<img src={client.logo} alt={client.logo} className='sm:w-[192px] w-[100px] object-contain' />
		        	</div>
        		))}
        	</div>
        </section>
    );
}

export default Clients;