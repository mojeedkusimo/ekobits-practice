const express = require('express');
const db = require('./db');

const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(async(req, res, next) => {
        try {
            const graduateId = req.params.graduate_id;
            const gradsOffer = await db.query('SELECT graduates.name, offers.title FROM graduates JOIN offers ON graduates.id = offers.graduate_id where graduates.id = $1', [graduateId]);

            const grads = await db.query('SELECT * FROM graduates WHERE id = $1', [graduateId]);
            const offers = await db.query('SELECT title FROM offers WHERE graduate_id = $1', [graduateId]);
    
            grads.rows[0].offers = offers.rows;
    
            return res.json(grads.rows[0]);
            // return res.json(gradsOffer.rows);
        }
        catch (e) {
            return next(e);
        }
    })
    .post(async(req, res, next) => {
        try {
            const title = req.body.title;
            const graduateId = req.params.graduate_id;
            const addOffer = await db.query('INSERT INTO offers (title, graduate_id) VALUES ($1, $2) RETURNING *', [title, graduateId]);
            const addedOffer =  addOffer.rows[0];

            return res.json(addedOffer);
        }
        catch(e) {
            return next(e);
        }
    });

router
    .route('/:offer_id')
    .get(async(req, res, next) => {
        try {
            const { graduate_id, offer_id } = req.params;
            const offer = await db.query('SELECT offers.title FROM graduates JOIN offers ON graduates.id = offers.graduate_id WHERE graduates.id = $1 AND offers.id = $2', [graduate_id, offer_id]);
    
            return res.json(offer.rows);
        }
        catch(e) {
            return next(e);
        }
    })
    .patch(async(req, res, next) => {
        try {
            const { graduate_id, offer_id } = req.params;
            const newTitle = req.body.title;
            const offer = await db.query('SELECT offers.title FROM graduates JOIN offers ON graduates.id = offers.graduate_id WHERE graduates.id = $1 AND offers.id = $2', [graduate_id, offer_id]);
            const offerTitle = offer.rows[0]

            if (offer.rows.length > 0) {
                const updateOffer = await db.query('UPDATE offers SET title = $1 WHERE id = $2 RETURNING *', [newTitle, offer_id]);

                return res.json(updateOffer.rows);
            }

            return res.json({
                status: 304,
                message: `Graduate does not have this offer`
            }); 
        }
        catch(e) {
            return next(e);
        }
    })
    .delete(async(req, res, next) => {
        try {
            const { graduate_id, offer_id } = req.params;
            const offer = await db.query('SELECT offers.title FROM graduates JOIN offers ON graduates.id = offers.graduate_id WHERE graduates.id = $1 AND offers.id = $2', [graduate_id, offer_id]);
            const offerTitle = offer.rows[0]

            if (offer.rows.length > 0) {
                const deleteOffer = await db.query('DELETE FROM offers WHERE id = $1 RETURNING *', [offer_id]);

                return res.json(deleteOffer.rows);
            }

            return res.json({
                status: 304,
                message: `Graduate does not have this offer`
            }); 
        }
        catch(e) {
            return next(e);
        }
    });

module.exports = router;