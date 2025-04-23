import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
        return NextResponse.json(
            { message: 'Tous les champs sont requis' },
            { status: 400 }
        );
    }

    try {

        

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER, 
            subject: `Nouveau message de ${name}: ${subject}`,
            text: `De: ${email}\n\nMessage:\n${message}`,
        });

        return NextResponse.json({ message: 'Email envoyé avec succès' });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Erreur lors de l\'envoi' },
            { status: 500 }
        );
    }
}