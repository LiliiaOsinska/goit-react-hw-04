import axios from "axios";

const ACCESS_KEY = "887VJTZRYzs9DswJtAM1lOTOEWh5_MnkKiw9ninRpf8";

export const fetchArticles = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=${page}&query=${query}&per_page=20`
  );
  return response.data;
};
