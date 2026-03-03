import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

// 2nd approach
connectDB()
  .then(() => {
    try {
      app.on("error", (err) => {
        console.log("Error", err);
        throw err;
      });

      app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running: ${process.env.PORT}`);
      });
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  })
  .catch((err) => {
    console.log("Mongo DB connection failed!", err);
  });

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
