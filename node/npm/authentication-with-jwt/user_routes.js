const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const secret = "key";
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
            let user = {};
            user.id = ++id;
            user.username = username;
            // user.password = req.body.password;
            const saltRounds = 5;

            const hashedPassword = await bcrypt.hash(password, saltRounds);
            user.password = hashedPassword;                

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
                        // return res.json({
                        //     status: 200,
                        //     message: "User logged in"
                        // });

                        const token = jwt.sign(
                            { username }, secret, { expiresIn: 3 * 60 }
                        );
                        // , { expiresIn: 60 * 60 }

                        // res.setHeader(Authorization, token)
                        return res.json({ token })
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


    function isLoggedIn (req, res, next) {
        try {
            const authHeaderValue = req.headers.authorization.split(" ")[1];
    
            const token = jwt.verify(authHeaderValue, secret);

            return next();
        }
        catch (e) {
            return next(e);
        }
    }

    function isCorrectUser (req, res, next) {
        try {
            const authHeaderValue = req.headers.authorization.split(" ")[1];
    
            const token = jwt.verify(authHeaderValue, secret);

            if (token.username === req.params.username) {
                return next();
            }
            else {
                return res.json({
                    message: `${req.params.username} is not allowed`
                });
        
            }
        }
        catch (e) {
            return next(e);
        }
    }
    
router.get("/protected", isLoggedIn, (req, res, next) => {
    try {
        return res.json({
            message: "You made it!"
        });

    }
    catch (e) {
        // res.status(401);
        return next(e);
    }
});

router.get("/:username", isCorrectUser, (req, res, next) => {
    try {
        return res.json({
            message: `${req.params.username} You made it`
        });

    }
    catch (e) {
        // res.status(401);
        return next(e);
    }
});

module.exports = router;