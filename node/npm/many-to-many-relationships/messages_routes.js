const express = require('express');
const db = require('./db');

const router = express.Router();

router
    .route('/')
    .get(async (req, res, next) => {
        try {
            const messages = await db.query(`SELECT m.id, m.text, t.name FROM messages m
            JOIN messages_tags mt ON m.id = mt.message_id
            JOIN tags t ON t.id = mt.tag_id`);



            return res.json(messages.rows);
        }
        catch (e) {
            return next(e);
        }
    })

module.exports = router;