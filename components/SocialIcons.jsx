import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function SocialIcons({ className }) {
    return (
        <div className={`${className} text-gray-500 flex items-center gap-4`}>
            <a href="https://www.linkedin.com/in/manusaav3dra/" target="_blank" rel="noreferrer">
                <AiFillLinkedin size={40} color="inherit" />
            </a>
            <a href="https://github.com/manusaavedra" target="_blank" rel="noreferrer">
                <AiFillGithub size={40} color="inherit" />
            </a>
            <a href="https://www.instagram.com/manu_saav3dra" target="_blank" rel="noreferrer">
                <AiFillInstagram size={40} color="inherit" />
            </a>
        </div>
    )
}