# GHOST TESTS UNIANDES

Se realizó el trabajo de unificar las pruebas de cypress y kraken en un solo repositorio con base en las indicaciones de retroalimentación a la entrega de la semana anterior

# UBICACIÓN DE PROYECTOS CYPRESS Y KRAKEN

Dentro del repositorio existen dos carpetas

cypress -> en la que se encuentra instalada la herramienta cypress así como el código de las pruebas en dicha herramienta

kraken -> en la que se encuentra instalada la herramienta kraken así como el código de las pruebas en dicha herramienta

# AMBIENTES GHOST PARA EJECUCIÓN DE PRUEBAS

Para esta entrega se ejecutó ghost en docker, tano para la versión original en la que se hicieron las primeras pruebas como para la versión contraria en nuestro caso la versión incial que se utilizó fue la más reciente y por lo tanto la versión contraria es la más antigua

# VERSIONES DE GHOST UTILIZADAS

Versión inicial utilizada -> ghost 4.47.0 - puerto en el que se corrió (y por lo tanto puerto que se tiene que usar para que las pruebas funcionen) -> 3002 - es decir que se debe ejecutar en la URL http://localhost:3002/

Versión Semana 6 -> ghost 3.42 - puerto en el que se corrió (y por lo tanto puerto que se tiene que usar para que las pruebas funcionen) -> 3001 - es decir que se debe ejecutar en la URL http://localhost:3001/

# GESTIÓN DE PUERTOS DE EJECUCIÓN DE GHOST

Si no se quiere utilizar los puertos indicados arrbia se deb acceder al código de las pruebas y modificar los puertos de las URL que estan indicadas asi:

Para Cypress -> Se debe acceder a la ruta "cypress\cypress\integration\ghost-tests" (IMPORTANTE: Esta ruta es relativa y se debe buscar de acuerdo con la ubicación en donde se haya clonado el proyecto en el equipo local) y en cada archivo que tenga la extension ".spec.js" se debe realizar el reemplazo del texto "3002" por el puerto que se vaya a utilizar o en el que se tenga corriendo la versión local, esto puede hacerse mediente la herramienta buscar y reemplzar del editor de texto que se está utilizando, si no se tiene conocimiento de como realizar esto se debe buscar en la documentación de su editor.

Para Cypress -> Se debe acceder a la ruta "kraken\features\ft-001.feature" (IMPORTANTE: Esta ruta es relativa y se debe buscar de acuerdo con la ubicación en donde se haya clonado el proyecto en el equipo local) y en dicho archivo (OJO por favor tener en cuenta que la ruta que se está indicando es directamente la del archivo) se debe realizar el reemplazo del texto "3002" por el puerto que se vaya a utilizar o en el que se tenga corriendo la versión local, esto puede hacerse mediente la herramienta buscar y reemplzar del editor de texto que se está utilizando, si no se tiene conocimiento de como realizar esto se debe buscar en la documentación de su editor.

# EJECUCIÓN DE HERRAMIENTAS CYPRESS Y KRAKEN

Posterior a esto se pueden ejecutar las pruebas tanto de Cypress como de kraken, si no se tiene conocimiento de como ejecutar este tipo de herramientas se puede consultar la siguiente documentación:

Cypress -> https://misovirtual.virtual.uniandes.edu.co/codelabs/cypress-tutorial/index.html#1 (si no se tiene acceso a esta documentación se puede buscar en internet ya que existe gran cantidad de documentación sobre esta herramienta)

kraken -> https://thesoftwaredesignlab.github.io/AutTesingCodelabs/w5/krakenWeb/index.html

# ESTRUCTURA DE LAS PRUEBAS

Todas las pruebas fueron desarrolladas tratando de indicar a las herramientas, cypress y kraken, los selectores específicos de cada elemento del DOM a los que ellas deben acceder para ejecutar cada paso, para el caso de cypress el proceso es muy simple y se espera que haya una alta probabilidad de que funcione correctamente, para el caso de kraken no se puede garantizar que tome los selectores de forma correcta, por lo tanto es altamente probable que la herramienta falle, caso en el cual se recomienda revisar los fallos que va indicando el sistema y modificar los selectores por aquellos que la herramienta ve directamente, ya que a pesar de la gran cantidad de pruebas que realizamos, y de que en nuestros equipos las pruebas funcionaron correctamente es altamente factible que en otros ambientes dichas pruebas no funcionen.

# FUNCIONALIDADES PROBADAS

LAS FUNCIONALIDADES QUE SE UTILIZARON PARA LAS PRUEBAS DESARROLLADAS FUERON:

