'use strict';
//variables
const nomAgg = document.getElementById("nombres");
const apelAgg = document.getElementById("apellidos");
const mailAgg = document.getElementById("iMail");
const diAgg = document.getElementById("tipoDocumento");
const CC = document.querySelector("#iCC");
const passAgg = document.getElementById("ipass");
const passCAgg = document.getElementById("ipassC");
const rolAgg = document.getElementById("iRol");
const tcontratoAgg = document.getElementById("iContrato");
const salarioAgg = document.getElementById("salario");
const pagohrAgg = document.getElementById("pago_hora");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validFieldsForm() === -1) {
    modalAlerta("Registro finalizado");
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
  nomAgg: false,
  apelAgg: false,
  mailAgg: false,
  diAgg: false,
  numdiAgg: false,
  passAgg: false,
  passCAgg: false,
  rolAgg:false,
  tcontratoAgg: false,
  salarioAgg: false,
  pagohrAgg:false
}
nomAgg.addEventListener('change', function(e){
    const inputnombagg = e.target.value;
    const patronnombagg = /[a-zA-Z.]{3,}/gm;
    validFields.nomAgg = inputnombagg.match(patronnombagg) ? true : false;
    console.log(Object.values(validFields));
});
apelAgg.addEventListener('change', function(e){
    const inputapl = e.target.value;
    const patronapl = /[a-zA-Z.]{3,}/gm;
    validFields.apelAgg = inputapl.match(patronapl) ? true : false;
    console.log(Object.values(validFields));
})
mailAgg.addEventListener('change', function(e) {
    const inputEmail = e.target.value;
    const patronEmail = /^[a-zA-Z.]+@(u)(n)(i)(e)(m)(p)(r)(e)(s)(a)(r)(i)(a)(l)\.(e)(d)(u)\.(c)(o)$/gm;
    validFields.mailAgg = inputEmail.match(patronEmail) ? true : false;
    console.log(Object.values(validFields));
    if (validFields.mailAgg === false) {
      modalAlerta("El correo no es institucional");
    }
});
diAgg.addEventListener('change', function(e){
  validFields.diAgg = diAgg.selectedIndex > 0 ? true : false;
  console.log(Object.values(validFields));
});
CC.addEventListener('change', function(e) {
    const inputCC = e.target.value;
    const patronCC = /^[0-9]{10}$/gm;
    if (CC.value.length > 10) {
      CC.value = CC.value.slice(0, 10);
    }
    validFields.numdiAgg = inputCC.match(patronCC) ? true : false;
    console.log(Object.values(validFields));
});
passAgg.addEventListener('change', function(e){
    const inputPass = e.target.value;
    const patronPass = /([a-zA-Z0-9]{8,})$/g;
    validFields.passAgg = inputPass.match(patronPass) ? true : false;
    console.log(Object.values(validFields));
})
passCAgg.addEventListener('change', (event) => {
    if (passAgg.value === passCAgg.value) {
      validFields.passCAgg = true;
      passCAgg.value = passCAgg.value.slice(0, 15);
    } else {
      modalAlerta("Las contraseñas no coinciden")
    }
    console.log(Object.values(validFields));
});
rolAgg.addEventListener('change', function(e) {
    validFields.rolAgg = rolAgg.selectedIndex > 0 ? true : false;
    if (validFields.rolAgg == false) {
      modalAlerta("Seleccione un rol")
    }
    console.log(Object.values(validFields));
});
tcontratoAgg.addEventListener('change', function(e) {
    validFields.tcontratoAgg = tcontratoAgg.selectedIndex > 0 ? true : false;
    if (validFields.tcontratoAgg == false) {
      modalAlerta("Seleccione un rol")
    }
    console.log(Object.values(validFields));
});
salarioAgg.addEventListener('change', function(e) {
    const inputsal = e.target.value;
    const patronsal = /[0-9]{0,}/gm;
    validFields.salarioAgg = inputsal.match(patronsal) ? true : false;
    console.log(Object.values(validFields));
});
pagohrAgg.addEventListener('change', function(e) {
    const inputhr = e.target.value;
    const patronhr = /[0-9]{0,}/gm;
    validFields.pagohrAgg = inputhr.match(patronhr) ? true : false;
    console.log(Object.values(validFields));
});

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