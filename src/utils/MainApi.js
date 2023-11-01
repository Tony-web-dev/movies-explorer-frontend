import { API_BASE_URL } from "./constants";

class MainApi {
  constructor() {
    this._baseUrl = API_BASE_URL;
    this._headers = {
      "Content-Type": "application/json"
    };
  }

  _checkResponse(res) {
    return res.ok
    ? res.json()
    : Promise.reject(`${res.status} ${res.statusText}`);
  }

  authentication({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({name, email, password}),
    })
    .then(this._checkResponse)
    .then((user) => {
      if (user.token) {
        localStorage.setItem("jwt", user.token);
        return user;
      }
    });
  }

  authorization({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
    .then(this._checkResponse)
    .then(user => {
      localStorage.setItem("jwt", user.token);
      return user;
    })
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(this._checkResponse)
    .then((user) => user);
  }

  setUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify({name: name, email: email}),
    })
    .then(this._checkResponse);
  }

  getSavedMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(this._checkResponse);
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        description: movie.description,
        year: movie.year,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      })
    })
    .then(this._checkResponse);
  }

  deleteSavedMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
      }
    })
    .then(this._checkResponse);
  }
}

export const mainApi = new MainApi();