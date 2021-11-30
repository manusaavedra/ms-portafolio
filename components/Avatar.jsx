import Image from 'next/image'

export default function Avatar() {
    return (
        <div className="avatar">
            <Image src="/avatar-only.png" width={60} height={60} layout="responsive" alt="Manuel Saavedra" />
        </div>
    )
}