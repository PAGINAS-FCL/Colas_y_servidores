// Tiempo en milisegundos antes de redirigir a la siguiente página
const redirectTime = 5000; // 5000 ms = 5 segundos
const redirectURL = "inicio.html"; // Cambia por la ruta de tu archivo HTML principal

setTimeout(() => {
  window.location.href = redirectURL;
}, redirectTime);
