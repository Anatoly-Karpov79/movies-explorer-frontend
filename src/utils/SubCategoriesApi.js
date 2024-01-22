class SubCategoriesApi {
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

    getSubCategories({location}) {
        const path = location.pathname
        console.log(path)
        return fetch(this._baseUrl + path, {
            method: "GET",
            headers: this._headers,
            credentials: 'include',
        })
        .then(this._handleResponse);
        
    };

//     createSubCategory(name, _id) {
//         console.log(name, _id)
//         return fetch(this._baseUrl + _id, {
//             method: "POST",
//             headers: this._headers,
//             credentials: 'include',
//             body: JSON.stringify({
//                 name: `${name}`,
                
//               } ), 
//         }) 
//         .then(this._handleResponse);
        
        
//     }
 }


export const subCategoriesApi = new SubCategoriesApi({
    baseUrl: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
});
