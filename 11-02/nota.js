/* 
    se a nota do aluno for maior oou igual a 6, o aluno esta aprovado
    senao, o aluno esta reprovado
*/

let nota = prompt("adicione um numero ")

if (nota < 5){
    document.write("reprovado")
} else if (nota > 5) {
    document.write( "aprovado")
}