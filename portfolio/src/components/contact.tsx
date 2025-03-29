"use client";

import { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Envoi en cours...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setStatus(result.message);
        } catch (error) {
            console.error(error);
            setStatus("Erreur lors de l'envoi.");
        }
    };

    return (
        <div className="w-full bg-[#0a1930] pt-50 pb-55">
            <div className="md:w-full w-[80%] max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-xl border border-teal-900">
                <h2 className="text-2xl font-bold text-teal-300 mb-6 text-center">Contactez-moi</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="Votre nom"
                            maxLength={20}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="votre@email.com"
                            required
                            maxLength={45}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                            Sujet
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="Objet de votre message"
                            required
                            maxLength={50}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="min-h-[80px] max-h-[500px] w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="Votre message..."
                            required
                            maxLength={650}
                            minLength={20}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition duration-300 flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Envoyer
                        </button>
                    </div>
                </form>

                {status && <p className="text-center mt-4 text-teal-400">{status}</p>}
            </div>
        </div>
    );
};

export default ContactPage;
