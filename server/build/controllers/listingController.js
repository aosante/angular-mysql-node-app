"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ListingController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listings = yield database_1.default.query('SELECT * FROM listings');
                res.json(listings);
            }
            catch (err) {
                console.error(err);
                res.status(500).send('Server error');
            }
        });
    }
    //get one
    //create 
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO listings set ?', [req.body]);
                res.json({ msg: 'Listing created succesffully' });
            }
            catch (err) {
                console.error(err);
                res.status(400).send('Server error');
            }
        });
    }
    //update
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //
        });
    }
    //delete
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json({ msg: `Juego numero ${req.params.id} eliminado` });
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
exports.listingController = new ListingController();
