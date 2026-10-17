const express = require('express');
const router = express.Router();


router.post("/users/signup", function (req, res) {
    res.json({
        message: "please signup "
    })
})
router.post("/users/signin", function (req, res) {
    res.json({
        message: "please signin "
    })
})
router.get("/users/course", function (req, res) {
    res.json({
        message: "user courses "
    })
})
router.get("/users/purchase", function (req, res) {
    res.json({
        message: "users purchases "
    })
})
router.post("/users/purchase", function (req, res) {
    res.json({
        message: "users purchases "
    })
})

module.exports = router;