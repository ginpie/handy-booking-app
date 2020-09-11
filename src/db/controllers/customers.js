const CustomerModel = require("../models/customer");

async function getAllCustomers(req, res) {
  const customers = await CustomerModel.find().exec();
  return res.json(customers);
}

async function getCustomer(req, res) {
  const { id } = req.params;
  const schema = Joi.object({
    lastname: Joi.string()
      .regex(/^[a-zA-Z]$/)
      .max(10),
    firstname: Joi.string()
      .regex(/^[a-zA-Z]$/)
      .max(10),
  });
  const data = schema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknow: true,
  });
  const customer = await CustomerModel.findById(id).exec();
  if (!customer) {
    return res.status(404).json("customer Not Found");
  }
  return res.json(customers);
}

async function addCustomer(req, res) {
  const { email, password } = res.body;
  const customer = new CustomerModel({ email, password });
  const schema = Joi.object({
    email: Joi.string()
      .regex(/^[a-zA-Z]$/)
      .max(10)
      .email()
      .require(),
    password: Joi.string()
      .regex(/^[a-zA-Z]$/)
      .require()
      .max(10),
  });
  const data = schema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknow: true,
  });
  const existEmail = await CustomerModel.findByEmail(email).exec();
  if (existEmail) {
    return res.status(409).json("Email Address used");
  }
  await customer.save;
  return res.json(customer);
}

async function deleteCustomer(req, res) {
  const { id } = req.params;
  const customer = await CustomerModel.findByIdAndDelete(id).exec();
  if (!customer) {
    return res.status(404).json("customer Not Found");
  }
  return res.sendStatus(204);
}

async function updateCustomer(req, res) {
  const { id } = req.params;
  const { email, password } = req.body;
  const schema = Joi.object({
    lastname: Joi.string()
      .regex(/^[a-zA-Z]$/)
      .max(10),
    firstname: Joi.string()
      .regex(/^[a-zA-Z]$/)
      .max(10),
  });
  const data = schema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknow: true,
  });
  const customer = await CustomerModel.findByIdAndUpdate(
    id,
    { email, password },
    { new: true }
  ).exec();

  if (!customer) {
    return res.status(404).json("customer Not Found");
  }
  await customer.save();
  return res.json(customer);
}

module.exports = {
  getAllCustomers,
  getCustomer,
  addCustomer,
  deleteCustomer,
  updateCustomer,
};
