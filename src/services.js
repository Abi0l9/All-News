import axios from "axios";

const baseUrl = "https://newsapi.org/v2/";

const apiKey = process.env.REACT_APP_API_KEY;

const setConfig = () => {
  return {
    headers: {
      Authorization: apiKey,
    },
  };
};

const getHeadlines = async () => {
  const config = setConfig();
  const request = await axios.get(
    `${baseUrl}/top-headlines?country=us`,
    config
  );
  return request.data;
};

const getNewsBySources = async () => {
  const config = setConfig();
  const request = await axios.get(`${baseUrl}/top-headlines/sources/`, config);
  return request.data;
};

const getEverything = async (source) => {
  const config = setConfig();
  console.log(`${baseUrl}/everything?sources=${source}`);
  const request = await axios.get(
    `${baseUrl}/everything?sources=${source}`,
    config
  );
  return request.data;
};

export default {
  getHeadlines,
  getNewsBySources,
  getEverything,
};
