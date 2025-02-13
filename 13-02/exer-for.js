/*
    -apos a const names, utilize um for loop para gerar  um tamplate html;
    -exiba no console o tamplate HTML que você gerou;
    -o templo deve ser exibido apenas um avez no console e o resultado deve ser:
    <li> joao grilo</li>   <li>chico</li>  <li>rosinha</li>

*/

const names = [`João grilo`, `chico` , `rosinha`]
let tamplateNames = '';

for (let i =0; i < names.length; i++) {
    tamplateNames =`<li>${names[i]}</li>`

}

console.log(templateNames)
