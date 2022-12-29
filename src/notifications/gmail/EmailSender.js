import {createTransport} from 'nodemailer';
import logger from '../../loggers/Log4jsLogger.js';
import dotenv from 'dotenv';

dotenv.config({path: '../../.env' });

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
    }
});

const emailOptions = (emailSubject, htmlTemplate) => {
    return {
        from: process.env.EMAIL_ACCOUNT,
        to: ["violette.spinka@ethereal.email"],
        subject: emailSubject,
        html: htmlTemplate
    }
}

const htmlNewUserTemplate = (id, date) => {
    return `
    <h2>¡Nuevo usuario Creado!</h2>
    <p>Se ha creado un nuevo usuario a través de la API</p>
    <ul>
        <li><strong>UUID:</strong> ${id}</li>
        <li><strong>FECHA:</strong> ${date}</li>
    </ul>
    `
};

export async function sendGmail(subject, htmlTemplate) {
    try {
        const mailOptions = emailOptions(
            subject,
            htmlTemplate
        );
        
        await transporter.sendMail(mailOptions);
        logger.info(`Email sent`)
    } catch (error) {
        logger.error(error);
    }
}

