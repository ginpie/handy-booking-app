const signUpTradie = (tradieId) =>
  fetch("http://localhost:3000/api/tradies", {
    method: "POST",
    body: JSON.stringify({
      tradieId,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
export default signUpTradie;
