const datos_Habitacion_Detalle = [
  // ------- INDIVIDUAL -------

  {
    precio: 100,
    tipo_Habitacion: "Individual",
    subTipo: "Economica",
    descripcion:
      "La habitación individual es perfecta para viajeros solitarios que buscan comodidad y privacidad a un precio asequible. Está diseñada para proporcionar una estancia acogedora y conveniente para una persona.",
    caracteristica: "Espacio pequeña",
    capacidad: 1,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosNuevas/Individual-Economica2.jpg",
  },

  {
    precio: 200,
    tipo_Habitacion: "Individual",
    subTipo: "Confort",
    descripcion:
      "La habitación individual es perfecta para viajeros solitarios que buscan comodidad y privacidad a un precio asequible. Está diseñada para proporcionar una estancia acogedora y conveniente para una persona.",
    caracteristica: "Area de estar pequeña",
    capacidad: 1,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosNuevas/Individual-Confort.webp",
  },

  {
    precio: 400,
    tipo_Habitacion: "Individual",
    subTipo: "Gold",
    descripcion:
      "La habitación individual es perfecta para viajeros solitarios que buscan comodidad y privacidad a un precio asequible. Está diseñada para proporcionar una estancia acogedora y conveniente para una persona.",
    caracteristica: "Area de estar espaciosa",
    capacidad: 1,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosHabitaciones/03+-+Individual+-+Gold.jpg",
  },

  // ------- DOBLE -------

  {
    precio: 120,
    tipo_Habitacion: "Doble",
    subTipo: "Economica",
    descripcion:
      "La habitación doble es ideal para parejas o amigos que viajan juntos. Ofrece espacio adicional y comodidades para una estancia más cómoda.",
    caracteristica: "Area de trabajo compartida",
    capacidad: 2,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosNuevas/Doble-Economica.jpg",
  },

  {
    precio: 250,
    tipo_Habitacion: "Doble",
    subTipo: "Confort",
    descripcion:
      "La habitación doble es ideal para parejas o amigos que viajan juntos. Ofrece espacio adicional y comodidades para una estancia más cómoda.",
    caracteristica: "Sala de estar pequeña, Areas de trabajo separadas",
    capacidad: 2,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosNuevas/Doble-Confort.jpeg",
  },

  {
    precio: 500,
    tipo_Habitacion: "Doble",
    subTipo: "Gold",
    descripcion:
      "La habitación doble es ideal para parejas o amigos que viajan juntos. Ofrece espacio adicional y comodidades para una estancia más cómoda.",
    caracteristica: "Area de estar espaciosa",
    capacidad: 2,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosHabitaciones/06+-+Doble-+Confort.jpg",
  },

  // ------- FAMILIAR -------

  {
    precio: 300,
    tipo_Habitacion: "Familiar",
    subTipo: "Economica",
    descripcion:
      "La habitación familiar es perfecta para grupos o familias que desean compartir una estancia cómoda y conveniente.",
    caracteristica: "Sin sala de estar",
    capacidad: 4,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosNuevas/familiar+Economica.jpg",
  },

  {
    precio: 500,
    tipo_Habitacion: "Familiar",
    subTipo: "Confort",
    descripcion:
      "La habitación familiar es perfecta para grupos o familias que desean compartir una estancia cómoda y conveniente.",
    caracteristica: "Sala de estar espaciosa, 2 baños",
    capacidad: 5,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosNuevas/Familiar-Confort.jpg",
  },

  {
    precio: 700,
    tipo_Habitacion: "Familiar",
    subTipo: "Gold",
    descripcion:
      "La habitación familiar es perfecta para grupos o familias que desean compartir una estancia cómoda y conveniente.",
    caracteristica: "Sala de estar espaciosa, 3 hambientes, 3 baños",
    capacidad: 6,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosNuevas/09+-+Familiar+-+Gold2.jpg",
  },

  // ------- MATRIMONIAL -------

  {
    precio: 300,
    tipo_Habitacion: "Matrimonial",
    subTipo: "Economica",
    descripcion:
      "Nuestra habitación matrimonial es perfecta para parejas en busca de comodidad y relajación, con una cama king-size y todas las comodidades que necesitas.",
    caracteristica: "Experiencia romántica, Habitaciones: 1",
    capacidad: 2,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosNuevas/Matrimonial-Economica.jpg",
  },

  {
    precio: 550,
    tipo_Habitacion: "Matrimonial",
    subTipo: "Confort",
    descripcion:
      "Nuestra habitación matrimonial es perfecta para parejas en busca de comodidad y relajación, con una cama king-size y todas las comodidades que necesitas.",
    caracteristica:
      "Experiencia romántica, Sala de estar, Espaciosa, Habitaciones: 1",
    capacidad: 2,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosNuevas/Matrimonial-Confort.jpeg",
  },

  {
    precio: 1000,
    tipo_Habitacion: "Matrimonial",
    subTipo: "Gold",
    descripcion:
      "Nuestra habitación matrimonial es perfecta para parejas en busca de comodidad y relajación, con una cama king-size y todas las comodidades que necesitas.",
    caracteristica:
      "Experiencia romántica, Sala de estar, Espaciosa, Cocina privada, Servicios de consejeria, Servicios románticos, Habitaciones: 1",
    capacidad: 2,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosHabitaciones/15+-+Matrimonial+-+Gold.jpg",
  },

  // ------- EJECUTIVA -------

  {
    precio: 360,
    tipo_Habitacion: "Ejecutiva",
    subTipo: "Economica",
    descripcion:
      "La habitación ejecutiva está diseñada para viajeros de negocios que buscan comodidades y servicios adicionales para una estancia productiva y relajante.",
    caracteristica: "Area de trabajo pequeña",
    capacidad: 3,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosHabitaciones/10+-+Ejecutiva+-+Economica.webp",
  },

  {
    precio: 700,
    tipo_Habitacion: "Ejecutiva",
    subTipo: "Confort",
    descripcion:
      "La habitación ejecutiva está diseñada para viajeros de negocios que buscan comodidades y servicios adicionales para una estancia productiva y relajante.",
    caracteristica: "Area de trabajo espaciosa",
    capacidad: 5,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/Fotos/11+-+Ejecutiva+-+Confort-transformed.jpeg",
  },

  {
    precio: 1200,
    tipo_Habitacion: "Ejecutiva",
    subTipo: "Gold",
    descripcion:
      "La habitación ejecutiva está diseñada para viajeros de negocios que buscan comodidades y servicios adicionales para una estancia productiva y relajante.",
    caracteristica:
      "Sala de reunión, Area de trabajo espaciosa, Servicios de conserjería, Habitaciones: 2",
    capacidad: 8,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosHabitaciones/12+-+Ejecutiva+-+Gold.jpg",
  },

  // ------- VIP -------

  {
    precio: 600,
    tipo_Habitacion: "VIP",
    subTipo: "Economica",
    descripcion:
      "La habitación VIP ofrece una experiencia de lujo exclusiva para aquellos que buscan la máxima comodidad y atención personalizada.",
    caracteristica:
      "Experiencia VIP, Servicios VIP, Sala de estar, Habitaciones: 2",
    capacidad: 3,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosHabitaciones/16+-+Vip-+Economica.jpg",
  },

  {
    precio: 1200,
    tipo_Habitacion: "VIP",
    subTipo: "Confort",
    descripcion:
      "La habitación VIP ofrece una experiencia de lujo exclusiva para aquellos que buscan la máxima comodidad y atención personalizada.",
    caracteristica:
      "Experiencia VIP, Servicios VIP, Sala de estar, Habitaciones: 3, Suite, Comedor, Cocina privada",
    capacidad: 5,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/Fotos/17+-+Vip+-+Confort-transformed.jpeg",
  },

  {
    precio: 3000,
    tipo_Habitacion: "VIP",
    subTipo: "Gold",
    descripcion:
      "La habitación VIP ofrece una experiencia de lujo exclusiva para aquellos que buscan la máxima comodidad y atención personalizada.",
    caracteristica:
      "Experiencia VIP, Servicios VIP, Sala de estar, Habitaciones: 3, Suite, Comedor, Cocina privada, Jacuzzi, Área de trabajo",
    capacidad: 8,
    image:
      "https://s3-pf40a.s3.sa-east-1.amazonaws.com/FotosHabitaciones/18+-+Vip-+Gold.jpg",
  },
];

module.exports = datos_Habitacion_Detalle;
