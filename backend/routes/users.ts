import express, { Express, Request, Response } from 'express';
import multer from 'multer';

import path from 'node:path'
import fs from 'node:fs'

import { handleError } from '..';

const router = express.Router();
const upload = multer({ dest: 'uploads/' })

router.post('/user-name', (req: Request, res: Response) => {
    if (!req.body?.name) {
        return res.send("Please provide a name");
    }

    return res.send(`your name is ${req.body.name}`);
});

router.post("/:id/avatar", upload.single('avatar'), (req: Request, res: Response) => {
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

export default router;