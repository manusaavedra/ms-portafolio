import Image from 'next/image'
import ActiveLink from './ActiveNavLink'
import useToggle from '../hooks/useToggle'
import { CgClose, CgMenuRight } from 'react-icons/cg'

export default function Navigation() {

    const [toggle, handleToggle] = useToggle(false)

    return (
        <header className="sticky z-10 bg-white top-0 left-0 w-full">
            <div className="relative z-10 bg-white px-2 py-2 flex items-center justify-between border-b">
                <Image src={`/logo-fulltext-light.svg`} width={240} height={30} alt="logo" />
                <div className={`hidden md:block`}>
                    <nav>
                        <ul className="flex gap-4 items-center">
                            <li>
                                <ActiveLink activeClassName="border-b-2 border-yellow-500 font-semibold" href="/">
                                    <a className="py-3">Sobre mí</a>
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink activeClassName="border-b-2 border-yellow-500 font-semibold" href="/projects">
                                    <a className="py-3">Proyectos</a>
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink activeClassName="border-b-2 border-yellow-500 font-semibold" href="/blog">
                                    <a className="py-3">Blog</a>
                                </ActiveLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <button className="relative block md:hidden" onClick={handleToggle}>
                    {
                        !toggle
                            ? <CgMenuRight size={24} color="inherit" />
                            : <CgClose size={24} color="inherit" />
                    }
                </button>
            </div>
            <nav className={`fixed top-12 z-30 left-0 w-full h-auto bg-white block md:hidden ${toggle ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col bg-white z-20 shadow-md gap-0 items-center">
                    <li className="flex justify-stretch items-stretch w-full">
                        <ActiveLink activeClassName="font-semibold bg-gray-100" href="/">
                            <a className="w-full bg-white text-center py-2 active:bg-gray-100 hover:bg-gray-100 border-b">
                                Sobre mí
                            </a>
                        </ActiveLink>
                    </li>
                    <li className="flex justify-stretch items-stretch w-full">
                        <ActiveLink activeClassName="font-semibold bg-gray-100" href="/projects">
                            <a className="w-full bg-white text-center py-2 active:bg-gray-100 hover:bg-gray-100 border-b">
                                Mis Proyectos
                            </a>
                        </ActiveLink>
                    </li>
                    <li className="flex justify-stretch items-stretch w-full">
                        <ActiveLink activeClassName="font-semibold bg-gray-100" href="/blog">
                            <a className="w-full bg-white text-center py-2 active:bg-gray-100 hover:bg-gray-100 border-b">
                                Blog
                            </a>
                        </ActiveLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}