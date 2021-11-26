import Image from 'next/image'
import ActiveLink from '../components/ActiveNavLink'
import useDarkMode from '../hooks/useDarkMode'
import useToggle from '../hooks/useToggle'
import ThemeSwitchButton from './ThemeSwitchButton'
import {CgMenuRight} from  'react-icons/cg'

export default function Navigation() {

    const [toggle, handleToggle] = useToggle(false)
    const [switchTheme, theme, isMounted] = useDarkMode()

    if (!isMounted) return null

    return (
        <header>
            <Image src={`/logo-fulltext-${theme}.svg`} width={282} height={35} alt="logo" />
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
                        <li>
                            <ActiveLink activeClassName="active" href="/blog">
                                <a>Blog</a>
                            </ActiveLink>
                        </li>
                    </ul>
                </nav>
                <ThemeSwitchButton />
            </div>
            <button className="toogle-menu-action" onClick={handleToggle}>
                <CgMenuRight size={24} color="inherit" />
            </button>
        </header>
    )
}