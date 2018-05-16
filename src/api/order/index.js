import axios from '@/utils/axios'

const fetchOrderList = (params) => axios('get', '/order-list', params)

export {
  fetchOrderList
}
