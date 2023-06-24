import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
app.use(express.json())

app.post('/', (req: Request, res: Response) => {
    if (!req.body?.name) {
        return res.send("Please provide a name");
    }

    return res.send(`your name is ${req.body.name}`);
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})