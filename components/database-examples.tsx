"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const sqlExamples = [
  {
    id: "select-basico",
    title: "Consulta SELECT Básica",
    description: "Listar todos los departamentos",
    category: "Consultas Básicas",
    complexity: "Básico",
    sql: `SELECT IDENTIFICADOR, NOMBRE 
FROM DEPARTAMENTO 
ORDER BY NOMBRE;`,
    result: "Lista todos los departamentos ordenados alfabéticamente",
    tables: ["DEPARTAMENTO"],
    iframe: "https://drive.google.com/file/d/1IfLta4ZozYMTEPZP_5W5JiLMZvi-fGB5/preview"
  },
  {
    id: "where-simple",
    title: "Filtrado con WHERE",
    description: "Buscar empleados por estado activo",
    category: "Filtros",
    complexity: "Básico",
    sql: `SELECT NOMBRE, APELLIDO, EMAIL 
FROM EMPLEADO 
WHERE ESTADO = '1';`,
    result: "Muestra solo los empleados que están activos en el sistema",
    tables: ["EMPLEADO"],
    iframe: null
  },
  {
    id: "inner-join",
    title: "INNER JOIN Simple",
    description: "Relacionar empleados con sus cargos",
    category: "Relaciones",
    complexity: "Básico",
    sql: `SELECT e.NOMBRE, e.APELLIDO, c.NOMBRE as cargo
FROM EMPLEADO e
INNER JOIN CARGO_EMPLEADO c ON e.CARGO = c.IDENTIFICADOR;`,
    result: "Lista empleados junto con el nombre de su cargo",
    tables: ["EMPLEADO", "CARGO_EMPLEADO"],
    iframe: "https://drive.google.com/file/d/14eBjZ-ubdPYS2n5J55KXHzZjh3OX4C0i/preview"
  },
  {
    id: "count-group",
    title: "Contar Registros - COUNT",
    description: "Contar empleados por cargo",
    category: "Funciones de Agregación",
    complexity: "Básico",
    sql: `SELECT c.NOMBRE as cargo, COUNT(*) as cantidad_empleados
FROM EMPLEADO e
INNER JOIN CARGO_EMPLEADO c ON e.CARGO = c.IDENTIFICADOR
GROUP BY c.IDENTIFICADOR, c.NOMBRE
ORDER BY cantidad_empleados DESC;`,
    result: "Muestra cuántos empleados hay en cada cargo",
    tables: ["EMPLEADO", "CARGO_EMPLEADO"],
    iframe: "https://drive.google.com/file/d/1ZcJa9U_udkY6CGWhRwtDdSF3ZutaaCcj/preview"
  },
  {
    id: "insert-basico",
    title: "INSERT - Insertar Datos",
    description: "Agregar un nuevo departamento",
    category: "Operaciones DML",
    complexity: "Básico",
    sql: `INSERT INTO DEPARTAMENTO (IDENTIFICADOR, NOMBRE) 
VALUES (26, 'Ucayali');`,
    result: "Agrega el departamento de Ucayali a la tabla",
    tables: ["DEPARTAMENTO"],
    iframe: "https://drive.google.com/file/d/1_PJTKcgQ4RkkUdO-dVB1kZSoEb77dnLV/preview"
  },
  {
    id: "update-basico",
    title: "UPDATE - Actualizar Datos",
    description: "Cambiar el teléfono de un empleado",
    category: "Operaciones DML",
    complexity: "Básico",
    sql: `UPDATE EMPLEADO 
SET TELEFONO = '987654321' 
WHERE IDENTIFICADOR = 1;`,
    result: "Actualiza el número de teléfono del empleado con ID 1",
    tables: ["TODAS"],
    iframe: "https://drive.google.com/file/d/1YqJ-nynmMByE2j9_IGhd-mIHt4INg3Qi/preview"
  },


   {
    id: "CONSULTA-TODOS",
    title: "CONSULTA - TODOS",
    description: "CONSULTA DE INFORMACIÓN COMPLETA DE PRODUCTOS",
    category: "Operaciones DML",
    complexity: "Básico",
    sql: `-- Muestra todos los productos con sus atributos, inventario y categorización

SELECT 
    p.IDENTIFICADOR AS PRODUCTO_ID,
    p.CODIGO,
    p.NOMBRE AS PRODUCTO,
    p.PRECIO,
    p.ESTADO AS ESTADO_PRODUCTO,
    
    -- Categorización
    cat.NOMBRE AS CATEGORIA,
    subcat.NOMBRE AS SUBCATEGORIA,
    
    -- Atributos
    col.NOMBRE AS COLOR,
    mat.NOMBRE AS MATERIAL,
    med.NOMBRE AS MEDIDA,
    
    -- Inventario
    s.NOMBRE AS SUCURSAL,
    inv.STOCK_ACTUAL,
    inv.STOCK_MINIMO,
    inv.STOCK_MAXIMO,
    ubi.ZONA || '-' || ubi.PASILLO || '-' || ubi.ESTANTE || '-' || ubi.NIVEL || '-' || ubi.POSICION AS UBICACION,
    
    -- Ventas
    NVL(ventas_stats.TOTAL_VENDIDO, 0) AS TOTAL_VENDIDO,
    NVL(ventas_stats.CANTIDAD_VENTAS, 0) AS NUMERO_VENTAS

FROM PRODUCTO p
    INNER JOIN CATEGORIA_PRODUCTO cat ON p.CATEGORIA = cat.IDENTIFICADOR
    INNER JOIN SUBCATEGORIA_PRODUCTO subcat ON p.SUBCATEGORIA = subcat.IDENTIFICADOR
    
    -- Atributos del producto
    LEFT JOIN PRODUCTO_ATRIBUTO pa ON p.IDENTIFICADOR = pa.PRODUCTO
    LEFT JOIN COLOR_PRODUCTO col ON pa.COLOR = col.IDENTIFICADOR
    LEFT JOIN MATERIAL_PRODUCTO mat ON pa.MATERIAL = mat.IDENTIFICADOR
    LEFT JOIN MEDIDA_PRODUCTO med ON pa.MEDIDA = med.IDENTIFICADOR
    
    -- Inventario
    LEFT JOIN INVENTARIO_PRODUCTO ip ON p.IDENTIFICADOR = ip.PRODUCTO
    LEFT JOIN INVENTARIO inv ON ip.INVENTARIO = inv.IDENTIFICADOR
    LEFT JOIN UBICACION_INVENTARIO ubi ON inv.UBICACION = ubi.IDENTIFICADOR
    LEFT JOIN SUCURSAL s ON inv.SUCURSAL = s.IDENTIFICADOR
    
    -- Estadísticas de ventas
    LEFT JOIN (
        SELECT 
            dv.PRODUCTO,
            SUM(dv.CANTIDAD) AS TOTAL_VENDIDO,
            COUNT(DISTINCT dv.VENTA) AS CANTIDAD_VENTAS
        FROM DETALLE_VENTA dv
        GROUP BY dv.PRODUCTO
    ) ventas_stats ON p.IDENTIFICADOR = ventas_stats.PRODUCTO

ORDER BY cat.NOMBRE, subcat.NOMBRE, p.NOMBRE;

-- ========================================`,
    result: "Actualiza el número de teléfono del empleado con ID 1",
    tables: ["EMPLEADO"],
    iframe: "https://drive.google.com/file/d/1P2dZ8k49IF0m7I-yk9LrlK3iZTUkmr-k/preview"
  }
]

