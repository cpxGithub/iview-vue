import axios from 'axios'
export default (type = 'get', url, params) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: type,
      url: '/api' + url,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
    type = type.toLocaleLowerCase()
    if (type === 'get') {
      config.params = params
    } else {
      config.data = params
    }
    axios.interceptors.response.use((response) => {
      console.log(10, response)
      switch (response.data.code) { // 根据不同错误码，处理对应业务
        case 0:
          break
        case 10:
          // 业务
          break
        default:
          console.log('cuowu') // 提示错误
          break
      }
      return response
    }, (error) => {
      return reject(error)
    })
    axios(config).then(res => {
      if (res.data.code !== 0) reject(res.data) // 错误，reject
      else resolve(res.data)
//       resolve(res.data)
      console.log(1235, res)
    }).catch(data => {
      console.log(963, data)
      reject(data)
    })
  })
}
