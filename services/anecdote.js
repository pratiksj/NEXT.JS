import axios from "axios";

const baseUrl = "/api/anecdotes";
//const createUrl = "/api/addanecdotes";
//const baseUrl = "/api/hello";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObj) => {
  console.log(newObj, "from service folder");
  const response = await axios.post(baseUrl, newObj);
  return response.data;
};

export default { getAll, create };
