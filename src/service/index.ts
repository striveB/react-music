import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { BASE_URL, TIME_OUT } from './config'

type Rsult<T> = {
  data: T
  status: number
  message?: string
}
export class Request {
  // axios实例
  instance: AxiosInstance
  // 基础配置
  baseConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    timeout: TIME_OUT
  }
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign({}, this.baseConfig, config))
    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) config.headers!['Authorization'] = `Bearer ${token}`
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (error) => {
        // 处理错误全局提示
        let message = ''
        switch (error.response?.status) {
          case 400:
            message = '请求错误(400)'
            break
          case 401:
            message = '未授权，请重新登录(401)'
            // 这里可以做清空storage并跳转到登录页的操作
            break
          case 403:
            message = '拒绝访问(403)'
            break
          case 404:
            message = '请求出错(404)'
            break
          case 408:
            message = '请求超时(408)'
            break
          case 500:
            message = '服务器错误(500)'
            break
          case 501:
            message = '服务未实现(501)'
            break
          case 502:
            message = '网络错误(502)'
            break
          case 503:
            message = '服务不可用(503)'
            break
          case 504:
            message = '网络超时(504)'
            break
          case 505:
            message = 'HTTP版本不受支持(505)'
            break
          default:
            message = `连接出错(${error.response.status})!`
        }
        return Promise.reject({
          error,
          message
        })
      }
    )
  }

  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<Rsult<T>> {
    return this.instance.get(url, config)
  }
  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Rsult<T>> {
    return this.instance.post(url, data, config)
  }
  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Rsult<T>> {
    return this.instance.put(url, data, config)
  }
  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<Rsult<T>> {
    return this.instance.delete(url, config)
  }
}
const request = new Request({})
export default request
