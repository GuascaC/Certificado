//Se crea una variable para traer la etiqueta <dialog></dialog>
const form=document.getElementById("modal")
//Acción cuando se finalice la validación
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validFieldsForm() === -1) {
    modalAlerta("Información Validada");
  } else {
    modalAlerta("Error. Elija una fecha");
  }
});
const validFieldsForm = () => {
  const values = Object.values(validFields);
  let response = values.findIndex(e => e === false);
  return response;
}
//Objeto de Validación
let validFields = {
  FechaExp: false
}
//Se crea una variable para traer el input 
const FechaExp = document.getElementById("FechaExp");
//validación por medio de la fecha de expriación de un documento
//No permitirá generar el pdf si no coloca una fecha
FechaExp.addEventListener('change', (e) => {
  validFields.FechaExp = FechaExp.constructor ? true : false;
  if(validFields==false){
    modalAlerta("Fecha incorrecta");
  }
  console.log(Object.values(validFields));
})
//Creación de alerta
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