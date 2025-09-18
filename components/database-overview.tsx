import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DatabaseOverview() {
  const stats = [
    { 
      label: "Módulos Principales", 
      value: "10", 
      description: "Sistemas interconectados",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      icon: "🗂️"
    },
    { 
      label: "Tablas Totales", 
      value: "35+", 
      description: "Entidades de datos",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
      icon: "📊"
    },
    { 
      label: "Relaciones", 
      value: "40+", 
      description: "Claves foráneas",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      icon: "🔗"
    },
    { 
      label: "Funcionalidades", 
      value: "8", 
      description: "Áreas de negocio",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      icon: "⚡"
    },
  ]

  const features = [
    {
      title: "Estructura Jerárquica",
      description: "Organización geográfica desde departamentos hasta distritos, permitiendo ubicación precisa de sucursales, clientes y proveedores.",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Gestión Integral",
      description: "Control completo desde la materia prima hasta el producto final, incluyendo inventario, ventas y facturación.",
      icon: "🔄",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Trazabilidad Completa",
      description: "Seguimiento detallado de producción, calidad, asistencia de empleados y historial de cambios.",
      icon: "📈",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Flexibilidad",
      description: "Soporte para diferentes tipos de clientes (personas y empresas) y múltiples métodos de pago.",
      icon: "🎯",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-950 dark:via-slate-900/50 dark:to-blue-950/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium mb-6 border border-slate-200 dark:border-slate-700">
            <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
            <span>Arquitectura Empresarial Completa</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            Resumen de la Base de Datos
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Un sistema integral que abarca desde la <span className="font-semibold text-blue-600 dark:text-blue-400">gestión geográfica</span> hasta el 
            <span className="font-semibold text-green-600 dark:text-green-400"> control de producción</span> avanzado
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`group text-center ${stat.bgColor} ${stat.borderColor} border-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex justify-center mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                </div>
                <CardTitle className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </CardTitle>
                <CardDescription className="font-bold text-slate-700 dark:text-slate-300 text-base">
                  {stat.label}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/10 relative overflow-hidden">
          {/* Card background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h4 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-4">
                Características Principales
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Funcionalidades clave que hacen único nuestro sistema
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-slate-800 dark:text-slate-200 text-lg mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 px-8 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">Sistema Activo</span>
            </div>
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">Arquitectura Escalable</span>
            </div>
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">Presentación Lista</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
