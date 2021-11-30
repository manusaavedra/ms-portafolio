import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { CgCalendar } from 'react-icons/cg'
import Navigation from '../../components/Navigation'
import SearchInput from '../../components/SearchInput'
import SpotifyPlaylist from '../../components/SpotifyPlayList'
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
            <SearchInput />
            <main>
                <section className="posts">
                    <div className="flatItemsPost">
                        <div className="titles-container">
                            <h5 className="headline5 text-primary">Mis posts</h5>
                        </div>
                        <ul>
                            {
                                posts.map((post) => (
                                    <li key={post.title}>
                                        <div>
                                            <Image src={`/logo-thumbnail-${post.tags[0]}.svg`} width={50} height={50} alt={post.title} />
                                        </div>
                                        <Link href={`/blog/${post.slug}`} passHref>
                                            <a>
                                                <h5 className="headline5">{post.title}</h5>
                                                <div className="metadata">
                                                    <CgCalendar />
                                                    <span className="text-metadata">
                                                        {moment(post.publishedAt).format("DD MMM YYYY")}
                                                    </span>

                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="sidebar hidden-sm">
                        <div>
                            <h5>Podcasts Favoritos:</h5>
                            <SpotifyPlaylist />
                        </div>
                        <div>
                            <h5>Proyectos recientes</h5>

                        </div>
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