document.getElementById("formulario").onsubmit=function(e){
       e.preventDefault();
       validar();
     };

document.getElementById('boton').addEventListener("click",validar);
function validar() {
   var name = document.getElementById('name').value;
   var lastName = document.getElementById('lastName').value;
   var email = document.getElementById("email").value;
   var address = document.getElementById("address").value;
   var phone=document.getElementById("phone").value;


var name_issue = document.getElementById("name_issue").classList.add("tooltip");
var lastname_issue = document.getElementById("lastname_issue").classList.add("tooltip");
var email_issue = 	document.getElementById("email_issue").classList.add("tooltip");
var psw_issue = 	document.getElementById("address_issue").classList.add("tooltip");
var boton_error = 	document.getElementById("phone_issue").classList.add("tooltip");


  if(name == ""){
   mostrarTooltip('name_issue');
   mostrar("name_issue","No debe haber recuadros en blanco*");
 }else if(!name.match(/[A-Z]{1,}[a-z]+/)){
   mostrarTooltip('name_issue');
   mostrar("name_issue","Se Permite solo letras <br> Primera letra en Mayúscula");
 }

  if(lastName  == ""){
   mostrarTooltip('lastname_issue');
   mostrar("lastname_issue","No debe haber recuadros en blanco*");
 }else if(!lastName.match(/[A-Z]{1,}[a-z]+/)){
   mostrarTooltip('lastname_issue');
   mostrar("lastname_issue","Se Permite solo letras <br> Primera letra en Mayúscula")
 }

 if(email  == ""){
   mostrarTooltip('email_issue');
   mostrar("email_issue","No debe haber recuadros en blanco*");
 }else if(!email.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]$/ )){
   mostrarTooltip('email_issue');
   mostrar('email_issue',"Correo no valido \n Example: xxxx@xxxxx.com");
 }

 if(address  == ""){
    mostrarTooltip('address_issue');
    mostrar("address_issue","No debe haber recuadros en blanco*");
  }else if(address.length<=2){
    mostrarTooltip('address_issue');
    mostrar('address_issue',"Complete Direccion");
  }
   if(phone.length<=4 || phone.length==1){
      mostrarTooltip('phone_issue');
      mostrar('phone_issue',"Numero solo de 9 digitos");
  }

  if((name!="")&&(lastName!="")&&(email!="")&&(address!="")&&(phone!="")){
     myModal();
}
};
//TOOLTIPS
function mostrarTooltip(elem){
	document.getElementById(elem).classList.remove("tooltip");
	document.getElementById(elem).classList.add("tooltiptext");
}
function mostrar(element,message) {
  var x = document.getElementById(element);
  x.innerHTML = "";
  x.innerHTML = message;
};
//MODAL
var dialog = document.getElementById("myDialog");
function myModal() {
     dialog.showModal();
};

dialog.addEventListener("click",function () {
  dialog.close();
  document.getElementById("formulario").reset();
});