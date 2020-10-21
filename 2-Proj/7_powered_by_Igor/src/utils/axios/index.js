export default {
    get(url) {
        return fetch(url)
                .then(data => data.json())
    },
    post(url, item) {
        return fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        })
        .then(data => data.json())
    },
    put(url, amount) {
        return fetch(url, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: amount })
        })
        .then(data => data.json())
    },
    delete(url) {
        return fetch(url, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        })
        .then(data => data.json())
    }
}