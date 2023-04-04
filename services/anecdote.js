import axios from "axios";

const baseUrl = "/api/anecdotes";
//const baseUrl = "/api/hello";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAll };
