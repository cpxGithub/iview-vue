import axios from '@/utils/axios'

const fetchLogin = (params) => axios('get', '/login', params)

export {
  fetchLogin
}
