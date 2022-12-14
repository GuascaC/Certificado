'use strict';
const email = document.querySelector("#iMail");
const pass = document.querySelector("#ipass");
const form = document.querySelector("#form");
const rol = document.querySelector("#iRol");

form. addEventListener("submit", (e) => {
  e.preventDefault();
  if (validFieldsForm() === -1) {
    if(rol.value == 1){
            window.location.href="../../Certificado-main/Certificado-main/perfiladministrador.html";
        }
        else if(rol.value == 2){
            window.location.href="../../Certificado-main/Certificado-main/Docente.html";
        }
        else if(rol.value == 3){
            window.location.href="../../Certificado-main/Certificado-main/Catedratico.html";
        }
        else if(rol.value == 4){
            window.location.href="../../Certificado-main/Certificado-main/Practicante.html";
        }else{
        modalAlerta("Error");
        }
let validFields = {
    email:false,
    pass: false
    pass: false,
    rol: false

}
  email.addEventListener('change', function(e) {
    validFields.email = inputEmail.match(patronEmail) ? true: false;
    console.log(Object.values(validFields));
    if (validFields.email===false){
      modalAlerta("El correo no es institucional");
        modalAlerta("El correo no es institucional");
   }

});
pass.addEventListener('change',(e)=>{
    const inputPass = e.target.value; 
    const patronPass = /([a-zA-Z0-9]{8,})$/g; 
    validFields.pass = inputPass.match(patronPass) ? true: false;
    console.log(Object.values(validFields));
});

rol.addEventListener('change', (e)=>{
    validFields.rol = rol.selectedIndex > 0 ? true : false;
    console.log(Object.values(validFields));
});

function modalAlerta(cadena){
    const alert=document.createElement("div");
    const texto=document.createElement("p");
    texto.setAttribute("Class","textAlerta");
    alert.setAttribute("id","alerta");
    alert.setAttribute("class","alerta");
    texto.innerHTML=`<strong>${cadena}</strong>`;
    alert.appendChild(texto);
    document.body.appendChild(alert);
    alert.onclick=function(){
        document.getElementById("alerta").remove();
    }
}
function PassV02() {
    var x = document.getElementById("iPass");
    if (x.type === "password") {
        x.type = "text";
        } else {
        x.type = "password";
    }
  }
function PassV03() {
  if (x.type === "password") {
        x.type = "text";
        } else {
        x.type = "password";
        }
}
