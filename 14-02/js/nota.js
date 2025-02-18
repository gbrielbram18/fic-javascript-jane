
//variaveis
const inputNota = document.getElementById("nota")
const resultado = document.getElementById("resultado")
const mensage = document.getElementById("mes")

function resultadoNotaCLick(event) {
    //previne um comportamento no navegador
    event.preventDefault()
    console.log(inputNota.value)


    //validação de formulario
    if (inputNota.value === "") {
        mensage.style.display = "block" 
        return false
    }

    //condição
    if (inputNota.value >= 6) {
        resultado.innerHTML = "aprovado"
    } else {
        resultado.innerHTML = "Reprovado"
    }

    mensage.style.display = "none"



    inputNota.value = ""

}


