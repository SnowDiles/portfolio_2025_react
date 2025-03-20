import React from 'react';
import Navbar from '@/components/navbar';
import Presentation from '@/components/presentation';
import About from '@/components/about'
import Projects from '@/components/projects';
import ListIcon from '@/components/listicon';
import AnimatedCursor from "react-animated-cursor"

const PortfolioPage: React.FC = () => {
  return (


    <div className='bg-[#0a1930]  h-screen' style={{ fontFamily: "'Roboto Mono', monospace" }}>
      <Navbar />
      <div>
        <AnimatedCursor
          innerSize={12} 
          outerSize={35} 
          color="152, 211, 219" 
          outerAlpha={0.3} 
          innerScale={0.8} 
          outerScale={2} 
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
          trailingSpeed={7} 
          outerStyle={{
            border: `2px solid rgba(152, 211, 219)`, 
          }}
          innerStyle={{
            backgroundColor: `rgba(152, 211, 219)`, 
          }}
        />
        <Presentation />
        <About />
        <Projects />
        <ListIcon />
      </div>
    </div>
  );
};

export default PortfolioPage;