import { transporter } from '@/utils/createTransport';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const data = req.body;
    console.log('data', data);

    const mailOptions = {
      from: `"Profesional nuevo" ${process.env.SMTP_FROM}`,
      to: 'asuarez@aquilessoluciones.com.ar',
      subject: 'A ticket has been raised on example.com',
      html: `
      <div style="font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4; padding: 20px;">
      <h1 style="color: blue;">¡Hola!</h1>
      <p style="color: black;">Este es un correo con estilos en línea.</p>
    </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: 'Internal Server Error', error: err },
      { status: 500 }
    );
  }
};
