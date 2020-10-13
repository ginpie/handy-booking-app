const getAuth = () =>
  fetch("http://localhost:3000/api/auth", {
    method: "GET",
    headers: {
      "X-Auth-Token": localStorage.getItem('token')
    },
  });
export default getAuth;