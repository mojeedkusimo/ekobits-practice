const express = require("express");
const { validate } = require("jsonschema");
const bookSchema = require("./book_schema.json");

const router = express.Router();

router
    .route("/books")
    .post((req, res, next) => {
        const result = validate(req.body, bookSchema);
        
        if (!result.valid) {
            return next(result.errors.map(error => error.stack));
        }
        // result.errors.map(error => error.stack
        const book = req.body.data;
        return res.status(201).json(book);
    })


module.exports = router;
