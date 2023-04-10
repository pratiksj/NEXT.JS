import axios from "axios";

const baseUrl = "/api/anecdotes";
//const createUrl = "/api/addanecdotes";
//const baseUrl = "/api/hello";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObj) => {
  console.log(newObj, "i am from create service ");
  const response = await axios.post(baseUrl, newObj);
  console.log(response, "i am response");
  return response.data;
};

export default { getAll, create };
