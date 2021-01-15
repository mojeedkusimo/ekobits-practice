const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

let id = 2;
let users = [
    {
        id: 1,
        username: 'user1',
        password: 'pass1',
        isAdmin: true
    },
    {
        id: 2,
        username: 'user2',
        password: 'pass2',
        isAdmin: false
    }
];

router
    .route("/users")
    .get((req, res, next) => {
        try {
            res.json(users);
        }
        catch (e) {
            return next(e);
        }
    })
    .post(async (req, res, next) => {
        try {
            let { username, password, isAdmin } = req.body;

            let user = {};
            user.id = ++id;
            user.username = username;

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            user.password = hashedPassword;
            users.push(user);

            user.isAdmin = isAdmin;

            res.json(user);

        }
        catch (e) {
            return next(e);
        }
    })

router.post('/login', (req, res, next) => {
    try {
        let { username, password } = req.body;

        let findUsername = users.find((val) => val.username === username);
        let findUserIndex = users.findIndex(val => val.username === findUsername);
        
        if (findUsername !== undefined) {
            const isMatch = bcrypt.compare(password, users[findUserIndex].password)

            if (isMatch) {
                return res.json({
                    status: 200,
                    message: users[findUserIndex]
                });    
            }
            return res.json({
                status: 200,
                message: "Invalid password"
            });
        }
        return res.json({
            status: 303,
            message: "Invalid username"
        });
    }
    catch (e) {
        return next(e);
    }
});


module.exports = router;