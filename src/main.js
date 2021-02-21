const log4js = require('log4js');
const express = require('express');
const app = express();

const index = require('./index');

const log = log4js.getLogger();
log.level = 'debug';

app.use("/",index);

const port = 8080;
const server = app.listen(port, () => {
    log.info("Server is running on port: %d", port);
});