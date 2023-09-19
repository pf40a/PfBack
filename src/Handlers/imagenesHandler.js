const { getImagen, postImagen } = require("../Controllers/imagenesController");
//const { uploadFile, readFile } = require("./s3");

//GET IMAGEN POR NOMBRE DE ARCHIVO
const getImagenHandler = async (req, res) => {
  try {
    const resultado = await getImagen(req.params.fileName);

    if (!resultado.error) return res.status(200).send(resultado);

    return res.status(400).json(resultado);

  } catch (error) {
     return res.status(401).json(error.message);
  }

  
};

//Ruta para Subir una Imagen a AWS
const postImagenHandler = async(req, res) =>{

  try {
  
    //const resultado = await postImagen(req.files.file);
   /*  const fileName = (req.files["photo"]);
    const nombreValido = validarNombreArchivo(fileName.name);
    fileName.name = nombreValido
    console.log(nombreValido)
    console.log(fileName) */

    const resultado = await postImagen(req.files["photo"]);

     res.status(200).send("archivo subido");

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

/* function validarNombreArchivo(fileName) {
  
  const nombreValido = fileName.replace(/[^a-zA-Z0-9-_]/g, "-");
  // Reemplaza los caracteres no permitidos por un guion "-"

  return nombreValido;
} */
module.exports = { getImagenHandler, postImagenHandler };
