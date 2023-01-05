//Validación para la fecha de expedición
'use strict';
//formulario a validar
const form =getElementById("form")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validFieldsForm() === -1) {
    modalAlerta("Información Validada");
  } else {
    modalAlerta("Error. Elija una fecha");
  }
});
//Acción al validar todos campos
const validFieldsForm = () => {
  const values = Object.values(validFields);
  let response = values.findIndex(e => e === false);
  return response;
}
//Objeto de Validación
let validFields = {
  FechaExp: false
}
// Se trae el input para la validación
const FechaExp = document.getElementById("FechaExp");
// Se crea un evento para la validación de la fecha de expedición
FechaExp.addEventListener('change', (e) => {
  validFields.FechaExp = FechaExp.constructor ? true : false;
  if(validFields==false){
    modalAlerta("Fecha incorrecta");
  }
  console.log(Object.values(validFields));
})
//Se crea una alerta
function modalAlerta(cadena) {
  const alert = document.createElement("div");
  const texto = document.createElement("p");
  texto.setAttribute("Class", "textAlerta");
  alert.setAttribute("id", "alerta");
  alert.setAttribute("class", "alerta");
  texto.innerHTML = `<strong>${cadena}</strong>`;
  btn.innerHTML = `cerrar`;
  alert.appendChild(texto);
  document.body.appendChild(alert);
  btn.onclick = function() {
    document.getElementById("alerta").remove();
  }
}