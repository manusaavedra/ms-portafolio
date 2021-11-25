import { getFileBySlug, getFile } from "../../services/mdx"
import { MDXRemote } from "next-mdx-remote"
import Navigation from "../../components/Navigation"

export default function Post({ source, frontmatter }) {
    
    console.log(source)

    return (
        <MDXRemote {...source} components={{Navigation}} />
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