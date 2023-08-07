class MoviesApi {
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

    getMovies(res) {
        return fetch(this._baseUrl, {
            headers: this._headers
        }).then (console.log(res)
        (this._handleResponse));
        
    }
}


export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});
