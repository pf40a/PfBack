const { getImagen, postImagen } = require("../Controllers/imagenesController");
//const { uploadFile, readFile } = require("./s3");

//GET IMAGEN POR NOMBRE DE ARCHIVO
const getImagenHandler = async (req, res) => {
  try {
    const resultado = await getImagen(req.params.fileName);

    if (!resultado.error) return res.status(200).json(resultado);

    return res.status(400).json(resultado);

  } catch (error) {
     return res.status(401).json(error);
  }

  
};

//Ruta para Subir una Imagen a AWS
const postImagenHandler = async(req, res) =>{

  try {
  
    //const resultado = await postImagen(req.files.file);
   // console.log(req.files["photo"]);
const resultado = await postImagen(req.files["photo"])
     res.status(200).send("archivo subido");

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = { getImagenHandler, postImagenHandler };
