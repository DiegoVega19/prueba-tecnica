# 🚀 Prueba Técnica: Desarrollo de Aplicación con React y TanStack Query
 🌟
 
 ![demo](https://github.com/user-attachments/assets/4e4f1454-691f-4094-999f-6f5f0b87d311)


Este proyecto fue creado con [Vite](https://vitejs.dev), una herramienta de desarrollo moderna y súper rápida para aplicaciones de react. ⚡

## 🛠️ Características principales

 Para el proyecto se utilizo una arquitectura limpia con el fin de tener mayor escalibilidad a futuro, haciendo que la gestion del estado y de los componentes  sea mas eficiente

## Beneficios de la Clean Architecture



1. Alta mantenibilidad 🛠️  
3. Facilidad para realizar pruebas (testabilidad) ✅  
4. Portabilidad 🌐  
5. Alta cohesión y bajo acoplamiento 🤝  
6. Claridad en la arquitectura 🧠  
7. Enfoque en el negocio 💼  
8. Flexibilidad y escalabilidad 📈  
9. Facilita el trabajo en equipo 🤲  
10. Resiliencia a cambios tecnológicos 🔄  


## Estructura de Carpetas Sugerida
- **common/**: Contiene todas las funcionalidades comunes que se usaran en la aplicacion.
- **utilities/**: Utilidades y funciones auxiliares como constantes y enums.
- **core/**: Contiene todas las funcionalidades core de la aplicacion y se subdivide en:.
    - **adapters/**: Contiene adaptadores para manejar datos entre capas.
    - **components/**: Componentes reutilizables de la UI.
    - **models/**: Definiciones de modelos de datos.
    - **hooks/**: Custom hooks para lógica compartida.
    - **services/**: Lógica de negocio y comunicación con APIs.
    - La carpeta **assets/** contiene todos los archivos estáticos que se utilizan en la aplicación. Estos archivos no se modifican durante el ciclo de vida de la ejecución de la app y son necesarios para la interfaz de usuario, el estilo, o recursos multimedia. 
    - **pages/**: Contiene vistas principales y subcomponentes relacionados, ademas puede contener carpetas de componentes, features, hooks, models, services y utilities, funciona como un contenedor (Container Pattern), encapsulando toda la lógica y los componentes específicos de la página de inicio. Esto permite una mejor organización y un enfoque modular.



## Observaciones

No fue necesario usar redux-toolkit para manejar el contexto de los datos obtenidos por la api debido a que con react-query se simplifica el proceso para manejar la obtencion de los datos, sin embargo, se implemento en el proyecto  para futuras implementaciones, haciendo uso de features  / casos de uso, cada casa de uso se divide en un slice como por ejemplo el que se uso para manejar el valor del country seleccionado.

Algunas carpetas quedaron vacias debido al alcance del proyecto, igual se dejaron para mostrar como seria implementar la arquitectura en un escenario real.

Se integro un test de ejemplo haciendo uso de playwright

## Requrimientos 🛠️

El proyecto fue creado haciendo uso de nodejs 20.15.1

## 🚀 Cómo usarlo

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/DiegoVega19/prueba-tecnica
   cd prueba-tecnica



2. **Copia Variables**:
   ```bash
   abre el archivo .env.example y crea un archivo .env en la raiz del proyecto pega la variable VITE_API_BASE_URL la cual contiene la url de la api

3. **Ejecuta el proyecto**:
   ```bash
    npm i
    npm run dev

3. **Opcional (Ejecuta Tests E2E)**:
   ```bash
    npm run dev
    npx playwright test

##  **Demo en vivo 🚀🚀🚀**:

   ```
   Si deseas acceder a un demo en vivo de la prueba puedes visitar:
   
   https://prueba-tecnica-gr7xpdxuh-diegovega19s-projects.vercel.app/
   ```

   [Demo en vivo 🚀](https://prueba-tecnica-gr7xpdxuh-diegovega19s-projects.vercel.app/)
