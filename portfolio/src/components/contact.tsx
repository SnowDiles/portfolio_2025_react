'use client';

import React from 'react';
import { motion } from "framer-motion";

interface EmailButtonProps {
    email: string;
    subject: string;
    body: string;
}

const EmailButton: React.FC<EmailButtonProps> = ({ email, subject, body }) => {
    const handleOpenMail = () => {
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <motion.div className="h-auto w-auto bg-[#63edd1] rounded-sm mt-14">
            <motion.div whileHover={{ y: -5, x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <button onClick={handleOpenMail} className="rounded-sm w-auto bg-[#0a1930] border border-[#63edd1] p-3 pl-7 pr-7 md:p-4 md:pr-4 md:pl-4 text-[#63edd1] flex flex-row items-center hover:cursor-pointer">
                    M'envoyer un mail <img src="/images/mail.png" alt="redirect email" className="h-7 w-7 ml-4" />
                </button>
            </motion.div>
        </motion.div>
    );
};

const ContactPage = () => {
    return (
        <div className='bg-[#0a1930] flex items-center w-full flex-col pt-50'>
            <h1 className='text-[#63edd1] text-xl pb-5'>03. Me contacter</h1>
            <h1 className='max-w-[600px] text-center text-[#cdd8f7]'>Développeur web en formation, je recherche une alternance pour septembre 2025
                . Questions ou opportunités ? N'hésitez pas à me contacter !
            </h1>
            <EmailButton
                email="brahimboulahiapro@gmail.com"
                subject="Contact"
                body=""
            />

            <h1 className='text-[#cdd8f7] mt-60 pb-10'>Copyright @Brahim 2025</h1>
        </div>
    );
};

export default ContactPage;