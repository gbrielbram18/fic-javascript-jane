
//variaveis
const inputNota = document.getElementById("nota")
const resultado = document.getElementById("resultado")

function resultadoNotaCLick(){
    //previne um comportamento no navegador
    event.preventDefault()
    console.log(inputNota.value)
  
if (inputNota.value >=6 ){
    resultado.innerHTML = "aprovado"
}else {
    resultado.innerHTML = "reprovado"
}


inputNota.value = ""
}