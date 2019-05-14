import {Router} from 'express';

export class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Index route'));
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;