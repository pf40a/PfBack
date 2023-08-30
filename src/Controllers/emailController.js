const nodemailer = require('nodemailer');

const sendEmail = async (email, mensaje, asunto) => {
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
    text: mensaje,
  };

  try {
    await transporter.sendMail(mailOptions);
    
  } catch (error) {
    throw new Error('Error al enviar el correo');
    
  }
};

module.exports = { sendEmail };