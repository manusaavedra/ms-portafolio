import Head from "next/head"
import { useEffect, useState } from "react"
import Image from 'next/image'
import Navigation from "../components/Navigation"
import { server } from "../config"

export default function Projects({ projects }) {

    const [state, setState] = useState([])

    useEffect(() => {
        setState(projects.data)
    }, [projects])

    const CategoryItems = ({categories}) => {
        return (
            <ul className="tags">
                {
                    categories.map((category) => {
                        return (
                            <li key={category.id}>{category.category}</li>
                        )
                    })
                }
            </ul>
        )
    }

    const ProjectsItems = () => {

        console.log(state)

        return (
            <section>
                {
                    state.map((project) => {
                        return (
                            <article key={project.id}>
                                <Image src={`${project.photoURL}`} width={300} height={200} alt={project.title} />
                                <h5>{project.title}</h5>
                                <p>{project.description}</p>
                                <CategoryItems categories={project.categories} />
                            </article>
                        )
                    })
                }
            </section>
        )
    }

    return (
        <main>
            <Head>
                <title>Manuel Saavedra - Proyectos</title>
                <meta name="description" content="Estos son algunos proyectos que he querido compatir con todos." />
            </Head>
            <Navigation />
            <ProjectsItems />
        </main>
    )
}

Projects.getInitialProps = async (ctx) => {
    const res = await fetch(`${server}/api/projects`)
    const data = await res.json()
    return { projects: data }
}