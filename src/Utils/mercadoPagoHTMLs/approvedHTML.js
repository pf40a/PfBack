
module.exports =
`<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de Pago</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
        }

        h1 {
            color: #081f37;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        p {
            font-size: 18px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #081f37;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }

        /* Estilos del footer */
        footer {
            background-color: #081f37;
            color: white; 
            padding: 20px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Pago Confirmado</h1>
        <p>El pago se ha procesado con éxito.</p>

        <img src="https://static.vecteezy.com/system/resources/previews/014/608/966/non_2x/payment-line-icon-on-white-background-free-vector.jpg" alt="Pago" width="250">

        <br><br><br><br>

        <!-- Botón de redirección al home del frontend -->
        <a class="button" href="https://pffront40.onrender.com">Ir al Inicio</a>
    </div>

    <!-- Footer -->
    <footer>
        <div class="mx-6 py-10 text-center md:text-left">
            <div class="bg-neutral-200 py-2 text-sm text-neutral-500 dark:text-neutral-300">
                <p class="text-center">
                    &copy; 2023 Oasis Hotel. Todos los derechos reservados.
                </p>
            </div>
        </div>
    </footer>
</body>
</html>`