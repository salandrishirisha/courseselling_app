const express = require('express');

const app = express();

const userrouter = require('./routers/user')
const adminsrouter =require('./routers/admin')
app.use("/users", userrouter)
app.use("/admin",adminsrouter)

app.listen(3000, () => {
    console.log("server is running on the port 3000")
})