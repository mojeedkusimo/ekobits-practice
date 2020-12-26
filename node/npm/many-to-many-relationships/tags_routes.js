const express = require('express');
const db = require('./db');

const router = express.Router();

router
    .route('/')
    .get(async (req, res, next) => {
        try {
            const tags = await db.query('SELECT * FROM tags');

            return res.json(tags.rows);
        }
        catch (e) {
            return next(e);
        }
    })
    .post(async (req, res, next) => {
        try {
            const name = req.body.name;
            const newTag = await db.query('INSERT INTO tags (name) VALUES ($1) RETURNING *', [name]);
    
            return res.json(newTag.rows);
        }
        catch (e) {
            return next(e);
        }
    })

module.exports = router;