import { CgMail, CgSmartphone } from 'react-icons/cg'

export default function ContactsLinks() {
    return (
        <div className="flex justify-center">
            <ul className="flex items-center justify-center font-semibold flex-wrap text-base gap-4 py-6">
                <li className="flex items-center gap-2">
                    <CgMail size={24} />
                    <a href="mailto:saavedramape@gmail.com">saavedramape@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                    <CgSmartphone size={24} />
                    <a href="tel:+34622494823">+34 622 49 48 23</a>
                </li>
            </ul>
        </div>
    )
}