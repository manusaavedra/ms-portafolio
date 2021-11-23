import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import SocialIcons from '../components/SocialIcons'
import Footer from '../components/Footer'
import AvatarImage from '../public/avatar.png'
import { IoIosArrowDown } from 'react-icons/io'
import useDarkMode from '../hooks/useDarkMode'

export default function Home() {

  const [switchTheme, theme, isMounted] = useDarkMode()

  const scrollVisibleArea = (selector) => {
    let section = document.querySelector(selector);
    section.scrollIntoView({
      block: 'start',
      behavior: 'instant',
      inline: 'start'
    })
  }

  return (
    <div>
      <Head>
        <title>Manuel Saavedra</title>
        <meta name="description" content="Bienvenido a mi humilde espacio" />
        <meta property="og:image" content="/uploads/seo-featured.png" />
      </Head>
      <main>
        <Navigation />
        <section className="presentation">
          <Image src={AvatarImage} width={331} height={320} alt="manuel saavedra avatar" />
          <div className="presentation-content">
            <h4 className="text-primary">HOLA 👋🏼, SOY</h4>
            <div>
              <h3>Manuel Saavedra</h3>
              <p>Desarrollador Frontend. Actualmente sigo aprendiendo sobre nuevas tecnologías.</p>
            </div>
            <SocialIcons />
          </div>

        </section>
        <div className="signal">
          <h5>Aquí tienes algunos proyectos que te quiero compartir.</h5>
          <button onClick={() => scrollVisibleArea("#projects")}>
            <IoIosArrowDown size={24} color="inherit" />
          </button>
        </div>
        <section className="projects" id="projects">
          <article className="projects-items">
            <div className="items-content">
              <h5>Sequentracks</h5>
              <p>Un reproductor de secuencias de audio multitrack para músicos.</p>
              <span className="caption">- Solo Desktop</span>
              <a href="https://multitrackapp.netlify.app" target="_blank" rel="noreferrer">
                <button className="primary">
                  Ver demo
                </button>
              </a>
            </div>
            <div className="items-image">
              <Image src="/uploads/project-1.png" loading="lazy" width={587} height={390} alt="manuel saavedra avatar" />
            </div>
          </article>
          <article className="projects-items">
            <div className="items-content">
              <h5>Overtime</h5>
              <p>Simple registro de jornada laboral u horas extras para trabajadores.</p>
              <span className="caption">- Responsive</span>
              <a href="https://overtime.netlify.app" target="_blank" rel="noreferrer">
                <button className="primary">
                  Ver demo
                </button>
              </a>
            </div>
            <div className="item-image">
              <Image src="/uploads/project-2.png" loading="lazy" width={587} height={390} alt="manuel saavedra avatar" />
            </div>
          </article>
          <article className="projects-items">
            <div className="items-content">
              <h5>Covid 19 Map</h5>
              <p>Mapa de contagiados por la pandemia covid-19.</p>
              <span className="caption">- Responsive</span>
              <a href="https://manusaavedra.github.io/Mapa-Coronavirus/" target="_blank" rel="noreferrer">
                <button className="primary">
                  Ver demo
                </button>
              </a>
            </div>
            <div className="item-image">
              <Image src="/uploads/project-3.png" loading="lazy" width={587} height={390} alt="manuel saavedra avatar" />
            </div>
          </article>
        </section>
        <section className="skills">
          <article className="skills-content">
            <h4>Algunas Habilidades</h4>
            <Image 
              src={`/skills-${theme}.svg`} 
              layout="intrinsic" 
              width={600} 
              height={300} 
              alt="skills" />
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}
