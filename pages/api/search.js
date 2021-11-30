import {getAllFilesMetadata} from '../../services/mdx'

export default async function handler(req, res) {

    const data = await getAllFilesMetadata()

    const { id, q} = req.query
    
    if (q) {
        const results = data.filter((metadata) => {
            const {description} = metadata
            return description.toLowerCase().includes(q.toLowerCase())
        })
        return res.status(200).json(results)
    }

    return res.status(404)
}