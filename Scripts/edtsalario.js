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