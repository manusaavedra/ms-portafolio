import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { CgCalendar } from 'react-icons/cg'
import Navigation from '../../components/Navigation'
import SearchInput from '../../components/SearchInput'
import SpotifyPlaylist from '../../components/SpotifyPlayList'
import { getAllFilesMetadata } from "../../services/mdx"
import moment from '../../services/moment'
import Footer from '../../components/Footer'

export default function Blog({ posts }) {
    return (
        <div>
            <Head>
                <title>Manuel Saavedra</title>
                <meta name="description" content="Blog con contenido javascript y tips de programación" />
                <meta property="og:image" content="/uploads/seo-featured.png" />
            </Head>
            <Navigation />
            <main className="relative py-4 px-4">
                <section className="w-full grid grid-cols-1 md:grid-cols-[1fr,320px] gap-4">
                    <div>
                        <SearchInput />
                        <div>
                            <h5 className="font-bold text-2xl">Mis posts</h5>
                        </div>
                        <ul>
                            {
                                posts.map((post) => (
                                    <li className="flex overflow-hidden items-center gap-4 border-b py-2" key={post.title}>
                                        <div>
                                            <Image src={`/logo-thumbnail-${post.tags[0]}.svg`} width={50} height={50} alt={post.title} />
                                        </div>
                                        <Link href={`/blog/${post.slug}`} passHref>
                                            <a className="overflow-hidden block">
                                                <h5 className="text-xl font-semibold truncate text-ellipsis">{post.title}</h5>
                                                <div className="flex font-normal items-center gap-2">
                                                    <CgCalendar />
                                                    <span className="font-normal">
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
                    <div className="md:order-2">
                        <div className="sticky top-12">
                            <h5 className="font-semibold">Podcasts Favoritos:</h5>
                            <SpotifyPlaylist />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
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