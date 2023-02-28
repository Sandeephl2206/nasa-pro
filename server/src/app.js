const express = require("express");
const path = require("path");
const cors = require("cors");
const planetrouter = require("./routes/planets/planet.router");

const app = express();
app.use(cors( {
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"..","public")));
app.use(planetrouter);
module.exports = app;