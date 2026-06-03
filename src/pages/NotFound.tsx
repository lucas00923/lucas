// src/pages/NotFound.tsx

import { Link } from 'react-router-dom'
import { Button } from '@/components'

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 mb-4">
            404
          </h1>
          <p className="text-3xl font-bold text-gray-900 mb-2">Página não encontrada</p>
          <p className="text-lg text-gray-600 mb-8">
            Desculpe, a página que você está procurando não existe.
          </p>
        </div>

        <Link to="/">
          <Button variant="primary" size="lg">
            Voltar para Home
          </Button>
        </Link>
      </div>
    </main>
  )
}
