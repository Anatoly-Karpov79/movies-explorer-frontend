class CategoriesApi {
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

    getCategories() {
        return fetch(this._baseUrl, {
            method: "GET",
            headers: this._headers,
            credentials: 'include',
        })
            .then(this._handleResponse);
    };

    createCategory(name) {
        console.log(name)
        return fetch(this._baseUrl, {
            method: "POST",
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name: `${name}`,
            }),
        })
            .then(this._handleResponse);
    };

    createSubCategory(name) {
        return fetch(this._baseUrl + `id`, {
            method: "PATCH",
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                subcategories: {
                    name: `${name}`,
                },
            }),
        })
            .then(this._handleResponse);
    }
}

export const categoriesApi = new CategoriesApi({
    baseUrl: 'http://localhost:5000/categories',
    headers: {
        'Content-Type': 'application/json'
    }
});
