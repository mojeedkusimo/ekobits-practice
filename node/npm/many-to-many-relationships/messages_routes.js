const express = require('express');
const db = require('./db');

const router = express.Router();

router
    .route('/')
    .get(async (req, res, next) => {
        try {
            const messages = await db.query(`SELECT m.id, m.text, t.name FROM messages m
            FULL JOIN messages_tags mt ON m.id = mt.message_id
            FULL JOIN tags t ON t.id = mt.tag_id`);

            const queryResult = messages.rows;

            let structuredMessages = [];

            queryResult.forEach((value, queryIndex) => {

                let createMessageObj = () => {
                    let uniqueMessage = {}; 
                    uniqueMessage.id = queryResult[queryIndex].id;
                    uniqueMessage.text = queryResult[queryIndex].text;
                    uniqueMessage.tags = [];
                    uniqueMessage.tags.push(queryResult[queryIndex].name);
                    structuredMessages.push(uniqueMessage);
                }

                if ( structuredMessages.length === 0 )  {
                    createMessageObj();

                } 
                else {
                    let idIsFound = false;

                    structuredMessages.forEach((value, arrayIndex) => {
                        if (queryResult[queryIndex].id === structuredMessages[arrayIndex].id) {
                            structuredMessages[arrayIndex].tags.push(queryResult[queryIndex].name);
                            idIsFound = true;
                        }
                    });

                    if (!idIsFound) {
                        createMessageObj();
                    }
                }
            });

            return res.json(queryResult);
        }
        catch (e) {
            return next(e);
        }
    })
    .post(async (req, res, next) => {
        try {
            let text = req.body.text;
            const insertText = await db.query("INSERT INTO messages (text) VALUES ($1) RETURNING *", [text]);

            res.json({
                status: "success",
                message: insertText
            });
        }
        catch (e) {

        }
    })

module.exports = router;