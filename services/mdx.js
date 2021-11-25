import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()

function getFile() {
    return fs.readdirSync(path.join(root, 'data'))
}

async function getFileBySlug(slug) {
    
    const mdxSource = fs.readFileSync(
        path.join(root, 'data', `${slug}.mdx`),
        'utf-8'
    )

    const {data, content} = matter(mdxSource)
    const source = await serialize(content, {})

    return {
        source,
        frontmatter: {
            slug,
            ...data
        }
    }
}

async function getAllFilesMetadata() {
    
    const files = getFile()
    
    return files.reduce((allPost, postSlug) => {
        const mdxSource = fs.readFileSync(
            path.join(root, 'data', postSlug),
            'utf-8'
        )
        const {data} = matter(mdxSource)
        return [{...data, slug: postSlug.replace('.mdx', '')}, ...allPost]
    }, [])
}

export {
    getFile,
    getFileBySlug,
    getAllFilesMetadata
}
