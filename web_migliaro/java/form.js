
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
   nav.classList.add("visible");
  })
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})




form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name === '' || email === '' || message === '') {
    alert('Por favor completa todos los campos.');
  } else {
    // Aquí puedes enviar el formulario o realizar otras acciones
    alert('Formulario enviado exitosamente.');
    form.reset();
  }
});
