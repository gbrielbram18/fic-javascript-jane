/*

-Armazene a palavra 'tom' em uma let "Tom";
-Armazene a palavra 'hanks' em uma let "firstTom";
-armazene a palavra 'cruise' em uma let "secondTom";
-declare uma let "myFavoriteTom" que recebe nome, espaço, e sobrenome do
Tom que você mais gosta;
-exiba a "myFavoriteTom" no console do browser

*/

let tom = "Tom";
let firstTom = "hanks";
let secondTom = "cruise";

//let myFavoriteTom =  tom + ` ` + firstTom +  ` `  + secondTom;
let myFavoriteTom = `${tom} ${firstTom} ${secondTom} `;
console.log(myFavoriteTom);