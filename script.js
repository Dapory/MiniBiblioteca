// Inicializar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBay2CmVQzFhEb8oI4q6qMwQJ2o0_C3T4s",
  authDomain: "bibliodani-9c8bb.firebaseapp.com",
  databaseURL: "https://bibliodani-9c8bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bibliodani-9c8bb",
  storageBucket: "bibliodani-9c8bb.appspot.com",
  messagingSenderId: "907419989859",
  appId: "1:907419989859:web:9ac12ce98e53529a64c556"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Obtener datos del usuario
const nombre = localStorage.getItem("nombre");
const foto = localStorage.getItem("foto");
const miID = Date.now().toString(); // ID temporal para distinguir usuarios
const personaRef = db.ref("personas/" + miID);

// Inicializar en la base de datos
personaRef.set({
  nombre,
  foto,
  tiempo: 0,
  estudiando: false
});

// Eliminar al salir
window.addEventListener("beforeunload", () => {
  personaRef.remove();
});

// Actualizar estado de estudio
function setEstado(estudiando) {
  personaRef.update({ estudiando });
}

// Escuchar cambios en la base de datos
db.ref("personas").on("value", (snapshot) => {
  document.body.innerHTML = ""; // Limpiar la página antes de actualizar
  snapshot.forEach((child) => {
    const data = child.val();
    const div = document.createElement("div");
    div.className = "persona";

    const img = document.createElement("img");
    img.src = data.foto;

    const nombreElem = document.createElement("div");
    nombreElem.textContent = data.nombre;

    const tiempoElem = document.createElement("div");
    tiempoElem.textContent = formatTime(data.tiempo || 0);
    tiempoElem.style.marginTop = "5px";

    if (child.key === miID) {
      const btnEstudio = document.createElement("button");
      btnEstudio.textContent = "Estudio";
      btnEstudio.className = "boton estudio";
      btnEstudio.onclick = () => setEstado(true);

      const btnDescanso = document.createElement("button");
      btnDescanso.textContent = "Descanso";
      btnDescanso.className = "boton descanso";
      btnDescanso.onclick = () => setEstado(false);

      div.appendChild(btnEstudio);
      div.appendChild(btnDescanso);
    }

    div.appendChild(img);
    div.appendChild(nombreElem);
    div.appendChild(tiempoElem);
    document.body.appendChild(div);
  });
});

// Cronómetro de estudio
setInterval(() => {
  personaRef.once("value").then((snap) => {
    const data = snap.val();
    if (data && data.estudiando) {
      personaRef.update({ tiempo: (data.tiempo || 0) + 1 });
    }
  });
}, 1000);

// Formatear tiempo
function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}
