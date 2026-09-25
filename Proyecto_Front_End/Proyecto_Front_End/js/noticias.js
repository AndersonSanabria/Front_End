// Función para direccionar de manera suave a la sección que le llega como parametro
function moverSeccion(event, idSeccion) {
  event.preventDefault(); 
  document.getElementById(idSeccion).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// alerta al cliente cuando da clic en ver-mas, de la sección de noticias, actualmente está asi, se espera en la siguiente entrega poder darle clic y mostrar el restante de la noticia
document.querySelectorAll('.ver-mas').forEach(boton => {
  boton.addEventListener('click', () => {
    alert('Mostrando detalle de la noticia...');
  });
});
//alerta al cliente cuando selecciona favorito, actualmente está asi, si espera en la siguiente entrega al dar cic allí pase directamente a la sección de favoritos
document.querySelectorAll('.boton-fav').forEach(boton => {
  boton.addEventListener('click', () => {
    alert('Noticia agregada a favoritos!');
  });
});

// estos son los eventos que llevan a la sección de noticias
document.getElementById('explorar').addEventListener('click', function(event) {
  moverSeccion(event, 'Noticias');
});
document.getElementById('ir-noticia').addEventListener('click', function(event) {
  moverSeccion(event, 'Noticias');
});

// estos son los eventos que llevan a la sección de contacto
document.getElementById('contactar').addEventListener('click', function(event) {
  moverSeccion(event, 'Contactenos');
});
document.getElementById('ir-contacto').addEventListener('click', function(event) {
  moverSeccion(event, 'Contactenos');
});
//este evento lleva a la sección de crear noticia
document.getElementById('crearnoticia').addEventListener('click', function(event) {
  moverSeccion(event,'crear-noticia');
});
