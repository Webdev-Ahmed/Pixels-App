import axios from "axios";

const API_KEY = `46440949-254be3bd68ef2e3bfc1a5a5ab`;
const apiurl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
  let url = apiurl + "&per_page=25&safesearch=true&editors_choice=true";
  // let url = apiurl + "&per_page=25&";
  if (!params) return url;
  let paramKeys = Object.keys(params);

  paramKeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });

  return url;
};

export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
    const { data } = response;
    return { success: true, data };
  } catch (err) {
    console.log("GET error:" + err.message);
    return { success: false, msg: err.message };
  }
};
