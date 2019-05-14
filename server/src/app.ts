import express, {Application} from 'express';

import indexRoutes from './routes/indexRoutes';
//import {listingRoutes} from './routes/listingRoutes';

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', 3000 || process.env.PORT);
    }

    routes(): void {
        this.app.use('/api', indexRoutes);

    }

    
    start(): void {
        this.app.listen(this.app.get('port'), () => console.log(`Server listening on port ${this.app.get('port')}`))
    }
}

const server = new Server();
server.start();