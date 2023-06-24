import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import users from './routes/users'

dotenv.config();

const app: Express = express();

app.use(express.json())
app.use(cors())

export const handleError = (err: Error | true, res: Response, message: string = '') => {
    // log err
    res
        .status(500)
        .contentType("text/plain")
        .end(message || "Oops! Something went wrong!");
};

app.get('/', (req: Request, res: Response) => {
    return res.send("Hello World!");
})

app.use('/users', users);

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})