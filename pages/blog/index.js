import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import { getAllFilesMetadata } from "../../services/mdx"
import moment from '../../services/moment'

export default function Blog({ posts }) {
    return (
        <div>
            <Head>
                <title>Manuel Saavedra</title>
                <meta name="description" content="Blog con contenido javascript y tips de programación" />
                <meta property="og:image" content="/uploads/seo-featured.png" />
            </Head>
            <Navigation />
            <main>
                <section className="posts">
                    <div className="flatItemsPost">
                        <h5 className="text-primary">Mis posts</h5>
                        <ul>
                            {
                                posts.map((post) => (
                                    <li key={post.title}>
                                        <Link href={`/blog/${post.slug}`} passHref>
                                            <div>
                                                <h5>{post.title}</h5>
                                                <span className="caption text-secondary">{moment(post.date).format("DD MMM YYYY")}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="sidebar hidden-sm">
                        <h5 className="text-primary">Últimos proyectos</h5>
                    </div>
                </section>
            </main>
        </div>
    )
}

export async function getStaticProps() {

    const posts = await getAllFilesMetadata()

    return {
        props: {
            posts
        }
    }
}