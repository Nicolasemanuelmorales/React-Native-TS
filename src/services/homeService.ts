import { urls } from "../utils/apiUrls";
import axiosNoAuth from "../utils/axiosNoAuth";

const url = urls.apiUrlCat;
const search = "v1/images/search";

export function getRandomCat(): Promise<any> {
  return axiosNoAuth<any>(`${url}/${search}`, "GET");
}
