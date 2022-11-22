'use strict';
const email = document.querySelector("#iMail");
const pass = document.querySelector("#iPass");
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
    pass: false

}

email.addEventListener('change', function(e) {
    const inputEmail = e.target.value;
    const patronEmail = /^(.)$/g //Santiago
    validFields.email = inputEmail.match(patronEmail) ? true: false;
    console.log(Object.values(validFields));

});
pass.addEventListener('change',(event)=>{
    const inputPass = event.target.value; 
    const patronPass = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})(^[0-9]{1,2}$)$/g; //Santiago
    validFields.pass = inputPass.match(patronPass) ? true: false;
    console.log(Object.values(validFields));});
