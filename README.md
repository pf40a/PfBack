Bienvenidos!!

## ** RESUMEN - FUNCIONALIDAD DEL BACK

-  **`DISEÑO ENTIDAD RELACIÓN`**
En el Modelo Usuarios no tiene contraseña, porque ese campo se está trabajando desde el fireBase.
![Entidad Relacion](https://s3-pf40a.s3.sa-east-1.amazonaws.com/Imagenes-Readme/Modelo-EntidadRelacion.jpg)

-  **`CONFIGURACIÓN DEL BACK`**
-	El framework Express, que nos permite crear un servidor.
-	ORM Sequelize, es una herramienta que permite interactuar con la base de datos
-	Con el motor de Base de datos PostreSQL. Permite crear, gestionar y consultar bases de datos relacionales.

-  **`RUTAS – HANDLER Y CONTROLLER`**
-	Se organizó con este orden:
Ruta / Handler / Controller

Las rutas principales que se manejan desde el back, de cada una se subdivide en otras rutas más.
![Rutas Principales](https://s3-pf40a.s3.sa-east-1.amazonaws.com/Imagenes-Readme/Rutas-Principales.jpg)

-  **`ENDPOINTS`**
-	La descripción de los endPoinst está en un archivo en Google Sheets. Tenemos 15 hojas en el archivo con 56 endPoints en total. Cada uno de ellos tienen una descripción adecuada con su función (post, get, delete, put), también se especifica los datos requeridos para el buen funcionamiento, así como el resultado esperado.
![Descripcion EndPoints](https://docs.google.com/spreadsheets/d/1sc_z4_ZPlIlJ180UBWKQU64hUzcsrFcAjKfLP4LF3W0/edit#gid=1306875638)

-	Ejemplo de la información de cada endPoint
![Ejemplo - EndPoint](https://s3-pf40a.s3.sa-east-1.amazonaws.com/Imagenes-Readme/Ejm-Descripcion-EndPoint.jpg)

-	El **`CRUD`** de realizó con cada modelo (Usuario, review, Reservas, Reserva_Items, Habitaciones, Habitacion_Detalles, Clientes y Carrito) 
-	Se realizaron **`endPoints de Filtros`** (Por fechas de las habitaciones disponibles, reviews por Usuario, Reservas por Usuario).
-	Así mismo se realizaron 2 **`endPoints para enviar un Email a`**l usuario, el Email se envía cuando se registra y cuando crea una reserva. El modelo del mensaje se realizó en HTML. 
-	También tenemos 2 **`endPoints para la ruta de Mercado Pago`**. Uno para la creación de preferencia de pago (Información de la compra más sus back url), se pasa por body el nombre del producto, su precio y la cantidad, luego devuelve una URL para redirigir a Mercado Pago para pagar. El segundo es para cuando se termine el pago, Mercado pago nos va a devolver a la página principal (la que nosotros le indicamos que sea la back URL) y cuando vuelva a esa página va a devolver por query la información del pago. Para obtener esta URL tienen primero que generar un pago. También cuando ejecutamos esta ruta se actualiza el estado de pago en la reserva, dependiendo que nos devuelve MercadoPago.
-	Tenemos 1 **`endPoint para subir los datos de las habitaciones a la base de datos`**, esta función accede a los datos que tenemos en un array y crea los registros de los detalles de habitaciones, sub Tipos de habitaciones y las habitaciones en los respectivos modelos en la Base de Datos.

**`Cloudinary`**: Las imágenes se almacenan en AWS (Amazon Web Service) que es un servicio para almacenar objetos en S3 (Simple Storage Service). Para almacenar se crea un bucket, nuestro bucket se llama: s3-pf40
-	Tenemos 2 **`endPoints para manejar las imágenes`** desde el bucket de S3 de AWS. 
El primero es el POST, para lo cual se envía por BODY un archivo de imagen (se crea un objeto FormData para enviar el archivo al servidor), si tiene éxito se sube el archivo a un bucket establecido. Antes se tiene que configurar las credenciales de permiso del servicio de AWS y acceder a la clase (PutObjectCommand)de su biblioteca ( @aws-sdk/client-s3).
El segundo es un GET, para lo cual se envía por params el nombre del archivo, para que busque en el bucket de S3 de AWS si existe ese archivo, recuperamos la URL de la imagen.  Antes se tiene que configurar las credenciales de permiso del servicio de AWS y acceder a la clase (GetObjectCommand)de su biblioteca ( @aws-sdk/client-s3).

**`LOGIN, REGISTRO Y RECUPERAR CONTRASEÑA`**
Para realizar el Login y a su vez cumplir con el requerimiento de la **`autenticación de terceros`**, se utilizaron diferentes tecnologías como **`Firebase`**, para implementar el requerimiento mencionado, teniendo como autenticación de terceros la cuenta de Google y tener un manejo de los usuarios que se van registrando o creando una cuenta en nuestra SPA OASIS HOTEL. Se utilizó también Material UI para el diseño del Login, del registro del usuario y como un plus o una mejora, para que el usuario tenga la posibilidad de recuperar la contraseña en caso de que se le haya olvidado. Además, en cada una de estas páginas se aplica una validación para cada campo en específico, estas validaciones son las siguientes:

• En la página del Login está la **`verificación de que el correo`** que se esté escribiendo en el campo, **`exista tanto en la base de datos como en Firebase`**. En caso de que el correo ingresado no exista o la contraseña sea incorrecta, se le mostrará el respectivo mensaje de error al usuario, indicándole que el correo ingresado no existe.

**`NOTA`**: Se debe tener en cuenta que el correo que se escriba en el campo del login debe ser previamente creado en la página de registro, no debe ser un correo de Google si el usuario, previamente, ha hecho uso de la autenticación de terceros, en ese caso el usuario debe seguir ingresando utilizando dicha autenticación.

• En la página de registro se encuentran diferentes **`validaciones`** para cada uno de los siguientes campos: Nombre, Apellido, Correo y Contraseña:

	• Nombre: El campo no debe estar vacío.

	• Apellido: El campo no debe estar vacío.

	• Correo: En este campo se valida que el formato que el usuario escriba coincida con la forma de un correo, por ejemplo, "example@example.com".

	• Contraseña: La contraseña debe tener al menos 6 caracteres y contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial (@$!%*?&#).

• Cuando todos los campos en la página de registro se encuentren en orden, y el usuario le de clic al botón de "Crear Cuenta" aparecerá un aviso a modo informativo de que se le ha enviado un correo electrónico de **`verificación de cuenta`** y que debe verificarla para poder ingresar, después de 2s de haber mostrado el mensaje aparecerá un botón, con el fin de que el usuario, cuando ya haya confirmado la cuenta, le de clic en el botón e inmediatamente se le redirigirá a la Home Page con su perfil de usuario. en caso de que el usuario no verifique la cuenta y le de clic al botón, simplemente no podrá ingresar hasta que verifique su cuenta. Con esto nos aseguramos de que el correo electrónico del usuario exista, ya que, posteriormente, es a ese correo donde se le enviará la información de las reservas que el usuario realice o respuestas en caso de que el usuario tenga alguna duda y quiera contactarse con nosotros vía email.

• Si por algún motivo el usuario se le olvidara la contraseña, en la página de Login existe un botón que dice **`"Olvidé mi contraseña"`** y el usuario ingresará a la página para restablecer su contraseña, en esa página se le pedirá que ingrese el correo del cual se le olvidó la contraseña y posteriormente, cuando le de al botón que dice "Enviar", aparecerá un aviso a modo informativo de que se le ha enviado un correo electrónico para restablecer su contraseña.

**`NOTA:`** Firebase nos proporciona todos los métodos utilizados para la creacion de la cuenta, verificación de cuenta y restablecer contraseña.


