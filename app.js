const express = require("express");
const productRouter = require("../../products");
const connectDB = require("./db/database");

const app = express();
app.use(express.json());
app.use("/api/product", productRouter);

connectDB();
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
