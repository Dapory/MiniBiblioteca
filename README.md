Biblioteca en Vivo
¿Qué es este proyecto?
Biblioteca en Vivo es una aplicación web sencilla que permite a los usuarios unirse a una "biblioteca virtual". Los usuarios pueden registrarse ingresando su nombre y eligiendo una foto, y luego podrán ver a otras personas conectadas en tiempo real, así como su tiempo de estudio. Los participantes también pueden marcar si están "Estudiando" o "Descansando", lo que se actualiza en tiempo real para todos los usuarios conectados.

Tecnologías que utilizo
HTML5: Para la estructura básica de la página.

CSS3: Para darle estilo y asegurarme de que todo se vea bien en cualquier dispositivo.

JavaScript: La lógica para manejar las interacciones y actualizar el estado de la biblioteca.

Firebase: Utilizo Firebase como base de datos en tiempo real para almacenar la información de los usuarios y su estado.

Funciones principales
Registro de usuario: Los usuarios pueden ingresar su nombre y seleccionar una foto.

Visualización en tiempo real: Una vez registrados, los usuarios pueden ver a otros usuarios con su nombre, foto y tiempo de estudio.

Estado de estudio: Cada usuario puede marcar su estado como "Estudiando" o "Descansando", y este estado se sincroniza en tiempo real con la base de datos.

Estructura del proyecto
bash
Copiar
Editar
/biblioteca-en-vivo
    /imagenes        # Contiene las imágenes (como la foto de fondo)
    /index.html      # Página inicial con el formulario para unirse
    /app.html        # Página principal de la biblioteca, donde se ven los usuarios
    /style.css       # Estilos y diseño de la página
    /script.js       # Lógica para manejar las interacciones y Firebase
¿Cómo usarlo?
Configurar Firebase: Crea un proyecto en Firebase y activa la base de datos en tiempo real.

Incluir Firebase: Agrega los siguientes scripts de Firebase en tu archivo HTML:

html
Copiar
Editar
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js"></script>
Configura tu base de datos: Asegúrate de tener las reglas de seguridad adecuadas en Firebase para permitir el acceso y la escritura en la base de datos.

Registrar usuarios: Los usuarios ingresan su nombre y foto, y los datos se guardan en localStorage antes de ser subidos a Firebase.

Acceder a la biblioteca: Abre index.html en tu navegador y regístrate para empezar a interactuar con la biblioteca.

¿Cómo puedo ayudar?
Si deseas contribuir a este proyecto, puedes seguir estos pasos:

Haz un fork de este repositorio.

Realiza tus mejoras y cambios en el código.

Envía un Pull Request con lo que hayas trabajado.

Licencia
Este proyecto está disponible bajo la Licencia MIT, lo que significa que puedes usarlo, modificarlo y distribuirlo libremente.
