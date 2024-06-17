var express = require("express");
var router = express.Router();
const amtrak = require("amtrak"); // Imports the library as `amtrak`
const { fetchAllTrains } = require("amtrak");

router.get("/", function (req, res, next) {
  try {
    fetchAllTrains()
      .then((trains) => {
        var a = [];
        Object.keys(trains).forEach((item) => {
          a = a.concat(trains[item]);
        });
        res.send({
          status: "worked",
          data: a,
        });
      })
      .catch((e) => {
        res.send({
          status: "failed",
          data: [],
        });
      });
  } catch {
    res.send({
      status: "failed",
      data: [],
    });
  }
});

module.exports = router;
