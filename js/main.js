
/* cargador */
window.addEventListener('load', function() {
  var loaderBar = document.getElementById('loader-bar');
  var loaderText = document.getElementById('loader-text');
  var progress = 0;

  var interval = setInterval(function() {
    progress += 1;
    loaderBar.style.width = progress + '%';
    loaderText.innerText = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(function() {
        loaderBar.parentElement.style.display = 'none';
      }, 500); // Desaparece después de 0.5 segundos (ajustable)
    }
  }, 10);
});
/* fin del cargador */




/* cursor */

var cursor = document.getElementById('cursor');
var movida = document.querySelector('.movida');
console.log(movida);

document.addEventListener('mousemove' , function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})
/* fin  cursor */



/* header */


/* MENU */
const botonMenu = document.querySelector(".botonMenu");
const divMenu = document.querySelector(".divMenu");
const botonClose = document.querySelector(".botonCLOSE");
const proj = document.querySelector(".proj");
const proj1 = document.querySelector(".proj1");
const proj2 = document.querySelector(".proj2");


botonMenu.addEventListener("click", function(){
  divMenu.classList.add("active");
});

botonClose.addEventListener("click", function(){
  divMenu.classList.remove("active");
});
proj.addEventListener("click", function(){
  divMenu.classList.remove("active");
});
proj1.addEventListener("click", function(){
  divMenu.classList.remove("active");
});
proj2.addEventListener("click", function(){
  divMenu.classList.remove("active");
});

/* FIN MENU */

/* primera palabra */
const cuadrito = document.querySelector('.cuadritoCuatro');
const palabraContainer = document.querySelector('.palabra-container');

let prevScroll = window.scrollY;
let enableScrollAnimation = false;

function checkScrollPosition() {
  const scrollThreshold = window.innerHeight * 0.40;
  const cuadritoPosition = cuadrito.getBoundingClientRect().top;
  enableScrollAnimation = cuadritoPosition <= scrollThreshold;
}

