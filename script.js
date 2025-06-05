
const elementos = document.querySelectorAll('.elemento-animado');

// Configurar el Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Añadir la clase que activa la animación
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Dejar de observar para que no se vuelva a activar
    }
  });
}, { threshold: 1 }); // Se activa cuando el 50% del elemento está visible

// Observar cada elemento animado
elementos.forEach(elemento => {
  observer.observe(elemento);
});

/*
function getRandomNumbers() {
    return Math.floor(1000 + Math.random() * 9000); // Genera 4 números aleatorios
}

function updateScrollingText() {
    const textElement = document.getElementById('scrollingText');
    textElement.textContent = `¡El usuario_${getRandomNumbers()}, ha ganado el gran premio!`;
}

// Actualizar el texto cada 5 segundos
setInterval(updateScrollingText, 10000);

// Inicializar el texto la primera vez
updateScrollingText();*/


function change(item){
    const buttons = document.querySelectorAll('ion-icon');
    buttons.forEach(function(obj){
        obj.classList.remove("active1");
    });
    item.classList.add("active1");
}

function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
  
    modal.style.display = "flex";
    modalImg.src = src;
  }
  
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }

/*LOADING SCREEN

document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');

    // Asegúrate de que el loading screen se muestre durante al menos 1 segundo
    const minLoadingTime = 500;
    const startTime = Date.now();

    window.addEventListener('load', function() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = minLoadingTime - elapsedTime;

        if (remainingTime > 0) {
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, remainingTime);
        } else {
            loadingScreen.style.display = 'none';
        }
    });
});*/

// Redirigir después de X segundos
//setTimeout(function() {
//window.location.href = "https://wa.link/1gd5o9";
//}, 1); 



