import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import multer from 'multer'



dotenv.config();

const app: Express = express();

const upload = multer({ dest: 'uploads/' })

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    return res.send("Hello World!");
})

app.post('/user-name', (req: Request, res: Response) => {
    if (!req.body?.name) {
        return res.send("Please provide a name");
    }

    return res.send(`your name is ${req.body.name}`);
});

app.post("/users/:id/avatar", upload.single('avatar'), (req: Request, res: Response) => {
    console.log(req.params?.id, "<+++++++++++>", req.file);
    return res.send("file received");
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})