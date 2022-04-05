import { Request, Response, Router } from 'express';
import userRouter from "./UserRoutes"

class IndexRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/', (req, res)=> {
            res.send('Hola Mundo!');
        })

        this.router.use('/user', userRouter);
    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;