const express = require("express");
const app = express();
const routes = require("./routes");
const { connectDB } = require("./utils/db");
const errorHandler = require("./middleware/errorHandler");
app.use("/api", routes);
app.use(express.json());
app.use(errorHandler);
connectDB();
app.listen(3000, () => {
  console.log("listening");
});
