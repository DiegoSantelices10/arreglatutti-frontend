import { transporter } from '@/utils/createTransport';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const { name, telephone, address, profession, email } = await req.json();

    const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(2)}`;

    const mailOptions = {
      from: `"Registro del cliente" <${process.env.SMTP_FROM}>`,
      to: 'asuarez@aquilessoluciones.com.ar',
      subject: `Consulta de usuario - ${name}`,
      messageId: `<${uniqueId}@aquilessoluciones.com.ar>`, // Message-ID único
      references: '', // Evita que se agrupe con correos previos
      inReplyTo: '', // Evita que Gmail lo relacione con hilos previos
      html: `
        <div style="background-color: #002C53; padding: 20px;">
             <img src="https://res.cloudinary.com/dd6yemp1j/image/upload/v1737609561/aquiles-soluciones/q4yhur0hozafwxsyadur.png" 
                  alt="Aquiles Soluciones" 
                  style="width: 150px; height: auto; display: block; margin: 0 auto;">
        </div>
        <div style="text-align: left;">
            <p font-weight: bold; margin-bottom: 10px;">Datos del cliente</p>
        
            <ul style="list-style-type: disc; margin-left: 20px; padding-vertical: 20px;">
              <li><strong>Nombre:</strong> ${name}</li>
              <li><strong>Teléfono:</strong> ${telephone}</li>
                <li><strong>Tipo de servicio:</strong> ${profession}</li>
              <li><strong>Dirección:</strong> ${address}</li>
                <li><strong>Correo electrónico:</strong> ${email}</li>
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
