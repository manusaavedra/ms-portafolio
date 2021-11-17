import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import SocialIcons from '../components/SocialIcons'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Manuel Saavedra</title>
        <meta name="description" content="Bienvenido a mi humilde espacio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <section className="presentation">
          <Image src="/avatar.png" width={331} height={320} alt="manuel saavedra avatar" />
          <div className="presentation-content">
            <div>
              <h4 className="text-primary">HOLA 👋🏼, SOY</h4>
              <h3>Manuel Saavedra</h3>
              <p>Desarrollador Frontend. Actualmente sigo aprendiendo sobre nuevas tecnologías.</p>
            </div>
            <SocialIcons />
          </div>
        </section>
        <div className="signal">
          <a href="#projects">
            <h5>Aquí tienes algunos proyectos que te quiero compartir.</h5>
            <Image src="/arrow-down-icon.svg" width={24} height={24} alt="arrow down icon" />
          </a>
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
            <div className="item-image">
              <Image src="/project-1.png" width={587} height={390} alt="manuel saavedra avatar" />
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
              <Image src="/project-2.png" width={587} height={390} alt="manuel saavedra avatar" />
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
              <Image src="/project-3.png" width={587} height={390} alt="manuel saavedra avatar" />
            </div>
          </article>
        </section>
        <section className="skills">
          <article className="skills-content">
            <h4>Algunas Habilidades</h4>
            <Image src="/skills.svg" width={578} height={300} alt="manuel saavedra avatar" />
          </article>
        </section>
        <Footer />
      </main>
    </div>
  )
}
