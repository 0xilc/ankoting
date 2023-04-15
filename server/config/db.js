const mongoose = require("mongoose")

const connectDb = async () => {
    try 
    {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`server connected to the mongodb: ${con.connection.host} `)
    }
    catch (error)
    { 
        console.log(`An error occured: ${error.message}`)
        process.exit();
    }
}

module.exports = connectDb;