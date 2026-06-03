// src/store/appStore.ts

import { create } from 'zustand'

interface AppState {
  appName: string
  isLoading: boolean
  setLoading: (loading: boolean) => void
  setAppName: (name: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  appName: 'Lucas',
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
  setAppName: (name) => set({ appName: name }),
}))
