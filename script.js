// Capturar el formulario
const form = document.getElementById("citaForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // evita que la página se recargue

  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  alert(`✅ ¡Gracias ${nombre}! Tu cita ha sido reservada para el ${fecha} a las ${hora}.`);
  
  form.reset(); // limpia el formulario
});
