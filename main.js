// Rutas de las imágenes en la carpeta
const imagePaths = {
  small: [
    "images/mobile-image-hero-1.jpg",
    "images/mobile-image-hero-2.jpg",
    "images/mobile-image-hero-3.jpg",
  ],
  large: [
    "images/desktop-image-hero-1.jpg",
    "images/desktop-image-hero-2.jpg",
    "images/desktop-image-hero-3.jpg",
  ],
};

let backgroundContainer = document.querySelector(".main__hero");
let currentIndex = 0; // Índice de la imagen actual
let imageSize;

function changeBackground() {
  let viewportWidth = window.innerWidth;

  // Determinar el tamaño de la imagen según la resolución
  if (viewportWidth <= 768) {
    imageSize = "small";
  } else {
    imageSize = "large";
  }

  // Obtener la siguiente imagen en el tamaño correspondiente
  let nextImageUrl = imagePaths[imageSize][currentIndex];


  // Aplica la nueva imagen de fondo con la transición
  backgroundContainer.style.transition = "background-image 0.5s ease"; // Establece la transición
  backgroundContainer.style.backgroundImage = `url(${nextImageUrl})`;

  // Elimina la transición después de un breve retraso para que no afecte al cambio siguiente
  setTimeout(() => {
    backgroundContainer.style.transition = "";
  }, 500); // 500ms = 0.5 segundos
}


function nextBackground() {
  currentIndex = (currentIndex + 1) % imagePaths[imageSize].length;
  changeBackground(currentIndex);
}

function prevBackground() {
  currentIndex = ((currentIndex - 1) + imagePaths[imageSize].length) % imagePaths[imageSize].length;
  changeBackground(currentIndex);
}

document.querySelector(".main__arrows-left").addEventListener("click", nextBackground);
document.querySelector(".main__arrows-right").addEventListener("click", prevBackground);


// Llamar a la función para establecer el fondo inicial
changeBackground(currentIndex);

// Establecer un intervalo para cambiar las imágenes cada cierto tiempo (por ejemplo, 5 segundos)
const intervalId = setInterval(changeBackground, 5000);