import { Request, Response, NextFunction, Router } from "express";
import * as path from 'path';

let router = Router();

// router.get('index.html', (req: Request, res: Response, next: NextFunction) => {
//     res.sendFile("index.html", { root: "./dist/public" });
// });

// router.get('**', (req: Request, res: Response, next: NextFunction) => {
//     res.send("page not found!");
// });

export let indexRoute: Router = router;