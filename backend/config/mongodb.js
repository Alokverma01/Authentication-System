const mongoose = require("mongoose");
  
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/mern-authentication`);
       
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB