class MainApi {
    constructor({ headers, baseUrl }) {
        this._headers = headers
        this._baseUrl = baseUrl

    }
    _handleResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    getUserInfo() {
        return fetch(this._baseUrl + `/users/me`, { 
          method: "GET",
          credentials: 'include',
        headers: this._headers,
        }).then(this._handleResponse);
      }

      changeProfile(name, email) {
        return fetch(this._baseUrl + `/users/me`, {
           method: "PATCH",
           credentials: 'include',
           headers: this._headers,
           
           body: JSON.stringify({
             name: `${name}`,
             email: `${email}`,
           } ), 
         }) 
         .then(this._handleResponse);
         
       }

       getSavedMovies() {
        return fetch(this._baseUrl + `/movies`, {
            metod: "GET",
            credentials: 'include',
            headers: this._headers,
         }).then(this._handleResponse);
          }

          saveMovie(movie) {
            return fetch(this._baseUrl + `/movies`, {
              method: 'POST',
              credentials: 'include',
              body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                // image: `https://api.nomoreparties.co/${movie.image.url}`,
                trailerLink: movie.trailerLink,
                // thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN
              }),
              headers: this._headers
            }).then(this._handleResponse);
          }

          deleteMovie(_id) {
            return fetch(this._baseUrl + `/movies/` + _id, {
              method: 'DELETE',
              credentials: 'include',
              headers: this._headers
            }).then(this._handleResponse);
          }
}


export const mainApi = new MainApi({
    baseUrl: `http://localhost:5000`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    },
});
