const cars = [
    {
        brand : "Toyota",
        model : "corola",
        year  : 2022
    },
    {
        brand : "Honda",
        model : "Civic",
        year : 2008
    },
    {
        brand: "opala",
        model :"woksvagem",
        year: 2006
    },
    {
        brand:"Mustang",
        model:"Ford",
        year: 2010
    },
    {
        brand:"Porsche",
        model:"Porsche 911",
        year: 2025
    },




]

//mostra a informação pedida no console.log
//console.log(cars[1].year)// cars[1].year e o que pede a informação e o console a que passa para o site
//console.log(cars[0].year)


/*criar uma função e chama essa função displayCard, aqui mesmo*/

function displayCard(){
   
    //variavel
    const cardList = document.querySelector("#card-list");

    cars.forEach((cars)=> {
    
        //criamos um elemento div pelo javaScript
        const carDiv = document.createElement("div");
        
        //criamos uma class css car
        carDiv.classList.add('car');

        //criando um modelo
        const cardModel = document.createElement("h2");

        cardModel.textContent=`${cars.brand} ${cars.model}`;
        
        //imprimindo na tela as informações
    
        //criando o ano
        //criando um p
        const cardYear = document.createElement("p");
        cardYear.textContent= `ano :${cars.year}`
    
        carDiv.appendChild(cardModel)
        carDiv.appendChild(cardList)
        carDiv.appendChild(cardYear)

    })





};

//Chamar função
displayCard()


