# Proyecto de E-Commerce

Este proyecto utilizando la pila **MERN** (MongoDB, Express, React, Node.js). Permite a los 
usuarios explorar productos, agregar productos al carrito, y realizar pedidos, mientras que 
los administradores pueden gestionar productos y categorías.

---

## Características del Proyecto

### **Frontend**
- Interfaz desarrollada con **React**.
- Diseño en español, intuitivo y responsivo.
- Funcionalidades principales:
  - Visualizar productos y detalles.
  - Añadir productos al carrito.
  - Gestionar el carrito y realizar pedidos.
  - Inicio de sesión y registro de usuarios.

### **Backend**
- Servidor API REST desarrollado con **Node.js** y **Express**.
- Base de datos gestionada con **MongoDB**.
- Autenticación con **JWT (JSON Web Tokens)**.
- Rutas protegidas para administradores y usuarios autenticados.

### **Base de Datos**
- Configuración local con **MongoDB** o mediante **mongodb-memory-server** para desarrollo y pruebas rápidas.
- Esquemas y colecciones:
  - **Usuarios**: Gestión de roles, autenticación.
  - **Productos**: Nombre, descripción, precio, categoría, stock.
  - **Categorías**: Clasificación de productos.
  - **Carrito**: Productos añadidos por el usuario.
  - **Órdenes**: Registro de pedidos.
