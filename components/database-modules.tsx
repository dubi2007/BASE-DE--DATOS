"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"

const modules = [
  {
    id: "geografico",
    title: "Módulo Geográfico",
    description: "Estructura jerárquica de ubicaciones",
    icon: "🗺️",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    accentColor: "border-blue-200 dark:border-blue-800",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200",
    tables: ["DEPARTAMENTO", "PROVINCIA", "DISTRITO"],
    details:
      "Organiza la información geográfica en una estructura jerárquica de tres niveles: departamentos, provincias y distritos. Esta base geográfica es fundamental para ubicar sucursales, clientes y proveedores.",
    relationships: ["Base para SUCURSAL", "Base para CLIENTE", "Base para PROVEEDOR"],
  },
  {
    id: "negocio",
    title: "Módulo de Negocio",
    description: "Sucursales y proveedores",
    icon: "🏢",
    color: "bg-gradient-to-br from-green-500 to-green-600",
    accentColor: "border-green-200 dark:border-green-800",
    badgeColor: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",
    tables: ["SUCURSAL", "PROVEEDOR"],
    details:
      "Gestiona las entidades principales del negocio: sucursales con sus horarios, contactos y ubicación, y proveedores con su información comercial y representantes.",
    relationships: ["Conecta con DISTRITO", "Base para PEDIDO_PROVEEDOR", "Base para INVENTARIO"],
  },
  {
    id: "clientes",
    title: "Módulo de Clientes",
    description: "Gestión de clientes personas y empresas",
    icon: "👥",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    accentColor: "border-purple-200 dark:border-purple-800",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200",
    tables: ["CLIENTE", "CLIENTE_PERSONA", "CLIENTE_EMPRESA"],
    details:
      "Maneja dos tipos de clientes mediante herencia: personas naturales con DNI y empresas con RUC. Incluye información de contacto, ubicación y estado.",
    relationships: ["Hereda de CLIENTE", "Conecta con DISTRITO", "Base para VENTA"],
  },
  {
    id: "productos",
    title: "Módulo de Productos",
    description: "Catálogo y atributos de productos",
    icon: "📦",
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    accentColor: "border-orange-200 dark:border-orange-800",
    badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200",
    tables: [
      "CATEGORIA_PRODUCTO",
      "SUBCATEGORIA_PRODUCTO",
      "PRODUCTO",
      "PRODUCTO_ATRIBUTO",
      "COLOR_PRODUCTO",
      "MATERIAL_PRODUCTO",
      "MEDIDA_PRODUCTO",
    ],
    details:
      "Sistema completo de catalogación con categorías, subcategorías y atributos múltiples (color, material, medida). Permite gestión detallada del inventario de productos.",
    relationships: ["Jerarquía de categorías", "Atributos múltiples", "Base para VENTA y PRODUCCION"],
  },
  {
    id: "empleados",
    title: "Módulo de Empleados",
    description: "Personal, cargos y asistencia",
    icon: "👨‍💼",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    accentColor: "border-indigo-200 dark:border-indigo-800",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200",
    tables: ["CARGO_EMPLEADO", "SUBCARGO_EMPLEADO", "EMPLEADO", "JORNADA", "ASISTENCIA_EMPLEADO"],
    details:
      "Gestión completa de recursos humanos con jerarquía de cargos, información personal, jornadas laborales y control de asistencia con observaciones.",
    relationships: ["Jerarquía de cargos", "Control de jornadas", "Base para VENTA (vendedor)"],
  },
  {
    id: "ventas",
    title: "Módulo de Ventas",
    description: "Transacciones y detalles de venta",
    icon: "💰",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    accentColor: "border-emerald-200 dark:border-emerald-800",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200",
    tables: ["VENTA", "DETALLE_VENTA"],
    details:
      "Registra las transacciones de venta con cliente, vendedor, fecha y productos vendidos con cantidades. Base para la facturación.",
    relationships: ["Conecta CLIENTE y EMPLEADO", "Detalla PRODUCTOS vendidos", "Base para FACTURA_VENTA"],
  },
  {
    id: "materia-prima",
    title: "Módulo de Materia Prima",
    description: "Materiales y pedidos a proveedores",
    icon: "🧱",
    color: "bg-gradient-to-br from-amber-500 to-amber-600",
    accentColor: "border-amber-200 dark:border-amber-800",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
    tables: ["CATEGORIA_MATERIA", "MATERIA_PRIMA", "PEDIDO_PROVEEDOR", "DETALLE_PEDIDO"],
    details:
      "Gestiona materias primas categorizadas con fechas de vencimiento, pedidos a proveedores desde sucursales específicas con detalles de cantidades.",
    relationships: ["Categorización de materias", "Pedidos por SUCURSAL", "Base para PRODUCCION"],
  },
  {
    id: "facturacion",
    title: "Módulo de Facturación",
    description: "Facturas y métodos de pago",
    icon: "🧾",
    color: "bg-gradient-to-br from-rose-500 to-rose-600",
    accentColor: "border-rose-200 dark:border-rose-800",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200",
    tables: ["METODO_PAGO", "FACTURA", "FACTURA_VENTA", "FACTURA_PEDIDO", "PAGO_FACTURA"],
    details:
      "Sistema completo de facturación para ventas y pedidos, con múltiples métodos de pago, cálculo de IGV y control de pagos parciales o totales.",
    relationships: ["Factura VENTAS y PEDIDOS", "Múltiples METODOS_PAGO", "Control de pagos"],
  },
  {
    id: "inventario",
    title: "Módulo de Inventario",
    description: "Control de stock y ubicaciones",
    icon: "📊",
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    accentColor: "border-cyan-200 dark:border-cyan-800",
    badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200",
    tables: ["UBICACION_INVENTARIO", "INVENTARIO", "INVENTARIO_PRODUCTO", "INVENTARIO_MATERIA"],
    details:
      "Control detallado de inventario con ubicaciones específicas (zona, pasillo, estante), stocks mínimos y máximos para productos y materias primas.",
    relationships: ["Ubicaciones detalladas", "Stock de PRODUCTOS", "Stock de MATERIA_PRIMA"],
  },
  {
    id: "produccion",
    title: "Módulo de Producción",
    description: "Procesos productivos y calidad",
    icon: "⚙️",
    color: "bg-gradient-to-br from-violet-500 to-violet-600",
    accentColor: "border-violet-200 dark:border-violet-800",
    badgeColor: "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200",
    tables: [
      "UNIDAD_MEDIDA",
      "ESTADO_PRODUCCION",
      "ESTADO_INSPECCION",
      "PRODUCCION",
      "DETALLE_PRODUCCION",
      "INSPECCION_CALIDAD",
      "HISTORIAL_PRODUCCION",
    ],
    details:
      "Sistema completo de producción con estados, inspección de calidad, trazabilidad de materias primas utilizadas y historial completo de cambios.",
    relationships: ["Usa MATERIA_PRIMA", "Produce PRODUCTOS", "Control de calidad", "Historial completo"],
  },
]