```json

[
 {
   "Código Funcionalidad": "FN01",
   "Funcionalidad": "Login"
 },
 {
   "Código Funcionalidad": "FN02",
   "Funcionalidad": "Crear Post"
 },
 {
   "Código Funcionalidad": "FN03",
   "Funcionalidad": "Editar Post"
 },
 {
   "Código Funcionalidad": "FN04",
   "Funcionalidad": "Eliminar Post"
 },
 {
   "Código Funcionalidad": "FN05",
   "Funcionalidad": "Crecion de Tags"
 },
 {
   "Código Funcionalidad": "FN06",
   "Funcionalidad": "Edicion de Tags"
 },
 {
   "Código Funcionalidad": "FN07",
   "Funcionalidad": "Eliminacion de Tags"
 },
 {
   "Código Funcionalidad": "FN08",
   "Funcionalidad": "Crear Pages"
 },
 {
   "Código Funcionalidad": "FN09",
   "Funcionalidad": "Listado de Posts Publicados"
 },
 {
   "Código Funcionalidad": "FN10",
   "Funcionalidad": "Listado de Posts En borrador"
 },
 {
   "Código Funcionalidad": "FN11",
   "Funcionalidad": "Listado de Posts programados"
 },
 {
   "Código Funcionalidad": "FN12",
   "Funcionalidad": "Listado de Pages"
 },
 {
   "Código Funcionalidad": "FN13",
   "Funcionalidad": "Eliminar Pagina"
 },
 {
   "Código Funcionalidad": "FN14",
   "Funcionalidad": "Invitar Staff"
 }
]
```

# LISTADO DE LOS ESCENARIOS DISEÑADOS

