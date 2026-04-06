import mongoose from "mongoose";

// Connect to the mongodb database

const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected', ()=> console.log('Database Connected'))
        
        await mongoose.connect(`${process.env.MONGODB_URI}/lms`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.error('Database connection error:', error)
        throw error
    }
}

export default connectDB