const useCases = [
  {
    id: "gestion-basica",
    title: "Operaciones Básicas de Base de Datos",
    icon: "📝",
    color: "from-blue-500 to-cyan-500",
    description: "Fundamentos de consultas y manipulación de datos",
    features: [
      "Consultas SELECT para obtener información",
      "Filtros con WHERE para buscar datos específicos",
      "Ordenamiento con ORDER BY",
      "Operaciones INSERT, UPDATE, DELETE básicas"
    ],
    scenario: "Un estudiante aprende a:",
    benefits: [
      "Entender la sintaxis básica de SQL",
      "Realizar consultas simples y efectivas",
      "Manipular datos de forma segura",
      "Comprender las relaciones entre tablas"
    ]
  },
  {
    id: "relaciones-simples",
    title: "Relaciones Entre Tablas",
    icon: "🔗",
    color: "from-green-500 to-emerald-500",
    description: "Cómo conectar información de diferentes tablas",
    features: [
      "INNER JOIN para unir tablas relacionadas",
      "Comprensión de claves primarias y foráneas",
      "Consultas de dos o tres tablas máximo",
      "Alias para mejorar legibilidad"
    ],
    scenario: "Para entender las conexiones de datos:",
    benefits: [
      "Visualizar cómo se relacionan los datos",
      "Obtener información más completa",
      "Evitar redundancia de información",
      "Base para consultas más complejas"
    ]
  },
  {
    id: "funciones-agregacion",
    title: "Funciones de Conteo y Agrupación",
    icon: "📊",
    color: "from-purple-500 to-violet-500",
    description: "Operaciones matemáticas y estadísticas básicas",
    features: [
      "COUNT para contar registros",
      "SUM para sumar valores numéricos",
      "AVG para calcular promedios",
      "GROUP BY para agrupar resultados"
    ],
    scenario: "Análisis básico de datos empresariales:",
    benefits: [
      "Obtener estadísticas simples",
      "Generar reportes básicos",
      "Entender patrones en los datos",
      "Tomar decisiones basadas en números"
    ]
  },
  {
    id: "mantenimiento-datos",
    title: "Mantenimiento de Información",
    icon: "⚙️",
    color: "from-orange-500 to-red-500",
    description: "Agregar, modificar y mantener datos actualizados",
    features: [
      "INSERT para agregar nuevos registros",
      "UPDATE para modificar datos existentes",
      "DELETE para eliminar información obsoleta",
      "Validación básica de integridad"
    ],
    scenario: "Mantenimiento diario del sistema:",
    benefits: [
      "Mantener información actualizada",
      "Corregir errores de captura",
      "Eliminar datos innecesarios",
      "Asegurar calidad de los datos"
    ]
  }
]

