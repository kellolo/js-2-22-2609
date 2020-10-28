import { data } from "jquery"

export default {
    get(url) {
        return fetch(url)
                .then(data => data.json())
    },
    post(url, item) {
        return fetch(url, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(item)
        })
                .then(data => data.json())
    },
    put(url, amount) {
        return fetch(url, {
            method: 'PUT',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({amount: amount})
        })
    },
    delete(url, item) {
        return fetch(url, {
            method: 'DELETE',
            headers: { "Content-type": "application/json" }
        })
    }
}

