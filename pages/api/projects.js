import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {

    let method = req.method
    const prisma = new PrismaClient()

    switch (method) {
        case 'POST': {

            let { title, description, categories, photoURL, url } = req.body
    
            try {
                
                const post = await prisma.projects.create({
                    data: {
                        title: title,
                        photoURL: photoURL,
                        description: description,
                        categories: {
                            connect: categories
                        },
                        url: url
                    }
                })
        
                return res.status(200).send({
                    data: post
                })

            } catch (error) {
                return res.status(500).send({
                    error: error,
                    message: 'No se pudo crear el proyecto.'
                })
            }
        }

        case 'PUT': {

            let { id, title, description, photoURL, categoryIDs, url } = req.body
    
            try {
                
                const post = await prisma.projects.update({
                    where: {
                        id: id
                    },
                    data: {
                        title: title,
                        photoURL: photoURL,
                        description: description,
                        url: url,
                        categoryIDs: categoryIDs
                    }
                })
        
                return res.status(200).send({
                    data: post
                })

            } catch (error) {
                return res.status(500).send({
                    error: error,
                    message: 'No se pudo actualizar el proyecto'
                })
            }
        }

        case 'DELETE': {

            let { id } = req.body
    
            try {

                const post = await prisma.projects.delete({
                    where: {
                        id: id
                    }
                })

                return res.status(200).send({
                    data: post
                })

            } catch (error) {
                return res.status(500).send({
                    error: error,
                    message: 'No se puedo eliminar el proyecto'
                })
            }
        }

        case "GET": {

            try {
                let post = await prisma.projects.findMany({
                    include: {
                        categories: true
                    }
                })

                return res.status(200).send({
                    data: post
                })

            } catch (error) {
                return res.status(500).send({
                    error: error,
                    message: 'ha ocurrido un error al obtener los datos'
                })
            }
        }

    }
}
