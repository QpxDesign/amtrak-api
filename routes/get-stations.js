var express = require("express");
var router = express.Router();
const amtrak = require("amtrak"); // Imports the library as `amtrak`
const { fetchAllStations } = require("amtrak");
router.get("/", function (req, res, next) {
  fetchAllStations().then((trains) => {
    var a = [];
    Object.keys(trains).forEach((item) => {
      a = a.concat(trains[item]);
    });
    res.send({
      status: "worked",
      data: a,
    });
  });
});

module.exports = router;
