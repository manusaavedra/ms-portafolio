import {CgMail, CgSmartphone} from  'react-icons/cg'

export default function ContactsLinks() {
    return (
        <div className="contacts-links">
            <ul>
                <li>
                    <CgMail size={24} />
                    <a href="mailto:saavedramape@gmail.com">saavedramape@gmail.com</a>
                </li>
                <li>
                    <CgSmartphone size={24} />
                    <a href="tel:+34622494823">+34 622 49 48 23</a>
                </li>
            </ul>
        </div>
    )
}