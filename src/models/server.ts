import express from 'express';
import cors from 'cors';

import { DbConfig } from "../config/db"
// import routes
import indexRouter from "../routes/IndexRoutes";

// Server Class
class Server {
    public app: express.Application;
    public db: DbConfig;

    constructor() {
        this.app = express();
        this.db = new DbConfig();

        this.config();
        this.routes();
    }

    public config(): void {
        // Settings
        this.app.set('port', process.env.PORT || 4000);
        this.db.dbConnection();
        // middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
    }

    public routes(): void {
        // const router: express.Router = express.Router();

        this.app.use('/', indexRouter);
    }

    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor escuchando en el puerto:', this.app.get('port'));
        });
    }
}

export { Server };