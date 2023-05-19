import api from "./api";

// Order Functions

export function features() {
  return api
    .get("/features", {})
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
