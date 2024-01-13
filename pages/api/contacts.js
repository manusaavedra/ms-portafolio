import { Resend } from 'resend';

export default async function handler(req, res) {
    const method = req.method

    switch (method) {
        case 'POST': {
            const { email, message, names } = req.body

            const resend = new Resend(process.env.RESEND_APIKEY);

            const htmlTemplate = `
                <b>${names} ha escrito: </b>
                <br/><br/>
                <p>${message}</p>
            `

            const { data, error } = await resend.emails.send({
                from: 'portafolioweb@resend.dev',
                to: process.env.RESEND_EMAILTO,
                reply_to: email,
                subject: `Nuevo mensaje de ${names} - portafolio`,
                html: htmlTemplate
            })

            return res.status(200).send({ data, error })
        }
    }
}