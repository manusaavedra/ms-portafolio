import {PrismaClient} from '@prisma/client'

export default async function handler(req, res) {
    const prisma = new PrismaClient()
    const post = await prisma.projects.create({
        data: {
            title: 'Sequentracks',
            description: 'Reproductor multitrack para músicos.',
            categories: {
                connect: [
                    {
                        id:'61959cecb1136ce310a91287'
                    },
                    {
                        id: '61959d2eb1136ce310a9128b'
                    }
                ]
            },
            url: 'https://multitrackapp.netlify.app/player'
        }
    })

    res.status(200).send({
        data: post
    })
}
