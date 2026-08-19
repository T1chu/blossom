// ============================================================
// CONFIGURACIÓN DE FIREBASE - BLOSSOM CASA DE TÉ & RESTO
// ============================================================
// Pegá acá la configuración de tu proyecto de Firebase.
// La encontrás en: Firebase Console → Configuración del proyecto
// → Tus apps → SDK de Firebase → Configuración
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyAZCtmm6Fh-6JIZlzPqV897GZvOyGDv4EY",
  authDomain: "blossom-proyect.firebaseapp.com",
  projectId: "blossom-proyect",
  storageBucket: "blossom-proyect.firebasestorage.app",
  messagingSenderId: "403530445317",
  appId: "1:403530445317:web:cf4abb40ed6647851d226c"
};

// Usuario admin: "Blossomadmin" se convierte internamente en este email
const ADMIN_EMAIL_DOMAIN = "blossom-resto.local";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

function usernameToEmail(username) {
  return username.trim().toLowerCase() + "@" + ADMIN_EMAIL_DOMAIN;
}
