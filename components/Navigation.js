import ActiveLink from '../components/ActiveNavLink'

export default function Navigation() {
    return (
        <header>
            <h5>/manusaavedra</h5>
            <nav className="hidden-sm">
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
            <button className="secondary hidden-sm ">Descargar Curriculum</button>
        </header>
    )
}