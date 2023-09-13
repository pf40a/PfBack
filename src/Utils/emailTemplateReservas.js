
module.exports = (nombre, mensaje, fechaLlegada, fechaSalida, tipoHabitacion, numeroHabitacion, tarifaTotal) => { 
    return `<html>
    <head>
        <meta charset="UTF-8">
        <title>Correo Electrónico del Hotel Oasis</title>
        <style>
            /* Estilo para la tabla */
            table {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                border-collapse: collapse;
            }
    
            /* Estilo para las filas impares (fondo gris) */
            table tr:nth-child(odd) {
                background-color: #f2f2f2;
            }
    
            /* Estilo para todas las filas de la tabla */
            table tr {
                border-bottom: 1px solid #ccc; /* Línea divisoria entre filas */
            }
    
            /* Estilo para las celdas de la tabla */
            table td {
                padding: 10px;
            }
    
            /* Estilo para el mensaje alineado a la derecha */
            .mensaje {
                text-align: left;
                margin-right: 20px;
            }
        </style>
    </head>
    <body>
        <div style="text-align: center;">
    
            <!-- Logo del hotel -->
            <img src="https://pffront40.onrender.com/logo.jpg" alt="Logo del Hotel" width="150" height="150" style="margin-right: 10px;">
    
            <!-- Mensaje de Bienvenida -->
            <h1>¡Hola, ${nombre}! Gracias por elegir nuestro Hotel.</h1>
    
            <!-- Tabla con información -->
            <table>
                <tr>
                    <td><strong>Reserva de:</strong></td>
                    <td>${nombre}</td>
                </tr>
                <tr>
                    <td><strong>Fecha de Llegada:</strong></td>
                    <td>${fechaLlegada}</td>
                </tr>
                <tr>
                    <td><strong>Fecha de Salida:</strong></td>
                    <td>${fechaSalida}</td>
                </tr>
                <tr>
                    <td><strong>Tipo de Habitación:</strong></td>
                    <td>${tipoHabitacion}</td>
                </tr>
                <tr>
                    <td><strong>Número de Habitación:</strong></td>
                    <td>${numeroHabitacion}</td>
                </tr>
                <tr>
                    <td><strong>Tarifa Total:</strong></td>
                    <td>$ ${tarifaTotal}</td>
                </tr>
            </table>
    
            <!-- Contenedor del mensaje -->
            <div class="mensaje">
                <!-- Párrafo de texto -->
                <p style="text-align: left; margin: 10px;">
                    Es un placer confirmar que su reserva en el Hotel Oasis ha sido creada con éxito. ¡Estamos encantados de darle la bienvenida a nuestro hotel y esperamos que disfrute de una estadía excepcional con nosotros!
                </p>

                <p style="text-align: left; margin: 10px;">
                    Nuestro equipo está dedicado a hacer que su experiencia sea memorable y placentera. Si tiene alguna solicitud especial o necesidad durante su estadía, no dude en ponerse en contacto con nuestro personal de recepción, quienes estarán encantados de ayudarle en todo momento.
                </p>

                <p style="text-align: left; margin: 10px;">
                    Si necesita hacer alguna modificación a su reserva o tiene alguna pregunta adicional, no dude en ponerse en contacto con nuestro equipo de reservas al +54 351 888 0023 o enviar un correo electrónico a <a href="mailto:hotel.oasis.adm@gmail.com">hotel.oasis.adm@gmail.com</a>. Estamos aquí para ayudarle en todo momento.
                </p>

                <p style="text-align: left; margin: 10px;"> 
                    <strong>Nicolas Villagra</strong><br>
                    <strong>Administador General</strong><br>
                    <strong>Hotel Oasis</strong><br>
                    <strong>+54 351 771 4962</strong><br>
                    <strong><a href="mailto:nicolasvillagra@oasis.com">nicolasvillagra@oasis.com</a></strong><br>
                </p>
            </div>
    
            <!-- Boton de redireccion -->
            <a href="https://pffront40.onrender.com/" style="text-decoration: none; background-color: #081f37; color: #fff; padding: 10px 20px; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block; margin-top: 20px;">Volver al sitio web</a>
            <br><br>
    
            <!-- Footer -->
            <div style="background-color: #f2f2f2; padding: 20px; text-align: left; display: flex; align-items: center;">
    
                <!-- Información del hotel -->
                <div style="flex: 1;">
                    <h2>Información del Hotel:</h2>
                    <p><strong>Dirección:</strong> 720 Avenido Colon, Cordoba, Argentina</p>
                    <p><strong>Teléfono:</strong> +54 9 343 344 6601</p>
                    <p><strong>Correo Electrónico:</strong> hotel.oasis.adm@gmail.com</p>
                    <p><strong>Servicios del Hotel:</strong> <br><br> Explora la variedad de servicios que ofrecemos para hacer tu estancia inolvidable.<br> Desde lujosos tratamientos de spa hasta exquisitas experiencias<br> gastronómicas, lo tenemos todo.</p>
                </div>
    
                <!-- Imagen footer -->
                <div style="flex: 1; text-align: center;">
                    <img src="https://images.unsplash.com/photo-1650967123062-3de70b7bf331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" alt="Img-footer" style="width: 80%; height: 100%;">
                </div>
    
            </div>
    
        </div>
    </body>
    </html>`
}