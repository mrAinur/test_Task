import { baseUrl } from "./constants";
import { Options } from "./types";

function checkResponse<T>(res: Response): Promise<T> {
  return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
}

function request<T>(url: string, options: Options) {
  return fetch(url, options).then(res => checkResponse<T>(res));
}

export function getCharactersInfo<T>(param: string) {
  return request<T>(`${baseUrl}${param}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
}
