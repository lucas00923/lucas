// src/services/api.ts

import axios, { AxiosInstance, AxiosError } from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const API_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT) || 30000

class ApiService {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: API_URL,
      timeout: API_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Interceptor de resposta
    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error('API Error:', error.message)
        return Promise.reject(error)
      }
    )
  }

  get<T = unknown>(url: string, config = {}) {
    return this.instance.get<T>(url, config)
  }

  post<T = unknown>(url: string, data?: unknown, config = {}) {
    return this.instance.post<T>(url, data, config)
  }

  put<T = unknown>(url: string, data?: unknown, config = {}) {
    return this.instance.put<T>(url, data, config)
  }

  delete<T = unknown>(url: string, config = {}) {
    return this.instance.delete<T>(url, config)
  }

  patch<T = unknown>(url: string, data?: unknown, config = {}) {
    return this.instance.patch<T>(url, data, config)
  }
}

export const apiService = new ApiService()
export default apiService
