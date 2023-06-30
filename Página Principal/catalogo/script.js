var btnInicio = document.getElementById("btnInicio")
var btnConsultas = document.getElementById("btnConsultas")
var btnContacto= document.getElementById("btnContacto")
var btnSamsung= document.getElementById("samsung")
var btnMotorola= document.getElementById("motorola")


btnInicio.addEventListener("click", () => {
    window.open("../index.html")
})

btnConsultas.addEventListener("click", () => {
    window.open("../consulta/consulta.html")
})

btnContacto.addEventListener("click", () => {
    window.open("../contacto/contacto.html")
})