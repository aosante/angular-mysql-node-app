import {Router} from 'express';

export class ListingRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Listings route'));
    }
}

const listingRoutes = new ListingRoutes();
export default listingRoutes.router; 