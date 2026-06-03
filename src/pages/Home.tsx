export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Lucas
          </h1>
          <p className="text-2xl text-gray-600">opaa!!</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Bem-vindo à sua nova aplicação. Esta é uma estrutura completa pronta para desenvolvimento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">⚡ Rápido</h3>
              <p className="text-sm text-blue-700">Construído com Vite e React</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">🎨 Moderno</h3>
              <p className="text-sm text-purple-700">Tailwind CSS integrado</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-900 mb-2">✅ Testado</h3>
              <p className="text-sm text-indigo-700">Vitest configurado</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/lucas00923/lucas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
            >
              GitHub Repository
            </a>
            <a
              href="#docs"
              className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
            >
              Documentação
            </a>
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          <p>Desenvolvido com ❤️ por lucas00923</p>
        </div>
      </div>
    </main>
  )
}
