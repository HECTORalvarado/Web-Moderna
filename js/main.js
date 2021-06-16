let boton = document.getElementById('icono');
let enlaces = document.getElementById('enlaces');
let MostrarMenu = false;


boton.addEventListener('click', e=>{
  e.preventDefault();
  if (MostrarMenu == false) {
    enlaces.className = ('enlaces dos');
    MostrarMenu = true;
  } else {
    enlaces.classList.remove('dos');
    enlaces.className = ('enlaces uno');
    MostrarMenu = false;
  }
})