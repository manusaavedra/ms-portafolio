import Head from 'next/head'
import { getFileBySlug, getFile } from "../../services/mdx"
import { MDXRemote } from "next-mdx-remote"
import Navigation from "../../components/Navigation"
import MDXComponets from '../../components/MDXComponets'
import Footer from "../../components/Footer"
import { CgCalendar } from 'react-icons/cg'
import Avatar from '../../components/Avatar'

export default function Post({ source, frontmatter }) {
    return (
        <>
            <Head>
                <meta name="description" content={frontmatter.description} />
                <meta property="og:image" content={frontmatter.thumbnail} />
            </Head>
            <Navigation />
            <div className="container">
                <div className="metadata">
                    <Avatar />
                    <div>
                        <p className="text-metadata"><CgCalendar /> {frontmatter.publishedAt}</p>
                        <p className="text-metadata"><b>publicado por:</b> {frontmatter.publishedBy}</p>
                    </div>
                </div>
                <MDXRemote {...source} components={MDXComponets} />
            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug)
    return {
        props: {
            source,
            frontmatter
        }
    }
}

export async function getStaticPaths() {
    const posts = await getFile()

    const paths = posts.map((post) => ({
        params: {
            slug: post.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}