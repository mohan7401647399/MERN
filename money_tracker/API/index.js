const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const Model = require("../models/moneyModel");
const mongoose = require("mongoose");
require("dotenv").config()

app.use(cors())

app.use(express.json())

app.get("/api/home", (req, res) => {
    res.json("homepage")
})

app.post("/api/trxn", async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL)
    const { name, desc, datetime, price } = req.body;
    const trxn = await Model.create({ name, desc, datetime, price });
    res.json(trxn);
});

app.get("/api/transactions", async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL)
    const allTrxns = await Model.find()
    res.json(allTrxns)
})

app.listen(PORT, () => { console.log("app listening") })