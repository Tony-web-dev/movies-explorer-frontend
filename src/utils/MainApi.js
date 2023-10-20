class MainApi {
  constructor() {
    this._baseUrl = "http://localhost:3000";
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

  setUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify({name, email}),
    })
    .then((res) => console.log(res))
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

  saveMovie(savedMovie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify({
        country: savedMovie.country,
        director: savedMovie.director,
        duration: savedMovie.duration,
        description: savedMovie.description,
        year: savedMovie.year,
        image: `https://api.nomoreparties.co${savedMovie.image.url}`,
        trailerLink: savedMovie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${savedMovie.image.formats.thumbnail.url}`,
        movieId: savedMovie.id,
        nameRU: savedMovie.nameRU,
        nameEN: savedMovie.nameEN
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