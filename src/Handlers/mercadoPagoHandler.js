const { createPreference, getFeedBack, webhookController } = require("../Controllers/mercadoPagoController")


const createPreferenceHandler = async (req, res) => {
    try {
        const { items, reservaId } = req.body

        const resultado = await createPreference(items, reservaId)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}

const feedBackHandler = async (req, res) => {
    try {

        const { payment_id, status, merchant_order_id, reservaId } = req.query

        const resultado = await getFeedBack(payment_id, status, merchant_order_id, reservaId)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)
        
    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}

const webhookHandler = async (req, res) => {
    try {

        const { notificationData } = req.body

        const resultado = await webhookController(notificationData)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)
        
    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}


module.exports = { createPreferenceHandler, feedBackHandler, webhookHandler };
