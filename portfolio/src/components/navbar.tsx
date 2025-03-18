'use client'; // Ajoute cette ligne pour indiquer que ce composant doit être rendu côté client


import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

function Navbar() {

    let element = ["A propos", "Experiences", "Projets", "Contact"];
    const openResume = () => {
        window.open('/resume.pdf', '_blank');
    };


    const openNavMobile = () => {
        const navbar = document.getElementById('navbar');

        if (navbar) {
            navbar.classList.toggle("hidden");
        }


    }

    return (
        <div>
            <div className="md:block hidden h-full bg-[#112240] md:bg-[#0a1930] w-[60%] max-w-full md:w-full md:h-[100px] md:pr-[60px] p-5 lg:text-xl text-sm absolute -right-20 md:right-0 pt-[65px] md:pt-5" id="navbar">
              
                <ul className="text-white flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-8 md:justify-end items-center h-[100px]">


                    {element.map((item, index) => (
                        <li key={index} className="hover:text-[#63edd1] cursor-pointer flex flex-col md:block items-center hover:animate-pulse">
                            <span className="text-[#63edd1] md:mr-2 justify-center text-center">0{index + 1}.</span>
                            <span className="pt-2">{item}</span>
                        </li>
                    ))}

                    <div className="h-auto w-auto bg-[#63edd1] rounded-sm mt-10 md:mt-0">
                        <motion.div whileHover={{ y: -5, x: -5 }}>
                            <button type="button" onClick={openResume} className="rounded-sm w-auto bg-[#112240] md:bg-[#0a1930] border border-[#63edd1] p-2 pl-7 pr-7 md:p-4 lg:p-3 lg:pr-4 lg:pl-4 text-[#63edd1] flex flex-row items-center hover:cursor-pointer">
                                Cv <img src="/images/download.png" alt="Download CV" className="h-7 w-7 ml-4" />
                            </button>
                        </motion.div>
                    </div>
                </ul>
            </div>

            <div className="md:hidden block animate-bounce w-10 h-10 absolute top-7 right-7">
                <button id="sidebar-open" onClick={openNavMobile}>
                    <img src="/images/menu.png" alt="Menu" />
                </button>
            </div>
        </div>
    );
}

export default Navbar;