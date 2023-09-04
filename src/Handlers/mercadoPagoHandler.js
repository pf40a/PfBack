const { createPreference, getFeedBack } = require("../Controllers/mercadoPagoController")


const createPreferenceHandler = async (req, res) => {
    try {
        const { title, unit_price, quantity } = req.body

        const resultado = await createPreference(title, unit_price, quantity)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}

const feedBackHandler = async (req, res) => {
    try {

        const { payment_id, status, merchant_order_id } = req.query

        const resultado = await getFeedBack(payment_id, status, merchant_order_id)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)
        
    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}


module.exports = { createPreferenceHandler, feedBackHandler };