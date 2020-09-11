const express = require("express");
const router = express.Router();
const customerRoute = require("./routes/customers");

router.use("/customers", customerRoute);
module.exports = router;
