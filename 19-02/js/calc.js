//obtem os elementos do DOM
const valor1 =document.getElementById("valor1")
const valor2 =document.getElementById("valor2")

//variavel



//função para executar a const
function somar(event){
    event.preventDefault();
    console.log(valor1.value);
    console.log(valor2.value);

    


//operação

let resultadoSoma= Number(valor1.value) + Number(valor2.value)

//imprimindo reposta

document.getElementById("resultado").innerHTML = resultadoSoma


}
   



//função para sub
function sub(event){
    event.preventDefault();
    console.log("sub")


    console.log(valor1.value)
    console.log(valor2.value)


    let resultadoSub = Number(valor1.value) - Number(valor2.value)

    document.getElementById("resultado").innerHTML = resultadoSub

}




function divsao(event){
    event.preventDefault();
    console.log("divisao")


    console.log(valor1.value)
    console.log(valor2.value)


    let resultadoDivisao = Number(valor1.value) / Number(valor2.value)

    document.getElementById("resultado").innerHTML = resultadoDivisao
}





function multi(event){
    event.preventDefault();
    console.log("Multi")


    console.log(valor1.value)
    console.log(valor2.value)


    let resultadoMulti = Number(valor1.value) * Number(valor2.value)

    document.getElementById("resultado").innerHTML = resultadoMulti
}

