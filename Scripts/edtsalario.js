// Se trae el Input para cambio de texto
//Se crea una variable que trae un input
const cargoselec = document.getElementById("cargo");
cargoselec.addEventListener('change', function(e) {
  if (cargoselec.value == 1) {
    document.getElementById("rolSalario").innerHTML = "Docentes cátedra";
  } else if (cargoselec.value == 2) {
    document.getElementById("rolSalario").innerHTML = "Administrativos";
  } else if (cargoselec.value == 3) {
    document.getElementById("rolSalario").innerHTML = "Docentes planta";
  } else if (cargoselec.value == 4) {
    document.getElementById("rolSalario").innerHTML = "Talleristas bienestar";
  } else if (cargoselec.value == 5) {
    document.getElementById("rolSalario").innerHTML = "Aprendices";
  } else {
    document.getElementById("rolSalario").innerHTML = "Ninguno";
  }
});
//Acción cuando se finalice la validación
form.addEventListener("submit", (e) => {
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
  nsalario: false,
  cmbSlr: false
}
//Se crea una variable que trae un input
const nuevoSalario = document.getElementById("nuevoSalario");
//validación para el salario por medio de expresiones regulares
nuevoSalario.addEventListener('change', (e) => {
  const inputsalario = e.target.value;
  const patronsalario = /([0-9]{6,})$/g;
  validFields.nsalario = inputsalario.match(patronsalario) ? true : false;
  console.log(Object.values(validFields));
})
//Se crea una variable que trae un input
const cambSalario = document.getElementById("cambSalario");
//Validación por medio de fecha
cambSalario.addEventListener('change', (e) => {
  validFields.cmbSlr = cambSalario.constructor ? true : false;
  console.log(Object.values(validFields));
})