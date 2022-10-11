const mongoose = require('mongoose')
const connectDb = () => {
    mongoose.connect("mongodb+srv://Ibrahim:aryan2002@cluster0.z0nvrjp.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("mongoDb connected")
}
module.exports = connectDb 
