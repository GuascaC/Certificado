'use strict';
const email = document.querySelector("#iMail");
const CC = document.querySelector("#iCC");
const rol = document.querySelector("#iRol");
const pass = document.querySelector("#iPass");
const passC = document.querySelector("#iPassC");
const form = document.querySelector("#form");

form,addEventListener("submit", (e)=>{
    e.preventDefault();
    if (validFieldsForm() === -1){ 
        alert("Informacion Validada");
    }else {
        alert("Error");
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
    CC:false,
    rol:false,
    pass: false,
    passC: false

}

email.addEventListener('change', function(e) {
    const inputEmail = e.target.value;
    const patronEmail = /^[a-zA-Z.]+@(u)(n)(i)(e)(m)(p)(r)(e)(s)(a)(r)(i)(a)(l)\.(e)(d)(u)\.(c)(o)$/gm; //Santiago
    validFields.email = inputEmail.match(patronEmail) ? true: false;
    console.log(Object.values(validFields));

});
CC.addEventListener('change', function(e) {
    const inputCC = e.target.value;
    const patronCC = /^[0-9]{7,10}$/gm; //Santiago
    validFields.email = inputCC.match(patronCC) ? true: false;
    console.log(Object.values(validFields));
});
rol.addEventListener('change', function(e) {
    const inputRol = e.target.value;
    const patronRol = /^(.)$/g //Santiago
    validFields.email = inputRol.match(patronRol) ? true: false;
    console.log(Object.values(validFields));
});
pass.addEventListener('change',(event)=>{
    const inputPass = event.target.value; 
    const patronPass = /([a-zA-Z0-9]{8,15})$/gm; //Santiago
    validFields.pass = inputPass.match(patronPass) ? true: false;
    console.log(Object.values(validFields));
});
passC.addEventListener('change',(event)=>{
    const inputPassC = event.target.value; 
    const patronPassC = /([a-zA-Z0-9]{8,15})$/gm; //Santiago
    validFields.pass = inputPassC.match(patronPassC) ? true: false;
    if (validFields.pass === false){
        modalAlerta("Las contraseñas no coinciden");
    } 
    console.log(Object.values(validFields));
});
    

