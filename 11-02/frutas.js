/* 
    -abaixo do array "fruits", verifique se "abacaxi" existe no array. se 
    existir, exiba no console a mensagem "a string "abacaxi" exsite no array
    fruits."

    -se "abacaxi" nao existir, verifique se "pera" existe no array. se existir, exiba 
    no console a mensagem " a string "pera" existe no array fruits."

    -se nenhuma das duas frutas exisitrem no array, rxiba no console a mensagem
    "nem pera nem abacaxi existem no array "fruits"."
    
*/

const frutas = ["morango", "banana", "mamao", "pera"];

if(frutas.includes("abacaxi")) {
    console.log("a string abacaxi exsite no array fruits.")
} else if (fruits.includes("pera")){
    console.log("a string pera existe no array fruits")
} else {
    console.log(" nem pera nem abacaxi existem no array fruits")
}


