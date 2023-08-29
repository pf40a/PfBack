const SubTipo_Habitaciones = require("../Models/SubTipo_Habitaciones.js");

// ******Función para obtener SUBTIPOS PARA EL HOME
const getSubTipos = async () => {
  
    // Buscar los SUBTIPOS
    const findSubTipos = await SubTipo_Habitaciones.findAll();

    if (!findSubTipos) {
      return { error: "No hay SubTipos de las Habitaciones" };
    }

    return { data: findSubTipos };
 
};

module.exports = getSubTipos
