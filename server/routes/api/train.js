const express = require("express");
const generate = require("../../utils/generateToken");

let tokenDetails = {
  token_type: "Bearer",
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwMDYyNTAsImNvbXBhbnlOYW1lIjoiQXZpcmFsIEVudGVycHJpc2VzIiwiY2xpZW50SUQiOiJmNDRhNzY5Yi00Nzk5LTRlNzQtYWE4OC1kMjdjOGVmZTVmOGEiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjAwMjkwMDEzMDAxNCJ9.xXC_TfhoCdImhvNHuYs3v0OPYgI77usXbtipDWly5Z8",
  expires_in: 1690006250,
};

const app = express.Router();

app.get("/getAllTrains", async (req, res) => {
  try {
    if (tokenDetails.expires_in < new Date().valueOf() / 1000) {
      const newToken = await generate();
      tokenDetails = newToken;
    }
    const response = await fetch("http://20.244.56.144/train/trains", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${tokenDetails.access_token}`,
      },
    });
    const data = await response.json();
    if (response.status === 200) {
      res.status(200).json({ message: "Trains Details", data });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

app.get("/getTrain/:trainNumber", async (req, res) => {
  try {
    if (tokenDetails.expires_in < new Date().valueOf() / 1000) {
      const newToken = await generate();
      tokenDetails = newToken;
    }
    const trainNumber = req.params.trainNumber;
    const response = await fetch(
      `http://20.244.56.144/train/trains/${trainNumber}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `bearer ${tokenDetails.access_token}`,
        },
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      res.status(200).json({ message: "Train Details", data });
    }
  } catch (error) {
    res.status(400).json({ message: "Enter correct Train Number" });
  }
});

module.exports = app;
