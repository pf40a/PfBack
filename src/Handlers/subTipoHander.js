const getSubTipos = require("../Controllers/subTipoController");

// Ruta para obtener todas las Habitaciones
const getSubTipoHandler = async (req, res) => {
  //return res.status(200).send("get sub tipos handler");
  try {
    const resultado = await getSubTipos();
    if (resultado.error) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = getSubTipoHandler