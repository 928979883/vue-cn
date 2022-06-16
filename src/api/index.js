// 所有接口请求的方法
import axios from 'axios'
import base from './base_api'

// 请求方法
const api ={
    // 方法一
    getData(){
        return axios.get(base.api)
    },
}
export default api;