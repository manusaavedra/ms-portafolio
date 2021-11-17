import Image from 'next/image'

export default function SocialIcons() {
    return (
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/manusaav3dra/" target="_blank" rel="noreferrer">
                <Image src="/linkedin-icon.svg" width={24} height={24} layout="intrinsic" alt="instagram icon" />
            </a>
            <a href="https://github.com/manusaavedra" target="_blank" rel="noreferrer">
                <Image src="/github-icon.svg" width={24} height={24} layout="intrinsic" alt="instagram icon" />
            </a>
            <a href="https://www.instagram.com/manu_saav3dra" target="_blank" rel="noreferrer">
                <Image src="/instagram-icon.svg" width={24} height={24} layout="intrinsic" alt="instagram icon" />
            </a>
        </div>
    )
}