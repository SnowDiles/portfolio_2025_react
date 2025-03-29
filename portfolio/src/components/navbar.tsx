'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    let element = ["A propos", "Projets", "Contact"];

    const openResume = () => {
        window.open('/resume.pdf', '_blank');
    };

    const openNavMobile = () => {
        setIsOpen((prev) => !prev);
        if (!isOpen) {
            window.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

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
        <div className="overflow-x-hidden ">
            <motion.div
                className="hidden fixed md:block  bg-[#0a1930]/[0.8] w-full   md:pr-[60px] p-5 md:text-l text-sm z-40 right-0 pt-5"
                initial="hidden"
                animate="visible"
                variants={navContainerVariants}
            >
                <ul className="text-[#cbd6f7] flex flex-row space-x-8 justify-end items-center h-[50px] ">
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
                            <a
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    const scrollPositions = [875, 1700, 6100]; 
                                    window.scrollTo({ top: scrollPositions[index] || 0, behavior: 'smooth' });
                                }}
                            >
                                <span className="text-[#63edd1] md:mr-2 justify-center text-center">0{index + 1}.</span>
                                <span className="pt-2">{item}</span>
                            </a>

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
                                className="rounded-sm w-auto bg-[#0a1930] border border-[#63edd1] p-2 pl-7 pr-7 md:p-2 md:pr-4 md:pl-4 text-[#63edd1] flex flex-row items-center hover:cursor-pointer"
                            >
                                Cv <img src="/images/download.png" alt="Download CV" className="h-7 w-7 ml-4" />
                            </button>
                        </motion.div>
                    </motion.div>
                </ul>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden h-screen bg-[#112240] w-[60%] max-w-full absolute right-0 p-5 text-sm z-10 flex items-center"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <ul className="text-white flex flex-col space-y-10 items-center w-full">
                            {element.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="hover:text-[#63edd1] cursor-pointer flex flex-col items-center"
                                    variants={navItemVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <a
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        onClick={(e) => {
                                            e.preventDefault(); 
                                            const scrollPositions = [850, 2650, 7200]; 
                                            window.scrollTo({ top: scrollPositions[index] , behavior: 'smooth' });
                                            setIsOpen(false); 
                                        }}
                                    >
                                        <span className="text-[#63edd1] justify-center text-center">0{index + 1}.</span>
                                        <span className="pt-2">{item}</span>
                                    </a>
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

            <motion.div
                className="md:hidden block w-10 h-10 top-7 right-7 z-20 fixed"
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