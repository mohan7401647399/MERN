const express = require("express"),
    cors = require('cors'),
    app = express(),
    blogRouter = require('./route/BlogRouter')

require('./db')

app.use(cors())
app.use(express.json())
app.use("/api/blogs", blogRouter)

app.use('/api', (req, res) => {
    res.send('Hello world')
})

app.listen(5000, () => console.log('Port is running at 5000!'))