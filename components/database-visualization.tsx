import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DatabaseVisualization() {
  return (
    <section id="visualization" className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6 border border-purple-200 dark:border-purple-800">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>Diagrama Entidad-Relación Completo</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 dark:from-slate-100 dark:via-purple-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            Visualización de la Base de Datos
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explora el <span className="font-semibold text-purple-600 dark:text-purple-400">diagrama interactivo completo</span> de todas las tablas, 
            relaciones y constraints del sistema
          </p>
        </div>

        <Card className="mb-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-800 shadow-2xl shadow-purple-500/10 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-b border-purple-200 dark:border-purple-800">
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                📊
              </div>
              <span className="bg-gradient-to-r from-slate-900 to-purple-900 dark:from-slate-100 dark:to-purple-100 bg-clip-text text-transparent">
                Diagrama ER Completo
              </span>
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 dark:text-slate-400 ml-13">
              Visualización interactiva de la estructura completa de la base de datos con navegación avanzada
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="relative w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-slate-50 to-purple-50/30 dark:from-slate-800 dark:to-purple-900/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-purple-300 dark:border-purple-700 overflow-hidden group">
              {/* Loading state overlay */}
            
              
              <iframe
                allowFullScreen
                width="100%"
                height="100%"
                src="https://dbdocs.io/embed/e2dd1481f6c044dd35f8acf4063d7ce1/659dc4cd352743bba8785704345ed6bb"
                className="rounded-2xl shadow-inner"
                title="Diagrama de Base de Datos - Sistema de Gestión Empresarial"
              />
            </div>
            
            {/* Interactive features info and action buttons */}
            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Navegación interactiva</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Zoom detallado</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">Relaciones destacadas</span>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://dbdocs.io/jinganaupa/sucursal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 font-semibold"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Ver Documentación Completa</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://dbdocs.io/embed/e2dd1481f6c044dd35f8acf4063d7ce1/659dc4cd352743bba8785704345ed6bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-6 py-3 border-2 border-purple-300 dark:border-purple-600 bg-white/80 dark:bg-slate-800/80 text-purple-700 dark:text-purple-300 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-lg backdrop-blur-sm font-semibold"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                  <span>Abrir Diagrama en Nueva Ventana</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
            
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  🔗
                </div>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Relaciones
                </CardTitle>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">40+</span>
                <span className="text-sm text-blue-700 dark:text-blue-300 ml-2">Claves foráneas</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                La base de datos utiliza más de 40 claves foráneas para mantener la integridad referencial absoluta.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Jerarquías geográficas</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Herencia de clientes</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Trazabilidad de producción</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 border-orange-200 dark:border-orange-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  📋
                </div>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Constraints
                </CardTitle>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/20 px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">25+</span>
                <span className="text-sm text-orange-700 dark:text-orange-300 ml-2">Restricciones</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Implementa múltiples restricciones avanzadas para garantizar la máxima calidad de los datos.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Claves primarias únicas</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Campos NOT NULL críticos</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Integridad referencial</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 border-green-200 dark:border-green-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Optimización
                </CardTitle>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">3NF</span>
                <span className="text-sm text-green-700 dark:text-green-300 ml-2">Normalizada</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Arquitectura diseñada para máxima eficiencia, escalabilidad y rendimiento empresarial.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Índices en claves foráneas</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Normalización 3NF</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-200 dark:border-teal-800">
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Particionamiento lógico</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional technical details */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 px-8 py-6 bg-gradient-to-r from-purple-50 via-white to-indigo-50 dark:from-purple-950/30 dark:via-slate-900/50 dark:to-indigo-950/30 rounded-2xl border border-purple-200 dark:border-purple-800 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                DB
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-800 dark:text-slate-200">Sistema de Gestión Empresarial</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Arquitectura completa y escalable</div>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-purple-300 dark:bg-purple-700"></div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">35+ Tablas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">10 Módulos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">40+ Relaciones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
