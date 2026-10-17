const express = require('express');
const adminrouter = express.Router();



adminrouter.post("/signin", function (req, res) {


    res.json({
        message: "Admin please signin"
    })
})
adminrouter.post("/signup", function (req, res) {


    res.json({
        message: "Admin please signup"
    })
})
adminrouter.post("/course", function (req, res) {


    res.json({
        message: "Admin created course"
    })
})

module.exports =adminrouter;