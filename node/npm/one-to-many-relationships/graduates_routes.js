const express = require('express');
const db = require('./db');

const router = express.Router();

router
    .route('/')
    .get(async(req, res, next) => {
        try {
            const grads = await db.query('SELECT * FROM graduates');
            return res.json(grads.rows);
        }
        catch (e) {
            return next(e);
        }
    })
    .post(async(req, res, next) => {
        try {
            const name = req.body.name;
            const addName = await db.query('INSERT INTO graduates (name) VALUES ($1) RETURNING *', [name]);
            const newName = addName.rows[0];
            
            return res.json({
                status: 200,
                message: `${newName.name} was added!`
            });
        }
        catch (e) {
            return next(e);
        }
    });

router
    .route('/:id')
    .patch(async(req, res, next) => {
        try {
            const id = req.params.id;
            const newName = req.body.name;
            const updateRecord2 = await db.query('SELECT * FROM graduates WHERE id = $1', [id]);

            const updateRecord = await db.query('UPDATE graduates SET name = $1 where id = $2 RETURNING *', [newName, id]);
            const updatedName = updateRecord.rows[0];

            return res.json({
                status: 200,
                message: updateRecord2.rows
            });

            // return res.json({
            //     status: 200,
            //     message: `${updatedName.name} was updated!`
            // });

        }
        catch (e) {
            return next(e);
        }
    })
    .delete(async(req, res, next) => {
        try {
            const id = req.params.id;
            const deleteName = await db.query('DELETE FROM graduates WHERE id = $1 RETURNING*', [id]);
            const deletedName = deleteName.rows[0];

            return res.json({
                status: 200,
                message: `${deletedName.name} was deleted!`
            });
        }
        catch (e) {
            return next(e);
        }
    });


module.exports = router;