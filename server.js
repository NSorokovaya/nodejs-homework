const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
const { DB_HOST } = process.env;
// const DB_HOST =
//   "mongodb+srv://nadiaasorokovaya:ghost2806far@nsorokovaya.h2i1pmt.mongodb.net/test";
mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
