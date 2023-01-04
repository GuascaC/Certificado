//Validación para el registro
'use strict';
//Se crean variables para tarer los Inputs a validar
const email = document.querySelector("#iMail");
const CC = document.querySelector("#iCC");
const Rol = document.querySelector("#iRol");
const pass = document.querySelector("#ipass");
const passC = document.querySelector("#ipassC");
const form = document.querySelector("#form");
//Acción cuando se finalice la validación
//Al finalizar el registro se redigira a la pantalla de inicio de sesión
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validFieldsForm() === -1) {
    modalAlerta("Registro finalizado");
     window.location.href="../index.html";
  } else {
    modalAlerta("Error de datos");
  }

});
const validFieldsForm = () => {
  const values = Object.values(validFields);
  let response = values.findIndex(e => e === false);
  return response;
}
//Objeto de Validación
let validFields = {
  email: false,
  CC: false,
  rol: false,
  pass: false,
  passC: false
}
//Evento para la validación de cada campo traido. Se valida por medio de una expresión regular
email.addEventListener('change', function(e) {
  const inputEmail = e.target.value;
  const patronEmail = /^[a-zA-Z.]+@(u)(n)(i)(e)(m)(p)(r)(e)(s)(a)(r)(i)(a)(l)\.(e)(d)(u)\.(c)(o)$/gm;
  validFields.email = inputEmail.match(patronEmail) ? true : false;
  console.log(Object.values(validFields));
  if (validFields.email === false) {
    modalAlerta("El correo no es institucional");
  }
  console.log(Object.values(validFields));

});
//Evento para la validación de cada campo traido. Se valida por medio de una expresión regular
CC.addEventListener('change', function(e) {
  const inputCC = e.target.value;
  const patronCC = /^[0-9]{10}$/gm;
  if (CC.value.length > 10) {
    CC.value = CC.value.slice(0, 10);
  }
  validFields.CC = inputCC.match(patronCC) ? true : false;
  console.log(Object.values(validFields));
});
//Se valida si se selecciona un elemento de la lista desplegable
Rol.addEventListener('change', function(e) {
  validFields.rol = Rol.selectedIndex > 0 ? true : false;
  if (validFields.rol == false) {
    modalAlerta("Seleccione un rol")
  }
  console.log(Object.values(validFields));
});
//Evento para la validación de cada campo traido. Se valida por medio de una expresión regular
pass.addEventListener('change', (e) => {
  const inputPass = e.target.value;
  const patronPass = /([a-zA-Z0-9]{8,})$/g;
  validFields.pass = inputPass.match(patronPass) ? true : false;
  console.log(Object.values(validFields));
});
//Se valida si este campo es igual al anterior
passC.addEventListener('change', (event) => {
  if (pass.value === passC.value) {
    validFields.passC = true;
    passC.value = passC.value.slice(0, 15);
  } else {
    modalAlerta("Las contraseñas no coinciden")
  }
  console.log(Object.values(validFields));
});
//Creación de alerta
function modalAlerta(cadena) {
  const alert = document.createElement("div");
  const texto = document.createElement("p");
  const btn = document.createElement("button");
  btn.setAttribute("Class", "btnAlerta");
  texto.setAttribute("Class", "textAlerta");
  alert.setAttribute("id", "alerta");
  alert.setAttribute("class", "alerta");
  texto.innerHTML = `<strong>${cadena}</strong>`;
  btn.innerHTML = `cerrar`;
  alert.appendChild(texto);
  alert.appendChild(btn);
  document.body.appendChild(alert);
  btn.onclick = function() {
    document.getElementById("alerta").remove();
  }
}
//Se crea dos funciones una para ver y la otra para ocultar la contraseña en el campo correspondiente
function PassV() {
  var Passv = document.getElementById("ipass");
  if (Passv.type === "password") {
    console.log("Funciona")
    Passv.type = "text";
  } else {
    Passv.type = "password";
  }
}
function PassV02() {
  let Passv = document.getElementById("ipassC");
  if (Passv.type === "password") {
    Passv.type = "text";
  } else {
    Passv.type = "password";
  }
}
function PassV03() {
  let Passv = document.getElementById("ipassN");
  if (Passv.type === "password") {
    Passv.type = "text";
  } else {
    Passv.type = "password";
  }
}