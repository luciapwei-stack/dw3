document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

//cuando se envie el form, el input con name "subject" tome el value del input con name "nombre"

const formulario = document.querySelector("form[name=newsletter]");



formulario.addEventListener("submit", cambioAsunto);

function cambioAsunto() {
  const asunto = document.querySelector("input[name=subject]");
  const nombre = document.querySelector("input[name=nombre]");

  asunto.value=`%{submissionId} - Consulta de ${nombre.value} en el formulario`
}

//comentario nuevo