# Biblioteca en Vivo

## ¿Qué es este proyecto?

**Biblioteca en Vivo** es una aplicación web sencilla que permite a los usuarios unirse a una "biblioteca virtual". Los usuarios pueden registrarse ingresando su nombre y eligiendo una foto, y luego podrán ver a otras personas conectadas en tiempo real, así como su tiempo de estudio. Los participantes también pueden marcar si están "Estudiando" o "Descansando", lo que se actualiza en tiempo real para todos los usuarios conectados.

## Tecnologías que utilizo

- **HTML5**: Para la estructura básica de la página.
- **CSS3**: Para darle estilo y asegurarme de que todo se vea bien en cualquier dispositivo.
- **JavaScript**: La lógica para manejar las interacciones y actualizar el estado de la biblioteca.
- **Firebase**: Utilizo Firebase como base de datos en tiempo real para almacenar la información de los usuarios y su estado.

## Funciones principales

1. **Registro de usuario**: Los usuarios pueden ingresar su nombre y seleccionar una foto.
2. **Visualización en tiempo real**: Una vez registrados, los usuarios pueden ver a otros usuarios con su nombre, foto y tiempo de estudio.
3. **Estado de estudio**: Cada usuario puede marcar su estado como "Estudiando" o "Descansando", y este estado se sincroniza en tiempo real con la base de datos.

## Estructura del proyecto


## ¿Cómo usarlo?

1. **Configurar Firebase**: Crea un proyecto en Firebase y activa la base de datos en tiempo real.
2. **Incluir Firebase**: Agrega los siguientes scripts de Firebase en tu archivo HTML:
   ```html
   <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js"></script>

