import Head from 'next/head'
import Navigation from '../components/Navigation'
import SocialIcons from '../components/SocialIcons'
import Footer from '../components/Footer'
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
			<main className="max-w-4xl mx-auto px-4">
				<section className="flex h-[calc(100vh-200px)] pt-4 gap-6 flex-col md:flex-row items-center">
					<picture className="w-[220px] md:w-[320px]">
						<img src="/avatar.png" alt="manuel saavedra avatar" />
					</picture>
					<div className="flex flex-col max-w-md text-center md:text-left gap-4">
						<h4 className="flex items-center justify-center md:justify-start gap-2 text-2xl">HOLA <MdOutlineWavingHand />, SOY</h4>
						<div className="flex flex-col gap-4">
							<h3 className="text-4xl md:text-5xl font-bold">Manuel Saavedra</h3>
							<p className="text-p text-gray-700"><b>Fullstack Developer</b> con experiencia en desarrollo web, también soy músico 🎸</p>
						</div>
						<SocialIcons className="justify-center md:justify-start" />
					</div>
				</section>
				<div className="flex flex-col justify-center items-center gap-4">
					<h5 className="text-xl font-normal text-center">Algunos de mis proyectos.</h5>
					<button onClick={() => scrollVisibleArea("#projects")}>
						<IoIosArrowDown size={24} color="inherit" />
					</button>
				</div>
				<section className="pt-20 grid grid-rows-3 grid-cols-1 gap-10" id="projects">
					{
						projects.map((project) => (
							<article key={project.id} className="bg-white border rounded-xl py-4 grid grid-cols-1 md:grid-cols-2 place-items-center">
								<div className="order-2 md:order-1 flex justify-stretch text-center md:text-left md:justify-start flex-col gap-4 px-4">
									<h5 className="text-2xl font-bold">{project.title}</h5>
									<p className="line-clamp-3 text-base">{documentToReactComponents(project.description)}</p>
									<a className="md:w-fit p-4 rounded-3xl bg-yellow-500 text-black font-semibold text-center" href={project.url} target="_blank" rel="noreferrer">
										Ver demo
									</a>
								</div>
								<div className="order-1 md:order-2">
									<picture className="w-full">
										<img className="w-full" src={project.imageURL} width={587} height={390} alt={project.title} />
									</picture>
								</div>
							</article>
						))
					}
				</section>
				<section className="pt-40 pb-32 flex flex-col items-center">
					<div className="flex flex-col gap-4">
						<h4 className="text-5xl font-bold text-center">Contáctame</h4>
						<p className="max-w-md text-base mx-auto text-center">Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.</p>
					</div>
					<ContactsForm />
				</section>
			</main>
			<Footer />
		</div >
	)
}
