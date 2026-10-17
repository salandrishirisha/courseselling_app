const express = require('express');
const router = express.Router();


router.post("/signup", function (req, res) {
    res.json({
        message: "please signup "
    })
})
router.post("/signin", function (req, res) {
    res.json({
        message: "please signin "
    })
})
router.get("/course", function (req, res) {
    res.json({
        message: "user courses "
    })
})
router.get("/purchase", function (req, res) {
    res.json({
        message: "users purchases "
    })
})
router.post("/purchase", function (req, res) {
    res.json({
        message: "users purchases "
    })
})

module.exports = router;