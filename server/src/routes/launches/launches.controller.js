//const express = require('express');
//const getAllLaunches = reqiure("./launches    .controller")
const {
  launches,
  addnewlaunch,
  existlaunchwithid,
  abortmission,
} = require("../../modal/launches.modal");

function getAllLaunches(req, res) {
  return res.status(200).json(Array.from(launches.values()));
}

function httpaddnewlaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.launchDate ||
    !launch.rocket ||
    !launch.target
  ) {
    return res.status(400).json({
      error: " property is missing",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "wrong date",
    });
  }
  addnewlaunch(launch);
  return res.status(201).json(launch);
}
function httpAbortLaunch(req, res) {
  const launchid = +req.params.id;
  if (!existlaunchwithid(launchid)) {
    return res.status(404).json({
      error: "launch not found",
    });
  }
  const aborted = abortmission(launchid)
  return res.status(200).json(aborted);
}

module.exports = { getAllLaunches, httpaddnewlaunch, httpAbortLaunch };
