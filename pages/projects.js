import Head from "next/head"
import { useEffect, useState } from "react"
import Navigation from "../components/Navigation"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Footer from "../components/Footer"

export default function Projects() {

    const [state, setState] = useState([])

    useEffect(() => {
        fetch('/api/projects')
            .then((res) => res.json())
            .then((data) => setState(data))
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const ProjectsItems = () => {

        return (
            <section className="max-w-5xl py-14 min-h-screen mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-2">
                {
                    state.sort((a, b) => b.fixed - a.fixed)
                        .sort((a, b) => b.priority - a.priority)
                        .map((project) => {
                            return (
                                <article className="w-full border rounded-md" key={project.id}>
                                    <a href={project.url} target="_blank" rel="noreferrer" >
                                        <picture className="w-full">
                                            <img className="w-full" src={`${project.imageURL}`} alt={project.title} />
                                        </picture>
                                        <div className="p-4">
                                            <h5 className="text-2xl font-bold">{project.title}</h5>
                                            <p className="line-clamp-3">{documentToReactComponents(project.description)}</p>
                                        </div>
                                    </a>
                                </article>
                            )
                        })
                }
            </section>
        )
    }

    return (
        <>
            <Head>
                <title>Manuel Saavedra - Proyectos</title>
                <meta name="description" content="Estos son algunos proyectos que he querido compatir con todos." />
                <meta property="og:image" content="/uploads/seo-projects.png" />
            </Head>
            <Navigation />
            <main className="px-4">
                <ProjectsItems />
            </main>
            <Footer />
        </>
    )
}
