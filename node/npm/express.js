const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes");
const morgan = require("morgan");
const locus = require("locus");

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use((req,res,next) => {
    console.log("Middleware just ran!");
    return next();
});

app.use("/users/:id", (req, res, next) => {
    if (Number.isNaN(Number(req.params.id))) {
        const err = new Error("Incorrect id passed");
        // err.status = 404;
        return next(err);
    }
    // console.log(req.body);
    return next();
});

// userRoutes
app.use("/users", userRoutes);



// eval(require("locus"));
app.get("/", (req, res, next) => {
    // return res.send("Hello Express World!");
    // res.status(200).json({
    //     message: "Start with /users"
    // });
     res.json("Here we are!");
});



app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
        message: err.message
        // error: app.get("env") === "development" ? err : {}
    })
});




// app.get("/secret", (req, res) => {
//     res.status(401).json({
//         message: "Unauthorized"
//     });
// });

// app.get("/instructor/:firstName", (req, res)=> {
//     return res.send(`The name of this instructor is ${req.params.firstName}`);
// });

// app.get("/instructor", (req, res) => {
//     res.json({
//         name: "Mojeed"
//     });
// });

app.listen(4000, ()=> {
    console.log("The server is running on port 4000 now!");
});