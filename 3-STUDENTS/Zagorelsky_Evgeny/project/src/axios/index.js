export default {
  get(url) {
      return axios(url)
              .then(item => item.data)
  },
  post(url, item) {
      return axios(url, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: item
      })
      .then(item => item.data)
  },
  put(url, amount) {
      return axios(url, {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body:  { amount:amount }
      })
      .then(item => item.data)
  },
  delete(url) {
      return axios(url, {
          method: 'DELETE',
          headers: { "Content-Type": "application/json" }
      })
      .then(item => item.data)
  },
  patch(url) {
      return axios(url, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" }
      })
      .then(item => item.data)
  }
}
