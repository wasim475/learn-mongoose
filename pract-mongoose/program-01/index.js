require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnection = require('./dbConnection/dbConnection')
const Routes = require("./Routes")
const app = express()
const port = process.env.PORT || 3000
  
app.use(express.json())
app.use(cors())
app.use(Routes)
// db connection
dbConnection()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})