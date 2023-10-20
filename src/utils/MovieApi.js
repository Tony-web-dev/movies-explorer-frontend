class MovieApi {
  constructor() {
    this._baseUrl = "https://api.nomoreparties.co/beatfilm-movies";
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