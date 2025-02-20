const campo = document.querySelector("#campo")
const salvarBtn = document.querySelector("#salvar")

//adicionar um evento no botao salvar 
salvarBtn.addEventListener("click" , function(){
const valor = campo.value;
   

// salvar no locaStorage

    const chave = `ValorSalvo_${Date.now()}`;  //usa timestamp para a chave unica

 //funcionalidade do localStorage
    localStorage.setItem(chave , valor)



    //limpar o campo apos salvar

    campo.value = ""



    //exibir valores
    carregarValoresSalvos()



});

