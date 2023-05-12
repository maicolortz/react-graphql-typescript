# Proyecto de Gestión de Usuarios

Este es un proyecto de ejemplo que implementa un sistema de gestión de usuarios utilizando React, GraphQL y TypeScript.

## Funcionalidades

- Permite registrar nuevos usuarios ingresando su nombre, correo electrónico, género y estado.
- Permite actualizar la información de un usuario existente.
- Permite consultar la lista de usuarios registrados.
- Permite eliminar usuarios de la base de datos.
- Realiza validaciones básicas en los formularios antes de enviar los datos al servidor.
- Utiliza GraphQL para enviar y recibir datos del servidor.
- Muestra mensajes de éxito o error según el resultado de las operaciones.

## Tecnologías utilizadas

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- GraphQL: Lenguaje de consulta y manipulación de datos utilizado para interactuar con el servidor.
- Apollo Client: Cliente GraphQL para conectarse y realizar consultas al servidor.
- Tailwind CSS: Framework CSS utilizado para estilizar la interfaz de usuario.
- React Toastify: Biblioteca para mostrar notificaciones de estilo toast en React.
- TypeScript: Lenguaje de programación tipado utilizado para el desarrollo del proyecto.
- Zustand : Gestor de estado sencillo para controlar y actualizar los 15 usuarios cada vez que huviera una eliminacion o actualizacion de un usuario.
## Configuración

1. Clona el repositorio en tu máquina local:

  ```shell
   git clone https://github.com/maicolortz/react-graphql-typescript.git
  ```
    
2. Instala las dependencias del proyecto:
 ```shell
cd react-graphql-typescript
npm install
 ```
 3. Configura el servidor GraphQL en el archivo src/utils/api.ts. Asegúrate de proporcionar la URL correcta del servidor GraphQL.

4. Inicia la aplicación en modo de desarrollo:
 ```shell
npm start
 ```
La aplicación estará disponible en http://localhost:3000.

### Pagina principal

1. En la página principal, verás una lista de los últimos 15 usuarios registrados.
2. Puedes desplazarte hacia arriba y hacia abajo en la lista para ver más usuarios.
3. La lista de usuarios se actualiza automáticamente cuando se realizan cambios en la base de datos, como registros nuevos, actualizaciones o eliminaciones.


![image](https://github.com/maicolortz/react-graphql-typescript/assets/107804493/b4a53170-c3b1-47ed-9d71-65713fb07c76)

### Consultar Usuario por Id
En esta seccion podras hacer consultas de cualquier usuario, en caso de que no exista arrojara un mensaje como el siguiente, recuerda presionar la tecla enter para hacer tu busqueda.

En caso de que exista arrojara informacion como esta:  

![image](https://github.com/maicolortz/react-graphql-typescript/assets/107804493/728eb487-20ee-4a7b-b0f6-f2bc7cfe50da)



![image](https://github.com/maicolortz/react-graphql-typescript/assets/107804493/3cd4ba4b-3f37-4e48-83a7-bcb65801fbbe)

### Crear Usuario

1. En la página principal, encontrarás un formulario de registro de usuarios llamada Crear Usuario.
Completa todos los campos requeridos del formulario: nombre, correo electrónico, género y estado.
2. Haz clic en el botón "Registrar" para enviar los datos al servidor.
3. Si la operación de registro es exitosa, se mostrará un mensaje de éxito y la lista de usuarios se actualizará automáticamente para reflejar la nueva información.
4. Si ocurre algún error durante el registro, se mostrará un mensaje de error y no se realizará ninguna actualización en la lista de usuarios.

![image](https://github.com/maicolortz/react-graphql-typescript/assets/107804493/a65f264a-9e08-45a9-88ab-8bc539fcf332)

### Editar Usuario
En la seccion Editar usuario escribe el id del usuario para hacer primero una consulta de ese usuario y validar que exista. 

1. Si existe, se abrirá un formulario con los datos actuales del usuario.
2. Realiza los cambios deseados en los campos correspondientes.
3. Haz clic en el botón "Actualizar" para enviar los cambios al servidor.
4. Si la operación de actualización es exitosa, se mostrará un mensaje de éxito y la lista de usuarios se actualizará automáticamente para reflejar la información actualizada.

5. Si ocurre algún error durante la actualización, se mostrará un mensaje de error y no se realizará ninguna actualización en la lista de usuarios.

![image](https://github.com/maicolortz/react-graphql-typescript/assets/107804493/da35b94e-091c-4ad8-9977-ecdbb7147526)


### Eliminar Usuario
En la seccion Eliminar Usuario escribe el id del usuario para hacer primero una consulta de ese usuario y validar que sea el usuario que deseas eliminar. 

![image](https://github.com/maicolortz/react-graphql-typescript/assets/107804493/28cf379e-644f-44f1-8df4-5276d71a4e24)


1. Haz clic en el botón de "Eliminar" para eliminar el usuario.
2. Si la operación de eliminación es exitosa, se mostrará un mensaje de éxito y la lista de usuarios se actualizará automáticamente para reflejar la eliminación.
3. Si ocurre algún error durante la eliminación, se mostrará un mensaje de error y no se realizará ninguna actualización en la lista de usuarios.
4. 
![image](https://github.com/maicolortz/react-graphql-typescript/assets/107804493/35cc8c98-46b8-4f20-a3c8-051539c5ea82)

## Responsividad

![image](https://github.com/maicolortz/react-graphql-typescript/assets/107804493/86f82db7-3951-4aa3-a135-cd1a91e73fb2)

![image](https://github.com/maicolortz/react-graphql-typescript/assets/107804493/278cca92-c3d6-4000-a18e-e575f150c306)

![image](https://github.com/maicolortz/react-graphql-typescript/assets/107804493/2811ef8e-74b5-4490-8162-d6ed754108e7)

## Deploy en workplace workers

https://react-graphql-typescript.pages.dev/

Ingresa a este link y podras probar la version online de este proyecto y probar sus caracteristicas anteriormente mencionadas. 




## Contribuciones
Maicol Alexiz Ortiz Hernandez




