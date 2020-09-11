const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  getCustomer,
  addCustomer,
  deleteCustomer,
  updateCustomer,
} = require("../controllers/customers");

router.get("/", getAllCustomers);
router.get("/:id", getCustomer);
router.post("/:", addCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);
module.exports = router;
