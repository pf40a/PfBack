const nodemailer = require('nodemailer');

const sendEmail = async (email, mensaje, asunto, nombre) => {
  // Configurar el transporter con las credenciales del servicio de correo
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Nombre del servicio que se utiliza
    auth: {
      user: 'hotel.oasis.adm@gmail.com',
      pass: 'akivtddsejzjspfa',
    },
  });

  const mailOptions = {
    from: 'hotel.oasis.adm@gmail.com',
    to: email,
    subject: asunto,
    html: `<html>
    <head>
        <meta charset="UTF-8">
        <title>Correo Electrónico del Hotel Oasis</title>
    </head>
    <body>
        <div style="text-align: center;">
            <!-- Logo del hotel en la parte superior izquierda -->
            <img src="https://pffront40.onrender.com/logo.jpg" alt="Logo del Hotel" width="150" height="150" style="margin-right: 10px;">
    
            <!-- Nombre del hotel -->
            <h1>Hola ${nombre}!! Bienvenido a Hotel Oasis</h1>
    
            <!-- Contenedor del mensaje -->
            <div style="max-width: 400px; margin: 0 auto;">
                <!-- Párrafo de texto -->
                <p>
                    ${mensaje}
                </p>
            </div>

            <!-- Botón de redirección -->
            <a href="https://pffront40.onrender.com/" style="text-decoration: none; background-color: #081f37; color: #fff; padding: 10px 20px; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block; margin-top: 20px;">Volver al sitio web</a>
            <br><br>

            <!-- Footer con información del hotel -->
            <div style="background-color: #f2f2f2; padding: 20px; text-align: left;">
                <h2>Información del Hotel:</h2>
                <p><strong>Dirección:</strong> 720 Avenido Colon, Cordoba, Argentina</p>
                <p><strong>Teléfono:</strong> +54 9 343 344 6601</p>
                <p><strong>Correo Electrónico:</strong> hotel.oasis.adm@gmail.com</p>
            </div>
        </div>
    </body>
    </html>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    
  } catch (error) {
    throw new Error('Error al enviar el correo');
    
  }
};

module.exports = { sendEmail };