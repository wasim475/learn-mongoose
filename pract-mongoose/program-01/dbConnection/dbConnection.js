const mongoose = require("mongoose")

const {USER_NAME, PASSWORD, DB_NAME} = process.env

const dbConnection = ()=>{
    mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.uc340vx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('Database Connected!'))
    .catch((err)=>console.error("Could not Connect Database!"))
}

module.exports = dbConnection