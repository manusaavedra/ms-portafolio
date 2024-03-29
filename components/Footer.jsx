import Image from 'next/image'
import SocialIcons from "./SocialIcons";
import moment from '../services/moment';
import ContactsLinks from './ContactsLinks';

export default function Footer() {
    return (
        <footer className="flex flex-col text-center px-4 items-center py-20 bg-gray-200">
            <Image src="/logo-fulltext-gray.svg" width={250} height={35} alt="logo" />
            <p>Hecho por manuel. Copyright {moment().year()} - Todos los derechos reservados.</p>
            <div className="flex justify-center flex-col">
                <ContactsLinks />
                <SocialIcons className="justify-center" />
            </div>
        </footer>
    )
}