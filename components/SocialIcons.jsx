import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function SocialIcons({ className }) {
    return (
        <div className={`${className} text-gray-500 flex items-center gap-4`}>
            <a className="hover:text-black text-neutral-800" href="https://www.linkedin.com/in/manusaav3dra/" target="_blank" rel="noreferrer">
                <AiFillLinkedin size={36} color="inherit" />
            </a>
            <a className="hover:text-black text-neutral-800" href="https://github.com/manusaavedra" target="_blank" rel="noreferrer">
                <AiFillGithub size={36} color="inherit" />
            </a>
            <a className="hover:text-black text-neutral-800" href="https://www.instagram.com/manu_saav3dra" target="_blank" rel="noreferrer">
                <AiFillInstagram size={36} color="inherit" />
            </a>
        </div>
    )
}