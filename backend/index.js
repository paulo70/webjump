const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const path       = require('path')

const app  = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'media')))


app.listen(port, () => console.log(`Server is running ${port}`))
