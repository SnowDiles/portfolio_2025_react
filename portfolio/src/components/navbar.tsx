'use client'; // Indique que ce composant doit être rendu côté client

import { motion, AnimatePresence } from 'framer-motion';
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

    // Variantes d'animation pour le conteneur de la navbar
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

    // Variantes d'animation pour chaque élément
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

    // Animation pour le bouton CV
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

    // Animation pour le menu mobile
    const mobileMenuVariants = {
        hidden: { 
            x: "100%", 
            opacity: 0 
        },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: {
                type: "tween",
                ease: "easeInOut",
                duration: 0.3
            }
        }
    };

    return (
        <div>
            {/* Menu Desktop */}
            <motion.div 
                className="hidden md:block h-full bg-[#0a1930] w-full md:h-[100px] md:pr-[60px] p-5 lg:text-xl text-sm absolute right-0 pt-5"
                initial="hidden"
                animate="visible"
                variants={navContainerVariants}
            >
                <ul className="text-white flex flex-row space-x-8 justify-end items-center h-[100px]">
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
                                className="rounded-sm w-auto bg-[#0a1930] border border-[#63edd1] p-2 pl-7 pr-7 md:p-4 lg:p-3 lg:pr-4 lg:pl-4 text-[#63edd1] flex flex-row items-center hover:cursor-pointer"
                            >
                                Cv <img src="/images/download.png" alt="Download CV" className="h-7 w-7 ml-4" />
                            </button>
                        </motion.div>
                    </motion.div>
                </ul>
            </motion.div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="md:hidden block h-full bg-[#112240] w-[60%] max-w-full absolute -right-20 pt-[65px] p-5 text-sm z-10"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <ul className="text-white flex flex-col space-y-10 items-center">
                            {element.map((item, index) => (
                                <motion.li 
                                    key={index} 
                                    className="hover:text-[#63edd1] cursor-pointer flex flex-col items-center"
                                    variants={navItemVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="text-[#63edd1] justify-center text-center">0{index + 1}.</span>
                                    <span className="pt-2">{item}</span>
                                </motion.li>
                            ))}

                            <motion.div 
                                className="h-auto w-auto bg-[#63edd1] rounded-sm mt-10"
                                variants={cvButtonVariants}
                            >
                                <motion.div 
                                    whileHover={{ y: -5, x: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <button 
                                        type="button" 
                                        onClick={openResume} 
                                        className="rounded-sm w-auto bg-[#112240] border border-[#63edd1] p-2 pl-7 pr-7 text-[#63edd1] flex flex-row items-center hover:cursor-pointer"
                                    >
                                        Cv <img src="/images/download.png" alt="Download CV" className="h-7 w-7 ml-4" />
                                    </button>
                                </motion.div>
                            </motion.div>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bouton Menu Mobile */}
            <motion.div 
                className="md:hidden block w-10 h-10 absolute top-7 right-7 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.button 
                    id="sidebar-open" 
                    onClick={openNavMobile}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src="/images/menu.png" alt="Menu" />
                </motion.button>
            </motion.div>
        </div>
    );
}

export default Navbar;