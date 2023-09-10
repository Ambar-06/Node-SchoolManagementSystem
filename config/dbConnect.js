const mongoose = require('mongoose');
const dbConnect = async()=>{
const url = "mongodb://127.0.0.1:27017";

    try {
        await mongoose.connect(url);
        console.log('DB Connected Successfully.')
    } catch (error) {
        console.log('DB Connection Failed.', error.message);
    }
}

dbConnect()