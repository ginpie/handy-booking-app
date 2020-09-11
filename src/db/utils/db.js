const mongoose = require("mongoose");

exports.connectDB = () => {
  const { DB_HOST, DB_PORT, DB_DATABASE } = process.env;
  const connectString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
  const db = mongoose.connection;
  db.on("connect", () => {
    console.log("DB Connected");
  });
  db.on("error", (error) => {
    console.log("DB Connection Failed");
    console.error(error.message);
    process.exit(1);
  });
  db.on("disconnected", () => {
    console.log("DB DIS-Connected");
  });

  return mongoose.connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
