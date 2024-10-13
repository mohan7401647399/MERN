const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://mtmkcs:mohan7401@cluster0.3ockm.mongodb.net/').then(() => console.log('Mongodb connected')).catch((err) => console.log(err))