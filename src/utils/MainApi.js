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
}


export const mainApi = new MainApi({
    baseUrl: `https://api.karp.movies-explorer.nomoredomains.work`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    },
});
