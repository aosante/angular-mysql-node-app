"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ListingRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Listings route'));
    }
}
exports.ListingRoutes = ListingRoutes;
const listingRoutes = new ListingRoutes();
exports.default = listingRoutes.router;
