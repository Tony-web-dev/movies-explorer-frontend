import { MOVIES_API_BASE_URL } from "./constants";

class MovieApi {
  constructor() {
    this._baseUrl = MOVIES_API_BASE_URL;
  }

  _checkResponse(res) {
    return res.ok
    ? res.json()
    : Promise.reject(`${res.status} ${res.statusText}`);
  }

  getAllMovies() {
    return fetch(this._baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(this._checkResponse);
  }
}

export const movieApi = new MovieApi();