# **Solución Prueba Técnica - IFX Networks**

**Desarrollada por:** Santiago Cárdenas  
**Fecha:** 17 de noviembre de 2024  

---

## **Tecnologías Utilizadas**

### **Frontend**
- **Framework:** Angular v18  
- **Estilo:** TailwindCSS  

### **Backend**
- **Framework:** .NET 6  
- **Seguridad:** JWT (JSON Web Tokens)  
- **Base de Datos:** SQL Server  

---

## **¿Cómo Ejecutar el Proyecto Localmente?**

### **Base de Datos**
1. En el directorio principal del proyecto encontrarás el archivo `script.sql`.  
   Este archivo contiene el script necesario para crear las tablas y la estructura de la base de datos en SQL Server.
2. Ejecuta este script en tu instancia de SQL Server para preparar la base de datos.  
   **Nota:** No utilicé migraciones de Entity Framework en esta implementación.

### **Backend**
1. Abre la solución del backend en Visual Studio (compatible con .NET 6).  
   Visual Studio detectará automáticamente la solución y te permitirá ejecutarla.  
2. Una vez iniciada, accede a la documentación de la API utilizando **Swagger**, que estará disponible en el navegador.

### **Frontend**
1. Asegúrate de tener instalado Angular CLI versión 18.  
2. Abre el proyecto frontend y ejecuta el comando: `ng serve`
Esto iniciará el servidor de desarrollo de Angular. Accede a la aplicación en tu navegador en http://localhost:4200.

---

## **Estructura del Backend**

La arquitectura implementada sigue el patrón **MVC** (Modelo-Vista-Controlador). Las carpetas principales son:

1. **Models:**  
   Contiene las entidades que reflejan la estructura de la base de datos.
   
2. **Controllers:**  
   Incluye los controladores de la API, organizados por cada entidad.  
   - En el controlador de `User` se utiliza un pequeño DTO (Data Transfer Object) para manejar el inicio de sesión.

### **Librerías Utilizadas**
- `BCrypt` (para el hashing de contraseñas)  
- `JWT` (autenticación basada en tokens)  
- `Entity Framework Core`  
- `ASP.NET Core CORS`  
- `ASP.NET Core`  

## **Detalles Adicionales**

### **Script de Base de Datos**
El script de creación de la base de datos se encuentra en el archivo `script.bd`, ubicado en el directorio raíz del proyecto.
Recuerda crear usuarios de prueba y además que estos sean administradores para que la aplicación funcione correctamente.

### **Demo**
Actualmente, **no hay una demo desplegada** para esta solución.  

Sin embargo, como evidencia de mi capacidad para desplegar aplicaciones, puedes consultar un ejemplo funcional de otra solución que implementé, utilizando **React** en el frontend y **Spring Boot** en el backend:  

- **Frontend:** [https://solucionpruebapuntoredsc.netlify.app/](https://solucionpruebapuntoredsc.netlify.app/)  
- **Backend:** [https://punto-red-backend-production.up.railway.app/transaction/suppliers](https://punto-red-backend-production.up.railway.app/transaction/suppliers)  

---

Desarrollado por  
**[Santiago Cárdenas](https://santic.netlify.app/)**  
