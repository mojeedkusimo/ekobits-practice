const express = require('express');
const db = require('./db');

const router = express.Router();

router
    .route('/')
    .get(async (req, res, next) => {
        try {
            const tags = await db.query('SELECT * FROM tags');
            const msgWithTag = await db.query(`SELECT `);

            return res.json(tags.rows);

            // To get corresponding messages for each tag
            // iterate through the tag query result (tqr)
                // on each iteration of tqr, iterate through the query result
                    // that these info: tag.id, message.text, tag.name
                    // attach an array property to each objecr in tqr
                    // push every tag name that match to the array 
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