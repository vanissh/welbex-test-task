const express = require('express')
const unitRouter = require('./routes/unit.route')
const cors = require('cors')

const PORT = process.env.PORT || 8080

const app = express()

//настройка CORS
app.use(cors())
app.use(express.json())
app.use('/api', unitRouter)

app.listen(PORT, () => console.log(`Server has been started on ${PORT} port`))