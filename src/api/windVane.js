import axios from 'axios'

export function getwindDirection(params) {
  return axios.get('/api/getWindDirection', params).then((res) => res.data)
}
