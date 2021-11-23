import Head from "next/head"
import { useEffect, useState } from "react"
import Image from 'next/image'
import Navigation from "../components/Navigation"
import { PrismaClient } from "@prisma/client"
import Footer from "../components/Footer"

export default function Projects({ projects }) {

    const [state, setState] = useState([])

    useEffect(() => {
        setState(projects)
    }, [projects])

    const CategoryItems = ({ categories }) => {
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
            <section className="grid-projects projects-section">
                {
                    state.map((project) => {
                        return (
                            <article key={project.id}>
                                <a href={project.url} target="_blank" rel="noreferrer" >
                                    <Image src={`${project.photoURL}`} loading="lazy" layout="responsive" width={810} height={540} alt={project.title} />
                                    <div className="grid-items-content">
                                        <h5>{project.title}</h5>
                                        <p>{project.description}</p>
                                        <CategoryItems categories={project.categories} />
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
        <main>
            <Head>
                <title>Manuel Saavedra - Proyectos</title>
                <meta name="description" content="Estos son algunos proyectos que he querido compatir con todos." />
                <meta property="og:image" content="/uploads/projects-1.png" />
            </Head>
            <Navigation />
            <ProjectsItems />
            <Footer />
        </main>
    )
}

export const getServerSideProps = async (ctx) => {

    const prisma = new PrismaClient()

    const post = await prisma.projects.findMany({
        include: {
            categories: true
        }
    })

    return {
        props: {
            projects: post
        }
    }
}