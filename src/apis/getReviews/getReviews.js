const URL = "http://localhost:3000/api/orders";

const getReviews = ({ id }) =>
  fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      id,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
export default getReviews;
