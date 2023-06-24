import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import cors from 'cors';

import path from 'node:path'
import fs from 'node:fs'

dotenv.config();

const app: Express = express();

const upload = multer({ dest: 'uploads/' })

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

app.post('/user-name', (req: Request, res: Response) => {
    if (!req.body?.name) {
        return res.send("Please provide a name");
    }

    return res.send(`your name is ${req.body.name}`);
});

app.post("/users/:id/avatar", upload.single('avatar'), (req: Request, res: Response) => {
    if (!req.file) {
        return handleError(true, res, "image is missing.");
    }

    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "./uploads/image.png");

    fs.rename(tempPath, targetPath, (err) => {
        if (err) return handleError(err, res);
    });

    return res.send("file received");
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})