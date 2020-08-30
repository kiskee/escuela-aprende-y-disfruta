// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var fechahoy;
var eventos;
var mostrarEventosNuevos = [];
var mostrarEventosViejos = [];
var eventosNuevos = [];
var eventosViejos = [];


$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
$.ajax({
  url:"info.json"
}).done(function(resultado){
//Guarda el resultado en variables
fechahoy = new Date(resultado.fechahoy);
eventos = resultado.eventos;
//Clasifica los eventos segun la fecha actual del JSON
for(i=0;i<eventos.length;i++){
  if(new Date(eventos[i].fecha) > fechahoy){
    eventosNuevos.push(eventos[i]);
  }else{
    eventosViejos.push(eventos[i]);
  }
}
  //Ordena los eventos segun la fecha (los mas cercanos primero)
  eventosNuevos = eventosNuevos.sort(function(x,y){
    if (new Date(x.fecha) > new Date(y.fecha)){
      return 1;
    }
    return -1;
  });
//Extrae solo dos eventos
for(i=0;i<2;i++){
  mostrarEventosNuevos.push(eventosNuevos[i]);
}
 //Crea un string que contenga el HTML que describe el detalle del evento
 var nuevosHtml = ""
//Recorre el arreglo y concatena el HTML para cada evento
for (var j=0;j<mostrarEventosNuevos.length;j++){
  nuevosHtml += `
    <div class="col-5 bg-light text-left mx-2 px-5 rounded">
    <h2><a href="./detalle.html?id=${mostrarNuevosEventos[j].id}">${mostrarNuevosEventos[j].nombre}</a></h2>
    <p class="text-muted">${mostrarNuevosEventos[j].fecha}</p>
    <p>${mostrarNuevosEventos[j].descripcion}</p>
    </div>`
}
 //Modifica el DOM agregando el html generado
document.getElementById("nuevosEventos").innerHTML = nuevosHtml;

})
  

  



  

  



 

  

 

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

});
