const connectUserToCustomer = ({ email, password, confirmPassword }) =>
  fetch("http://localhost:3000/api/customers/", {
    method: "POST",
    body: JSON.stringify({
      email,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
export default connectUserToCustomer;
