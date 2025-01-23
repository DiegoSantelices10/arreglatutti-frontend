import { transporter } from '@/utils/createTransport';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const { name, telephone, message, profession } = await req.json();

    const mailOptions = {
      from: `"Nuevo Profesional" <${process.env.SMTP_FROM}>`,
      to: 'asuarez@aquilessoluciones.com.ar',
      subject: 'Consulta de profesional matriculado',
      html: `
        <div style="background-color: #002C53; padding: 20px;">
             <img src="https://res.cloudinary.com/dd6yemp1j/image/upload/v1737609561/aquiles-soluciones/q4yhur0hozafwxsyadur.png" 
                  alt="Aquiles Soluciones" 
                  style="width: 150px; height: auto; display: block; margin: 0 auto;">
        </div>
        <div style="text-align: left;">
            <p style="color: #002C53; font-weight: bold; margin-bottom: 10px;">Datos del usuario</p>
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li style="color: #002C53"><strong>Nombre:</strong> ${name}</li>
              <li style="color: #002C53"><strong>Teléfono:</strong> ${telephone}</li>
              <li style="color: #002C53"><strong>Profesión:</strong> ${profession}</li>
              <li style="color: #002C53"><strong>Mensaje:</strong> ${message}</li>
            </ul>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Error enviando el correo:', err);
    return NextResponse.json(
      { message: 'Internal Server Error', error: err },
      { status: 500 }
    );
  }
};
