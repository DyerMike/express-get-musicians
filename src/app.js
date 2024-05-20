const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

app.get("musicians", async (req, res) =>{
    const musician = await Musician.findAll();
    res.json(musician);
})







module.exports = app;