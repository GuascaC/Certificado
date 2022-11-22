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
    const patronEmail = /^(.)$/g //Santiago
    validFields.email = inputEmail.match(patronEmail) ? true: false;
    console.log(Object.values(validFields));

});
CC.addEventListener('change', function(e) {
    const inputCC = e.target.value;
    const patronCC = /^(.)$/g //Santiago
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
    const patronPass = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})(^[0-9]{1,2}$)$/g; //Santiago
    validFields.pass = inputPass.match(patronPass) ? true: false;
    console.log(Object.values(validFields));
});
passC.addEventListener('change',(event)=>{
    const inputPassC = event.target.value; 
    const patronPassC = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})(^[0-9]{1,2}$)$/g; //Santiago
    validFields.pass = inputPassC.match(patronPassC) ? true: false;
    console.log(Object.values(validFields));});
    

