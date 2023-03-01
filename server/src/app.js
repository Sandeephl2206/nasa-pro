const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const planetrouter = require("./routes/planets/planet.router");
const launchesrouter = require("./routes/launches/launches.router");

const app = express();
app.use(cors( {
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname,"..","public")));
app.use('/launches',launchesrouter);
app.use('/planets',planetrouter);
module.exports = app;



