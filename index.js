const express = require('express');

const app = express();

const userrouter = require('./routers/user')

app.use("/users", userrouter)

app.listen(3000, () => {
    console.log("server is running on the port 3000")
})