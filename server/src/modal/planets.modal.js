const path = require("path");
const fs = require("fs");
const parse = require("csv-parse");
const habital = [];

function habitalplanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadplanet() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname,"..","..","data","keplar_data.csv"))
      .pipe(parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (habitalplanet(data)) {
          habital.push(data);
          //console.log(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`${habital.length} is the live survival planet`);
        resolve();
      });
  });
}
module.exports = {
    loadplanet,
    planets: habital,
};
