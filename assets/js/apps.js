//window.addEventListener("load",comenzar,false);
window.addEventListener("load",function () {
  var arrayPerros = [
                    {name:"BIMBA",edad:"1 año", espacio:"Pequeño",tamaño:"Mediano",url:"dog1.jpg"},
                    {name:"BOLT",edad:"2 años",espacio:"No es Necesario",tamaño:"Mediano", url:"dog2.jpg"},
                    {name:"CAYETANA",edad:"8 meses",espacio:"Mediano",tamaño:"Mediano",url:"dog3.jpg"},
                    {name:"CUSCO",edad:"10 meses",espacio:"Grande",tamaño:"Grande",url:"dog4.jpg"},
                    {name:"DANYA",edad:"1 año",espacio:"No es Necesario",tamaño:"Pequeño",url:"dog5.jpg"}];


  var documentFragment = document.createDocumentFragment();

  arrayPerros.forEach(datosPerros);
  function datosPerros(element){

  var url = "assets/img/";
  var containerImg = document.createElement("div");
  containerImg.classList.add("container-img");
  var img = document.createElement("img");
  img.classList.add("img-box");
  img.setAttribute("src",url+element.url);
  img.setAttribute("alt",element.name);
  var contenedorTexto = document.createElement("div");
  contenedorTexto.classList.add("contenedor-texto");
  var p = document.createElement("p");
  p.innerText = "Nombre: "+ element.name  +
                            "\n Tamaño: "+ element.tamaño +
                            "\n Edad: "+ element.edad+
                            "\n Espacio Requerido: "+ element.espacio;


        containerImg.appendChild(img);
        containerImg.appendChild(contenedorTexto);
        containerImg.appendChild(p);

  documentFragment.appendChild(containerImg);
}
  comenzar();
});


//Boton de Link hacia el contenedor Principal
  var btnConocenos = document.getElementById("js-bottom");
  btnConocenos.addEventListener("click",muestra);

  function muestra() {
      document.getElementById("js-flex-container-presentation").style.visibility ="hidden";
      document.getElementById("contenedorGeneral").style.display ="block";

   }

//Funcion de efecto para la maquina de escribir

function escribe(contenedor,texto,intervalo){
      longitud = texto.length;
      cnt = document.getElementById(contenedor);
         var i=0;

   timer = setInterval(function(){
         cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
         if(i > longitud){
            clearInterval(timer);
               cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true} 
      else {
         i++;
      }},intervalo);

};
var texto="Somos ProtectDogs&Cats guardianes de las mascotas que quieren formar parte de tu familia ...    "
  escribe("js-flex-container-presentation",texto,120);  


//Varibles Globales
var imagen_origen;
var imagen_destino;
var imagenes = document.getElementsByClassName('pet-image');


//Comienza el dragenter de imágenes de la sectionPrincipal
 

 function comenzar() {
  for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].addEventListener("click",function (e){
      var idecita = e.target.id;

      imagen_origen = document.getElementById(idecita);

      imagen_origen.addEventListener("dragstart",false);

      imagen_destino = document.getElementById('house_pet');
      imagen_destino.addEventListener("dragenter",function (e) {
        e.preventDefault();
      },false);

      imagen_destino.addEventListener("dragover",function (e) {
        e.preventDefault();
      },false);

      imagen_destino.addEventListener("drop",dropImage,false);

    });
  }
}
/*******funciones****/

function dragImage(e) {
  var codigo = "<img src='"+imagen_origen.getAttribute("src")+"'>";
  e.dataTransfer.setData("Text",codigo)
}
function dropImage(e){
  imagen_destino = document.getElementById('house_pet');
  e.preventDefault();
  imagen_destino.innerHTML = e.dataTransfer.getData("Text");

  var fotito = imagen_origen.src
  var addModal = document.getElementById('contenedorGeneral');

  printModalHtml(addModal,fotito);
  verModal();
}
function verModal(){
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
}
function printModalHtml(parent,fotito){
  var divmodal = document.createElement("div");
  divmodal.setAttribute("class","modal");
  divmodal.setAttribute("id","myModal");
  divmodal.setAttribute("tabindex","-1");
  divmodal.setAttribute("role","dialog");
  divmodal.setAttribute("aria-hidden","true");

  var divmodaldialog = document.createElement("div");
  divmodaldialog.setAttribute("class","modal-dialog");
  divmodaldialog.setAttribute("role","document");

  divmodal.appendChild(divmodaldialog);

  divmodalcontent = document.createElement("div");
  divmodalcontent.setAttribute("class","modal-content");

  divmodaldialog.appendChild(divmodalcontent);

  var divmodalheader = document.createElement("div");
  divmodalheader.setAttribute("class","modal-header");

  var divmodalbody = document.createElement("div");
  divmodalbody.setAttribute("class","modal-body");

  var divmodalfooter = document.createElement("div");
  divmodalfooter.setAttribute("class","modal-footer");

  divmodalcontent.appendChild(divmodalheader);
  divmodalcontent.appendChild(divmodalbody);
  divmodalcontent.appendChild(divmodalfooter);

  var a1 = document.createElement("a");
  a1.setAttribute("class","close");
  a1.setAttribute("data-dismiss","modal");
  a1.setAttribute("aria-label","Close");
  a1.setAttribute("href",'file:///C:/proyectoX/index.html');

  divmodalheader.appendChild(a1);

  var span1 = document.createElement("span");
  span1.setAttribute("aria-hidden","true");
  span1.appendChild(document.createTextNode('x'));

  a1.appendChild(span1);

  var divImagen = document.createElement("div");
  divImagen.setAttribute("class","divImagen");

  var img1 = document.createElement("img");
  img1.setAttribute("src",fotito);

  divImagen.appendChild(img1);

  divmodalbody.appendChild(divImagen);

  /*var span2 = document.createElement("span");
  span2.appendChild(document.createTextNode("Nombre: BIMBA \n Tamaño: Mediano \n Edad: 2 años \n Espacio Requerido: Mediano"));

  divImagen.appendChild(span2);*/
  /***objeto**/
  var containerImg = document.createElement("div");
  containerImg.classList.add("container-img");

  var contenedorTexto = document.createElement("div");
  contenedorTexto.classList.add("contenedor-texto");
  var p = document.createElement("p");
  p.setAttribute("class","parrafoPet");
  p.appendChild(document.createTextNode("Nombre: BIMBA \n Tamaño: Mediano \n Edad: 2 años \n Espacio Requerido: Mediano"));

  containerImg.appendChild(contenedorTexto);
  containerImg.appendChild(p);

  divImagen.appendChild(containerImg);
  var boton = document.createElement("button");
boton.classList.add("button-form");
boton.innerText="Contáctanos";
boton.addEventListener("click", function(){
window.location="formulario.html";
});

divImagen.appendChild(boton);

  parent.appendChild(divmodal);

}