RELACIÓN DE PRUEBAS (El dato Cod. Funcionalidad se refiere al código de la funcionalidad del listado inmediatamente anterior)
```json
[
 {
   "Código Prueba": "PR-001",
   "Responsable": "Afiffe",
   "Código Funcionalidad": "FN02",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Login de usuario en el sistema - Creación de Post en estado publicado - Validar que el post aparezca en la bandeja de publicados"
 },
 {
   "Código Prueba": "PR-002",
   "Responsable": "Afiffe",
   "Código Funcionalidad": "FN02",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Retornar a página de dashboard - Creación de Post en estado borrador - Validar que el post aparezca en la bandeja de borradores"
 },
 {
   "Código Prueba": "PR-003",
   "Responsable": "Afiffe",
   "Código Funcionalidad": "FN03",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Retornar a página de dashboard - Edición del cuerpo del Post - Validación de cambios aplicados en la página del blog"
 },
 {
   "Código Prueba": "PR-004",
   "Responsable": "Afiffe",
   "Código Funcionalidad": "FN04",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Retornar a página de dashboard - Eliminación de Post en estado publicado - Validar que el post no aparezca en el listado de post publicados"
 },
 {
   "Código Prueba": "PR-005",
   "Responsable": "Afiffe",
   "Código Funcionalidad": "FN02",
   "Tipo Escenario": "Negativo",
   "Descripción Escenario": "Retornar a página de dashboard - Creación de Post sin título en estado publicado - Validar que el post aparezca en el listado de post publicados con titulo (untitled)"
 },
 {
   "Código Prueba": "PR-006",
   "Responsable": "Jose",
   "Código Funcionalidad": "FN03",
   "Tipo Escenario": "Negativo",
   "Descripción Escenario": "Retornar a página de dashboard - Edición de Post en estado publicado borrando el título - Validar que el post aparezca en el listado de post publicados con titulo (untitled)"
 },
 {
   "Código Prueba": "PR-007",
   "Responsable": "Jose",
   "Código Funcionalidad": "FN02",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Retornar a página de dashboard - Creación de Post en estado programado - Validar que el post aparezca en la bandeja de programados"
 },
 {
   "Código Prueba": "PR-008",
   "Responsable": "Jose",
   "Código Funcionalidad": "FN05",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Retornar a página de dashboard - Creación de Tag - Validar que el nuevo Tag aparezca en la lista de tags"
 },
 {
   "Código Prueba": "PR-009",
   "Responsable": "Jose",
   "Código Funcionalidad": "FN05",
   "Tipo Escenario": "Negativo",
   "Descripción Escenario": "Retornar a página de dashboard - Intento de Creación de Tag sin Nombre - Validar que el sistma emita error"
 },
 {
   "Código Prueba": "PR-010",
   "Responsable": "Jose",
   "Código Funcionalidad": "FN05",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Retornar a página de dashboard - Crear tag con color - Validar que quede guardado el color en la información de tag"
 },
 {
   "Código Prueba": "PR-011",
   "Responsable": "Jorge",
   "Código Funcionalidad": "FN05",
   "Tipo Escenario": "Negativo",
   "Descripción Escenario": "Retornar a página de dashboard - Crear tag con color erroneo - El sistema toma captura de pantalla de error de color"
 },
 {
   "Código Prueba": "PR-012",
   "Responsable": "Jorge",
   "Código Funcionalidad": "FN06",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Retornar a página de dashboard - Edición de Nombre Tag - El sistema toma captura de pantalla de que el nombre fue cambiado"
 },
 {
   "Código Prueba": "PR-013",
   "Responsable": "Jorge",
   "Código Funcionalidad": "FN06",
   "Tipo Escenario": "Negativo",
   "Descripción Escenario": "Retornar a página de dashboard - Edición de Tag quitando el nombre - El sistema toma captura de pantalla de error de nombre"
 },
 {
   "Código Prueba": "PR-014",
   "Responsable": "Jorge",
   "Código Funcionalidad": "FN06",
   "Tipo Escenario": "Negativo",
   "Descripción Escenario": "Retornar a página de dashboard - Edición de Tag indicando un color erroneo - El sistema toma captura de pantalla de error de color"
 },
 {
   "Código Prueba": "PR-015",
   "Responsable": "Jorge",
   "Código Funcionalidad": "FN07",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Retornar a página de dashboard - Eliminación de Tag - Volver a listado de tags - El sistema toma captura de pantalla de que el tag desaparece de la lista de tags"
 },
 {
   "Código Prueba": "PR-016",
   "Responsable": "Javier",
   "Código Funcionalidad": "FN08",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Retornar a página de dashboard - Crear Page en estado Publicado - Validar que aparezca con el estado publicado en el listado de Pages"
 },
 {
   "Código Prueba": "PR-017",
   "Responsable": "Javier",
   "Código Funcionalidad": "FN08",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Retornar a página de dashboard - Crear Page en estado Programado - Validar que aparezca con el estado programado en el listado de Pages"
 },
 {
   "Código Prueba": "PR-018",
   "Responsable": "Javier",
   "Código Funcionalidad": "FN13",
   "Tipo Escenario": "Positivo",
   "Descripción Escenario": "Retornar a página de dashboard - Eliminar Page en estado Programada - Validar que NO aparezca en el listado de Pages"
 },
 {
   "Código Prueba": "PR-019",
   "Responsable": "Javier",
   "Código Funcionalidad": "FN14",
   "Tipo Escenario": "Negativo",
   "Descripción Escenario": "Retornar a página de dashboard - Intentar Invitar Staff sin correo electrónico - Validar que el sistema genere error."
 },
 {
   "Código Prueba": "PR-020",
   "Responsable": "Javier",
   "Código Funcionalidad": "FN14",
   "Tipo Escenario": "Negativo",
   "Descripción Escenario": "Retornar a página de dashboard - Intentar Invitar Staff con correo electrónico erroneo - Validar que el sistema genere error de correo erroneo."
 }
]
```

# CAPTURAS DE PANTALLA DE LAS PRUEBAS EJECUTADAS

Todas las pruebas tanto cypress como en kraken toman una caputra de pantalla después de ejecutar cada paso, las rutas en las que se almacenan dichas imágenes son:

cypress -> "cypress\cypress\screenshots\ghost-tests" (IMPORTANTE: Esta ruta es relativa y se debe buscar de acuerdo con la ubicación en donde se haya clonado el proyecto en el equipo local)

kraken -> "kraken\reports\miso-evidences\reporte-pruebas-exitosas\screenshots" (IMPORTANTE: Esta ruta es relativa y se debe buscar de acuerdo con la ubicación en donde se haya clonado el proyecto en el equipo local)

# REPORTES DE RESULTADOS DE PRUEBAS EJECUTADAS

Los reportes del resultado exito de las pruebas pueden visualizarse en la ruta:

Reporte kraken -> "kraken\reports\miso-evidences\reporte-pruebas-exitosas" (IMPORTANTE: Esta ruta es relativa y se debe buscar de acuerdo con la ubicación en donde se haya clonado el proyecto en el equipo local)

# REPORTE DE REGRESIÓN VISUAL

Los reportes de regresión visual puden encontrarse en las siguientes ubicaciones

Reporte Cypress ->

Reporte kraken ->

