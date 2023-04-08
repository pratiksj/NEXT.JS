// import handler from "@/pages/api/hello";
// import mongoose from "mongoose";
// const connection = {};

// async function dbConnect() {
//   if (connection.isConnected) {
//     return;
//   }
//   const db = await mongoose.connect(process.env.MONGO_URI);
//   connection.isConnected = db.connections[0].readyState;
//   console.log(connection.isConnected, "connected to the mongoDB");
// }

// //module.exports = connectDb;
// export default dbConnect;

// const connectDb = (handler) => async (req, res) => {
//   if (mongoose.connections[0].readyState) {
//     return handler(req, res);
//   }

//   await mongoose.connect(process.env.MONGO_URI);
//   console.log("connected to the MongoDb");
//   return handler(req, res);
// };
// useNewUrlParser: true,
// useUnifiedTopology: true,

// const connectDb = (handler) => async (req, res) => {
//   if (mongoose.connections[0].readyState) {
//     return handler(req, res);
//   }

//   await mongoose.connect(process.env.MONGO_URI);
//   console.log("connected to the MongoDb");
//   return handler(req, res);
// };
