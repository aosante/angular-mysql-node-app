"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
//import {listingRoutes} from './routes/listingRoutes';
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', 3000 || process.env.PORT);
    }
    routes() {
        this.app.use('/api', indexRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => console.log(`Server listening on port ${this.app.get('port')}`));
    }
}
const server = new Server();
server.start();
