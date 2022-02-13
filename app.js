const express = require('express');
const indexRouter = require('./routes/index')

const app = express()
const port = 3000

app.use(express.json())
app.use('/', indexRouter)

app.listen(port, () => {
    console.log(`example app listeningon port ${port}`)
})

