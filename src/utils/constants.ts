// src/utils/constants.ts

export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Lucas'
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
export const API_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT) || 30000

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '*',
} as const

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
} as const
