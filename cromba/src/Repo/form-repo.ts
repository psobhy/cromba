import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:9020',
})

export default class FormRepository {
  getFormFields() {
    return api.get('/formfields').then(res => {
      return res.data
    })
  }
}
