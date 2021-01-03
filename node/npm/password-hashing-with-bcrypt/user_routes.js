const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

let id = 3;
let users = [
    {
        id: 1,
        username: "user1",
        password: "pass1"
    },
    {
        id: 2,
        username: "user2",
        password: "pass2"
    },
    {
        id: 3,
        username: "user3",
        password: "pass3"
    },

]

router
    .route("/")
    .get((req, res, next) => {
        try {
            return res.json(users);
        }
        catch (e) {
            return next(e);
        }
    })
    .post(async (req, res, next) => {
        try {
            const { username, password } = req.body;
            id++;
            let user = {};
            user.id = id;
            user.username = username;
            // user.password = req.body.password;
            const saltRounds = 5;

            const dbPassword = await bcrypt.hash(password, saltRounds);
            user.password = dbPassword;                

            users.push(user);
            return res.json(user);
        }
        catch (e) {
            return next(e);
        }
    });

router
    .route("/login")
    .post( (req, res, next) => {
        try {
            const { username, password } = req.body;

            users.forEach(async (val, index, array) => {
                if ( val.username === username ) {
                    const isMatch = await bcrypt.compare(password, val.password);
                    if ( isMatch ) {
                        return res.json({
                            status: 200,
                            message: "User logged in"
                        });
                    } else {
                        return res.json({
                            status: 303,
                            message: "Invalid Password"
                        });
                    }
                } else {
                    if (index === array.length - 1) {
                        return res.json({
                            status: 303,
                            message: "Invalid Username"
                        })
                    }
                }
            })
        }
        catch (e) {
            return next(e);
        }
    })

module.exports = router;