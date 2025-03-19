'use client';

import { motion } from "framer-motion";

function Presentation() {
    return (
        <div className="w-full flex justify-center items-center h-screen md:pl-[10%] lg:pl-[20%] pl-[6%] md:max-w-[90%] max-w-[87%]">
            <div className="w-full flex flex-col items-start">
                <h1 className='text-[#63edd9] lg:text-[20px] pb-3'>Hey, bienvenue sur mon portfolio</h1>
                <h1 className='text-[#cbd6f7] text-[40px] md:text-[55px] font-bold'>Brahim Boulahia.</h1>
                <h1 className='text-[40px] md:text-[55px] font-bold text-[#8891b0]'>Développeur web en formation.</h1>
                <h1 className="text-[15px] lg:text-[20px] lg:max-w-[650px] text-[#8891b0] pt-5">
                    Actuellement en formation à Epitech, passionné par la création de solutions digitales efficaces,
                    je suis à la <span className="text-[#63edd1] inline">recherche d'une alternance</span> pour septembre 2025.
                </h1>
                <motion.div className="h-auto w-auto bg-[#63edd1] rounded-sm mt-14">
                    <motion.div whileHover={{ y: -5, x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <a href="https://github.com/SnowDiles" target="_blank" rel="noopener noreferrer" className="rounded-sm w-auto bg-[#0a1930] border border-[#63edd1] p-3 pl-7 pr-7 md:p-4 md:pr-4 md:pl-4 text-[#63edd1] flex flex-row items-center hover:cursor-pointer">
                            Retrouvez mon Git-hub <img src="/images/redirect.png" alt="redirect github" className="h-7 w-7 ml-4" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Presentation;