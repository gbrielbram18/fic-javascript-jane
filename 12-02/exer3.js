/*
    -apos a const numbers, utilize um for loop para somar todos os numeros do 
    array; 
    -exiba no console um boorlean indiciando se o total dessa soma e 337;
    - o console deve exibir true;
*/

const numbers= [`91`, `5`,`30`, `97`, `83`, `31`];
let sum =0
for (let i = 0; i < numbers.length; i++){
 sum= Number(numbers[i])

}

console.log(sum=== 337 )