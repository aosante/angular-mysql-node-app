import { Request, Response } from 'express';

import pool from '../database';

class ListingController {

    public async list(req: Request, res: Response): Promise<void> {
        try {
            const listings = await pool.query('SELECT * FROM listings');
            res.json(listings);
        }catch(err) {
            console.error(err);
            res.status(500).send('Server error')
        }      
    }
    //get one


    //create 
    public async create(req: Request, res: Response): Promise<void> {
        try {
            await pool.query('INSERT INTO listings set ?', [req.body]);
            res.json({msg: 'Listing created succesffully'});
        }catch(err) {
            console.error(err);
            res.status(400).send('Server error')
        }
    }

    //update
    public async update(req: Request, res: Response): Promise<void> {
        //
    }

    //delete
    public async delete(req: Request, res: Response): Promise<void> {
        try {
            res.json({msg: `Juego numero ${req.params.id} eliminado`});
        }catch(err) {
            console.error(err);
        }
    }

}

export const listingController = new ListingController();