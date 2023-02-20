import dotenv from "dotenv";
import createServer from "./app";
import mongoose from "mongoose";

dotenv.config();
const port = process.env.PORT || 8000;

const app = createServer();

if (process.env.MONGO_DB_URL) {
  try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_DB_URL as string, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }as any,(err) => {
      if (err) console.log(err)
      else console.log('Mongo Connection Successful')
    })
    app.listen(port, (): void => {
      console.log(`Connected successfully on port ${port}`)
    })
  } catch (error) {
    console.log(`Error occured: ${(error as any).message}`)
  }
}










// try {
//   app.listen(port, (): void => {
//     console.log(`Connected successfully on port ${port}`);
//   });
  // mongoose.set("strictQuery", false);
  // const databaseConn = mongoose
  //   .connect("mongodb://localhost:27017/DB")
  //   .then(() => console.log("datebase connected successfully"))
  //   .catch((err: any) => console.log(err));
  
  // console.log('db',databaseConn);
  


  // connectDB(process.env.DATABASE, {
  //   keepAlive: true,
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // }
//   // );
// } catch (error) {
//   console.log(`Error occured: ${(error as any).message}`);
// }
