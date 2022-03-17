import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_CRYPTO_PRICE_BASE_URL;

const httpClient = axios.create({
  baseURL,
});

httpClient.interceptors.request.use(async (req) => {
  //   console.log(req);

  return req;
});

export default httpClient;
