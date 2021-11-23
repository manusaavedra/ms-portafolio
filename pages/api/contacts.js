const nodemailer = require('nodemailer')

export default async function handler(req, res) {

    const method = req.method

    switch (method) {

        case 'POST': {
            
            const {from, to, subject, message} = req.body

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'manusaavedra.portafolioweb@gmail.com',
                    pass: '#yamahaxf0907'
                }
            })

            const mailOptions = {
                from: from,
                to: 'manusaavedra.portafolioweb@gmail.com',
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