function applyScrollAnimation() {
  if (enableScrollAnimation) {
    const currentScroll = window.scrollY;
    const deltaScroll = currentScroll - prevScroll;
    prevScroll = currentScroll;
    const direction = deltaScroll > 0 ? 1 : -1;
    const smoothFactor = 0.07;
    const currentTransform = parseFloat(palabraContainer.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    const targetTransform = currentTransform + direction * smoothFactor * Math.abs(deltaScroll);
    palabraContainer.style.transform = `translateX(${targetTransform}px)`;
  }
}

window.addEventListener('scroll', () => {
  checkScrollPosition();
  applyScrollAnimation();
});

checkScrollPosition();
/* fin primera palabra */


/* segunda palabra */

 const cuadritoDos = document.querySelector('.cuadritoCuatro');
const palabraContainerDos = document.querySelector('.palabra-containerDos');

let prevScrollDos = window.scrollY;
let enableScrollAnimationDos = false;

function checkScrollPositionDos() {
  const scrollThresholdDos = window.innerHeight * 0.40;
  const cuadritoPositionDos = cuadritoDos.getBoundingClientRect().top;
  enableScrollAnimationDos = cuadritoPositionDos <= scrollThresholdDos;
}

function applyScrollAnimationDos() {
  if (enableScrollAnimationDos) {
    const currentScrollDos = window.scrollY;
    const deltaScrollDos = currentScrollDos - prevScrollDos;
    prevScrollDos = currentScrollDos;
    const directionDos = deltaScrollDos > 0 ? -1 : 1;
    const smoothFactorDos = 0.1;
    const currentTransformDos = parseFloat(palabraContainerDos.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    const targetTransformDos = currentTransformDos + directionDos * smoothFactorDos * Math.abs(deltaScrollDos);
    palabraContainerDos.style.transform = `translateX(${targetTransformDos}px)`;
  }
}

window.addEventListener('scroll', () => {
  checkScrollPositionDos();
  applyScrollAnimationDos();
});

checkScrollPositionDos();





/* fin segunda palabra */
/* tercera palabra */


const cuadritoTres = document.querySelector('.cuadritoCuatro');
const palabraContainerTres = document.querySelector('.palabra-containerTres');

let prevScrollTres = window.scrollY;
let enableScrollAnimationTres = false;

function checkScrollPositionTres() {
  const scrollThresholdTres = window.innerHeight * 0.40;
  const cuadritoPositionTres = cuadritoTres.getBoundingClientRect().top;
  enableScrollAnimationTres = cuadritoPositionTres <= scrollThresholdTres;
}

function applyScrollAnimationTres() {
  if (enableScrollAnimationTres) {
    const currentScrollTres = window.scrollY;
    const deltaScrollTres = currentScrollTres - prevScrollTres;
    prevScrollTres = currentScrollTres;
    const directionTres = deltaScrollTres > 0 ? -1 : 1;
    const smoothFactorTres = 0.1;
    const currentTransformTres = parseFloat(palabraContainerTres.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    const targetTransformTres = currentTransformTres + directionTres * smoothFactorTres * Math.abs(deltaScrollTres);
    palabraContainerTres.style.transform = `translateX(${targetTransformTres}px)`;
  }
}

window.addEventListener('scroll', () => {
  checkScrollPositionTres();
  applyScrollAnimationTres();
});

checkScrollPositionTres();


/* fin tercera palabra */


/* cuarta palabra */

const cuadritoCuatro = document.querySelector('.cuadritoCuatro');
const palabraContainerCuatro = document.querySelector('.palabra-containerCuatro');

let prevScrollCuatro = window.scrollY;
let enableScrollAnimationCuatro = false;

function checkScrollPositionCuatro() {
  const scrollThresholdCuatro = window.innerHeight * 0.40;
  const cuadritoPositionCuatro = cuadritoCuatro.getBoundingClientRect().top;
  enableScrollAnimationCuatro = cuadritoPositionCuatro <= scrollThresholdCuatro;
}

function applyScrollAnimationCuatro() {
  if (enableScrollAnimationCuatro) {
    const currentScrollCuatro = window.scrollY;
    const deltaScrollCuatro = currentScrollCuatro - prevScrollCuatro;
    prevScrollCuatro = currentScrollCuatro;
    const directionCuatro = deltaScrollCuatro > 0 ? 1 : -1;
    const smoothFactorCuatro = 0.03;
    const currentTransformCuatro = parseFloat(palabraContainerCuatro.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    const targetTransformCuatro = currentTransformCuatro + directionCuatro * smoothFactorCuatro * Math.abs(deltaScrollCuatro);
    palabraContainerCuatro.style.transform = `translateX(${targetTransformCuatro}px)`;
  }
}

window.addEventListener('scroll', () => {
  checkScrollPositionCuatro();
  applyScrollAnimationCuatro();
});

checkScrollPositionCuatro();



/* fin cuarta palabra */

/* fin del header */










/* primero roptulos */

const containerLeftAbout = document.querySelector('.scroll-containerAbout.left');
const containerRightAbout = document.querySelector('.scroll-containerAbout.right');
let prevScrollRotulosAbout = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollAbout= window.scrollY;
  const deltaScrollAbout = prevScrollRotulosAbout- currentScrollAbout;

  containerLeftAbout.scrollLeft += deltaScrollAbout;
  containerRightAbout.scrollLeft -= deltaScrollAbout; // Invertir el desplazamiento para el contenedor derecho

  prevScrollRotulosAbout = currentScrollAbout;
});

/* fin primero rotulos */

/* segundo roptulos */
const containerLeft = document.querySelector('.scroll-container.left');
const containerRight = document.querySelector('.scroll-container.right');
let prevScrollRotulos = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  const deltaScroll = prevScrollRotulos- currentScroll;

  containerLeft.scrollLeft += deltaScroll;
  containerRight.scrollLeft -= deltaScroll; // Invertir el desplazamiento para el contenedor derecho

  prevScrollRotulos = currentScroll;
});


/* fin segundo rotulos */
/* tercer rotulo */

const containerLeftContact = document.querySelector('.scroll-containerContact.left');
const containerRightContact = document.querySelector('.scroll-containerContact.right');
let prevScrollRotulosContact = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollContact= window.scrollY;
  const deltaScrollContact = prevScrollRotulosContact- currentScrollContact;

  containerLeftContact.scrollLeft += deltaScrollContact;
  containerRightContact.scrollLeft -= deltaScrollContact; // Invertir el desplazamiento para el contenedor derecho

  prevScrollRotulosContact = currentScrollContact;
});

/* fin tercer rotulo */









/* segundas palabras sueltas */











/* caja interior movimiento */
/* palabra una 1-3-6 normales */
const word = document.querySelector('.word');
let prevScrollSueltoDos = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  const deltaScroll = currentScroll - prevScrollSueltoDos;
  prevScrollSueltoDos = currentScroll;

  const direction = deltaScroll > 0 ? 1 : -1; // Dirección: 1 (hacia abajo) o -1 (hacia arriba)
  const smoothFactor = 0.07; // Factor para suavizar el movimiento

  const currentTransform = parseFloat(word.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  const targetTransform = currentTransform + direction * smoothFactor * Math.abs(deltaScroll);

  word.style.transform = `translateX(${targetTransform}px)`;
});
/* 3 */
const wordTres = document.querySelector('.wordTres');
let prevScrollTresSuelto = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollTres = window.scrollY;
  const deltaScrollTres = currentScrollTres - prevScrollTresSuelto;
  prevScrollTresSuelto = currentScrollTres;

  const directionTres = deltaScrollTres > 0 ? -1 : 1; // Dirección: 1 (hacia abajo) o -1 (hacia arriba)
  const smoothFactorTres = 0.03; // Factor para suavizar el movimiento

  const currentTransformTres = parseFloat(wordTres.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  const targetTransformTres = currentTransformTres + directionTres * smoothFactorTres * Math.abs(deltaScrollTres);

  wordTres.style.transform = `translateX(${targetTransformTres}px)`;
});

