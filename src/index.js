import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

// 2nd approach
connectDB();

// 1st Approach
//   (async () => {
//     try {
//       await mongoose.connect(`${process.env.MONODB_URL}/${DB_NAME}`);
//     } catch (err) {
//       console.log("Error:", err);
//       throw err;
//     }
//   }
// )();
