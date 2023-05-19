import api from "./api";

// Order Functions

export function genres() {
  return api
    .get("/genres", {})
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
