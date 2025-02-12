/*
    -abaixo da constanre "cities", declara uma let "upperCaseCities" e atribua a ela um array vazio;
    -adicionar no array que a "upperCaseCities" armazena as cidades do array cities com todas  as letras maiusculas, utilizando o for
    loop.
    -para ver se deu certo, exiba o "upperCaseCities" no console.
    push() - dica 
    [] array vazio - dica
*/

const cities = [`sao paulo`, `rio de janeiro`,  `minas gerais`]
let upperCaseCities = []
console.log(cities.length)

for ( let i = 0 ; i< cities.length; i++){
upperCaseCities.push(cities[i].upperCaseCities())
}

console.log(upperCaseCities)