/* 6 */
const wordSeis = document.querySelector('.wordSeis');
let prevScrollSeis = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollSeis = window.scrollY;
  const deltaScrollSeis = currentScrollSeis - prevScrollSeis;
  prevScrollSeis = currentScrollSeis;

  const directionSeis = deltaScrollSeis > 0 ? -1 : 1; // Dirección: 1 (hacia abajo) o -1 (hacia arriba)
  const smoothFactorSeis = 0.08; // Factor para suavizar el movimiento

  const currentTransformSeis = parseFloat(wordSeis.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  const targetTransformSeis = currentTransformSeis + directionSeis * smoothFactorSeis * Math.abs(deltaScrollSeis);

  wordSeis.style.transform = `translateX(${targetTransformSeis}px)`;
});

/* palabra 4 */

/* 6 */
const wordCuatro = document.querySelector('.wordCuatro');
let prevScrollCuatroP = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollCuatro = window.scrollY;
  const deltaScrollCuatro = currentScrollCuatro - prevScrollCuatroP;
  prevScrollCuatroP = currentScrollCuatro;

  const directionCuatro = deltaScrollCuatro > 0 ? -1 : 1; // Dirección: 1 (hacia abajo) o -1 (hacia arriba)
  const smoothFactorCuatro = 0.08; // Factor para suavizar el movimiento

  const currentTransformCuatro = parseFloat(wordCuatro.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  const targetTransformCuatro = currentTransformCuatro + directionCuatro * smoothFactorCuatro * Math.abs(deltaScrollCuatro);

  wordCuatro.style.transform = `translateX(${targetTransformCuatro}px)`;
});



/* palabra Dos que en vdd es el 4 rapido */

const wordDos = document.querySelector('.wordDos');
let prevScrollDosSuelto = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollDos = window.scrollY;
  const deltaScrollDos = currentScrollDos - prevScrollDosSuelto;
  prevScrollDosSuelto = currentScrollDos;

  const directionDos = deltaScrollDos > 0 ? -1 : 1; // Dirección: 1 (hacia abajo) o -1 (hacia arriba)
  const smoothFactorDos = 0.05; // Factor para suavizar el movimiento

  const currentTransformDos = parseFloat(wordDos.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  const targetTransformDos = currentTransformDos + directionDos * smoothFactorDos * Math.abs(deltaScrollDos);

  wordDos.style.transform = `translateX(${targetTransformDos}px)`;
});


/* palabras rapida 5-7 */

/* 5 */

const wordCinco = document.querySelector('.wordCinco');
let prevScrollCinco = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollCinco = window.scrollY;
  const deltaScrollCinco = currentScrollCinco - prevScrollCinco;
  prevScrollCinco = currentScrollCinco;

  const directionCinco = deltaScrollCinco > 0 ? 1 : -1; // Dirección: 1 (hacia abajo) o -1 (hacia arriba)
  const smoothFactorCinco = 0.03; // Factor para suavizar el movimiento

  const currentTransformCinco = parseFloat(wordCinco.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  const targetTransformCinco = currentTransformCinco + directionCinco * smoothFactorCinco * Math.abs(deltaScrollCinco);

  wordCinco.style.transform = `translateX(${targetTransformCinco}px)`;
});


/* 7 */


const wordSiete = document.querySelector('.wordSiete');
let prevScrollSiete = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollSiete = window.scrollY;
  const deltaScrollSiete = currentScrollSiete - prevScrollSiete;
  prevScrollSiete = currentScrollSiete;

  const directionSiete = deltaScrollSiete > 0 ? -1 : 1; // Dirección: 1 (hacia abajo) o -1 (hacia arriba)
  const smoothFactorSiete = 0.08; // Factor para suavizar el movimiento

  const currentTransformSiete = parseFloat(wordSiete.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  const targetTransformSiete = currentTransformSiete + directionSiete * smoothFactorSiete * Math.abs(deltaScrollSiete);

  wordSiete.style.transform = `translateX(${targetTransformSiete}px)`;
});
/* fin segunas palabras sueltas */





/* prueba animacion  */

const h1 = document.querySelector('.fade-in-and-rotate');

