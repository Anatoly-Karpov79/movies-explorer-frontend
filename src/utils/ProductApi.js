class ProductApi {
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

    getProducts() {
        const subCategoryId = localStorage.getItem('selectedSubCategoryId')
        return fetch(this._baseUrl  + subCategoryId, {
            method: "GET",
            headers: this._headers,
            credentials: 'include',
        })
        .then(this._handleResponse);
    };

     createProduct(name, cost) {
        const subCategoryId = localStorage.getItem('selectedSubCategoryId')
        const categoryId = localStorage.getItem('selectedCategoryId')
        return fetch(this._baseUrl + subCategoryId, {
            method: "POST",
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name: `${name}`,
                cost: `${cost}`,
              //   subCategoryId: `${subCategoryId}`,
                 category: `${categoryId}`,
              } ), 
        }) 
        .then(this._handleResponse);
    }
 }

export const productApi = new ProductApi({
    baseUrl: 'http://localhost:5000/categories/products/',
    headers: {
        'Content-Type': 'application/json'
    }
});
