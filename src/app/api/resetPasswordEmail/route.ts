import { transporter } from '@/utils/createTransport';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const { name, email, resetToken } = await req.json();

    console.log('email', email);
    console.log('resetToken', resetToken);

    const mailOptions = {
      from: `"Nuevo Profesional" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: 'Cambio de contraseña',
      html: `
        <div style="background-color: #002C53; padding: 20px;">
             <img src="https://res.cloudinary.com/dd6yemp1j/image/upload/v1737609561/aquiles-soluciones/q4yhur0hozafwxsyadur.png" 
                  alt="Aquiles Soluciones" 
                  style="width: 150px; height: auto; display: block; margin: 0 auto;">
        </div>
        <div style="text-align: left; font-family: Arial, sans-serif;">
          <p style="color: #002C53; font-weight: bold; margin-bottom: 10px;">¡Bienvenido a nuestra plataforma!</p>
          <p style="color: #002C53;">Hola <strong>${name}</strong>,</p>
          <p style="color: #002C53;">
            Tu cuenta ha sido creada exitosamente. Para completar tu registro, necesitas establecer tu contraseña.
          </p>

         <div style="text-align: center; margin: 20px 0;">
            <a href="http://192.168.0.91:3000/establish-password?token=${resetToken}" 
                style="background-color: #002C53; color: #FFFFFF; text-decoration: none; padding: 12px 20px; border-radius: 5px; display: inline-block; font-weight: bold;">
                Establecer contraseña
            </a>
         </div>

          <p style="color: #002C53;">Si no solicitaste este acceso, puedes ignorar este mensaje.</p>
          <p style="color: #002C53;">Gracias por unirte a nuestra comunidad.</p>
        </div>`,
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
