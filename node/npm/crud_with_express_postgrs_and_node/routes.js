const express = require('express');
const db = require('./db');


const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        const allFishes = await db.query('SELECT * FROM fishes');
        
        res.json(allFishes.rows);
    })
    .post(async (req, res) => {
        const { name, type } = req.body;
        const addFish = await db.query(`INSERT INTO fishes (name, type) VALUES ($1,$2) RETURNING *`, [name, type]);
        const fishAdded = addFish.rows[0].name;
        
        res.json({
            message: `${fishAdded} was added successfully`
            // message: 'This is /fish post'
        });
    });

router
    .route('/:id')
    .patch(async (req, res) => {
        const { name, type } = req.body;
        const updateFish = await db.query(`UPDATE fishes SET name = $1, type = $2 WHERE id = $3 RETURNING *`, [name, type, req.params.id]);

        const fishUpdated = updateFish.rows[0].name;
        
        res.json({
            message: `${fishUpdated} was updated successfully`
            // message: 'This is /fish post'
        });
    })
    .delete(async (req, res) => {
        const deleteFish = await db.query(`DELETE FROM fishes WHERE id = $1 RETURNING *`, [req.params.id]);

        const fishDeleted = deleteFish.rows[0].name;
        
        res.json({
            message: `${fishDeleted} was deleted successfully`
            // message: 'This is /fish post'
        });
    });

    module.exports = router;