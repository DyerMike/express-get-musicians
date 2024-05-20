const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

app.get("/musicians", async (request, response) =>{
    const musician = await Musician.findAll();
    response.json(musician);
})







module.exports = app;