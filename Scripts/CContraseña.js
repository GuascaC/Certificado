//Inputs para la validación
const pass = document.getElementById("ipass");
const passC = document.getElementById("ipassC");
const passA = document.getElementById("ipassA");
//Acción cuando se finalice la validación
form, addEventListener("submit", (e) => {
  e.preventDefault();
  if (validFieldsForm() === -1) {
    modalAlerta("Información Validada");
  } else {
    modalAlerta("Error");
  }
});
const validFieldsForm = () => {
  const values = Object.values(validFields);
  let response = values.findIndex(e => e === false);
  return response;
}
//Objeto de Validación
let validFields = {
  passA: false,
  pass: false,
  passC: false
}
//Validación de Contraseña antigua
passA.addEventListener('change', (e) => {
  const inputPassA = e.target.value;
  const patronPassA = /([a-zA-Z0-9]{8,})$/g;
  validFields.passA = inputPassA.match(patronPassA) ? true : false;
  console.log(Object.values(validFields));
});

//Validación de nueva contraseña
pass.addEventListener('change', (e) => {
  const inputPass = e.target.value;
  const patronPass = /([a-zA-Z0-9]{8,})$/g;
  if (validFields.pass = inputPass.match(patronPass) && validFields.pass != validFields.passA) {
    validFields.pass = true;
  } else {
    validFields.pass = false;
  }
  console.log(Object.values(validFields));
});
//Validación para confirmar la nueva contraseña
passC.addEventListener('change', (event) => {
  if (pass.value === passC.value) {
    validFields.passC = true;
    passC.value = passC.value.slice(0, 15);
  } else {
    modalAlerta("Las contraseñas no coinciden")
  }
  console.log(Object.values(validFields));
});
//Creación de Alerta
function modalAlerta(cadena) {
  const alert = document.createElement("div");
  const texto = document.createElement("p");
  texto.setAttribute("Class", "textAlerta");
  alert.setAttribute("id", "alerta");
  alert.setAttribute("class", "alerta");
  texto.innerHTML = `<strong>${cadena}</strong>`;
  alert.appendChild(texto);
  document.body.appendChild(alert);
  alert.onclick = function() {
    document.getElementById("alerta").remove();
  }
}