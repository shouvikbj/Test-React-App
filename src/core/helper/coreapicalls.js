import { api } from "../../Backend";

export const getDetails = () => {
  return fetch(`${api}getAll`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
