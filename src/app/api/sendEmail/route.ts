import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const POST = async (req: Request) => {
  try {
    // const { name, email, message } = await req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com', // SMTP server address
      port: 465, // Port for secure email sending
      auth: {
        user: 'santelices.diego88@gmail.com', // SMTP username from environment variables
        pass: 'bqrr rwlt bnfe glne', // SMTP password from environment variables
      },
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL, // Sender's email address
      to: process.env.SMTP_EMAIL, // Recipient's email address
      subject: 'A ticket has been raised on example.com', // Email subject
      html: `<h1>New Ticket on Your Website</h1>`,
    };
    // If an attachment is provided, use this configuration
    // mailOptions = {
    //   from: process.env.SMTP_EMAIL, // Sender's email address
    //   to: process.env.SMTP_EMAIL, // Recipient's email address
    //   subject: 'Resume submission on example.com', // Email subject
    //   html: `
    //     <html>
    //       <body>
    //         <h1>New Ticket on Your Website</h1>
    //         <p>A new resume/cv has been submitted on example.com</p>
    //         <p>**Attachment:** ${attachment.name}</p>
    //       </body>
    //     </html>
    //   `,
    //   cc: 'info@example.co', // Optional carbon copy recipient
    //   attachments: [
    //     {
    //       filename: attachment.name, // Name of the attachment
    //       content: attachment.data, // Content of the attachment (Base64 or Buffer)
    //       contentType: attachment.type, // MIME type of the attachment (e.g., 'application/pdf', 'image/jpeg')
    //     },
    //   ],
    // };

    // Send the email with the configured options
    await transporter.sendMail(mailOptions);

    // Respond with success message
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (err) {
    // Respond with error message if something goes wrong
    return NextResponse.json(
      { message: 'Internal Server Error', error: err },
      { status: 500 }
    );
  }
};
