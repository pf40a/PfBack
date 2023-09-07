const { json } = require("body-parser");
const mercadopago = require("mercadopago");
const Reservas = require("../Models/Reservas")

mercadopago.configure({ 
    sandbox: true,
    access_token: "TEST-4582676939885627-083011-b301d1d18ace9dafb54e061ad306aed1-273198687" 
});

const createPreference = async (items, reservaId) => {

    let preference = {//Definimos la preferencia para pasarsela a mercado pago
		items: items,
		back_urls: {
			"success": `https://pffront40.onrender.com/?reservaId=${reservaId}`,//PRUEBA
			"failure": `https://pffront40.onrender.com/?reservaId=${reservaId}`,//PRUEBA
			"pending": `https://pffront40.onrender.com/?reservaId=${reservaId}` //PRUEBA2
		},
		auto_return: "approved",
	};

    const response = await mercadopago.preferences.create(preference);

    return { init_point: response.body.init_point }

}

const getFeedBack = async (payment_id, status, merchant_order_id, reservaId) => {

	const findReserva = await Reservas.findByPk(reservaId)

	if (status) {
		findReserva.pago_Estado = status
	}

	await findReserva.save()

	return {
		Payment: payment_id,
		Status: status,
		MerchantOrder: merchant_order_id,
		ReservaId: reservaId
	};
};

const webhookController = async (notificationData) => {
	
	// DESCOMENTAR PARA PRUEBA CUANDO SE HAGA EL DEPLOY

	// const findReserva = await Reservas.findByPk(notificationData.metadata.reservaId)
	// findReserva.pago_Estado = notificationData.data.status

	// await findReserva.save()

	return notificationData

}

module.exports = { createPreference, getFeedBack, webhookController }
