const { createPreference, getFeedBack, webhookController } = require("../Controllers/mercadoPagoController")
const paymentApprovedHTML = require('../Utils/mercadoPagoHTMLs/approvedHTML')
const paymentRejectedHTML = require('../Utils/mercadoPagoHTMLs/rejectedHTML')
const paymentPendingHTML = require('../Utils/mercadoPagoHTMLs/pendingHTML')


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
        
        let responseHTML;

        // Selección del HTML según el estado del pago
        if (status === 'approved') {
            responseHTML = paymentApprovedHTML;
        } else if (status === 'rejected') {
            responseHTML = paymentRejectedHTML;
        } else if (status === 'pending') {
            responseHTML = paymentPendingHTML;
        } else {
            responseHTML = `<html><body><p>Estado de pago desconocido.</p></body></html>`;
        }
        
        res.status(200).send(responseHTML)

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