export function DatabaseExamples() {
  const [selectedExample, setSelectedExample] = useState(sqlExamples[0])
  const [selectedTab, setSelectedTab] = useState("consultas")

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-slate-50/50 to-indigo-50/30 dark:from-slate-950 dark:via-slate-900/50 dark:to-indigo-950/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium mb-6 border border-indigo-200 dark:border-indigo-800">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>Conceptos Básicos de SQL y Oracle</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 dark:from-slate-100 dark:via-indigo-100 dark:to-purple-100 bg-clip-text text-transparent mb-6">
            Base de Datos en Acción
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Aprende con <span className="font-semibold text-indigo-600 dark:text-indigo-400">consultas SQL básicas</span> y 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> conceptos fundamentales</span> de bases de datos Oracle
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="consultas" className="text-lg">Consultas SQL</TabsTrigger>
            <TabsTrigger value="casos-uso" className="text-lg">Casos de Uso</TabsTrigger>
          </TabsList>

          <TabsContent value="consultas" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {/* SQL Examples Selector */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {sqlExamples.map((example) => (
                  <Card
                    key={example.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedExample.id === example.id
                        ? 'ring-2 ring-indigo-500 shadow-lg bg-indigo-50 dark:bg-indigo-950/20'
                        : 'hover:shadow-md bg-white/80 dark:bg-slate-900/80'
                    } backdrop-blur-sm border-2 border-slate-200 dark:border-slate-800`}
                    onClick={() => setSelectedExample(example)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold text-slate-800 dark:text-slate-200">
                          {example.title}
                        </CardTitle>
                        <Badge variant={example.complexity === 'Avanzado' ? 'destructive' : example.complexity === 'Intermedio' ? 'default' : 'secondary'}>
                          {example.complexity}
                        </Badge>
                      </div>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        {example.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">CATEGORÍA</div>
                        <Badge variant="outline" className="text-xs">
                          {example.category}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Selected SQL Example Detail */}
              <Card className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-2 border-indigo-200 dark:border-indigo-800 shadow-2xl">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {selectedExample.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                        {selectedExample.description}
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="outline">{selectedExample.category}</Badge>
                      <Badge variant={selectedExample.complexity === 'Avanzado' ? 'destructive' : selectedExample.complexity === 'Intermedio' ? 'default' : 'secondary'}>
                        {selectedExample.complexity}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* SQL Code */}
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Consulta SQL
                    </h4>
                    <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400 font-mono">
                        <code>{selectedExample.sql}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Oracle Screenshot */}
                  {selectedExample.iframe && (
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center">
                        <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                        Resultado en Oracle
                      </h4>
                      <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border-2 border-orange-200 dark:border-orange-800">
                        <iframe 
                          src={selectedExample.iframe}
                          width="100%" 
                          height="400"
                          allow="autoplay"
                          className="rounded-lg border border-slate-200 dark:border-slate-700"
                          title={`Resultado de ${selectedExample.title} en Oracle`}
                        />
                      </div>
                    </div>
                  )}

                  {/* Result Description */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Resultado Esperado
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        {selectedExample.result}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        Tablas Involucradas ({selectedExample.tables.length})
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedExample.tables.map((table) => (
                          <Badge key={table} className="bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-0">
                            {table}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="casos-uso" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={useCase.id} className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {useCase.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                          {useCase.title}
                        </CardTitle>
                        <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                          {useCase.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Funcionalidades Clave
                      </h5>
                      <ul className="space-y-2">
                        {useCase.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h5 className="font-bold text-orange-800 dark:text-orange-200 mb-2">💼 Escenario Empresarial</h5>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">{useCase.scenario}</p>
                    </div>

                    <div>
                      <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Beneficios Obtenidos
                      </h5>
                      <div className="grid grid-cols-1 gap-2">
                        {useCase.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-3 p-2 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span className="text-green-700 dark:text-green-300 text-sm font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 px-8 py-6 bg-gradient-to-r from-indigo-50 via-white to-purple-50 dark:from-indigo-950/30 dark:via-slate-900/50 dark:to-purple-950/30 rounded-2xl border border-indigo-200 dark:border-indigo-800 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{sqlExamples.length}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Consultas de Ejemplo</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-indigo-300 dark:bg-indigo-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{useCases.length}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Casos de Uso</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-purple-300 dark:bg-purple-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">6</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Tipos de Consulta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
