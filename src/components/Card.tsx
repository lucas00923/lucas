// src/components/Card.tsx

import React from 'react'

interface CardProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({ title, subtitle, children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      {title && <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>}
      {subtitle && <p className="text-sm text-gray-600 mb-4">{subtitle}</p>}
      {children}
    </div>
  )
}
