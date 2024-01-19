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

    getMovies() {
        return fetch(this._baseUrl, {
            method: "GET",
            headers: this._headers
        })
        .then(this._handleResponse);
        
    }
}


export const moviesApi = new MoviesApi({
    baseUrl: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
});
