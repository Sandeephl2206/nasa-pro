const express = require("express");
const launchesrouter = express.Router();
launchesrouter.get('/launches',getAllLaunches);
module.exports = getAllLaunches;     