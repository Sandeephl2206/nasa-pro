const express = require("express");
const {getallplanets}  = require("./planet.controller");
const planetrouter = express.Router();
planetrouter.get('/',getallplanets);
module.exports = planetrouter; 