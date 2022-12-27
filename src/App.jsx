import { useState } from 'react';
import { Navbar, Hero, Business, Billing, Stats, Testimonial, Footer, CTA, Button,
 CardDeal, Client} from './components';

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
    	<div className="sm:px-16 px-6 flex justify-center items-center">
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>

      <div className='bg-primary flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>
      
      <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Stats />
          <Business />
        </div>
      </div>
    </div>
  )
}

export default App
