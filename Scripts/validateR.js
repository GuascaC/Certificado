'use strict';
const email = document.querySelector("#iMail");
const CC = document.querySelector("#iCC");
const Rol = document.querySelector("#iRol");
const pass = document.querySelector("#iPass");
const passC = document.querySelector("#iPassC");
const form = document.querySelector("#form");

form,addEventListener("submit", (e)=>{
    e.preventDefault();
    if (validFieldsForm() === -1){ 
        modalAlerta("Información Validada");
    }else {
        modalAlerta("Error");
}

});

const validFieldsForm = () =>{
    const values = Object.values(validFields);
    let response = values.findIndex(e=> e === false);
    return response;
}

//Objeto de Validación

let validFields = {
    email:false,
    CC:false,
    rol:false,
    pass: false,
    passC: false

}

email.addEventListener('change', function(e) {
    const inputEmail = e.target.value;
    const patronEmail = /^[a-zA-Z.]+@(u)(n)(i)(e)(m)(p)(r)(e)(s)(a)(r)(i)(a)(l)\.(e)(d)(u)\.(c)(o)$/gm;
    validFields.email = inputEmail.match(patronEmail) ? true: false;
    console.log(Object.values(validFields));

});
CC.addEventListener('change', function(e) {
    const inputCC = e.target.value;
    const patronCC = /^[0-9]{7,10}$/gm; 
    validFields.CC = inputCC.match(patronCC) ? true: false;
    console.log(Object.values(validFields));
});
Rol.addEventListener('change', function(e) {
    validFields.rol = Rol.selectedIndex > 0 ? true : false;
    console.log(Object.values(validFields));
});
pass.addEventListener('change',(event)=>{
    const inputPass = event.target.value; 
    const patronPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,15})/gm; 
    validFields.pass = inputPass.match(patronPass) ? true: false;
    console.log(Object.values(validFields));
});
passC.addEventListener('change',(event)=>{
    const inputPassC = event.target.value; 
    const patronPassC = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,15})/gm; 
    validFields.pass = inputPassC.match(patronPassC) ? true: false;
    if (passC.value !== pass.value){
        modalAlerta("Las contraseñas no coinciden");
    }else{ 
      console.log(Object.values(validFields));  
    }
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
    

