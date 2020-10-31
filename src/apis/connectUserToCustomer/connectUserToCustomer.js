import { instance as api } from "../../lib/api";
const connectUserToCustomer = (email) => {
  api.get("/auth").then((response) => {
    const id = response.data.id;
    console.log(response.data.id);
    console.log(email);
    api.post(`/users/${id}/customers/${email}`);
  });
};
export default connectUserToCustomer;
