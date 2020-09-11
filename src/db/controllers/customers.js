const CustomerModel = require("../models/customer");

async function getAllCustomers(req, res) {
  const customers = await CustomerModel.find().exec();
  return res.json(customers);
}
async function getCustomer(req, res) {
  const { id: code } = req.params;
  const customer = await CustomerModel.findById(code);
  if (!customer) {
    return res.status(404).json("customer Not Found");
  }
  return res.json(customers);
}
async function addCustomer(req, res) {
  const customer = new CustomerModel({
    email: "22@gmail.com",
    password: "222",
  });
  await customer.save;
  return res.json(customer);
}
async function deleteCustomer(req, res) {
  const { id: code } = req.params;
  const customer = await CustomerModel.findByIdAndDelete(code);
  if (!customer) {
    return res.status(404).json("customer Not Found");
  }
  return res.sendStatus(204);
}

async function updateCustomer(req, res) {
  const { id: code } = req.params;
  const { email, password } = req.body;
  const customer = await CustomerModel.findByIdAndUpdate(
    code,
    { email, password },
    { new: true }
  );

  if (!student) {
    return res.status(404).json("Student Not Found");
  }
  return res.sendStatus(204);
}

module.exports = {
  getAllCustomers,
  getCustomer,
  addCustomer,
  deleteCustomer,
  updateCustomer,
};
