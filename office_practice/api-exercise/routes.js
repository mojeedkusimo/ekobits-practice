const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

let secretKey = 'secret';
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

let adminRouteOnly = (req, res, next) => {
    try {
        let authKey = req.headers.authorization.split(" ")[1];

        const token = jwt.verify(authKey, secretKey);

        if(token.user.isAdmin) {
            return next();
        } else {
            return res.send("Access denied!")
        }
    }
    catch (e) {
        return next(e);
    }
}

let adminAndUserRouteOnly = (req, res, next) => {
    try {

        let authKey = req.headers.authorization.split(" ")[1];

        const token = jwt.verify(authKey, secretKey);

        if(token.user.isAdmin || token.user.id === req.params.id) {
            return next();
        } else {
            return res.send("Access denied!!!")
        }
    }
    catch (e) {
        return next(e);
    }
}

    router.get("/", adminRouteOnly, (req, res, next) => {
        try {
            let user = users.find(val => val.id === 3);
            res.json(user);
        }
        catch (e) {
            return next(e);
        }
    })

    router.get('/:id', adminAndUserRouteOnly, (req, res, next) => {
        try {
            let user = users.find(val => val.id === 3);
            
            console.log(user)
            return res.json(user);
        }
        catch (e) {
            return next(e);
        }
    })

    router.post('/', async (req, res, next) => {
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

            const token = jwt.sign({user}, secretKey, {
                expiresIn: 10 * 60
            })
            console.log(token);
            return res.status(201).json(user);

        }
        catch (e) {
            return next(e);
        }
    })

router.post('/login', async (req, res, next) => {
    try {
        let { username, password } = req.body;

        let user = users.find(val => val.username === username);

        if (user !== undefined) {
            const isMatch = await bcrypt.compare(password, user.password)

            if (isMatch) {
                const token = jwt.sign({user}, secretKey, {
                    expiresIn: 10 * 60
                })
                console.log(token);
                return res.json({
                    status: 200,
                    message: `${user.username} logged in successfully`
                });    
            }
            return res.json({
                status: 400,
                message: "Invalid password"
            });
        }
        return res.json({
            status: 400,
            message: "Invalid username"
        });
    }
    catch (e) {
        return next(e);
    }
});


module.exports = router;