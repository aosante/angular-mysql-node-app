import {Router} from 'express';
import {listingController} from '../controllers/listingController';

export class ListingRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', listingController.list);
        this.router.post('/', listingController.create);
        this.router.put('/:id', listingController.update);
        this.router.delete('/:id', listingController.delete);
    }
}

const listingRoutes = new ListingRoutes();
export default listingRoutes.router; 