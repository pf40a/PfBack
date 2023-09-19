const nodemailer = require('nodemailer');
const emailTemplateGeneral = require('../Utils/emailTemplateGeneral');
const emailTemplateReserva = require('../Utils/emailTemplateReservas')


const sendEmail = async (email, mensaje, asunto, nombre, fechaLlegada, fechaSalida, tipoHabitacion, numeroHabitacion, tarifaTotal, templateType) => {
  // Configurar el transporter con las credenciales del servicio de correo
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Nombre del servicio que se utiliza
    auth: {
      user: 'hotel.oasis.adm@gmail.com',
      pass: 'ncgw qthm lmvb hogw',
    },
  });

  let selectedTemplate;

  // Determinar qué plantilla utilizar según el valor de templateType
  if (!templateType || templateType === "general") {
    selectedTemplate = emailTemplateGeneral(nombre, mensaje);
  } else if (templateType === 'reserva') {
    selectedTemplate = emailTemplateReserva(nombre, mensaje, fechaLlegada, fechaSalida, tipoHabitacion, numeroHabitacion, tarifaTotal);
  } else {
    throw new Error('Tipo de plantilla no válido');
  }

  const mailOptions = {
    from: 'hotel.oasis.adm@gmail.com',
    to: email,
    subject: asunto,
    html: selectedTemplate,
  };

  try {
    await transporter.sendMail(mailOptions);
    
  } catch (error) {
    throw new Error('Error al enviar el correo');
    
  }
};

module.exports = { sendEmail };