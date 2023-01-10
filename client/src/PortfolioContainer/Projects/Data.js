import { imagesProjectWayPoint, imagesProjectInHabitants, imagesProjectEnDesarrollo } from '../../assets/Projects/index.js'

export const ProjectsData = [
    {
        card: "uno",
        name: "Tienda de Juegos",
        intro: "Gamemania es una tienda de videojuegos en línea que ofrece una interfaz amigable y atractiva a los vendedores. La interfaz es sencilla de usar y cumple con los requerimientos establecidos durante el proyecto. Los vendedores pueden navegar fácilmente a través de la tienda y acceder a la información sobre videojuegos para poder así hacer uso del registro de ventas. ",
        description: ["En la primera imagen vemos la portada de la página, la cual es la encargada de mostrar a los usuarios los juegos populares o destacados, hay que considerar que además se cuenta con un diseño acorde al ámbito en donde se desenvuelve la industria. ", "La segunda imagen es la página de inicio de sesión para los vendedores de la tienda, por lo cual para llegar a ella se puede hacer uso del menú superior para navegar entre las secciones de la página. La intranet de la página está protegida por un usuario y contraseña, estos son entregados o registrados, permitiendo luego a los vendedores acceder los registros para gestionar sus ventas. Si desea entrar puede clonar el proyecto y hacer uso del usuario 'AdminUser' y de contraseña 'AdminPass'. ","La tercera imagen nos muestra un vistazo a los precios de los juegos y a las comisiones que obtiene el vendedor por la venta de cada juego disponible, a continuación, se muestra un formulario de registro para los vendedores, con este formulario se pueden crear perfiles para empezar a llevar a cabo el conteo de las ventas de juegos en la tienda, luego del formulario nos encontramos dos botones, uno llamado “insertar datos” y otro llamado “Mostrar la Tabla”, este último nos trae la base de datos actual en un formato de tabla, se hace uso de PHP con el modelo MVC y SQL para obtener los datos. Por último, la cuarta imagen termina de completar el sistema CRUD (por sus siglas en inglés que traducidas son: Crear, Leer, Actualizar y Eliminar) para gestionar el inventario de juegos. Con este sistema, los vendedores tienen la capacidad de realizar operaciones básicas de gestión de datos de manera sencilla y eficiente. Esto les permite llevar un control preciso de los registros que necesitan para su trabajo y ajustar los datos según sea necesario."],
        images: imagesProjectWayPoint,
        technology: ["MySQL", "PHP", "Modelo MVC"],
        icons: ["fas fa-database", "fas fa-code", "fas fa-wrench"],
        url: "Aún No disponible"
    },
    {
        card: "dos",
        name: "Gestor y Control de acceso",
        intro: "Inhabitants es una herramienta en línea diseñada específicamente para mejorar el registro y la gestión de las personas que habitan en un edificio. Con Inhabitants, podrás mantener un registro preciso y accesible de todos los habitantes en tu edificio, permitiéndote así llevar un control eficiente sobre la seguridad del lugar. El sistema te ayudará a conocer quiénes están ingresando y residiendo en tu edificio, lo que contribuirá a mantener la seguridad en niveles óptimos. ",
        description: ["La primera imagen muestra el formulario de registro de nuevos habitantes y no habitantes. Como se puede ver, hay varios campos para ingresar datos personales, así como la opción de seleccionar el piso y departamento en el que se encontrarán las personas. Al elegir un piso específico, la lista de departamentos disponibles se actualizará automáticamente, además, debajo del formulario se encuentra una lista en tiempo real de todas las personas registradas hasta el momento. ","La segunda imagen nos lleva a través del menú superior a “Personas” que es la sección donde se encuentra la lista de habitantes y no habitantes. En esta sección, podemos ver a todas las personas registradas con sus nombres, apellidos, edades, pisos y departamentos en los que se encuentran. Esta información nos permite minimizar la cantidad de personas que pueden estar involucradas en cualquier situación y tomar decisiones informadas. Además, podemos eliminar registros de personas que ya no estén habitando el edificio, actualizando así la información de manera precisa. ", "La tercera imagen muestra cómo podemos eliminar a un habitante de la lista, y cómo la lista se actualiza automáticamente una vez que se realiza la acción. Por último, esta tercera y cuarta imagen muestra cómo podemos editar a los habitantes existentes, cambiando datos importantes o fundamentales, tales como el piso o departamento de estadía. En resumen, Inhabitants es una herramienta útil y fácil de usar para llevar un registro y gestionar a las personas que habitan en un edificio de departamentos. Se hace uso de REST para el manejo de la base de datos mediante una API interna, Java y Spring para gestión continuamente el backend y HTML, Bootstrap, TypeScript y Angular en el frontend para desarrollar la página web. "],
        images: imagesProjectInHabitants,
        technology: ["Rest", "Java", "Angular"],
        icons: ["fas fa-server", "fas fa-code", "fab fa-angular"],
        url: "Aún No disponible"
    },
    {
        card: "tres",
        name: "App de Registro de Pacientes",
        intro: "PsicoAPP es una aplicación móvil desarrollada con el objetivo de facilitar la gestión de pacientes por parte de los psicólogos. El desafío en el diseño de esta aplicación fue el de crear una base de datos que almacenara información en tiempo real sobre los psicólogos y sus respectivos pacientes, permitiendo así a los psicólogos registrar fácilmente a los pacientes a los que atienden. ",
        description: ["El desafió que involucró el diseño de esta aplicación fue el de generar una base de datos de psicologos y sus respectivos pacientes, para que los psicologos puedan registrar los pacientes que atienden.","Descripción 2."],
        images: imagesProjectEnDesarrollo,
        technology: ["FireBase", "Java", "Android"],
        icons: ["fas fa-database", "fas fa-code", "fab fa-android"],
        url: "Aún No disponible"
    },
    {
        card: "cuatro",
        name: "App de Notas Grupales",
        intro: "La App de Notas Grupales es una aplicación desarrollada para facilitar la colaboración y la comunicación en grupos. Esta app permite a los usuarios crear notas y tareas compartidas, así como asignarlas y programar recordatorios para su cumplimiento. También permite la gestión de usuarios y la configuración de permisos, permitiendo a los administradores controlar quién tiene acceso a qué información. ",
        description: ["En la actualidad aveces se tiende a mandas mensajes como notas a otras personas para mantener una especie de lista de tareas, pero eso se puede hacer más practico con esta aplicación, ya que se puede crear grupos de personas y crear tareas facilmente.","Descripción 2.","Descripción 3."],
        images: imagesProjectEnDesarrollo,
        technology: ["FireBase", "Dart", "Flutter"],
        icons: ["fas fa-database", "fas fa-code", "fas fa-mobile"],
        url: "Aún No disponible"
    },
    // {
    //     card: "cinco",
    //     name: "App de Monitor de Sensores",
    //     intro: "",
    //     description: ["Muchas veces se requiere obtener datos desde apis externas, para poder realizar distintas acciones con los datos obtenidos para ello esta aplicación consta de obtener datos de una API externa, y luego usar estos datos para ser mostrados en tablas o en lo que sea que se requiera.","Descripción 2."],
    //     images: ["https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=800&q=800", "https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png"],
    //     technology: ["Api", "Java", "Windows"],
    //     icons: ["fas fa-server", "fas fa-code", "fab fa-windows"],
    //     url: "Aún No disponible"
    // },
]

export default ProjectsData;