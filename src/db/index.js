const express = require("express");
const app = express();
const routes = require("./routes");
const { connectDB } = require("./utils/db");
app.use("/api", routes);
app.use(express.json());

connectDB();
app.listen(3000, () => {
  console.log("listening");
});
