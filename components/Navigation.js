import Image from 'next/image'
import ActiveLink from '../components/ActiveNavLink'
import useToggle from '../hooks/useToggle'

export default function Navigation() {

    const [toggle, handleToggle] = useToggle(false)

    return (
        <header>
            <Image src="/logo-fulltext-default.svg" width={282} height={35} alt="logo" />
            <div className={`navbar ${toggle ? 'open' : ''}`}>
                <nav>
                    <ul>
                        <li>
                            <ActiveLink activeClassName="active" href="/">
                                <a>Sobre mí</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="active" href="/projects">
                                <a>Proyectos</a>
                            </ActiveLink>
                        </li>
                    </ul>
                </nav>
                <button className="secondary">Descargar Curriculum</button>
            </div>
            <button className="toogle-menu-action" onClick={handleToggle}>
                <Image src="/menu-icon.svg" width={24} height={24} alt="menu-icon" />
            </button>
        </header>
    )
}