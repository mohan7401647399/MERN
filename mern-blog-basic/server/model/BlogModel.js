const mongoose = require('mongoose'),
    Schema = mongoose.Schema


const newSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Blog-basic', newSchema)