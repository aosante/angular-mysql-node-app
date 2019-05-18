import { Request, Response } from 'express';

import pool from '../database';

class ListingController {
  public async list(req: Request, res: Response): Promise<void> {
    try {
      const listings = await pool.query('SELECT * FROM listings');
      res.json(listings);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  }
  //get one
  public async getOne(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const listing = await pool.query('SELECT * FROM listings WHERE id = ?', [
        id
      ]);
      if (listing.length > 0) {
        return res.json(listing);
      }
      res.status(404).json({ msg: 'Listing not found' });
    } catch (err) {
      console.error(err);
      res.status(400).send('Server error');
    }
  }

  //create
  public async create(req: Request, res: Response): Promise<void> {
    try {
      await pool.query('INSERT INTO listings set ?', [req.body]);
      res.json({ msg: 'Listing created successfully' });
    } catch (err) {
      console.error(err);
      res.status(400).send('Server error');
    }
  }

  //update
  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const oldListing = req.body;
      await pool.query('UPDATE listings set ? WHERE id = ?', [oldListing, id]);
      res.json({ msg: 'Listing updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(400).send('Server error');
    }
  }

  //delete
  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM listings WHERE id = ?', [id]);
      res.json({ msg: 'Listing deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(400).send('Server error');
    }
  }
}

export const listingController = new ListingController();
