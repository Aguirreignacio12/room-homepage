document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".main__hamburger");
  const menu = document.querySelector(".main__links");
  const body = document.body;
  let imgClose = "images/icon-close.svg";
  let imgOpen = "images/icon-hamburger.svg";
  let menuOpen = false; // Estado inicial del menú
  // Función para abrir el menú
  function openMenu() {
    menu.style.left = "0";
    body.style.overflow = "hidden"; // Evita que el cuerpo se desplace cuando el menú está abierto
    hamburgerIcon.src = imgClose;
    menuOpen = true; // Actualiza el estado del menú a abierto
  }

  // Función para cerrar el menú
  function closeMenu() {
    menu.style.left = "-100%"; // Oculta el menú moviéndolo a la izquierda
    body.style.overflow = "auto"; // Restaura el desplazamiento del cuerpo
    menuOpen = false; // Actualiza el estado del menú a cerrado
    hamburgerIcon.src = imgOpen;
  }

  // Evento para alternar el menú cuando se hace clic en el icono de hamburguesa
  hamburgerIcon.addEventListener("click", function () {
    if (menuOpen) {
      closeMenu(); // Si el menú está abierto, ciérralo
    } else {
      openMenu(); // Si el menú está cerrado, ábrelo
    }
  });

  // Evento para cerrar el menú cuando se hace clic en un enlace del menú en versión móvil
  const menuLinks = document.querySelectorAll(".main__link");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        closeMenu(); // Cierra el menú solo en vista móvil
      }
    });
  });

  // Función para verificar el ancho de la ventana y controlar el menú
  function checkWindowSize() {
    if (window.innerWidth > 768) {
      openMenu(); // Abre el menú si el ancho de la ventana es mayor a 768px
    } else if (menuOpen) {
      closeMenu(); // Cierra el menú si estaba abierto en vista de escritorio
    }
  }

  // Llama a la función checkWindowSize para configurar el estado inicial
  checkWindowSize();

  // Vuelve a verificar el tamaño de la ventana cuando se redimensiona
  window.addEventListener("resize", checkWindowSize);
});