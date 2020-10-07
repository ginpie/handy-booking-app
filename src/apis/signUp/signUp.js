const signUp = ({ email, password, confirmPassword }) =>
  fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      confirmPassword,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
export default signUp;
