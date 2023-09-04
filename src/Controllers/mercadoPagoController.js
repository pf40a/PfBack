const { json } = require("body-parser");
const mercadopago = require("mercadopago");

mercadopago.configure({ 
    sandbox: true,
    access_token: "TEST-4582676939885627-083011-b301d1d18ace9dafb54e061ad306aed1-273198687" 
});

const createPreference = async (title, unit_price, quantity) => {

    let preference = {//Definimos la preferencia para pasarsela a mercado pago
		items: [
			{
				title: title,
				unit_price: Number(unit_price),
				quantity: Number(quantity),
			}
		],
		back_urls: {
			"success": "https://pffront40.onrender.com/",//PRUEBA
			"failure": "https://pffront40.onrender.com/",//PRUEBA
			"pending": "https://pffront40.onrender.com/" //PRUEBA2
		},
		auto_return: "approved",
	};

    const response = await mercadopago.preferences.create(preference);

    return { init_point: response.body.init_point }

}

const getFeedBack = async (payment_id, status, merchant_order_id) => {
	return {
		Payment: payment_id,
		Status: status,
		MerchantOrder: merchant_order_id
	};
};

module.exports = { createPreference, getFeedBack }