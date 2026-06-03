// src/hooks/useApi.ts

import { useState, useCallback } from 'react'
import { AxiosError } from 'axios'
import apiService from '@/services/api'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: AxiosError | null
}

export const useApi = <T = unknown,>() => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  const request = useCallback(
    async (method: 'get' | 'post' | 'put' | 'delete' | 'patch', url: string, data?: unknown) => {
      setState({ data: null, loading: true, error: null })
      try {
        const response = await apiService[method]<T>(url, data)
        setState({ data: response.data, loading: false, error: null })
        return response.data
      } catch (error) {
        const axiosError = error as AxiosError
        setState({ data: null, loading: false, error: axiosError })
        throw axiosError
      }
    },
    []
  )

  return {
    ...state,
    request,
    get: (url: string) => request('get', url),
    post: (url: string, data?: unknown) => request('post', url, data),
    put: (url: string, data?: unknown) => request('put', url, data),
    delete: (url: string) => request('delete', url),
  }
}
