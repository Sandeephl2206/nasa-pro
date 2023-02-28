const express = require("express");
const {getallplanets}  = require("./planet.controller");
const planetrouter = express.Router();
planetrouter.get('/planets',getallplanets);
module.exports = planetrouter;