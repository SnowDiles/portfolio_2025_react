'use client'; 

import { motion } from 'framer-motion';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    let element = ["A propos", "Experiences", "Projets", "Contact"];
    
    const openResume = () => {
        window.open('/resume.pdf', '_blank');
    };

    const openNavMobile = () => {
        setIsOpen(!isOpen);
    };

    const navContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                duration: 0.3
            }
        }
    };

    const navItemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const cvButtonVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.4,
                type: "spring",
                stiffness: 120,
                damping: 8
            }
        }
    };

    return (
        <div>
            <motion.div 
                className={`md:block ${isOpen ? 'block' : 'hidden'} h-full bg-[#112240] md:bg-[#0a1930] w-[60%] max-w-full md:w-full md:h-[100px] md:pr-[60px] p-5 lg:text-xl text-sm absolute -right-20 md:right-0 pt-[65px] md:pt-5`}
                id="navbar"
                initial="hidden"
                animate="visible"
                variants={navContainerVariants}
            >
                <ul className="text-white flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-8 md:justify-end items-center h-[100px]">
                    {element.map((item, index) => (
                        <motion.li 
                            key={index} 
                            className="hover:text-[#63edd1] cursor-pointer flex flex-col md:block items-center"
                            variants={navItemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <span className="text-[#63edd1] md:mr-2 justify-center text-center">0{index + 1}.</span>
                            <span className="pt-2">{item}</span>
                        </motion.li>
                    ))}

                    <motion.div 
                        className="h-auto w-auto bg-[#63edd1] rounded-sm mt-10 md:mt-0"
                        variants={cvButtonVariants}
                    >
                        <motion.div 
                            whileHover={{ y: -5, x: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <button 
                                type="button" 
                                onClick={openResume} 
                                className="rounded-sm w-auto bg-[#112240] md:bg-[#0a1930] border border-[#63edd1] p-2 pl-7 pr-7 md:p-4 lg:p-3 lg:pr-4 lg:pl-4 text-[#63edd1] flex flex-row items-center hover:cursor-pointer"
                            >
                                Cv <img src="/images/download.png" alt="Download CV" className="h-7 w-7 ml-4" />
                            </button>
                        </motion.div>
                    </motion.div>
                </ul>
            </motion.div>

            <motion.div 
                className="md:hidden block w-10 h-10 absolute top-7 right-7"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.9 }}
            >
                <button id="sidebar-open" onClick={openNavMobile}>
                    <img src="/images/menu.png" alt="Menu" />
                </button>
            </motion.div>
        </div>
    );
}

export default Navbar;