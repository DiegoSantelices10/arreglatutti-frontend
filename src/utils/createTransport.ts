import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'STARTTLS',
  host: process.env.SMTP_HOST,
  port: 465,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});
