import { useRef, useState } from "react"
import Swal from 'sweetalert2'
import ContactsLinks from "./ContactsLinks"

export default function ContactsForm() {
    const formRef = useRef()

    const resetForm = () => {
        formRef.current.reset()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = Object.fromEntries(new FormData(e.target))

        if (Object.values(form).includes('')) return

        const res = await fetch('/api/contacts', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (res.ok) {
            resetForm()
            Swal.fire({
                icon: "success",
                animation: false,
                text: 'Genial, ya he recibido tu mensaje!, en cuanto pueda lo miro. Gracias 😊',
                showConfirmButton: false,
            })
        }


    }

    return (
        <>
            <ContactsLinks />
            <form className="max-w-md w-full flex flex-col items-stretch gap-4" ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <input className="w-full" name="names" type="text" placeholder="¿Cómo te llamas?" />
                </div>
                <div>
                    <input className="w-full" name="email" type="email" placeholder="Escríbe tu email" />
                </div>
                <div>
                    <textarea className="w-full" name="message" placeholder="¿Qué quieres decirme?" cols="30" rows="10" />
                </div>
                <div>
                    <button className="w-full bg-yellow-500" type="submit">Enviar</button>
                </div>
            </form>
        </>
    )
}