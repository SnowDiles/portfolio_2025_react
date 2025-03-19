import React from 'react';
import Navbar from '@/components/navbar';
import Presentation from '@/components/presentation';
import About from '@/components/about'
import Projects from '@/components/projects';
import ListIcon from '@/components/listicon';

const PortfolioPage: React.FC = () => {
  return (

    
    <div className='bg-[#0a1930]  h-screen' style={{ fontFamily: "'Roboto Mono', monospace" }}>
      <Navbar />
      <div>
        <Presentation />
        <About/>
        <Projects/>
        <ListIcon/>
      </div>
    </div>
  );
};

export default PortfolioPage;