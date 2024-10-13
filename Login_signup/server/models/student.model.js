const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const studentModel = mongoose.model("data", studentSchema);

module.exports = studentModel