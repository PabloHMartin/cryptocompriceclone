import axios from "axios";

const baseURL = "https://price-api.crypto.com/price";

const httpClient = axios.create({
  baseURL,
});

httpClient.interceptors.request.use(async (req) => {
  //   console.log(req);

  return req;
});

export default httpClient;
