const listaValores = document.querySelector("#listaValores")



//carregar valores ao iniciar a pagina 
carregarValoresSalvos();


function carregarValoresSalvos(){
    listaValores.innerHTML = "" //limpa a lisya antes de adicionar os valores

    for (let i = 0; i < localStorage.length; i++){
        const chave = localStorage.key(i);
    }
}