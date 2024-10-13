const express = require("express"),
    mongoose = require("mongoose"),
    cors = require("cors"),
    app = express(),
    PORT = 5000,
    StudentModel = require('./models/student.model')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/student");

app.post("/register", (req, res) => {
    StudentModel.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json(err))
})

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    StudentModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("password is not matched")
                }
            } else {
                res.json("no records exists")
            }
        })
})

app.listen(PORT, () => console.log(`connected to port ${PORT}`))