const express = require("express");
const {getAllLaunches,httpaddnewlaunch, httpAbortLaunch} = require("./launches.controller");
const launchesrouter = express.Router();
launchesrouter.get('/',getAllLaunches);
launchesrouter.post('/',httpaddnewlaunch);
launchesrouter.delete('/:id',httpAbortLaunch);
module.exports = launchesrouter;     