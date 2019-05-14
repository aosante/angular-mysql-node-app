import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import listingRoutes from './routes/listingRoutes';
import bodyParser = require('body-parser');

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', 3000 || process.env.PORT);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded());
    }

    routes(): void {
        this.app.use('/api', indexRoutes);
        this.app.use('/api/listing', listingRoutes);

    }

    
    start(): void {
        this.app.listen(this.app.get('port'), () => console.log(`Server listening on port ${this.app.get('port')}`))
    }
}

const server = new Server();
server.start();