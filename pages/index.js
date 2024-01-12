import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import SocialIcons from '../components/SocialIcons'
import Footer from '../components/Footer'
import AvatarImage from '../public/avatar.png'
import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlineWavingHand } from 'react-icons/md'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ContactsForm from '../components/ContactsForm'
import { useEffect, useState } from 'react'

export default function Home() {

	const [projects, setProjects] = useState([])

	useEffect(() => {
		fetch('/api/projects')
			.then((res) => res.json())
			.then((data) => {
				const fixedProjects = [...data].filter((project) => project.fixed).slice(0, 3)
				setProjects(fixedProjects)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

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
			<Navigation />
			<main className="max-w-4xl mx-auto">
				<section className="flex h-[calc(100vh-200px)] flex-col md:flex-row items-center">
					<Image src={AvatarImage} width={331} height={320} alt="manuel saavedra avatar" />
					<div className="flex flex-col text-center md:text-left gap-2">
						<h4 className="flex items-center justify-center md:justify-start gap-2 text-2xl">HOLA <MdOutlineWavingHand />, SOY</h4>
						<div className="flex flex-col gap-2">
							<h3 className="headline3">Manuel Saavedra</h3>
							<p><b>Fullstack Developer</b> con experiencia en desarrollo web, también soy músico 🎸</p>
						</div>
						<SocialIcons />
					</div>
				</section>
				<div className="flex flex-col justify-center items-center gap-4">
					<h5 className="font-semibold text-xl">Aquí tienes algunos proyectos que te quiero compartir.</h5>
					<button onClick={() => scrollVisibleArea("#projects")}>
						<IoIosArrowDown size={24} color="inherit" />
					</button>
				</div>
				<section className="pt-40 px-4" id="projects">
					{
						projects.map((project) => (
							<article key={project.id} className="grid grid-cols-1 md:grid-cols-2 place-items-center">
								<div className="order-2 md:order-1 flex justify-stretch md:justify-start flex-col gap-4 px-4">
									<h5 className="headline5">{project.title}</h5>
									<p className="line-clamp-2">{documentToReactComponents(project.description)}</p>
									<a className="md:w-fit p-4 rounded-3xl bg-yellow-500 text-black font-semibold text-center" href={project.url} target="_blank" rel="noreferrer">
										Ver demo
									</a>
								</div>
								<div className="order-1 md:order-2">
									<picture>
										<img src={project.imageURL} width={587} height={390} alt={project.title} />
									</picture>
								</div>
							</article>
						))
					}
				</section>
				<section className="skills">
					<article className="skills-content">
						<h4 className="headline4">Algunas Habilidades</h4>
						<Image
							src={`/skills-light.svg`}
							layout="intrinsic"
							width={600}
							height={300}
							alt="skills" />
					</article>
				</section>
				<section className="contacts">
					<h4 className="headline4">Hablemos...</h4>
					<p>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.</p>
					<ContactsForm />
				</section>
			</main>
			<Footer />
		</div >
	)
}
