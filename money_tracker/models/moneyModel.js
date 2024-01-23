const mongoose = require("mongoose");

const moneySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    datetime: {
        type: String,
        required: true
    }
})

const moneyModel = mongoose.model("user", moneySchema);

module.exports = moneyModel;