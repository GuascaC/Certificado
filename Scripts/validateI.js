//Validación para inicio de sesión
'use strict';
//Se crean variables para traer los Inputs a validar
const email = document.querySelector("#iMail");
const pass = document.querySelector("#ipass");
const form = document.querySelector("#form");
const rol = document.querySelector("#iRol");
//Acción cuando se finalice la validación
//Dependiendo del rol seleccionado se redirigirá a la pág correspondiente
form, addEventListener("submit", (e) => {
  e.preventDefault();
  if (validFieldsForm() === -1) {
    if (AdmiFieldsForm()) {
      console.log("1");
      window.location.href = "../../Certificado-main/perfiladministrador.html";
    }
    else if (rol.value == 2) {
      console.log("2");
      window.location.href = "../../Certificado-main/Docente.html";
    }
    else if (rol.value == 3) {
      console.log("3");
      window.location.href = "../../Certificado-main/Catedratico.html";
    }
    else if (rol.value == 4) {
      console.log("4");
      window.location.href = "../../Certificado-main/Practicante.html";
    }
  } else {
    modalAlerta("Error");
  }

})
const validFieldsForm = () => {
  const values = Object.values(validFields);
  let response = values.findIndex(e => e === false);
  return response;
}
//acción cuando todos los campos estén completos (Objeto de validación de Administrador)
const AdmiFieldsForm = () => {
  const values = Object.values(admiFields);
  let response = values.findIndex(e => e === false);
  return response;
}
//Objeto de validación para administrador
let admiFields={
  admEmail: false,
  admPass:false,
  admRol:false
}
//Objeto de Validación
let validFields = {
  email: false,
  pass: false,
  rol: false
}
//Objeto de validación para administrador

//Evento para la validación de cada campo traido. Se valida por medio de una expresión regular
email.addEventListener('change', function(e) {
  const inputEmail = e.target.value;
  const patronEmail = /^[a-zA-Z.]+@(u)(n)(i)(e)(m)(p)(r)(e)(s)(a)(r)(i)(a)(l)\.(e)(d)(u)\.(c)(o)$/gm
  validFields.email = inputEmail.match(patronEmail) ? true : false;
  console.log(Object.values(validFields));
  if (validFields.email === false) {
    modalAlerta("El correo no es institucional");
  }
});
//EMAIL PARA ADMINISTRADOR
email.addEventListener('change', function(e) {
  const inputEmail = e.target.value;
  const patronEmail = /^(p)(v)(a)(l)(e)(n)(c)(i)(a)+@(u)(n)(i)(e)(m)(p)(r)(e)(s)(a)(r)(i)(a)(l)\.(e)(d)(u)\.(c)(o)$/gm;
  const patronEmail2 = /^(l)(l)(i)(z)(a)(r)(a)(z)(o)+@(u)(n)(i)(e)(m)(p)(r)(e)(s)(a)(r)(i)(a)(l)\.(e)(d)(u)\.(c)(o)$/gm;
  admiFields.admEmail = inputEmail.match(patronEmail || patronEmail2) ? true : false;
  console.log(Object.values(admiFields));
});
//Evento para la validación de cada campo traido. Se valida por medio de una expresión regular
pass.addEventListener('change', (e) => {
  const inputPass = e.target.value;
  const patronPass = /([a-zA-Z0-9]{8,})$/g;
  validFields.pass = inputPass.match(patronPass) ? true : false;
  console.log(Object.values(validFields));
});
//CONTRASEÑA PARA ADMINISTRADOR
pass.addEventListener('change', (e) => {
  const inputPass = e.target.value;
  const patronPass = /([a-zA-Z0-9]{8,})$/g;
  admiFields.admPass = inputPass.match(patronPass) ? true : false;
  console.log(Object.values(admiFields));
});
//Se valida si se selecciona un elemento de la lista desplegable
rol.addEventListener('change', function(e) {
  validFields.rol = rol.selectedIndex > 0 ? true : false;
  console.log(Object.values(validFields));
});
//ROL DE ADMINISTRADOR
rol.addEventListener('change', function(e) {
  admiFields.admRol = rol.selectedIndex == 1 ? true : false;
  console.log(Object.values(admiFields));
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
function PassV02() {
  var x = document.getElementById("iPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function PassV03() {
  var x = document.getElementById("iPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
