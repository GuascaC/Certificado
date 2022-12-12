'use strict';
const email = document.querySelector("#iMail");
const pass = document.querySelector("#ipass");
const form = document.querySelector("#form");

form,addEventListener("submit", (e)=>{
    e.preventDefault();
    if (validFieldsForm() === -1){ 
        modalAlerta("Informacion Validada");
    }else {
        modalAlerta("Error");
}

})

const validFieldsForm = () =>{
    const values = Object.values(validFields);
    let response = values.findIndex(e=> e === false);
    return response;
}

//Objeto de Validación

let validFields = {
    email:false,
    pass: false

}

email.addEventListener('change', function(e) {
    const inputEmail = e.target.value;
    const patronEmail = /^[a-zA-Z.]+@(u)(n)(i)(e)(m)(p)(r)(e)(s)(a)(r)(i)(a)(l)\.(e)(d)(u)\.(c)(o)$/gm 
    validFields.email = inputEmail.match(patronEmail) ? true: false;
    console.log(Object.values(validFields));
    if (validFields.email===false){
      modalAlerta("El correo no es institucional");
    }

});
pass.addEventListener('change',(event)=>{
    const inputPass = event.target.value; 
    const patronPass = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})(^[0-9]{1,2}$)$/g; 
      if (pass.value.length > 15) {
        pass.value = pass.value.slice(0,15);}
    validFields.pass = inputPass.match(patronPass) ? true: false;
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
    var x = document.getElementById("iPass");
     if (x.type === "password") {
       x.type = "text";
     } else {
       x.type = "password";
     }
 }
function Cargo() {
    //if(rol.value === 0){

    //}
    if(rol.value == 1){
        console.log("1");
        window.location.href="../Certificado-main/perfiladministrador.html";
    }
    else if(rol.value == 2){
        console.log("2");
        window.location.href="../Certificado-main/Docente.html";
    }
    else if(rol.value == 3){
        console.log("3");
        window.location.href="../Certificado-main/Catedratico.html";
    }
    else if(rol.value == 4){
        console.log("4");
        window.location.href="../Certificado-main/Practicante.html";
    }
}
