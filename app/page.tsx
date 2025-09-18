import { DatabaseModules } from "@/components/database-modules"
import { DatabaseOverview } from "@/components/database-overview"
import { DatabaseVisualization } from "@/components/database-visualization"
import { DatabaseExamples } from "@/components/database-examples"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
      {/* Header */}
      <header className="border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg ring-1 ring-blue-600/20">
                <span className="text-white font-bold text-lg">DB</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  BD EMPRESA TEXTIL - TELAS DE ENSUEÑO
                </h1>
       
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">Presentación Activa</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5 dark:from-blue-400/10 dark:via-indigo-400/10 dark:to-purple-400/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
        </div>
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-8 border border-blue-200 dark:border-blue-800">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Arquitectura de Base de Datos </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6 leading-tight">
            Base de Datos para Sistema de
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
              Gestión Empresarial textil
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Una base de datos completa Y diseñada para gestionar 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#modules"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 font-semibold text-lg"
            >
              <span>Explorar Módulos</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#visualization"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg backdrop-blur-sm font-semibold text-lg"
            >
              <svg className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Ver Diagrama</span>
            </a>
          </div>
        </div>
      </section>

      {/* Database Overview */}
      <DatabaseOverview />

      {/* Database Modules */}
      <DatabaseModules />

      {/* Database Visualization */}
      <DatabaseVisualization />


{/* En tu componente Home, después de DatabaseVisualization: */}
<DatabaseExamples />

      {/* Footer */}
      <footer className="relative border-t border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 dark:from-blue-400/5 dark:to-indigo-400/5"></div>
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DB</span>
              </div>
              <span className="text-lg font-semibold text-slate-700 dark:text-slate-300">Sistema de Gestión Empresarial</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Base de Datos diseñada para presentación académica
            </p>
           
          </div>
        </div>
      </footer>
    </main>
  )
}