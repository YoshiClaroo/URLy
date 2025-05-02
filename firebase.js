// Configuración de Firebase (¡REEMPLAZA CON TUS DATOS!)
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Opcional: Habilitar persistencia offline (útil para PWAs)
firebase.firestore().enablePersistence()
  .catch((err) => {
      console.log("Error al activar persistencia: ", err);
  });