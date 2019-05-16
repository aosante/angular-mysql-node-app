"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listingController_1 = require("../controllers/listingController");
class ListingRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', listingController_1.listingController.list);
        this.router.post('/', listingController_1.listingController.create);
        this.router.put('/:id', listingController_1.listingController.update);
        this.router.delete('/:id', listingController_1.listingController.delete);
    }
}
exports.ListingRoutes = ListingRoutes;
const listingRoutes = new ListingRoutes();
exports.default = listingRoutes.router;
