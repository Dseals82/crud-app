const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        //mongodb connection string
        const dbConnect = await mongoose.connect(process.env.MONGO_URI, {
            // userNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex:true
        })
        console.log(`MongoDB connected : ${dbConnect.connection.host}`);
        
    }catch(err) {
        console.log(err);
        //if error, exit from this process will be truethy
        process.exit(1);
    }
}

module.exports = connectDB;