import Image from 'next/image'
import SocialIcons from "./SocialIcons";
import moment from '../services/moment';

export default function Footer() {
    return (
        <footer>
            <Image src="/logo-fulltext-gray.svg" width={282} height={35} alt="logo" />
            <p>Hecho por manuel. Copyright {moment().year()} - Todos los derechos reservados.</p>
            <SocialIcons />
        </footer>
    )
}