window.addEventListener('scroll', () => {
  const distanceFromTop = h1.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (distanceFromTop - windowHeight <= 0) {
    h1.style.opacity = 1;
    h1.style.transform = 'rotateX(0deg)';
  }
});


window.addEventListener('scroll', () => {
    const cuadrado = document.getElementById('cuadrado');
    const cuadradoPosition = cuadrado.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (cuadradoPosition - windowHeight <= 0) {
      cuadrado.classList.add('activar-animacion');
    }
  });
  /* animacion texto */

  /* 1 */
  document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll(".animated-text");
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      textElements.forEach(textElement => {
        const textPosition = textElement.getBoundingClientRect().top;
  
        if (textPosition < window.innerHeight * 0.7) {
          textElement.style.opacity = 1;
          textElement.style.transform = "translateY(0) scale(1)";
        }
      });
    });
  });
  
  /* animacion imagen */
  document.addEventListener("DOMContentLoaded", function() {
    const imageElements = document.querySelectorAll(".zoom-out-image");
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      imageElements.forEach(imageElement => {
        const imagePosition = imageElement.getBoundingClientRect().top;
  
        if (imagePosition < window.innerHeight * 0.7) {
          imageElement.style.transform = "scale(0.8)";
        }
      });
    });
  });
  

/* 2 */

/* fin animaciones */




/* cuadros carrousel imagenes  */

/* uno */

 document.addEventListener('DOMContentLoaded', function () {
  const imagenes = document.querySelectorAll('.contenedor-imagenes img');
  let index = 0;

  function mostrarImagenSiguiente() {
    imagenes.forEach((imagen) => {
      imagen.style.display = 'none';
    });

    index = (index + 1) % imagenes.length;
    imagenes[index].style.display = 'block';
  }

  setInterval(mostrarImagenSiguiente, 500); // Cambia la imagen cada medio segundo (500ms)
});



/* dos */


document.addEventListener('DOMContentLoaded', function () {
  const imagenesDos = document.querySelectorAll('.contenedor-imagenesDos img');
  let index = 0;

  function mostrarImagenSiguiente() {
    imagenesDos.forEach((imagen) => {
      imagen.style.display = 'none';
    });

    index = (index + 1) % imagenesDos.length;
    imagenesDos[index].style.display = 'block';
  }

  setInterval(mostrarImagenSiguiente, 1000); // Cambia la imagen cada medio segundo (500ms)
});


/* tres */

document.addEventListener('DOMContentLoaded', function () {
  const imagenesTres = document.querySelectorAll('.contenedor-imagenesTres img');
  let index = 0;

  function mostrarImagenSiguiente() {
    imagenesTres.forEach((imagen) => {
      imagen.style.display = 'none';
    });

    index = (index + 1) % imagenesTres.length;
    imagenesTres[index].style.display = 'block';
  }

  setInterval(mostrarImagenSiguiente, 750); // Cambia la imagen cada medio segundo (500ms)
}); 


/* cuatro */
 document.addEventListener('DOMContentLoaded', function () {
  const imagenesCuatro = document.querySelectorAll('.contenedor-imagenesCuatro img');
  let index = 0;

  function mostrarImagenSiguiente() {
    imagenesCuatro.forEach((imagen) => {
      imagen.style.display = 'none';
    });

    index = (index + 1) % imagenesCuatro.length;
    imagenesCuatro[index].style.display = 'block';
  }

  setInterval(mostrarImagenSiguiente, 1250); // Cambia la imagen cada medio segundo (500ms)
});
/* fin carrrousel */








/* imagenes pc */
const images = document.querySelectorAll('.image');

    const handleScroll = () => {
      images.forEach(image => {
        const rect = image.getBoundingClientRect();
        const centerY = window.innerHeight / 2;
        const distanceToCenter = Math.abs(rect.top + rect.height / 2 - centerY);

        if (distanceToCenter < centerY) {
          const scale = 1 + (1 - distanceToCenter / centerY) * 0.5; // Ajusta el valor para controlar el zoom
          const borderRadius = (1 - distanceToCenter / centerY) * 50; // Ajusta el valor para controlar el border-radius

          image.style.transform = `scale(${scale})`;
          image.style.borderRadius = `${borderRadius}%`;
        } else {
          image.style.transform = 'scale(1)';
          image.style.borderRadius = '50%';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Llamada inicial
/* fin imagenes pc  */




/* receteo */
   // Función para restablecer los valores iniciales y hacer scroll al principio
   function restoreAndScroll() {
    // Restaurar los valores iniciales aquí (puedes resetear formularios, variables, etc.)

    // Hacer scroll al principio de la página
    window.scrollTo(0, 0);
}

// Ejecutar la función al cargar la página
window.onload = restoreAndScroll;



