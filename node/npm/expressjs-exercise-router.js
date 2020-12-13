const express = require("express");
const router = express.Router();

let shoppingItems = [];
let id = 0;

router
    .route("/")
    .get((req, res) => {
        res.json(shoppingItems);
    })
    .post((req, res) => {
        const name = req.body.name;
        const price = req.body.price;
        shoppingItems.push({
            id: ++id,
            name,
            price
        });

        res.json({
            message: "Item was added successfully"
        })
    })

router
    .route("/:id")
    .get((req, res) => {
        const item = shoppingItems.find(item => item.id === Number(req.params.id));
        res.json(item);
    })
    .patch((req, res) => {
        let item = shoppingItems.find(item => item.id === Number(req.params.id));
        item.name = req.body.name;

        res.json({
            message: "Item was updated successfully"
        });
    })
    .delete((req, res) => {
        const itemIndex = shoppingItems.findIndex(item => item.id === Number(req.params.id));
        shoppingItems.splice(itemIndex, 1);

        res.json({
            message: "Item was deleted successfully"
        });

    })



module.exports = router;