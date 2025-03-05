const express = require("express");

const app = express();

let users = {};
let ERROR_COUNT = 0

setInterval(() => {
    users = {};  // Reset all user request counts every second
}, 1000);

app.use(function (req, res, next) {
    const user = "john"; // Ideally, this should be dynamic (e.g., from authentication or IP)

    if (!users[user]) {
        users[user] = 1;  // First request
    } else {
        users[user] += 1;
    }

    console.log(users[user]);

    if (users[user] > 1) {
        return res.status(429).json({ message: "Request limit per second exceeded" });
    }

    next();
});

app.get("/", (req, res) => {
    throw new Error("Bro you got hit with an error");

    res.json({ message: "Hello user" });
});

// error middleware

app.use(function(err,req,res,next){
    console.log(err)
    ERROR_COUNT += 1
    res.status(404).json({
        "message":"Bro you got hit with an error",
        numbers_of_errors:ERROR_COUNT
    })
})


app.listen(3000, () => console.log("Server is listening on port 3000"));
