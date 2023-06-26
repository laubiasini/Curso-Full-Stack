var submitBtn = document.getElementById("submitBtn")
var textSended = document.getElementById("textSended")
var inputs = document.querySelectorAll("input")
var consulta = document.getElementById("consulta")

submitBtn.addEventListener("click", (e) => {

    if(inputs[0].value!=="" && inputs[1].value!=="" && inputs[2].value!=="" && inputs[3].value!=="" && inputs[4].value!=="" && consulta.value){
        
        e.preventDefault()
        
        textSended.style.opacity=1
        
        setInterval(changePage, 3000)

        return true
    }

})

function changePage(){
    window.open("../catalogo/catalogo.html")
    textSended.style.opacity=0
}