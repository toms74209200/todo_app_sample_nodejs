const express = require('express');
const app = express();

const index = require('./index');

app.use("/",index);

const port = 8080;
const server = app.listen(port, () => {
    console.log("Server is running on port: "+ port);
});