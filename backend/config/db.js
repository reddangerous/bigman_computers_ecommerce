import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const connectDB = async () => {
  try {
    const mongourl = 'mongodb+srv://reddavie:reddavie@project.0ypulqf.mongodb.net/?retryWrites=true&w=majority&appName=Project'
    //console.log(mongourl)
    const conn = await mongoose.connect(mongourl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
