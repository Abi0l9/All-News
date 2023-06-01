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

export default {
  getHeadlines,
};
