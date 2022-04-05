"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("../config/db");
// import routes
const IndexRoutes_1 = __importDefault(require("../routes/IndexRoutes"));
// Server Class
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.db = new db_1.DbConfig();
        this.config();
        this.routes();
    }
    config() {
        // Settings
        this.app.set("port", process.env.PORT || 4000);
        this.db.dbConnection();
        // middlewares
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use("/", IndexRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Servidor escuchando en el puerto:", this.app.get("port"));
        });
    }
}
exports.Server = Server;
