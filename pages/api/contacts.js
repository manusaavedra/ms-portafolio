const nodemailer = require('nodemailer')

export default async function handler(req, res) {

    const method = req.method

    switch (method) {

        case 'POST': {
            
            const {to, subject, message} = req.body

            const transporter = nodemailer.createTransport({
                service: 'smtp.gmail.com',
                port: 587,
                auth: {
                    user: 'saavedramape@gmail.com',
                    pass: '#yamahaxf0907'
                }
            })

            const mailOptions = {
                from: 'saavedramape@gmail.com',
                to: to,
                subject: subject,
                text: message
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) return res.status(500).send({message: 'No se pudo enviar el correo', error: error})
                else return res.status(200).send({message: 'El correo se envió correctamente', data: info.response})
            })

            break
        }
    }
}