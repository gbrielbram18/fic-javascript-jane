/*
    -Armazenar sua idade em uma constante;
    -escreva uma estrutura condicional em que, se a idade e 7 anos ou menos, se a idade e 65 anos ou mais, a frase " para voce a entrada e gratuita!" e
    armazenada em uma variavel;
    -se a idade nao atende as condições acima, a variavel deve armazenar a mensagem "a entrada e R$30,00"
    -exiba a mensagem no console
    -agora, teste diferentes idade para se certirficar que a condição do 'if'
    tambem esta funcionando 
*/

const idade = 18;
const isAgeFirst = idade <=7;
const isAgeLast = idade >= 65;

 if ( isAgeFirst || isAgeLast ){
    console.log(" sua entrada e gratis");
 }else{
    console.log( "sua entrada ficou R$30,00");
 }  