// Hemos omitido los acentos en los comentarios por compatibilidad
var valida;
function validar(formulario) {
  if (formulario.nombres.value.trim().length == "") {
    document.getElementById('errornombres').innerHTML = "Este campo es obligatorio"
    valida = false;
  }else{
    document.getElementById('errornombres').innerHTML = "";
    valida = true;
  }


  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerHTML = "Campo invalido";
    valida = false;
  }else{
    document.getElementById("errorEmail").innerHTML = "";
    valida = true;
  }

  if(formulario.contrasena.value.trim().length < 7){
    document.getElementById("errorContrasena").innerHTML = "La contraseña debe tener minimo 7 caracteres";
    formulario.contrasena.focus();
    valida = false;
  }else{
    document.getElementById("errorContrasena").innerHTML = "";
    valida = true;
  }
  if(formulario.contrasena.value != formulario.confirmacion.value || formulario.confirmacion.value == ""){
    document.getElementById("errorConfirmacion").innerHTML = "Las contraseñas no coinciden";
    valida = false;
  }else{
      document.getElementById("errorConfirmacion").innerHTML = "";
      valida = true;
  }
  if (formulario.tipo.value < 0) {
    document.getElementById("errorTipo").innerHTML = "Este campo es obligatorio";
    valida = false;
  }else{
      document.getElementById("errorTipo").innerHTML = "";
      valida = true;
  }
  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerHTML = "Este campo es obligatorio";
    valida = false;
  }else{
    document.getElementById("errorAcepto").innerHTML = "";
    valida = true;
  }

  if(valida == false){
    return false;
  }else{
    alert ("¡Registro exitoso!")
    return true;
  }
}
