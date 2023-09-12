const { sendEmail } = require("../Controllers/emailController")

const emailHandler = async (req, res) => {
    const { email, mensaje, asunto, nombre, fechaLlegada, fechaSalida, tipoHabitacion, numeroHabitacion, tarifaTotal, templateType } = req.body;
  
    try {
      await sendEmail(email, mensaje, asunto, nombre, fechaLlegada, fechaSalida, tipoHabitacion, numeroHabitacion, tarifaTotal, templateType);
      res.status(200).json({ message: 'Notificación enviada exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
module.exports = { emailHandler };