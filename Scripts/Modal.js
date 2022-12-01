'use strict';
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.showModal();})
btnCerrarModal.addEventListener("click",()=>{
    modal.close();});