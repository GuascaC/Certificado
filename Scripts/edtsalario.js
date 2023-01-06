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
//Validación
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
const nuevoSalario = document.getElementById("nuevoSalario");
nuevoSalario.addEventListener('change', (e) => {
  const inputsalario = e.target.value;
  const patronsalario = /([0-9]{6,})$/g;
  validFields.nsalario = inputsalario.match(patronsalario) ? true : false;
  console.log(Object.values(validFields));
})
const cambSalario = document.getElementById("cambSalario");
cambSalario.addEventListener('change', (e) => {
  validFields.cmbSlr = cambSalario.constructor ? true : false;
  console.log(Object.values(validFields));
})