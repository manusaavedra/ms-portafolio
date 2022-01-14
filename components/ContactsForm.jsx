import { useRef } from "react"
import useInput from "../hooks/useInput"
import Modal from "./Modal"
import ContactsLinks from "./ContactsLinks"

export default function ContactsForm() {

    const {Dialog, openDialog} = Modal()

    const formRef = useRef()

    const names = useInput("")
    const email = useInput("")
    const message = useInput("")

    const resetForm = () => {
        names.reset()
        email.reset()
        message.reset()
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault()

        if (names.isEmpty() || email.isEmpty() || message.isEmpty()) {
            return
        }

        const data = {
            email: email.value,
            message: `<b>${names.value}:</b><br><br><p>${message.value}</p>`
        }

        console.log(JSON.stringify(data))
        
        const res = await fetch('/api/contacts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (res.status === 200) {
            openDialog()
        }
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <ContactsLinks />
            <div className="form-inputs">
                <input type="text" onChange={names.onChange} value={names.value} placeholder="¿Cómo te llamas?" />
            </div>
            <div className="form-inputs">
                <input type="email" onChange={email.onChange} value={email.value} placeholder="Escríbe tu email" />
            </div>
            <div className="form-inputs">
                <textarea onChange={message.onChange} value={message.value} placeholder="¿Qué quieres decirme?" cols="30" rows="10" />
            </div>
            <div className="form-inputs">
                <button type="submit" className="primary">Enviar</button>
            </div>
            <Dialog
                onClosed={resetForm}
                content={`Gracias ${names.value}, el mensaje se envio correctamente`}
            />
        </form>
    )
}