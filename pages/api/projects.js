export default async function handler(req, res) {
    const contentful = require('contentful')

    const client = contentful.createClient({
        space: '517cfkxqki7d',
        environment: 'master',
        accessToken: '1cjARocK8d4jjOaikkHY-MnHDwGPvUERRI1jNRBco44'
    })

    const entriesMapper = (entries) => entries.map((entry) => {
        const { id, createdAt, updatedAt } = entry.sys
        const { title, description, image, fixed, url, priority } = entry.fields
        const imageURL = image.fields.file.url

        return {
            id,
            title,
            description,
            imageURL,
            fixed,
            url,
            priority,
            createdAt,
            updatedAt
        }
    })

    client.getEntries({ content_type: 'projects' })
        .then((entries) => res.status(200).send(entriesMapper(entries.items)))
        .catch(console.error)
}
