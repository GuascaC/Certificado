//Creación de alerta modal por medio de la etiqueta <dialog></dialog>
'use strict';
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const modal = document.querySelector("#modal");
//Acción para abrir y cerrar alertas (<dialog></dialog>)
btnAbrirModal.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.showModal();})
btnCerrarModal.addEventListener("click",()=>{
    modal.close();});