document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".main__hamburger");
  const menu = document.querySelector(".main__links");
  const body = document.body;
  let menuOpen = false; // Estado inicial del menú
  let vh = window.innerWidth; // ancho del viewport

  // Función para abrir el menú
  function openMenu() {
    menu.style.left = "0";
    body.style.overflow = "hidden"; // Evita que el cuerpo se desplace cuando el menú está abierto
    menuOpen = true; // Actualiza el estado del menú a abierto
  }

  // Función para cerrar el menú
  function closeMenu() {
    menu.style.left = "-100%"; // Oculta el menú moviéndolo a la izquierda
    body.style.overflow = "auto"; // Restaura el desplazamiento del cuerpo
    menuOpen = false; // Actualiza el estado del menú a cerrado
  }

  // Evento para alternar el menú cuando se hace clic en el icono de hamburguesa
  hamburgerIcon.addEventListener("click", function () {

    if (menuOpen) {
      closeMenu(); // Si el menú está abierto, ciérralo
    } else {
      openMenu(); // Si el menú está cerrado, ábrelo
    }
  });

  // Evento para cerrar el menú cuando se hace clic en un enlace del menú
  const menuLinks = document.querySelectorAll(".main__link");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
    if (vh > 768) {
      link.removeEventListener("click", closeMenu)
    }
  });

  window.addEventListener("resize", function () {
    if (vh > 768) {
      openMenu();
    }
  });
});