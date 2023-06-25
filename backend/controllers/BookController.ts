import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class BookController {
    #db: PrismaClient = prisma;

    async store() {
        const books = [
            'Delectus Aut Autem',
            'Quis Ut Nam Facilis Et Officia Qui',
            'Fugiat Veniam Minus',
            'Et Porro Tempora',
            'Laboriosam Mollitia Et Enim Quasi Adipisci Quia Provident Illum',
            'Qui Ullam Ratione Quibusdam Voluptatem Quia Omnis',
            'Illo Expedita Consequatur Quia In',
            'Quo Adipisci Enim Quam Ut Ab',
            'Molestiae Perspiciatis Ipsa',
            'Illo Est Ratione Doloremque Quia Maiores Aut',
            'Vero Rerum Temporibus Dolor',
            'Ipsa Repellendus Fugit Nisi',
            'Et Doloremque Nulla',
            'Repellendus Sunt Dolores Architecto Voluptatum',
            'Ab Voluptatum Amet Voluptas',
            'Accusamus Eos Facilis Sint Et Aut Voluptatem',
            'Quo Laboriosam Deleniti Aut Qui',
            'Dolorum Est Consequatur Ea Mollitia In Culpa',
            'Molestiae Ipsa Aut Voluptatibus Pariatur Dolor Nihil',
            'Ullam Nobis Libero Sapiente Ad Optio Sint'
        ];
        for (const title of books) {

            await this.#db.book.create({
                data: {
                    slug: title + "-" + String(Date.now()),
                    title: title,
                    description: "Book 1 description",
                    authorId: "64983afe530262bdcc624b5d",
                }
            })
        }
    }

    async index() {
        return await this.#db.book.findMany();
    }

    async storeUser() {
        await this.#db.user.create({
            data: {
                email: "example@mail.com",
                name: "John Doe"
            }
        })
    }

    async findUser() {
        await this.#db.user.findUnique({
            where: {
                email: 'example@mail.com',
            },
        })
    }
}