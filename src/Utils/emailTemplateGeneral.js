
module.exports = (nombre, mensaje) => { 
    return `<html>
    <head>
        <meta charset="UTF-8">
        <title>Correo Electrónico del Hotel Oasis</title>
    </head>
    <body>
        <div style="text-align: center;">

            <!-- Logo del hotel -->
            <img src="https://pffront40.onrender.com/logo.jpg" alt="Logo del Hotel" width="150" height="150" style="margin-right: 10px;">
    
            <!-- Mensaje de Bienvenida -->
            <h1>¡Hola, ${nombre}! Te damos la bienvenida al Hotel Oasis.</h1>
    
            <!-- Contenedor del mensaje -->
            <div style="max-width: 400px; margin: 0 auto;">
                <!-- Párrafo de texto -->
                <p>
                    ${mensaje}
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