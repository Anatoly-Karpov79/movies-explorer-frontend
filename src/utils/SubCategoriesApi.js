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

    getSubCategories(categoryId) {
        console.log(categoryId)
        // const path = location.pathname
        // console.log(path)
        return fetch(this._baseUrl  + categoryId, {
            method: "GET",
            headers: this._headers,
            credentials: 'include',
        })
        .then(this._handleResponse);
        
    };

     createSubCategory(name, categoryId) {
        console.log(name, categoryId)
        return fetch(this._baseUrl + categoryId, {
            method: "POST",
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name: `${name}`,
                
              } ), 
        }) 
        .then(this._handleResponse);
        
        
    }
 }


export const subCategoriesApi = new SubCategoriesApi({
    baseUrl: 'http://localhost:5000/categories/',
    headers: {
        'Content-Type': 'application/json'
    }
});
