import express, { Express, Request, Response } from 'express';


import { handleError } from '..';
import BookController from '../controllers/BookController';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const book_controller = new BookController();
    const books = await book_controller.index();
    return res.send(books);
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const book_controller = new BookController();
        await book_controller.store();

        return res.send("Book created");
    } catch (error) {
        console.log(error);
        return res.send("Error");
    }
});


export default router;