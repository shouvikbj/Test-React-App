import { api } from "../../Backend";

export const getDetails = () => {
  return fetch(`${api}getAll`, {
    method: "GET",
    mode: "cors",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
