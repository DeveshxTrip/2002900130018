const express = require("express");
const generate = require("../../utils/generateToken");

let tokenDetails = {
  token_type: "Bearer",
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwMDM3NzUsImNvbXBhbnlOYW1lIjoiZGV2ZXNoIFRyYWluIFNlcnZpY2UiLCJjbGllbnRJRCI6IjY0ZGI4NDQ2LTYyMzctNDQyYi1iYTgxLWZmZTY2ZGEyZWQzYiIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIyMDAyOTAwMTMwMDE4In0.ZT7ujCMZHjnx7pfB-4aDQUddjdD0sHZTMuOWabNT334",
  expires_in: 1690003775,
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