export function DatabaseModules() {
  const [openModules, setOpenModules] = useState<string[]>([])

  const toggleModule = (moduleId: string) => {
    setOpenModules((prev) => (prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]))
  }

  return (
    <section id="modules" className="py-20 lg:py-28 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-slate-900/50 dark:via-slate-950 dark:to-blue-950/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Sistema Modular Integrado</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            Módulos de la Base de Datos
          </h3>
         
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <Card 
              key={module.id} 
              className={`group overflow-hidden border-2 ${module.accentColor} bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2`}
            >
              <Collapsible open={openModules.includes(module.id)} onOpenChange={() => toggleModule(module.id)}>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-gradient-to-r hover:from-slate-50/80 hover:to-blue-50/80 dark:hover:from-slate-800/80 dark:hover:to-blue-900/80 transition-all duration-300 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-14 h-14 ${module.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg ring-4 ring-white/20 group-hover:scale-110 transition-transform duration-300`}>
                          {module.icon}
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {module.title}
                          </CardTitle>
                          <CardDescription className="text-base text-slate-600 dark:text-slate-300 mt-1">
                            {module.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`px-3 py-1 ${module.badgeColor} rounded-full text-xs font-medium`}>
                          {module.tables.length} tablas
                        </div>
                        {openModules.includes(module.id) ? (
                          <ChevronDown className="h-6 w-6 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                        ) : (
                          <ChevronRight className="h-6 w-6 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0 px-6 pb-6">
                    <div className="space-y-6">
                      <div className="p-4 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                          {module.details}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h5 className="font-bold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span>Tablas incluidas ({module.tables.length})</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {module.tables.map((table) => (
                            <Badge 
                              key={table} 
                              className={`${module.badgeColor} border-0 px-3 py-1 text-xs font-semibold hover:scale-105 transition-transform duration-200 cursor-default`}
                            >
                              {table}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="font-bold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Relaciones principales</span>
                        </h5>
                        <div className="space-y-2">
                          {module.relationships.map((rel, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                              <span className="text-slate-700 dark:text-slate-300 font-medium">{rel}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border-2 border-blue-200 dark:border-blue-800">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10</div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">Módulos Especializados</div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border-2 border-green-200 dark:border-green-800">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {modules.reduce((sum, module) => sum + module.tables.length, 0)}
            </div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">Tablas Integradas</div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border-2 border-purple-200 dark:border-purple-800">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">Interconectado</div>
          </div>
        </div>
      </div>
    </section>
  )
}
